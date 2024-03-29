import { useEffect, useRef } from "react";
import { AuthAPI } from "../../../api/services/auth";
import { MeAPI } from "../../../api/services/me";
import { accountActions } from "../../../features/account/reducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { tokenStorage } from "../../../tokenStorage";
import { useProperty } from "../../hooks/property";

type EnterMode = "phone" | "code" | "verification";

const useLogic = () => {

   const dispatch = useAppDispatch();

   const profile = useAppSelector(state => state.accountReducer.profile);

   const [phone] = useProperty("");
   const [code] = useProperty("");

   const [enterMode] = useProperty<EnterMode>("phone");

   const [loading] = useProperty(false);
   const loadingRef = useRef(loading.get);

   const [showTimeoutError] = useProperty(false);
   const [timeoutId] = useProperty<NodeJS.Timeout | undefined>(undefined);

   const reset = () => {
      phone.set("");
      code.set("");
      enterMode.set("phone");
      loading.set(false);
      showTimeoutError.set(false);
      timeoutId.set(undefined);
   };

   useEffect(() => {

      if (timeoutId.get) {
         clearTimeout(timeoutId.get);
      }

      if (showTimeoutError.get === true) {
         const timeout = setTimeout(() => {
            showTimeoutError.set(false);
         }, 5000);
         timeoutId.set(timeout);
      }
   }, [showTimeoutError.get]);

   const sendPhone = async () => {

      if (phone.get.length < 9) return;

      loading.set(true);
      try {
         await AuthAPI.loginRequest(phone.get);
      } catch (error) {
         showTimeoutError.set(true);
         return;
      }
      finally {
         loading.set(false);
      }

      enterMode.set("code");
   };

   const confirmCode = async () => {

      if (code.get.length < 4) return;

      enterMode.set("verification");

      loading.set(true);

      try {
         const confirmResponse = await AuthAPI.loginConfirm(phone.get, code.get);
         tokenStorage.set(confirmResponse.data.token);
      } catch {
         showTimeoutError.set(true);
         enterMode.set("code");
         return;
      } finally {
         loading.set(false);
      }

      loading.set(true);

      try {
         const profileResponse = await MeAPI.getProfile();
         dispatch(accountActions.setProfile(profileResponse.data));
      } catch {
         showTimeoutError.set(true);
         enterMode.set("code");
         return;
      } finally {
         loading.set(false);
      }
   };

   const handleClickButton = () => {

      if (loadingRef.current) {
         return;
      }

      if (enterMode.get === "phone") {
         sendPhone();
      }

      if (enterMode.get === "code") {
         confirmCode();
      }
   };

   return { 
      phone, 
      code, 
      isProfileNotNull: profile !== null,
      handleClickButton,
      loading,
      isEnterModePhone: enterMode.get === "phone",
      isEnterModeCode: enterMode.get === "code",
      isEnterModeVerification: enterMode.get === "verification",
      isShowTimeoutError: showTimeoutError.get,
      reset
   };
   
};

export { useLogic };

import { AccountEndpoints } from "../../../api/endpoints/account";
import { AuthEndpoints } from "../../../api/endpoints/auth";
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

   const sendPhone = () => {

      if (phone.get.length < 9) return;

      AuthEndpoints.loginRequest(phone.get);

      enterMode.set("code");
   };

   const confirmCode = async () => {

      if (code.get.length < 4) return;

      enterMode.set("verification");

      const confirmResponse = await AuthEndpoints.loginConfirm(phone.get, code.get);
      tokenStorage.set(confirmResponse.data.token);

      const profileResponse = await AccountEndpoints.getProfile();
      dispatch(accountActions.setProfile(profileResponse.data));
   };

   const handleClickButton = () => {

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
      isEnterModePhone: enterMode.get === "phone",
      isEnterModeCode: enterMode.get === "code",
      isEnterModeVerification: enterMode.get === "verification",
   };
   
};

export { useLogic };

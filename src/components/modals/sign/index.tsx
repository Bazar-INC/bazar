import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useProperty } from "../../hooks/property";
import { accountActions } from "../../../features/account/reducer";
import { AccountEndpoints } from "../../../api/endpoints/account";
import { AuthEndpoints } from "../../../api/endpoints/auth";
import { Layout } from "../../layout/layout";
import { Typography } from "../../typography";
import { tokenStorage } from "../../../tokenStorage";

type EnterMode = "phone" | "code" | "verification";

interface Props {
   open: boolean;
   onClose(): void;
}

const Sign: FC<Props> = ({ open, onClose }) => {

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

   if (open === false || profile !== null) {
      return <></>;
   }

   const handleClose = (event: React.MouseEvent) => {

      // Prevent click on child elements
      if (event.target !== event.currentTarget) {
         return;
      }

      onClose();
   };

   return (
      <div onClick={handleClose} className="fixed w-full h-full left-0 top-0 bg-black/30 flex">
         <div className="m-auto px-16 h-[520px] bg-white rounded-3xl flex flex-col items-center justify-center">
            <Typography.Heading>Вхід в аккаунт</Typography.Heading>
            <span className="text-lg mt-5">Введіть ваш номер телефону</span>
            <Layout.Input
               onChange={phone.set}
               type="phone"
               hint="067-70-48-212"
               maxLength={9}
               className="border-[#9DA0A9] border-2 rounded-lg w-[360px] mt-2 py-4 text-center text-[20px]"
            />
            {enterMode.get === "code" && (
               <>
                  <span className="text-lg mt-2">Введіть код з смс:</span>
                  <Layout.Input
                     onChange={code.set}
                     type="phone"
                     hint="XXXX"
                     maxLength={4}
                     className="border-[#9DA0A9] border-2 rounded-lg w-[360px] mt-2 py-4 text-center text-[20px]"
                  />
               </>
            )}
            <div className="w-full mt-10">
               <Layout.Button onClick={handleClickButton} stretch>
                  {enterMode.get === "phone" && "Надіслати"}
                  {enterMode.get === "code" && "Підтвердити"}
                  {enterMode.get === "verification" && (
                     <div className="w-1 h-8 bg-white animate-spin" />
                  )}
               </Layout.Button>
            </div>
         </div>
      </div>
   );
};

export { Sign };

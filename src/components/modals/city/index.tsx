import { FC, useEffect } from "react";
import { TownModel } from "../../../api/models/town";
import { TownsAPI } from "../../../api/services/towns";
import { accountActions } from "../../../features/account/reducer";
import { targetClick } from "../../../functions";
import { useAppDispatch } from "../../../store/hooks";
import { useProperty } from "../../hooks/property";
import { Layout } from "../../layout/layout";
import { Typography } from "../../typography";

interface Props {
   open: boolean;
   onClose(): void;
}

const City: FC<Props> = ({ open, onClose }) => {

   const dispatch = useAppDispatch();

   const [cities] = useProperty<Array<TownModel>>([]);

   const [city] = useProperty("");

   useEffect(() => {
      TownsAPI.getCities().then((res) => cities.set(res.data));
   }, []);

   if (open === false) {
      return <></>;
   }

   const onFinish = () => {
      
      const cityModel = cities.get.find(p => p.id === city.get);

      if (cityModel) {
         dispatch(accountActions.setCity(cityModel));
         onClose();
      }

   };

   return (
      <div onClick={event => targetClick(event, onClose)} className="fixed w-full h-full left-0 top-0 bg-black/30 flex z-20">
         <div className="m-auto px-16 py-20 bg-white rounded-3xl flex flex-col justify-center">
            <Typography.Heading>Оберіть своє місто</Typography.Heading>
            <span className="text-[20px] text-[#9DA0A9] font-semibold">Доставляємо замовлення по всій Україні!</span>
            <span className="text-[#9DA0A9] text-sm mt-4">Введіть населений пункт України</span>
            <div className="flex gap-x-8 mt-4">
               <select onChange={(e) => city.set(e.target.value)} className="border-2 rounded border-[#9DA0A9] w-[300px]">
                  {cities.get.map((city, index) => (
                     <option key={index} value={city.id}>{city.name}</option>
                  ))}
               </select>
               <Layout.Button onClick={onFinish}>Застосувати</Layout.Button>
            </div>
            <p className="max-w-[400px] text-xs text-[#9DA0A9] mt-4">
               Вибір міста допоможе надати актуальну інформацію про наявність товару, його ціну та способи доставки у вашому місті! Це допоможе зберегти більше вільного часу для вас!
            </p>
         </div>
      </div>
   );
};

export { City };

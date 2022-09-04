import { FC } from "react";
import { IconProps } from "../props";

const Feedbacks: FC<IconProps> = ({ className }) => {
   return (
      <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M0 21.9688V2.5C0 1.8125 0.245 1.22375 0.735 0.73375C1.22417 0.244583 1.8125 0 2.5 0H22.5C23.1875 0 23.7763 0.244583 24.2663 0.73375C24.7554 1.22375 25 1.8125 25 2.5V17.5C25 18.1875 24.7554 18.7763 24.2663 19.2663C23.7763 19.7554 23.1875 20 22.5 20H5L2.125 22.875C1.72917 23.2708 1.27583 23.3592 0.765 23.14C0.255 22.9217 0 22.5312 0 21.9688ZM2.5 18.9688L3.96875 17.5H22.5V2.5H2.5V18.9688Z" fill="currentColor" />
      </svg>

   );
};

export { Feedbacks };

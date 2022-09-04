import { FC } from "react";
import { IconProps } from "../props";

const Filters: FC<IconProps> = ({ className }) => {
   return (
      <svg className={className} width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M23.6111 0H1.38889C1.02053 0 0.667264 0.146329 0.406796 0.406796C0.146329 0.667263 0 1.02053 0 1.38889V4.98611C0 5.7125 0.295834 6.42639 0.809722 6.94028L8.33333 14.4639V25C8.3336 25.2366 8.39427 25.4693 8.50958 25.6759C8.62489 25.8825 8.79104 26.0563 8.99228 26.1808C9.19353 26.3053 9.42321 26.3763 9.65959 26.3872C9.89597 26.3981 10.1312 26.3485 10.3431 26.2431L15.8986 23.4653C16.3694 23.2292 16.6667 22.7486 16.6667 22.2222V14.4639L24.1903 6.94028C24.7042 6.42639 25 5.7125 25 4.98611V1.38889C25 1.02053 24.8537 0.667263 24.5932 0.406796C24.3327 0.146329 23.9795 0 23.6111 0ZM14.2958 12.9069C14.1666 13.0357 14.0641 13.1887 13.9943 13.3573C13.9244 13.5258 13.8886 13.7065 13.8889 13.8889V21.3639L11.1111 22.7528V13.8889C11.1114 13.7065 11.0756 13.5258 11.0057 13.3573C10.9359 13.1887 10.8334 13.0357 10.7042 12.9069L2.77778 4.98611V2.77778H22.2236L22.2264 4.97639L14.2958 12.9069Z" fill="currentColor" />
      </svg>
   );
};

export { Filters };

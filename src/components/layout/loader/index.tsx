import { FC } from "react";

const Loader: FC = () => {
   return (
      <div className="relative h-11">
         <div className="absolute top-3.5 right-4 w-4 h-4 border-4 border-[#8F00F9] rounded-full animate-pulse" />
         <div className="absolute top-3.5 right-8 mr-1 w-4 h-4 border-4 border-[#8F00F9] border-r-gray-400 rounded-full animate-spin" />
         <div className="absolute top-[18px] right-12 mr-3 w-2 h-2 border-4 border-[#8F00F9] rounded-full animate-ping" />
      </div>
   );
};

export { Loader };

import { FC } from 'react';

interface Props {
   children: string;
   stretch?: boolean;
}

const Button: FC<Props> = ({ children, stretch: stretch = false }) => {

   const stretchStyles = stretch === true ? 'w-full' : '';

   return (
      <button className={`bg-[#8F00F9] hover:bg-[#6500B0] text-white font-['Poppins'] py-3 px-7 rounded ${stretchStyles}`}>
         {children}
      </button>
   );
};

export { Button };

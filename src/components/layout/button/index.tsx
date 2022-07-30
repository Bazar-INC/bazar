import { FC } from 'react';

interface Props {
   children: string;
   stretch?: boolean;
   onClick?(): void;
}

const Button: FC<Props> = ({ children, stretch: stretch = false, onClick }) => {

   const stretchStyles = stretch === true ? 'w-full' : '';

   return (
      <button onClick={onClick} className={`text-[25px] bg-[#8F00F9] hover:bg-[#6500B0] text-white py-3 px-7 rounded ${stretchStyles}`}>
         {children}
      </button>
   );
};

export { Button };

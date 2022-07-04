import { FC } from 'react';

interface Props {
   children: string;
   color: string;
}

const Badge: FC<Props> = ({ children, color }) => {
   return (
      <div
         style={{ borderColor: color }}
         className={`inline-block font-medium py-1 px-2.5 border-2 rounded-lg`}
      >
         {children}
      </div>
   );
};

export { Badge }

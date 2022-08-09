import { FC } from 'react';

interface Props {
   additionalClasses?: string;
   children: string;
   color: string;
}

const Badge: FC<Props> = ({ children, color, additionalClasses }) => {
   return (
      <div
         style={{ borderColor: color }}
         className={`inline-block rounded-lg px-1 py-0.5 border-2 ${additionalClasses ?? ''}`}
      >
         <span className="text-sm font-[Gotham] font-bold">{children}</span>
      </div>
   );
};

export { Badge };

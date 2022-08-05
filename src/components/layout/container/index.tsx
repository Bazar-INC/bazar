import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
   return <div className="max-w-[1660px] mx-auto px-16">{children}</div>;
};

export { Container };

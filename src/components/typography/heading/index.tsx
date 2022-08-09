import { FC } from 'react';
import { classes } from "../../../functions";

interface Props {
   children: string;
   className?: string;
}

const Heading: FC<Props> = ({ children, className }) => {
   return <span className={classes("font-[Intro] text-[40px]", className)}>{children}</span>;
};

export { Heading };

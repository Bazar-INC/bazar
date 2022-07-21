import { FC } from 'react';

interface Props {
   children: string;
   className?: string;
}

const Heading: FC<Props> = ({ children, className }) => {
   return <span className={classes("font-[Intro] text-[40px]", className)}>{children}</span>;
};

function classes(...classNames: Array<string | null | undefined>) {
   const WHITE_SPACE = ' ';

   let classes = '';

   for (const className of classNames) {
      if (isEmpty(className)) {
         continue;
      }
      classes += WHITE_SPACE + className;
   }

   return classes;
}

function isEmpty(str: string | null | undefined) {
   if (str === undefined) {
      return true;
   }

   if (str === null) {
      return true;
   }

   if (str.length === 0) {
      return true;
   }

   return false;
}

export { Heading };

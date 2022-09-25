function classes(...classNames: Array<string | null | undefined | false>) {
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

function isEmpty(str: string | null | undefined | false) {
   if (str === undefined) {
      return true;
   }

   if (str === null) {
      return true;
   }

   if (str === false) {
      return true;
   }

   if (str.length === 0) {
      return true;
   }

   return false;
}

function priceSeparateByThousands(price: number) {
   return String(price).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
}

function targetClick(event: React.MouseEvent, callback: () => void) {
   // Prevent click on child elements
   if (event.target === event.currentTarget) {
      callback();
   }
}

export { classes, priceSeparateByThousands, targetClick };

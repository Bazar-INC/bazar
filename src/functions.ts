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

function priceSeparateByThousands(price: number) {

   let priceAsString = (price % 1000) + " ";

   const result = (Math.floor(price / 1000) % 1000);

   if (result > 0) {
      priceAsString = result + " " + priceAsString;
   }

   return priceAsString;
}


export { classes, priceSeparateByThousands };

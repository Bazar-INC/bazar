import type { Client } from "../client";

type Func = (...args: any) => any;

function endpointCreator<A extends Func>(client: Client, func: A) {
   const f = (...args: any) => {
      return func.apply(globalThis, args)(client);
   };
   return f as A;
}

export { endpointCreator };

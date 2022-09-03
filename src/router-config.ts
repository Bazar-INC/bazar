function configRoute(route: string) {
   return {
      path: route,
      pathname: "/" + route,
      link: (arg?: string) => {
         if (arg) {
            return `/${route}/${arg}`;
         }
         return "/" + route;
      }
   };
}

const routes = {
   Home: configRoute(""),
   Goods: configRoute("goods"),
   Product: configRoute("product"),
   Cart: configRoute("cart"),
};

export { routes };

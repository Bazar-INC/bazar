import { FC } from "react";
import { ProductModel } from "../../../api/models/product";
import { Layout } from "../../layout/layout";
import { Typography } from "../../typography";

interface Props {
   name: string;
   icon: string;
   products: Array<ProductModel>;
}

const PromoProducts: FC<Props> = ({ icon, name, products }) => {
   return (
      <>
         <div className="flex items-center">
            <img src={icon} />
            <Typography.Heading className="mt-4">{name}</Typography.Heading>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            {products.map((product, index) => (
               <Layout.ProductCard
                  id={product.id}
                  link={"/product/" + product.id}
                  productName={product.name}
                  categoryName="Смартфон"
                  price={product.price}
                  picture={product.images[0]}
                  key={index}
               />
            ))}
         </div>
      </>
   );
};

export { PromoProducts };
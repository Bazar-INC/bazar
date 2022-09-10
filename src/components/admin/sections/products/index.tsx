import { FC, useEffect } from "react";
import { Layout } from "../../../layout/layout";
import { Typography } from "../../../typography";
import { Link } from "react-router-dom";
import { useProperty } from "../../../hooks/property";
import { ListItem } from "../../components/list-item";
import { ProductEntity } from "../../../../api/entities/product";
import { Product } from "../../../../api/data-objects/product";

const Products: FC = () => {

   const [products] = useProperty<Array<ProductEntity>>([]);

   const loadProducts = () => {
      Product.get({}).then(({ data }) => products.set(data.products));
   };

   useEffect(loadProducts, []);

   const deleteProduct = (id: string) => {
      Product.delete(id).then(() => loadProducts());
   };

   const editProduct = (id: string) => {
      console.log(id);
   };

   return (
      <div className="w-full py-5">
         <div className="flex justify-between">
            <Typography.Heading size="small">Товари</Typography.Heading>
            <Link to="/admin/new_product">
               <Layout.Button>Додати товар</Layout.Button>
            </Link>
         </div>
         <div className="mt-[30px] space-y-3">
            {products.get.map((product, index) => (
               <ListItem
                  key={index}
                  text={product.name}
                  onEdit={() => product.id && editProduct(product.id)}
                  onDelete={() => product.id && deleteProduct(product.id)}
                  extra={<img className="w-12 h-12 object-contain" src={product.images?.at(0)?.image} />}
               />
            ))}
         </div>
      </div>
   );
};

export { Products };

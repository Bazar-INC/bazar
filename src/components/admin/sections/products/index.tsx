import { FC, useEffect } from "react";
import { Layout } from "../../../layout/layout";
import { Typography } from "../../../typography";
import { Link } from "react-router-dom";
import { useProperty } from "../../../hooks/property";
import { ProductModel } from "../../../../api/models/product";
import { ProductsEndpoints } from "../../../../api/endpoints/products";
import { ListItem } from "../../components/list-item";

const Products: FC = () => {

   const [products] = useProperty<Array<ProductModel>>([]);

   const loadProducts = () => {
      ProductsEndpoints.getProducts("", "").then(({ data }) => {
         products.set(data.products);
      });
   };

   useEffect(loadProducts, []);

   const deleteProduct = (id: string) => {
      ProductsEndpoints.deleteProduct(id).then(() => {
         loadProducts();
      });
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
                  onEdit={() => editProduct(product.id)}
                  onDelete={() => deleteProduct(product.id)}
                  extra={<img className="w-12 h-12 object-contain" src={product.images[0]} />}
               />
            ))}
         </div>
      </div>
   );
};

export { Products };

import { FC, Fragment } from "react";
import { APP_ENV } from "../../../env";
import { Layout } from "../../layout/layout";
import { Typography } from "../../typography";
import { Filter } from "./components/filter";
import { useLogic } from "./logic";

const GoodsPage: FC = () => {

   const {
      breadCrumbsItems,
      categoryName,
      filters,
      products,
      handleChangeFilter,
   } = useLogic();

   return (
      <Layout.Container>
         <div className="my-8">
            <Layout.BreadCrumbs items={breadCrumbsItems} />
            <Typography.Heading className="block mt-5">{categoryName.get}</Typography.Heading>
            <div className="flex gap-x-[100px] mt-14">
               <div className="hidden md:block w-[244px] 2xl:w-[400px]">
                  <span>Фільтруй базар</span>
                  {filters.get.map((filter, index) => (
                     <Fragment key={index}>
                        <hr className="my-8" />
                        <Filter
                           onChange={(values) => handleChangeFilter(filter.code, values)}
                           title={filter.title}
                           options={filter.options}
                        />
                     </Fragment>
                  ))}
               </div>
               <div className="w-full">
                  <div className="flex">
                     <span>Показано {products.get.length} товарів</span>
                     <select className="ml-auto">
                        <option>За рейтингом</option>
                        <option>Новинки</option>
                        <option>За популярністью</option>
                     </select>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                     {products.get.map((product, index) => (
                        <Layout.ProductCard
                           id={product.id}
                           key={index}
                           categoryName={product.categoryName}
                           productName={product.name}
                           picture={`${APP_ENV.REMOTE_HOST_NAME}/cdn/products/images/${product.images?.at(0)?.image}`}
                           price={product.price}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </Layout.Container>

   );
};

export { GoodsPage };

import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoryModel } from "../../../../api/models/category";
import { CategoriesAPI } from "../../../../api/services/categories";
import { useProperty } from "../../../hooks/property";
import { Layout } from "../../../layout/layout";
import { Typography } from "../../../typography";

const CategoryRecord: FC = () => {

   const { id } = useParams();

   const [mode] = useProperty<"new" | "edit" | "loading">("new");

   useEffect(() => {
      if (id) {

         CategoriesAPI.getCategoryById(id).then((response) => {
            name.set(response.data.name);
            code.set(response.data.code);
            parent.set(response.data.parentId);
         });

         mode.set("edit");
      }
   }, [id]);

   const [name] = useProperty("");
   const [code] = useProperty("");
   const [parent] = useProperty<string | undefined>(undefined);

   const save = () => {
      if (mode.get === "new") {
         mode.set("loading");
         CategoriesAPI.addCategory({
            name: name.get,
            code: code.get,
            imageName: undefined,
            image: undefined,
            parentId: parent.get,
         }).then(() => mode.set("edit"));
      } else if (mode.get === "edit") {
         mode.set("loading");
         CategoriesAPI.updateCategory({
            id: id as string,
            name: name.get,
            code: code.get,
            imageName: undefined,
            image: undefined,
            parentId: parent.get,
         }).then(() => mode.set("edit"));
      }
   };

   const [categories] = useProperty<Array<CategoryModel>>([]);

   useEffect(() => {
      CategoriesAPI.getCategories().then((response) => categories.set(response.data.categories));
   }, []);

   return (
      <div className="w-full py-[20px] flex flex-col">
         <Typography.Heading>Категорія</Typography.Heading>
         <div className="flex flex-col mt-[30px]">
            <div className="flex flex-row justify-center">
               <div className="w-[252px] h-[252px] bg-white rounded-md">
                  <div className="h-min my-[62px]">
                     <svg className="w-min mx-auto" width="106" height="105" viewBox="0 0 106 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.8464 3.74069C49.8464 3.32655 49.9279 2.91646 50.0864 2.53384C50.2449 2.15123 50.4772 1.80357 50.77 1.51073C51.0629 1.21788 51.4105 0.985588 51.7932 0.827102C52.1758 0.668617 52.5859 0.587044 53 0.587044C53.4141 0.587044 53.8242 0.668617 54.2068 0.827102C54.5895 0.985588 54.9371 1.21788 55.23 1.51073C55.5228 1.80357 55.7551 2.15123 55.9136 2.53384C56.0721 2.91646 56.1536 3.32655 56.1536 3.74069L56.1492 49.5888L101.997 49.5844C102.411 49.5844 102.822 49.666 103.204 49.8244C103.587 49.9829 103.934 50.2152 104.227 50.5081C104.52 50.8009 104.752 51.1486 104.911 51.5312C105.069 51.9138 105.151 52.3239 105.151 52.738C105.151 53.1522 105.069 53.5623 104.911 53.9449C104.752 54.3275 104.52 54.6752 104.227 54.968C103.934 55.2608 103.587 55.4931 103.204 55.6516C102.822 55.8101 102.411 55.8917 101.997 55.8917L56.1492 55.8872L56.1536 101.735C56.1537 102.15 56.0721 102.56 55.9136 102.942C55.7551 103.325 55.5228 103.672 55.23 103.965C54.9371 104.258 54.5895 104.49 54.2068 104.649C53.8242 104.807 53.4141 104.889 53 104.889C52.5859 104.889 52.1758 104.807 51.7932 104.649C51.4105 104.49 51.0629 104.258 50.77 103.965C50.4772 103.672 50.2449 103.325 50.0864 102.942C49.9279 102.56 49.8463 102.15 49.8464 101.735L49.8508 55.8872L4.00266 55.8917C3.58851 55.8917 3.17842 55.8101 2.79581 55.6516C2.41319 55.4931 2.06554 55.2608 1.77269 54.968C1.47985 54.6752 1.24755 54.3275 1.08907 53.9449C0.93058 53.5623 0.849005 53.1522 0.849008 52.738C0.84901 52.3239 0.930583 51.9138 1.08907 51.5312C1.24755 51.1486 1.47986 50.8009 1.7727 50.5081C2.06554 50.2152 2.41319 49.9829 2.79581 49.8244C3.17843 49.666 3.58851 49.5844 4.00265 49.5844L49.8508 49.5888L49.8464 3.74069Z" fill="#ACACAC" />
                     </svg>
                     <span className="text-[#949494] font-[Gotham] font-bold text-[20px] w-full mx-[49px]">Додати фото</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-col mt-[30px]">
               <span className="text-[#949494] font-[Gotham] font-bold text-[20px]">Назва</span>
               <Layout.Input
                  type="text"
                  hint="Назва"
                  className="w-full px-8 h-[50px] rounded-lg mt-[15px]"
                  hardValue={name.get} onChange={name.set}
               />
            </div>

            <div className="flex flex-col mt-[30px]">
               <span className="text-[#949494] font-[Gotham] font-bold text-[20px]">Код категорії</span>
               <Layout.Input
                  type="text"
                  hint="Код категорії"
                  className="w-full px-8 h-[50px] rounded-lg mt-[15px]"
                  hardValue={code.get} onChange={code.set}
               />
            </div>

            <div className="flex flex-row mt-[30px]">
               <div className="flex flex-col w-full mr-[20px]">
                  <span className="text-[#949494] font-[Gotham] font-bold text-[20px]">Батьківська категорія</span>
                  <select value={parent.get} onChange={(e) => parent.set(e.target.value)} className="px-8 h-[50px] w-full rounded-lg mt-[15px]">
                     {categories.get.map((category, index) => (
                        <option key={index} value={category.id}>{category.name}</option>
                     ))}
                  </select>
               </div>
               <div className="flex flex-col w-[65px]">
                  <div className="h-[50px] w-[50px] bg-white rounded-lg mx-auto mt-[45px]">
                     <svg className="m-[9px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0561 1.33535C15.0561 1.2114 15.0805 1.08866 15.128 0.974141C15.1754 0.859623 15.2449 0.755569 15.3326 0.66792C15.4202 0.580272 15.5243 0.510745 15.6388 0.46331C15.7533 0.415875 15.876 0.391461 16 0.391461C16.124 0.391461 16.2467 0.415875 16.3612 0.46331C16.4757 0.510745 16.5798 0.580272 16.6674 0.66792C16.7551 0.755569 16.8246 0.859623 16.872 0.974141C16.9195 1.08866 16.9439 1.2114 16.9439 1.33535L16.9426 15.0578L30.665 15.0564C30.7889 15.0564 30.9117 15.0809 31.0262 15.1283C31.1407 15.1757 31.2448 15.2453 31.3324 15.3329C31.4201 15.4205 31.4896 15.5246 31.537 15.6391C31.5845 15.7536 31.6089 15.8764 31.6089 16.0003C31.6089 16.1243 31.5845 16.247 31.537 16.3615C31.4896 16.4761 31.4201 16.5801 31.3324 16.6678C31.2448 16.7554 31.1407 16.8249 31.0262 16.8724C30.9117 16.9198 30.7889 16.9442 30.665 16.9442L16.9426 16.9429L16.9439 30.6653C16.9439 30.7893 16.9195 30.912 16.872 31.0265C16.8246 31.141 16.7551 31.2451 16.6674 31.3327C16.5798 31.4204 16.4757 31.4899 16.3612 31.5374C16.2467 31.5848 16.124 31.6092 16 31.6092C15.876 31.6092 15.7533 31.5848 15.6388 31.5374C15.5243 31.4899 15.4202 31.4204 15.3326 31.3327C15.2449 31.2451 15.1754 31.141 15.128 31.0265C15.0805 30.912 15.0561 30.7893 15.0561 30.6653L15.0574 16.9429L1.33502 16.9442C1.21106 16.9442 1.08832 16.9198 0.973807 16.8724C0.859288 16.8249 0.755236 16.7554 0.667588 16.6678C0.579939 16.5801 0.510411 16.4761 0.462977 16.3615C0.415541 16.247 0.391126 16.1243 0.391126 16.0003C0.391126 15.8764 0.415542 15.7536 0.462976 15.6391C0.510412 15.5246 0.57994 15.4205 0.667588 15.3329C0.755236 15.2453 0.859288 15.1757 0.973807 15.1283C1.08832 15.0809 1.21107 15.0564 1.33502 15.0564L15.0574 15.0578L15.0561 1.33535Z" fill="#ACACAC" />
                     </svg>
                  </div>
               </div>
            </div>

            <div className="flex flex-row">
               <Layout.Button onClick={save} className="mt-[40px] w-[220px]">Зберегти</Layout.Button>
               <Link to="/admin/categories">
                  <Layout.Button className="mt-[40px] w-[220px] bg-[#9DA0A9] hover:bg-[#6e7178] ml-[60px]">Відмінити</Layout.Button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export { CategoryRecord };

import { FC } from "react";
import { Layout } from "../../../../layout/layout";
import { Typography } from "../../../../typography";

interface CustomCardProps {
   title: string;
   badge: string;
   picture: string;
}

const CustomCard: FC<CustomCardProps> = ({ title, badge, picture }) => {
   return (
      <div className="flex justify-between lg:justify-start bg-white px-8 2xl:px-12 py-8 2xl:py-16 rounded-xl h-40 2xl:h-64 w-full sm:w-auto">
         <div className="flex flex-col">
            <Layout.Badge color="#00ff74" additionalClasses="w-[145px]">
               {badge}
            </Layout.Badge>
            <Typography.Heading className="mt-5 !text-[20px] !2xl:text-[30px]">
               {title}
            </Typography.Heading>
         </div>
         <img className="ml-auto sm:ml-0 h-32 sm:h-56 2xl:h-96 sm:-mt-24 2xl:-mt-48" src={picture} />
      </div>
   );
};

export { CustomCard };

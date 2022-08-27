import { FC, useEffect, useRef } from "react";
import { useProperty } from "../../../../hooks/property";
import SimpleImageSlider from "react-simple-image-slider";

const Slider: FC = () => {

   const sliderContainer = useRef<HTMLDivElement>(null);

   const [sliderSize] = useProperty({ width: 0, height: 0, });

   useEffect(() => {
      sliderSize.set({
         width: sliderContainer.current?.clientWidth ?? 0,
         height: sliderContainer.current?.clientHeight ?? 0,
      });
   }, [sliderContainer.current]);

   const updateSliderSizeOnWindowResize = () => {
      sliderSize.set({
         width: sliderContainer.current?.clientWidth ?? 0,
         height: sliderContainer.current?.clientHeight ?? 0,
      });
   };

   useEffect(() => {
      window.addEventListener("resize", updateSliderSizeOnWindowResize);

      return () => {
         window.removeEventListener("resize", updateSliderSizeOnWindowResize);
      };
   }, []);

   return (
      <div ref={sliderContainer} className="overflow-hidden flex-1 h-[256px] md:h-[440px] 2xl:h-[608px] w-full sm:rounded-lg bg-black">
         <SimpleImageSlider
            width={sliderSize.get.width}
            height={sliderSize.get.height}
            images={["/promo_banner_1.png", "/promo_banner_2.png"]}
            showBullets={true}
            showNavs={true}
         />
      </div>
   );
};

export { Slider };

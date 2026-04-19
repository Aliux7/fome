import { WordsPullUp } from "./UI/WordsPullUp";
import Image from "next/image";
import raw_image from "@/assets/images/raw_items.png";
import { FadeSlide } from "./UI/FadeSlide";

const WhyUsSection = () => {
  return (
    <section className="relative sm:min-h-screen w-full h-full p-5 lg:p-10 pt-40 flex flex-col justify-between items-center gap-30 sm:gap-0">
      <WordsPullUp className="italic text- lg:text-xl xl:text-2xl 3xl:text-3xl max-w-4xl 3xl:max-w-5xl z-20 mt-10">
        <span className="px-5"></span>We keep everything simple. Our kits are
        made to be beginner-friendly, with clear steps, essential tools, and no
        unnecessary complexity. You don't need special skills—just a little time
        and curiosity. With FOMÉ, you don't just buy a bag—you make one
        yourself, making every piece feel more personal, meaningful, and
        uniquely yours.
      </WordsPullUp>

      <div className="flex justify-between items-center w-full">
        <div data-scroll data-scroll-speed="0.5" className="z-20 xl:mb-20">
          <WordsPullUp className="italic sm:text-lg lg:text-xl 3xl:text-3xl">
            Why Us?
          </WordsPullUp>
          <WordsPullUp className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl font-semibold">
            SIMPLE
          </WordsPullUp>
          <WordsPullUp className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl font-semibold">
            UNIQUE
          </WordsPullUp>
          <WordsPullUp className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl font-semibold">
            CRAFTED
          </WordsPullUp>
          <WordsPullUp className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl font-semibold">
            PERSONAL
          </WordsPullUp>
          <WordsPullUp className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl font-semibold">
            BEGINEER FRIENDLY
          </WordsPullUp>
        </div>
        <FadeSlide className="absolute sm:bottom-0 right-10 w-3/5 aspect-video overflow-hidden after:bg-linear-to-br after:from-white after:via-white/20 after:to-transparent after:content-[''] after:absolute after:w-full after:h-full">
          <div className="w-full h-20 bg-linear-to-b from-white via-transparent to-transparent absolute top-0 left-0 z-10"></div>
          <div className="w-full h-20 bg-linear-to-t from-white via-transparent to-transparent absolute bottom-0 left-0 z-10"></div>
          <div className="w-20 h-full bg-linear-to-r from-white via-transparent to-transparent absolute top-0 left-0 z-10"></div>
          <div className="w-20 h-full bg-linear-to-l from-white via-transparent to-transparent absolute top-0 right-0 z-10"></div>
          <Image src={raw_image} alt="" fill className="scale-115" />
        </FadeSlide>
      </div>
    </section>
  );
};

export default WhyUsSection;

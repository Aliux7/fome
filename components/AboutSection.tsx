import image1 from "@/assets/images/about/pouch.webp";
import image2 from "@/assets/images/about/raw_items.webp";
import image3 from "@/assets/images/about/bag.webp";
import Image from "next/image";
import { WordsPullUp } from "./UI/WordsPullUp";
import { FadeSlide } from "./UI/FadeSlide";

const AboutSection = () => {
  return (
    <section className="min-h-screen w-full p-5 lg:p-10 pt-40 flex flex-col justify-between items-center gap-10">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl font-semibold mb-5 sm:mb-10">
          About Us
        </h1>
        <WordsPullUp className="text-sm sm:text-base lg:text-lg xl:text-xl 3xl:text-2xl max-w-5xl 3xl:max-w-7xl text-center mb-5">
          FOMÉ creates simple bag-making kits designed for beginners.
        </WordsPullUp>
        <WordsPullUp className="text-sm sm:text-base lg:text-lg xl:text-xl 3xl:text-2xl max-w-5xl 3xl:max-w-7xl text-center mb-5">
          We believe making your own bag should feel easy and approachable. Each
          kit comes with carefully selected materials and straightforward
          guidance—so you can focus on the process, not the confusion.
        </WordsPullUp>
        <WordsPullUp className="text-sm sm:text-base lg:text-lg xl:text-xl 3xl:text-2xl max-w-5xl 3xl:max-w-7xl text-center mb-5">
          Founded in 2026, FOMÉ began with a fresh idea: to make craftsmanship
          more accessible for everyone. We wanted to turn bag-making into
          something modern, enjoyable, and personal—where anyone can create
          something with their own hands, regardless of experience.
        </WordsPullUp>
        <WordsPullUp className="text-sm sm:text-base lg:text-lg xl:text-xl 3xl:text-2xl max-w-5xl 3xl:max-w-7xl text-center mb-5">
          At FOMÉ, it's not just about making a bag. It's about creating
          something that feels uniquely yours.
        </WordsPullUp>
      </div>
      <div
        data-scroll
        data-scroll-speed="0.5"
        className="w-full h-200 md:h-100 lg:h-140 3xl:h-200 flex flex-col md:flex-row gap-4"
      >
        <FadeSlide className="relative w-full md:w-1/3 h-full rounded-lg overflow-hidden">
          <Image
            src={image1}
            alt="Image 1"
            fill
            sizes=""
            className="object-cover grayscale-75"
          />
        </FadeSlide>

        <FadeSlide className="relative w-full md:w-1/3 h-full rounded-lg overflow-hidden md:mt-10">
          <Image
            src={image2}
            alt="Image 2"
            fill
            className="object-cover grayscale-75"
          />
        </FadeSlide>

        <FadeSlide className="relative w-full md:w-1/3 h-full rounded-lg overflow-hidden md:mt-20">
          <Image
            src={image3}
            alt="Image 3"
            fill
            className="object-cover grayscale-75"
          />
        </FadeSlide>
      </div>
    </section>
  );
};

export default AboutSection;

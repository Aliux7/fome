import image1 from "@/assets/images/about/pouch.png";
import image2 from "@/assets/images/about/raw_items.png";
import image3 from "@/assets/images/about/bag.png";
import Image from "next/image";
import { WordsPullUp } from "./UI/WordsPullUp";
import { FadeSlide } from "./UI/FadeSlide";

const AboutSection = () => {
  return (
    <section className="min-h-screen w-full p-10 pt-40 flex flex-col justify-between items-center gap-0">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-6xl font-semibold mb-10">About Us</h1>
        <WordsPullUp className="text-xl max-w-5xl text-center mb-5">
          FOMÉ creates simple bag-making kits designed for beginners.
        </WordsPullUp>
        <WordsPullUp className="text-xl max-w-5xl text-center mb-5">
          We believe making your own bag should feel easy and approachable. Each
          kit comes with carefully selected materials and straightforward
          guidance—so you can focus on the process, not the confusion.
        </WordsPullUp>
        <WordsPullUp className="text-xl max-w-5xl text-center mb-5">
          Founded in 2026, FOMÉ began with a fresh idea: to make craftsmanship
          more accessible for everyone. We wanted to turn bag-making into
          something modern, enjoyable, and personal—where anyone can create
          something with their own hands, regardless of experience.
        </WordsPullUp>
        <WordsPullUp className="text-xl max-w-5xl text-center mb-5">
          At FOMÉ, it's not just about making a bag. It's about creating
          something that feels uniquely yours.
        </WordsPullUp>
      </div>
      <div
        data-scroll
        data-scroll-speed="0.5"
        className="w-full h-140 flex gap-5"
      >
        <FadeSlide className="relative w-1/3 h-full rounded-lg overflow-hidden">
          <Image
            src={image1}
            alt="Image 1"
            fill
            sizes=""
            className="object-cover grayscale-75"
          />
        </FadeSlide>

        <FadeSlide className="relative w-1/3 h-full rounded-lg overflow-hidden mt-10">
          <Image
            src={image2}
            alt="Image 2"
            fill
            className="object-cover grayscale-75"
          />
        </FadeSlide>

        <FadeSlide className="relative w-1/3 h-full rounded-lg overflow-hidden mt-20">
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

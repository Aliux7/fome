import Image from "next/image";
import main_product from "@/assets/images/main_product.png";
import HangingRope from "./HangingRope";
import { WordsPullUp } from "./UI/WordsPullUp";
import { FadeSlide } from "./UI/FadeSlide";

const HeroSection = () => {
  return (
    <section className="h-screen w-full relative">
      <HangingRope />
      <div
        data-scroll
        data-scroll-speed="0.5"
        className="absolute top-45 left-10"
      >
        <WordsPullUp className="font-supreme font-semibold text-9xl text-zinc-900 -ml-2">
          From You
        </WordsPullUp>
        <WordsPullUp className="font-supreme font-semibold text-9xl text-zinc-900 -ml-2">
          For You
        </WordsPullUp>
      </div>
      <div className="h-320 -translate-x-1/2 absolute left-1/2 top-0 w-60 rotate-90 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0.1)_80%,transparent_100%)]" />

      <div
        className="absolute bottom-[32.5%] right-10 translate-y-4/5 "
        data-scroll
        data-scroll-speed="0.5"
      >
        <WordsPullUp className="font-satoshi font-bold text-9xl text-[220px] text-zinc-900 -mr-2">
          FOME
        </WordsPullUp>
      </div>
      <FadeSlide className="absolute top-[52.5%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-180 aspect-video animate-float">
        <Image src={main_product} alt="" fill className="object-contain" />
      </FadeSlide>
      <div
        data-scroll
        data-scroll-speed="0.5"
        className="absolute top-45 left-10"
      >
        <WordsPullUp className="font-supreme font-semibold text-9xl text-transparent -ml-2">
          From You
        </WordsPullUp>
        <WordsPullUp className="font-supreme font-semibold text-9xl text-zinc-900 -ml-2">
          For You
        </WordsPullUp>
      </div>
      <div
        data-scroll
        data-scroll-speed="0.5"
        className="absolute bottom-[32.5%] right-10 translate-y-4/5 "
      >
        <WordsPullUp className="relative font-satoshi font-bold text-9xl text-[220px] text-zinc-900 -mr-2">
          <div className="absolute top-8 right-8 rounded-xs w-14 h-7 bg-zinc-900 skew-x-[-20deg] -rotate-20"></div>
          <span className="text-transparent">F</span>O
          <span className="text-transparent">M</span>E
        </WordsPullUp>
      </div>
    </section>
  );
};

export default HeroSection;

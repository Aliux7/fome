"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import asset1 from "@/assets/images/gallery/asset1.webp";
import asset2 from "@/assets/images/gallery/asset2.webp";
import asset3 from "@/assets/images/gallery/asset3.webp";
import asset4 from "@/assets/images/gallery/asset4.webp";
import asset5 from "@/assets/images/gallery/asset5.webp";
import asset6 from "@/assets/images/gallery/asset6.webp";
import asset7 from "@/assets/images/gallery/asset7.webp";
import asset8 from "@/assets/images/gallery/asset8.webp";
import asset9 from "@/assets/images/gallery/asset9.webp";
import asset10 from "@/assets/images/gallery/asset10.webp";
import asset11 from "@/assets/images/gallery/asset11.webp";
import asset12 from "@/assets/images/gallery/asset12.webp";
import { FadeSlide } from "./UI/FadeSlide";

const images = [
  { src: asset4, height: "h-[158px] sm:h-[210px] 3xl:h-[315px]" },
  { src: asset5, height: "h-[210px] sm:h-[280px] 3xl:h-[420px]" },
  { src: asset12, height: "h-[165px] sm:h-[220px] 3xl:h-[330px]" },
  { src: asset1, height: "h-[180px] sm:h-[240px] 3xl:h-[360px]" },
  { src: asset2, height: "h-[210px] sm:h-[280px] 3xl:h-[420px]" },
  { src: asset3, height: "h-[195px] sm:h-[260px] 3xl:h-[390px]" },
  { src: asset6, height: "h-[180px] sm:h-[240px] 3xl:h-[360px]" },
  { src: asset7, height: "h-[225px] sm:h-[300px] 3xl:h-[450px]" },
  { src: asset8, height: "h-[225px] sm:h-[300px] 3xl:h-[450px]" },
  { src: asset9, height: "h-[255px] sm:h-[340px] 3xl:h-[510px]" },
  { src: asset10, height: "h-[210px] sm:h-[280px] 3xl:h-[420px]" },
  { src: asset11, height: "h-[210px] sm:h-[280px] 3xl:h-[420px]" },
];

const ParallaxImage = ({ img, index }: any) => {
  const { scrollY } = useScroll();

  const innerY = useTransform(
    scrollY,
    [0, 1800],
    [0, index % 2 === 0 ? -20 : 20],
  );

  return (
    <FadeSlide
      className={`relative w-full ${img.height} break-inside-avoid mb-4 overflow-hidden rounded-lg`}
    >
      <motion.div
        style={{ y: innerY }}
        className="absolute inset-0 scale-110 hover:scale-120 duration-1000 transition-all ease-in-out"
      >
        <Image
          src={img.src}
          alt={`gallery-${index}`}
          fill
          className="object-cover grayscale-75 contrast-125"
        />
      </motion.div>
    </FadeSlide>
  );
};

const GallerySection = () => {
  return (
    <section className="min-h-screen w-full p-5 lg:p-10 pt-40">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, index) => (
          <ParallaxImage key={index} img={img} index={index} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;

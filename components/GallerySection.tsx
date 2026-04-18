"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import asset1 from "@/assets/images/gallery/asset1.jpg";
import asset2 from "@/assets/images/gallery/asset2.jpg";
import asset3 from "@/assets/images/gallery/asset3.jpg";
import asset4 from "@/assets/images/gallery/asset4.jpg";
import asset5 from "@/assets/images/gallery/asset5.jpg";
import asset6 from "@/assets/images/gallery/asset6.jpg";
import asset7 from "@/assets/images/gallery/asset7.jpg";
import asset8 from "@/assets/images/gallery/asset8.jpg";
import asset9 from "@/assets/images/gallery/asset9.png";
import asset10 from "@/assets/images/gallery/asset10.png";
import asset11 from "@/assets/images/gallery/asset11.png";
import asset12 from "@/assets/images/gallery/asset12.png";
import { FadeSlide } from "./UI/FadeSlide";

const images = [
  { src: asset4, height: "h-[210px]" },
  { src: asset5, height: "h-[280px]" },
  { src: asset12, height: "h-[220px]" },
  { src: asset1, height: "h-[240px]" },
  { src: asset2, height: "h-[280px]" },
  { src: asset3, height: "h-[260px]" },
  { src: asset6, height: "h-[240px]" },
  { src: asset7, height: "h-[300px]" },
  { src: asset8, height: "h-[300px]" },
  { src: asset9, height: "h-[340px]" },
  { src: asset10, height: "h-[280px]" },
  { src: asset11, height: "h-[280px]" },
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
    <section className="min-h-screen w-full p-10 pt-40">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, index) => (
          <ParallaxImage key={index} img={img} index={index} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;

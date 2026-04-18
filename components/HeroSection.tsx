import { useState } from "react";
import Image from "next/image";
import img1 from "@/assets/images/main_product.png";
import img2 from "@/assets/images/second_product.png";
import HangingRope from "./HangingRope";
import { WordsPullUp } from "./UI/WordsPullUp";
import { FadeSlide } from "./UI/FadeSlide";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { TbBrandShopee } from "react-icons/tb";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const images = [img1, img2];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  const [startX, setStartX] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const next = () => setActive((p) => (p + 1) % images.length);
  const prev = () => setActive((p) => (p - 1 + images.length) % images.length);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setEndX(null);
    setStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!startX || !endX) return;

    const distance = startX - endX;

    if (distance > minSwipeDistance) {
      next();
    }

    if (distance < -minSwipeDistance) {
      prev();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setEndX(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setEndX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging || startX === null || endX === null) {
      setIsDragging(false);
      return;
    }

    const distance = startX - endX;

    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();

    setIsDragging(false);
  };

  return (
    <section
      className="h-screen w-full relative overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <HangingRope />

      <div data-scroll className="absolute top-20 left-10 pointer-events-none">
        <div className="flex justify-between items-center">
          <WordsPullUp className="text-sm text-zinc-900 text-right">
            [{active + 1}/2]
          </WordsPullUp>
          <WordsPullUp className="font-semibold text-5xl text-zinc-900 text-right mr-10">
            BUILD
          </WordsPullUp>
        </div>
        <WordsPullUp className="font-semibold text-5xl text-zinc-900 -ml-2">
          YOUR OWN BAG
        </WordsPullUp>
        <WordsPullUp className="font-semibold text-5xl text-zinc-900 ml-10">
          THAT FEELS
        </WordsPullUp>
        <WordsPullUp className="font-semibold text-5xl text-zinc-900 -ml-2">
          LIKE YOU
        </WordsPullUp>
      </div>
      <div
        data-scroll
        data-scroll-speed="0.5"
        className="absolute bottom-40 left-10 pointer-events-none"
      >
        <WordsPullUp className="font-semibold text-9xl text-zinc-900 -ml-2">
          FROM YOU
        </WordsPullUp>
      </div>
      <div
        data-scroll
        data-scroll-speed="0.5"
        className="absolute bottom-10 right-10 pointer-events-none"
      >
        <WordsPullUp className="font-semibold text-9xl text-zinc-900 -ml-2">
          FOR YOU
        </WordsPullUp>
      </div>

      <div className="h-320 -translate-x-1/2 absolute left-1/2 top-0 w-60 rotate-90 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0.1)_80%,transparent_100%)]" />

      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((img, index) => {
          const isActive = index === active;
          return (
            <FadeSlide
              isActive={isActive}
              key={index}
              className={`absolute -translate-1/2 w-full max-w-180 aspect-video transition-all duration-1000 ease-out ${isActive ? "animate-float z-10 scale-100 blur-0" : "z-0 scale-50 blur-sm -translate-x-10"}`}
              style={
                {
                  transform: isActive
                    ? "translate(-50%, -50%)"
                    : `translate(${index < active ? "-65%" : "-35%"}, -50%)`,
                  left: "50%",
                  top: "52.5%",
                } as any
              }
            >
              <Image
                src={img}
                alt={`product-${index}`}
                fill
                className="object-contain pointer-events-none"
              />
            </FadeSlide>
          );
        })}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        <button
          onClick={next}
          className="text-xl cursor-pointer group flex justify-center items-center gap-1 text-zinc-900 w-fit relative p-1 px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-zinc-900 before:transition-transform before:ease-in-out before:duration-500 before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
        >
          <IoIosArrowBack /> SWIPE <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full h-20 flex justify-between items-center px-10 z-50 transition-all duration-300 ${
        !isTop
          ? "backdrop-blur-xs bg-linear-to-t from-white/10 to-white/50"
          : ""
      }`}
    >
      <div className="absolute left-1/2 -translate-x-1/2 font-bold text-3xl xl:text-4xl 3xl:text-5xl text-zinc-900 w-fit">
        <div className="absolute top-px right-1 rounded-xs w-1.5 h-0.75 bg-zinc-900 skew-x-[-20deg] -rotate-20"></div>
        FOME
      </div>

      <div></div>
      <div>
        <Link
          href="https://shopee.co.id/diyfome"
          className="text-base sm:text-xl 3xl:text-3xl backdrop-blur-sm cursor-pointer group flex justify-center items-center gap-1 rounded-lg border border-zinc-900 transition-colors duration-300 ease-in-out hover:bg-zinc-200 text-zinc-900 w-fit whitespace-nowrap relative p-1 px-3"
        >
          Get Your Kit Now
        </Link>
      </div>
    </header>
  );
};

export default Header;

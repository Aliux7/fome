import Image from "next/image";
import background_cta from "@/assets/images/cta_background.png";
import Link from "next/link";
import { FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { TbBrandShopee } from "react-icons/tb";
import { FadeSlide } from "./UI/FadeSlide";
const CTASection = () => {
  return (
    <FadeSlide className="relative w-full flex items-center justify-center p-5 lg:p-10 pt-40">
      <div className="relative w-full h-80 lg:h-96 3xl:h-120 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={background_cta}
          alt=""
          fill
          priority
          className="object-cover object-[50%_80%]"
        />

        <div className="absolute inset-0 bg-linear-to-tr sm:bg-linear-to-l from-zinc-900 via-zinc-900/50 to-transparent z-20" />

        <div className="relative z-30 h-full flex items-center justify-center lg:justify-end px-5 sm:px-14">
          <div className="max-w-xl 3xl:max-w-none sm:text-center lg:text-right text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-bold leading-tight font-satoshi">
              Made By You
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-bold mb-3 md:mb-6 leading-tight font-satoshi">
              Meant For You
            </h2>

            <p className="text-sm sm:text-base xl:text-lg 3xl:text-xl text-zinc-200 mb-4 md:mb-8 sm:text-balance xl:text-nowrap">
              Design a bag that feels personal crafted around your style,{" "}
              <br className="hidden xl:block" />
              your routine, and the way you move.
            </p>

            <div className="grid grid-cols-2 place-items-start sm:place-items-center md:flex justify-center lg:justify-end gap-2 md:gap-4">
              <Link
                href="https://shopee.co.id/diyfome"
                className="text-base xl:text-lg 3xl:text-xl cursor-pointer group flex justify-center items-center gap-1 text-white hover:text-orange-200 sm:w-32 xl:w-40 3xl:w-44 py-1 sm:px-3 whitespace-nowrap relative before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-orange-200 before:transition-transform before:ease-in-out before:duration-500 before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
              >
                <TbBrandShopee className="size-4 md:size-5" /> Shopee
              </Link>
              <Link
                href="https://www.tiktok.com/@diyfome.id"
                className="text-base xl:text-lg 3xl:text-xl  cursor-pointer group flex justify-center items-center gap-1 text-white hover:text-blue-200 sm:w-32 xl:w-40 3xl:w-44 py-1 sm:px-3 whitespace-nowrap relative before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-blue-200 before:transition-transform before:ease-in-out before:duration-500 before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
              >
                <FaTiktok className="size-3 md:size-3.5" /> Tiktok
              </Link>
              <Link
                href="https://www.instagram.com/diyfome.id"
                className="text-base xl:text-lg 3xl:text-xl  cursor-pointer group flex justify-center items-center gap-1 text-white hover:text-purple-200 sm:w-32 xl:w-40 3xl:w-44 py-1 sm:px-3 whitespace-nowrap relative before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-200 before:transition-transform before:ease-in-out before:duration-500 before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
              >
                <FaInstagram className="size-3 md:size-4" /> Instagram
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=6285173135780"
                className="text-base xl:text-lg 3xl:text-xl  cursor-pointer group flex justify-center items-center gap-1 text-white hover:text-green-200 sm:w-32 xl:w-40 3xl:w-44 py-1 sm:px-3 whitespace-nowrap relative before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-green-200 before:transition-transform before:ease-in-out before:duration-500 before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
              >
                <FaWhatsapp className="size-3.5 md:size-4" /> Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeSlide>
  );
};

export default CTASection;

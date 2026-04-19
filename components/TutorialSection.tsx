import { FadeSlide } from "./UI/FadeSlide";
import { WordsPullUp } from "./UI/WordsPullUp";

const TutorialSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center p-5 md:p-10 pt-40">
      <div className="w-full rounded-2xl relative flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
        <FadeSlide className="italic text-4xl xl:text-5xl 3xl:text-7xl text-zinc-900 xl:absolute mb-auto xl:mb-0 left-0 top-0 leading-none text-center mr-auto md:mr-0">
          T<br className="hidden md:block" />
          u<br className="hidden md:block" />
          t<br className="hidden md:block" />
          o<br className="hidden md:block" />
          r<br className="hidden md:block" />
          i<br className="hidden md:block" />
          a<br className="hidden md:block" />l
        </FadeSlide>
        <FadeSlide className="relative">
          <div className="absolute w-full h-full bg-linear-to-br from-zinc-500/70 via-transparent to-zinc-500/70 rounded-2xl select-none pointer-events-none aspect-video max-w-5xl 3xl:max-w-none">
            {" "}
          </div>
          <video
            className="w-full h-full object-cover rounded-2xl max-w-5xl 3xl:max-w-none aspect-video shadow-2xl"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src={"/videos/tutorial.mp4"} type="video/mp4" />
          </video>
        </FadeSlide>
        <FadeSlide
          direction="down"
          className="italic text-4xl xl:text-5xl 3xl:text-7xl text-zinc-900 xl:absolute mt-auto xl:mt-0 bottom-0 right-0 leading-none text-center ml-auto md:ml-0"
        >
          V<br className="hidden md:block" />
          i<br className="hidden md:block" />
          d<br className="hidden md:block" />
          e<br className="hidden md:block" />o
        </FadeSlide>
      </div>
    </section>
  );
};

export default TutorialSection;

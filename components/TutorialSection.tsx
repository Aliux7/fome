import { FadeSlide } from "./UI/FadeSlide";
import { WordsPullUp } from "./UI/WordsPullUp";

const TutorialSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center p-10 pt-40">
      <div className="w-full rounded-2xl relative flex justify-center items-center">
        <FadeSlide className="absolute w-full h-full bg-linear-to-br from-zinc-500/70 via-transparent to-zinc-500/70 rounded-2xl select-none pointer-events-none aspect-video max-w-5xl">
          {" "}
        </FadeSlide>
        <FadeSlide className="italic font-supreme text-5xl text-zinc-900 absolute left-0 top-0 leading-none text-center">
          T<br />
          u<br />
          t<br />
          o<br />
          r<br />
          i<br />
          a<br />l
        </FadeSlide>
        <FadeSlide
          direction="down"
          className="italic font-supreme text-5xl text-zinc-900 absolute bottom-0 right-0 leading-none text-center"
        >
          V<br />
          i<br />
          d<br />
          e<br />o
        </FadeSlide>
        <FadeSlide>
          <video
            className="w-full h-full object-cover rounded-2xl max-w-5xl aspect-video shadow-2xl"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src={"/videos/tutorial.mp4"} type="video/mp4" />
          </video>
        </FadeSlide>
      </div>
    </section>
  );
};

export default TutorialSection;

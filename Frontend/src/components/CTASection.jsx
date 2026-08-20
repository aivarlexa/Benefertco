import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import agri1 from "../assets/Agri1.jpg";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden md:min-h-[620px]">
      <img
        src={agri1}
        alt="Dutch windmill over agricultural fields"
        className="
          cta-bg-animation
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[58%_center]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(
            90deg,
            rgba(7,24,15,0.94)_0%,
            rgba(7,24,15,0.82)_28%,
            rgba(7,24,15,0.55)_52%,
            rgba(7,24,15,0.18)_78%,
            rgba(7,24,15,0.05)_100%
          )]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(
            180deg,
            rgba(0,0,0,0.20)_0%,
            transparent_35%,
            rgba(0,0,0,0.35)_100%
          )]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-[55%]
          bg-[radial-gradient(
            circle_at_20%_50%,
            rgba(118,168,72,0.20),
            transparent_65%
          )]
        "
      />

      <div
        className="
          section-shell
          relative
          z-10
          flex
          min-h-[560px]
          items-center
          py-20
          md:min-h-[620px]
          md:py-24
        "
      >
        <Reveal className="max-w-3xl">
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/25
              bg-white/10
              px-4
              py-2.5
              shadow-[0_8px_30px_rgba(0,0,0,0.15)]
              backdrop-blur-md
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[var(--tulip)]
                text-[var(--forest-deep)]
              "
            >
              <Leaf size={14} strokeWidth={2.5} />
            </span>

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.24em]
                text-white
                md:text-[11px]
              "
            >
              Crop Program Guidance
            </span>
          </div>

       {/* Badge → Heading */}
<h2
  className="
    mt-10
    max-w-[700px]
    font-[var(--font-display)]
    text-[3.2rem]
    font-black
    leading-[0.9]
    tracking-[-0.045em]
    text-white
    drop-shadow-[0_4px_18px_rgba(0,0,0,0.25)]
    sm:text-5xl
    md:text-6xl
    lg:text-[5.25rem]
  "
>
            Give Every Crop
        <span className="mt-4 block text-[#1f5136]" style={{ color: "#af840b" }}>
  Its Best Start.
</span>
          </h2>

         {/* Heading → Description */}
<p
  style={{
    color: "#ffffff",
    WebkitTextFillColor: "#ffffff",
      fontSize: "18px",
  }}
  className="
    mt-[60px]
    whitespace-nowrap
    font-bold
    leading-8
    tracking-[-0.01em]
    drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]
    md:text-xl
    md:leading-8
  "
>
  Explore our fertilizer collection and discover&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; carefully formulated nutrition solutions designed to support healthy, balanced crop growth.
</p>
         <div className="mt-[50px]">
            <Link
              to="/products"
              style={{
    color: "#ffffff",
    WebkitTextFillColor: "#ffffff",
  }}
              className="
    inline-flex
    min-h-[58px]
    min-w-[200px]
    items-center
    justify-center
    rounded-full
    border
    border-white/40
    bg-[linear-gradient(135deg,#1f5136_0%,#315f3c_45%,#789b55_100%)]
    px-9
    text-base
    font-bold
    text-white
    no-underline
    shadow-[0_8px_25px_rgba(0,0,0,0.20)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(0,0,0,0.28)]
  "

            >
              Explore Fertilizers

              <ArrowRight
                size={20}
                strokeWidth={2.7}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

         {/* Button → Bottom text */}
<div
  className="
    mt-[45px]
    flex
    items-center
    gap-3
  "
>
            <span className="h-px w-10 bg-white/40" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-white/70
              "
            >
              Precision • Nutrition • Growth
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
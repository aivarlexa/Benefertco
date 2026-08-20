import { ArrowRight, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

import heroVideo from "../assets/Hero-VideoAgri.mp4";
import { landscapeAssets } from "../data/products";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--forest-deep)]"
    >
      <img
        src={landscapeAssets.hero}
        alt="Dutch greenhouse-inspired agricultural landscape"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <video
        className="image-drift absolute inset-0 h-full w-full object-cover object-center"
        poster={landscapeAssets.hero}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,18,11,0.88) 0%, rgba(5,18,11,0.68) 40%, rgba(5,18,11,0.35) 70%, rgba(5,18,11,0.15) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 50%, rgba(118,168,72,0.18), transparent 32rem)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.30), transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
        style={{
          background:
            "linear-gradient(to top, var(--bg), rgba(248,245,236,0.12), transparent)",
        }}
      />

      <div
        className="
          section-shell relative z-20
          flex min-h-[100svh]
          items-center
          pb-20
          pt-48
          md:pb-24
          md:pt-52
          lg:pt-56
        "
      >
        <Reveal className="relative z-30 max-w-4xl">
         <div
  style={{
    color: "#ffffff",
    transform: "translateY(-60px)",
  }}
  className="
    inline-flex
    items-center
    gap-2
    border-l-2
    border-[var(--tulip)]
    pl-3
    text-[11px]
    font-bold
    uppercase
    tracking-[0.20em]
    md:text-xs
  "
>
  <Sprout
    size={15}
    strokeWidth={2.2}
    color="#ffffff"
  />

  <span
    style={{
      color: "#ffffff",
      textShadow: "0 2px 10px rgba(0,0,0,0.4)",
    }}
  >
    Netherlands-inspired crop nutrition
  </span>
</div>

          <h1
            style={{
              transform: "translateY(-40px)",
              color: "#ffffff",
              fontFamily: "var(--font-display)",
              textShadow: "0 4px 24px rgba(0,0,0,0.20)",
            }}
            className="
              max-w-[800px]
              text-[clamp(3.5rem,8vw,7.5rem)]
              font-semibold
              leading-[0.84]
              tracking-[-0.035em]
            "
          >
            Growing

            <span
              className="block"
              style={{
                color: "var(--tulip)",
              }}
            >
              Tomorrow,
            </span>

            Naturally.
          </h1>

          <p
            style={{
             transform: "translateY(-10px)",
              color: "#ffffff",
              textShadow: "0 2px 12px rgba(0,0,0,0.55)",
            }}
            className="
              block
              max-w-2xl
              text-base
              font-medium
              leading-7
              md:text-lg
              md:leading-8
            "
          >
            Innovative crop nutrition inspired by the precision,
            technology, and agricultural expertise of the Netherlands.
          </p>
<div
  style={{
   transform: "translateY(10px)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }}
>
  <Link
    to="/products"
    style={{
      background:
        "linear-gradient(135deg, #123522 0%, #1f5136 50%, #6d994a 100%)",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.25)",
      boxShadow: "0 10px 28px rgba(18,53,34,0.30)",
      minWidth: "230px",
    }}
    className="
      group
      inline-flex
      min-h-[58px]
      items-center
      justify-center
      gap-3
      rounded-full
      px-8
      text-base
      font-extrabold
      no-underline
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
  >
    View Product Catalog

    <ArrowRight
      size={20}
      strokeWidth={2.5}
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </Link>

  <Link
    to="/about"
    style={{
      marginLeft: "20px",
      background:
        "linear-gradient(135deg, #123522 0%, #1f5136 50%, #6d994a 100%)",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.55)",
      boxShadow: "0 10px 28px rgba(18,53,34,0.22)",
      minWidth: "230px",
    }}
    className="
      inline-flex
      min-h-[58px]
      items-center
      justify-center
      rounded-full
      px-8
      text-base
      font-extrabold
      no-underline
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
  >
    Discover Our Approach
  </Link>
</div>
          <div
            style={{
              marginTop: "50px",
              color: "rgba(255,255,255,0.65)",
            }}
            className="
              flex
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              md:text-xs
            "
          >
            <span
              style={{
                backgroundColor: "rgba(255,255,255,0.45)",
              }}
              className="h-px w-8"
            />

            Precision • Nutrition • Growth
          </div>
        </Reveal>
      </div>

      <div
        className="
          absolute
          bottom-8
          right-8
          z-20
          hidden
          flex-col
          items-center
          gap-3
          md:flex
        "
      >
        <span
          style={{
            color: "rgba(255,255,255,0.55)",
          }}
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.25em]
            [writing-mode:vertical-rl]
          "
        >
          Scroll
        </span>

        <span
          style={{
            backgroundColor: "rgba(255,255,255,0.30)",
          }}
          className="h-12 w-px"
        />
      </div>
    </section>
  );
}
"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText, useGSAP);

export default function Home() {
  const typing = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const split = SplitText.create(typing.current, { type: "chars" });

    gsap.set(split.chars, { opacity: 0 });

    gsap
    .timeline({ repeat: -1 })
    .to(split.chars, {
      opacity:1, 
      duration:0.03, 
      stagger:0.12,})
    .to({},{duration:1.1})
    .to(split.chars, {opacity:0, duration:0.03, stagger: {each: 0.06, from: "end"}})
    .to({}, {duration:0.4})
  },
);

  return (
    <main className="min-h-screen overflow-hidden bg-[#11071F]">
      <nav
        className="font-display mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-10 lg:px-14"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-[-0.06em] text-[#b5a6c8] hover:text-white"
        >
          KYOZ
        </a>
        <div className="hidden items-center gap-9 text-sm uppercase tracking-[0.18em] text-[#b5a6c8] md:flex">
          <a className="transition-colors hover:text-white" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-white" href="#work">
            Work
          </a>
          <a className="transition-colors hover:text-white" href="#contact">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-[#6f588d] text-white px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-[#251239]"
        >
          Let&apos;s talk
        </a>
      </nav>

      <section
        id="top"
        className="relative font-display mx-auto flex min-h-[640px] w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-20 md:px-10 lg:px-14"
      >
        <div className="pointer-events-none absolute -right-32 top-8 size-[420px] rounded-full bg-[#6d47ff]/20 blur-[110px]" />
        <div className="relative max-w-5xl">
          <h1 className="text-white max-w-5xl text-[clamp(3.8rem,10vw,9.5rem)] font-medium leading-[0.88] tracking-[-0.085em]">
            Designing{" "}
            <span ref={typing} className="text-[#a77cdf]">
              digital
            </span>{" "}
            things with feeling
          </h1>
          <div className="mt-10 flex flex-col">
            <p className="text-lg text-white">
              I&apos;m Mark Bayudang —a front-end developer and multimedia
              designer <br />
              creating thoughtful identities, interfaces, and experiences for
              the web.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

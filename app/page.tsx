"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    number: "01 / Web Development",
    title: "Developer Portfolio",
    type: "Web Developer",
    description: "Websites that I built for myself and for my clients",
    href: "/developer",
    action: "Explore Developments",
  },
  {
    number: "02 / Video Editor",
    title: "Video Editor Portfolio",
    type: "Video Editor",
    description:
      "Videos shaped through rhythm, texture, sounds, and details that make a moment stay with you",
    href: "/video-editor",
    action: "Watch Videos",
  },
];

gsap.registerPlugin(SplitText, useGSAP);

const container =
  "mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-14 font-display";

export default function Home() {
  const typing = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const split = SplitText.create(typing.current, { type: "chars" });

    gsap.set(split.chars, { opacity: 0 });

    gsap
      .timeline({ repeat: -1 })
      .to(split.chars, {
        opacity: 1,
        duration: 0.03,
        stagger: 0.12,
      })
      .to({}, { duration: 1.1 })
      .to(split.chars, {
        opacity: 0,
        duration: 0.03,
        stagger: { each: 0.06, from: "end" },
      })
      .to({}, { duration: 0.4 });
  });

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
        className={`relative flex min-h-[640px] ${container} flex-col justify-center pb-24 pt-20`}
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
        <div className="border-t border-[#8d7ba3] mt-20" />
      </section>

      <section className={`${container} font-display`}>
        <div className="grid gap-10 md:grid-cols-12">
          <p className="md:col-span-3 pt-2 text-sm uppercase tracking-[0.2em] text-[#8d7ba3]">
            01 / About me
          </p>
          <div className="md:col-span-9 flex flex-col gap-8">
            <h2 className="max-w-4xl text-4xl font-medium uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Skill is a must, balancing good idea and design
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              Continuous personal and professional development is a core value
              of mine, and I remain committed to lifelong learning and pursuing
              excellence in every endeavor.
            </p>
          </div>
        </div>
      </section>

      <section className={`${container} mt-30 `}>
        <div className="mb-14 flex items-end border border-b border-[#8d7ba3]"></div>
        <p className="uppercase text-[#8d7ba3] mt-20 mb-5">02 / experience</p>
        <div className="flex items-center justify-between">
          <h1 className="text-white md:text-6xl mb-5">Two ways I make</h1>
          <p className="text-[#8d7ba3]">Developer + Video Editor</p>
        </div>
        <div className="border mb-8 border-[#8d7ba3]/30"></div>
        <div className="md:grid md:grid-cols-2 mx-auto max-x-7xl gap-10 flex flex-col">
          {experiences.map((exp) => (
            <Link
              key={exp.href}
              href={exp.href}
              className="group block h-full focus-visible:outline-none"
            >
              <Card className="flex h-full flex-col gap-0 bg-[#1a0b2e] p-10 border border-[#1a0b2e] transition-colors duration-300 group-hover:border-[#3f1772] group-focus-visible:border-[#a77cdf]">
                <p className="mb-10 uppercase tracking-[0.3em] text-[#8d7ba3] md:text-[1rem]">
                  {exp.number}
                </p>
                <h2 className="mb-5 uppercase tracking-[-0.06em] text-white md:text-3xl">
                  {exp.title}
                </h2>
                <p className="mb-10 text-[#8d7ba3] md:text-lg">
                  {exp.description}
                </p>

                <div className="mt-auto border-t border-[#8d7ba3]" />

                <div className="flex items-center justify-between pt-5 text-xs uppercase tracking-[0.18em] text-[#c8a9ff]">
                  {exp.action}
                  <span className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

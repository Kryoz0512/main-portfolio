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
  // for gsap
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

  // for nav
  const slide = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const tooTall = el.offsetHeight > window.innerHeight;

    el.scrollIntoView({
      behavior: "smooth",
      block: tooTall ? "start" : "center",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#11071F]">
      <nav
        className="font-display mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-10 lg:px-14"
        aria-label="Main navigation"
        id="top"
      >
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-[-0.06em] text-[#b5a6c8] hover:text-white"
        >
          KYOZ
        </a>
        <div className="hidden items-center gap-9 text-sm uppercase tracking-[0.18em] text-[#b5a6c8] md:flex">
          <a
            className="transition-colors hover:text-white"
            href="#about"
            onClick={(event) => slide(event, "about")}
          >
            About
          </a>
          <a
            className="transition-colors hover:text-white"
            href="#experience"
            onClick={(event) => slide(event, "experience")}
          >
            Experience
          </a>
          <a
            className="transition-colors hover:text-white"
            href="#contact"
            onClick={(event) => slide(event, "thesis")}
          >
            Thesis
          </a>
          <a
            className="transition-colors hover:text-white"
            href="#contact"
            onClick={(event) => slide(event, "contact")}
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-[#6f588d] text-white px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-[#251239]"
          onClick={(event) => slide(event, "contact")}
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

      <section className={`${container} font-display`} id="about">
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

      <section className={`${container} mt-30 mb-30`} id="experience">
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

      <section className="font-display flex justify-center w-full border border-[#8d7ba3] bg-[#1a0b2e]" id="thesis">
        <div className="grid gap-10 md:grid-cols-12 mt-20 mb-20">
          <p className="md:col-span-3 pt-2 text-sm uppercase tracking-[0.2em] text-[#8d7ba3]">
            03 / THESIS
          </p>
          <div className="md:col-span-9 flex flex-col gap-8">
            <h2 className="max-w-4xl text-4xl font-medium uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              SNHS DIGISTAR | SANTOR NATIONAL HIGHSCHOOL SCHOOL PORTAL
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              A digital integration for guidance, information, student tracking,
              academics and records
            </p>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 md:px-10 lg:px-14 lg:py-32 font-display"
      >
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#8d7ba3]">
            04 / Start a conversation
          </p>
          <h2 className="font-display text-white max-w-4xl text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.08em]">
            Have a good idea?
            <br />
            <a
              className="text-[#c8a9ff] underline decoration-[#6d47ff] decoration-2 underline-offset-8 transition-colors hover:text-white"
              href=""
            >
              Let&apos;s make it real.
            </a>
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-6 border-t border-[#39254d] pt-6 text-xs uppercase tracking-[0.18em] text-[#8d7ba3] sm:flex-row">
          <span>© 2025 Mark Bayudang</span>
          <div className="flex gap-6">
            <a
              className="hover:text-white"
              href="#top"
              onClick={(event) => slide(event, "top")}
            >
              Back to top ↑
            </a>
            <a className="hover:text-white" href="mailto:hello@kyoz.design">
              Email ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

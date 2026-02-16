"use client";
import Image from "next/image";
import React from "react";

type Props = {
  meaning: string;
  cause: string;
  fix: string;
  why: string;
  accent: string;
  delay?: number;
  shouldAnimate: boolean;
};

const DiagnosisCards = ({
  meaning,
  cause,
  fix,
  why,
  accent,
  delay,
  shouldAnimate,
}: Props) => {
  return (
    <section className="diagnosis-cards mt-8">
      <p className="font-semibold tracking-tight text-md text-center md:text-left md:ml-12">
        AI Diagnosis
      </p>

      <ul
        key={meaning + cause + fix + why}
        className={`grid grid-cols-1 md:grid-cols-2 mt-6 justify-items-center mx-2 md:mx-4 gap-6 ${
          shouldAnimate ? "animate-fade-in" : ""
        }`}
      >
        <Card
          icon="/icons/check.svg"
          title="What This Error Means"
          content={meaning}
          accent={accent}
          delay={0.1}
        />

        <Card
          icon="/icons/magnifing-glass.svg"
          title="Most Likely Cause"
          content={cause}
          accent="bg-amber-100 text-amber-600"
          delay={0.2}
        />

        <Card
          icon="/icons/spanner.svg"
          title="How to Fix It"
          content={fix}
          accent="bg-blue-100 text-blue-600"
          delay={0.3}
        />

        <Card
          icon="/icons/brain.svg"
          title="Why This Happens"
          content={why}
          accent="bg-purple-100 text-purple-600"
          delay={0.4}
        />
      </ul>
    </section>
  );
};

export default DiagnosisCards;

function Card({
  icon,
  title,
  content,
  accent,
  delay = 0,
  shouldAnimate,
}: {
  icon: string;
  title: string;
  content: string;
  accent: string;
  delay?: number;
  shouldAnimate?: boolean;
}) {
  return (
    <li
      className={`
    bg-white 
    border border-gray-200 
    border-t-4 ${accent}
    rounded-2xl 
    shadow-lg 
    hover:shadow-2xl 
    hover:scale-[1.02]
    transition-all duration-300 
    w-full max-w-xl
    ${shouldAnimate ? "animate-fade-in" : ""}
  `}
      style={shouldAnimate ? { animationDelay: `${delay}s` } : undefined}
    >
      <h3 className="text-lg font-semibold ml-4 mt-4 flex items-center">
        <Image
          src={icon}
          alt={title}
          width={30}
          height={30}
          className="inline-block mr-2"
        />
        {title}
      </h3>

      <div className="w-full border-t border-gray-200 my-2"></div>

      <p className="py-4 px-6 leading-relaxed whitespace-pre-line">{content}</p>
    </li>
  );
}

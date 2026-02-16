"use client";
import Image from "next/image";
import React from "react";

type Props = {
  meaning: string;
  cause: string;
  fix: string;
  why: string;
};

const DiagnosisCards = ({ meaning, cause, fix, why }: Props) => {
  return (
    <section className="diagnosis-cards mt-8">
      <p className="font-semibold text-md ml-12">AI Diagnosis</p>

      <ul className="grid grid-cols-1 md:grid-cols-2 mt-6 justify-items-center mx-2 md:mx-4 gap-6">
        <Card
          icon="/icons/check.svg"
          title="What This Error Means"
          content={meaning}
        />

        <Card
          icon="/icons/magnifing-glass.svg"
          title="Most Likely Cause"
          content={cause}
        />

        <Card icon="/icons/spanner.svg" title="How to Fix It" content={fix} />

        <Card icon="/icons/brain.svg" title="Why This Happens" content={why} />
      </ul>
    </section>
  );
};

export default DiagnosisCards;

function Card({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) {
  return (
    <li className="bg-white border border-gray-200 rounded shadow-md w-full h-auto max-w-xl">
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

      <div className="w-full border-t border-gray-300 my-2"></div>

      <p className="p-4 leading-relaxed whitespace-pre-line">{content}</p>
    </li>
  );
}

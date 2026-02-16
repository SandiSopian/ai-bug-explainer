"use client";

import { useState, useRef } from "react";
import InputErrorMessage from "../../components/InputErrorMessage";
import DiagnosisCards from "../../components/DiagnosisCards";
import { useEffect } from "react";

type DiagnosisResult = {
  meaning: string;
  cause: string;
  fix: string;
  why: string;
};

export default function MainSection() {
  const [result, setResult] = useState<DiagnosisResult>({
    meaning: "...",
    cause: "...",
    fix: "...",
    why: "...",
  });

  const [isLoading, setIsLoading] = useState(false);

  const resultRef = useRef<HTMLDivElement | null>(null);

  const scrollToResult = () => {
    if (!resultRef.current) return;

    const top =
      resultRef.current.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!isLoading && result.meaning !== "...") {
      const timeout = setTimeout(() => {
        scrollToResult();
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <>
      <InputErrorMessage setResult={setResult} setIsLoading={setIsLoading} />

      <div ref={resultRef}>
        <DiagnosisCards
          meaning={isLoading ? "Loading..." : result.meaning}
          cause={isLoading ? "Loading..." : result.cause}
          fix={isLoading ? "Loading..." : result.fix}
          why={isLoading ? "Loading..." : result.why}
          accent="bg-green-100 text-green-600"
          shouldAnimate={!isLoading && result.meaning !== "..."}
        />
      </div>
    </>
  );
}

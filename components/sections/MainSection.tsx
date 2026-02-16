"use client";

import { useState } from "react";
import InputErrorMessage from "../../components/InputErrorMessage";
import DiagnosisCards from "../../components/DiagnosisCards";

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

  return (
    <>
      <InputErrorMessage setResult={setResult} setIsLoading={setIsLoading} />

      <DiagnosisCards
        meaning={isLoading ? "Loading..." : result.meaning}
        cause={isLoading ? "Loading..." : result.cause}
        fix={isLoading ? "Loading..." : result.fix}
        why={isLoading ? "Loading..." : result.why}
      />
    </>
  );
}

"use client";
import Image from "next/image";
import InputErrorMessage from "../../components/InputErrorMessage";
import DiagnosisCards from "../../components/DiagnosisCards";
import MainSection from "../../components/sections/MainSection";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="p-8 w-full mx-auto">
      <MainSection />
    </main>
  );
}

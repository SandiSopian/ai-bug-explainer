"use client";
import MainSection from "../../components/sections/MainSection";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="p-8 w-full mx-auto">
      <section className="text-center py-8 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Fix Your Bugs in Seconds
        </h1>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Paste your error message and get instant AI-powered explanation, root
          cause analysis, and actionable fixes.
        </p>
      </section>
      <MainSection />
    </main>
  );
}

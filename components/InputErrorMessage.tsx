"use client";
import React from "react";
import { useState } from "react";

type DiagnosisResult = {
  meaning: string;
  cause: string;
  fix: string;
  why: string;
};

type Props = {
  setResult: (value: DiagnosisResult) => void;
  setIsLoading: (value: boolean) => void;
};

const InputErrorMessage = ({ setResult, setIsLoading }: Props) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setIsLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          errorMessage: text,
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({
        meaning: "Failed to generate explanation",
        cause: "Server error or network issue",
        fix: "Please try again",
        why: "The request failed",
      });
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <section className="input-error mt-1 md:px-7 w-full">
      <p className="font-semibold tracking-tight text-md text-center md:text-left md:ml-6">
        Paste your error message below:
      </p>

      <div className="bg-white p-4 rounded shadow-md mt-2 w-full h-auto flex flex-col items-center mx-auto">
        <textarea
          placeholder="Input error here..."
          className="w-full font-mono text-sm bg-slate-50 h-80 p-2 border border-gray-400 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="py-4">
          <button
            onClick={handleGenerate}
            disabled={!text || loading}
            className="border text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg hover:shadow-xl rounded-xl py-2 px-10 rounded mt-2 max-w-sm hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            {loading ? "Loading..." : "Explain this error"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InputErrorMessage;

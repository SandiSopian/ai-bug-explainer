import { NextResponse } from "next/server";
import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

function extractJSON(text: string) {
  try {
    // Remove mardkown code fences if exist
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Find first { and last }
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");

    if (start !== -1 && end !== -1) {
      const jsonString = cleaned.slice(start, end + 1);
      return JSON.parse(jsonString);
    }

    throw new Error("No JSON object found in the text");
  } catch (err) {
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const { errorMessage } = await req.json();

    if (!errorMessage) {
      return NextResponse.json(
        { result: "Error message is required." },
        { status: 400 },
      );
    }

    const prompt = `
You are a senior software engineer helping debug an error.

Return ONLY valid JSON in this format:

{
  "meaning": "Explain what this error means",
  "cause": "Most likely cause",
  "fix": "Step by step solution",
  "why": "Technical explanation why this happens"
}

No markdown.
No explanation outside JSON.

Error:
"""
${errorMessage}
"""
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });

    const rawOutput = completion.choices[0].message.content || "";

    const parsed = extractJSON(rawOutput);

    if (!parsed) {
      return NextResponse.json(
        {
          meaning: "AI response format error.",
          cause: "The model did not return valid JSON.",
          fix: "Try submitting the error again.",
          why: "Sometimes AI adds extra formatting that breaks JSON parsing.",
        },
        { status: 200 },
      );
    }

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("GROQ ERROR:", error);

    return NextResponse.json(
      {
        meaning: "Server error occurred.",
        cause: "Internal API failure.",
        fix: "Please try again later.",
        why: "Unexpected backend error.",
      },
      { status: 500 },
    );
  }
}

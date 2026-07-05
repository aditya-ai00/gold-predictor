import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ error: "Gemini Engine Key Missing" }, { status: 500 });
  }

  try {
    const { mode, payload } = await request.json();

    if (mode === "chat") {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are GoldVision AI assistant. Offer expert, institutional-grade bullion and precious metals macro analysis. Respond to the user concisely: ${payload.message}`,
      });
      return NextResponse.json({ text: response.text });
    }

    if (mode === "predict") {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Analyze this market snap: Spot Gold is ${payload.price}. RSI is ${payload.rsi}. MACD is ${payload.macd}. Macro factors: Interest Rates, Inflation, and DXY Index are volatile. Return a clean prediction breakdown including Bullish/Bearish sentiment, a clear Confidence %, and custom short outlooks for tomorrow, weekly, and monthly periods.`,
      });
      return NextResponse.json({ text: response.text });
    }

    return NextResponse.json({ error: "Invalid execution path" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
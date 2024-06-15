import { GoogleGenerativeAI } from "@google/generative-ai";
import { GIMINI_AI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(GIMINI_AI_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
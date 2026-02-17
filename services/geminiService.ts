
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS, CAFE_INFO } from "../constants.tsx";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getFoodRecommendation(userQuery: string) {
  const menuSummary = MENU_ITEMS.map(item => `${item.name} (${item.category}): ${item.description} - ${item.price}`).join('\n');
  
  const systemInstruction = `
    You are the "A1cafe Taste Buddy", a friendly AI waiter for A1cafe in Ramsinghpur.
    Your goal is to suggest items from the menu based on what the user wants or their mood.
    
    Cafe Info: ${CAFE_INFO.name}, located in ${CAFE_INFO.address}.
    
    Menu:
    ${menuSummary}
    
    Instructions:
    1. Only recommend items from the provided menu.
    2. Be friendly, energetic, and use food-related emojis.
    3. If the user asks for something not on the menu, politely let them know and suggest the closest alternative.
    4. Keep responses concise and appetizing.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm having a little trouble thinking. How about our signature Classic A1 Burger? 🍔";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently taking a short break! But I always recommend our Farmhouse Special Pizza! 🍕";
  }
}

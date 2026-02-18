
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, CAFE_INFO } from "../constants.tsx";

export async function getFoodRecommendation(userQuery: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const menuSummary = MENU_ITEMS.map(item => `${item.name} (${item.category}): ${item.description} - ${item.price}`).join('\n');
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isThursday = today === "Thursday";

  const systemInstruction = `
    You are the "A1cafe Taste Buddy", the digital ambassador for A1cafe in Ramsinghpur, Rajasthan.
    
    Cafe Context:
    - Name: ${CAFE_INFO.name}
    - Location: ${CAFE_INFO.address} (Hayer Market, Main Road).
    - Hours: ${CAFE_INFO.hours}.
    - Vibes: Premium, friendly, modern, and the best spot in town.
    
    Special Offers:
    - EVERY THURSDAY: BOGO (Buy One Get One FREE) on all Medium & Large Pizzas! 
    - Today is ${today}. ${isThursday ? "IMPORTANT: Remind the user that the BOGO offer is active TODAY!" : "The BOGO offer is only on Thursdays."}

    Menu Inventory:
    ${menuSummary}
    
    Interaction Rules:
    1. Be incredibly friendly and helpful (use "Namaste", "Ji", or casual Hinglish vibes if appropriate, but keep it professional).
    2. Only recommend items from our actual menu.
    3. If they ask for something we don't have, steer them towards our signatures: Double Cheese Burger, White Sauce Pasta, or Paneer Pizza.
    4. Highlight the BOGO offer whenever someone asks about Pizza or "Offers".
    5. Mention our location details if they ask how to reach us.
    6. Keep responses appetizing and use emojis (🍔, 🍕, ☕, ✨).
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "I'm having a little trouble thinking. How about our signature Classic A1 Burger? 🍔";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently taking a short break! But I always recommend our Farmhouse Special Pizza! 🍕";
  }
}

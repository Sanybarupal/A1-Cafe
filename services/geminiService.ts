
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, CAFE_INFO } from "../constants.tsx";

export interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

export async function getFoodRecommendation(userQuery: string, history: ChatMessage[] = []) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Create a structured menu string for the AI's internal reference
  const menuByCategory = MENU_ITEMS.reduce((acc: any, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(`${item.name} (₹${item.price.replace('₹', '')})`);
    return acc;
  }, {});

  const menuString = Object.entries(menuByCategory)
    .map(([cat, items]: [string, any]) => `### ${cat}:\n${items.join(', ')}`)
    .join('\n\n');

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isThursday = today === "Thursday";

  const systemInstruction = `
    You are the "A1cafe Taste Buddy", a friendly AI concierge for A1cafe in Ramsinghpur.
    
    Location: ${CAFE_INFO.address}. 
    Today is ${today}. ${isThursday ? "REMIND THE USER: It's BOGO Thursday! Buy 1 Get 1 Free on all Medium/Large Pizzas." : "Mention that BOGO Thursday is coming if they ask for deals."}

    FULL MENU LIST:
    ${menuString}
    
    RULES FOR REPLIES:
    1. If the user asks for the "menu", "list", or "what do you have", respond with a beautifully formatted list organized by category (e.g., Beverages, Burgers, Pizzas).
    2. Use bullet points and bold text for clarity.
    3. Be appetizing! Use emojis like 🍕, 🍔, ☕, 🥤, 🍰.
    4. If they ask about a specific category (e.g., "What shakes do you have?"), list ONLY those items.
    5. Mention that last order is at 10:30 PM.
    6. Always be polite. Use Hinglish if the user does (e.g., "Ji", "Zaroor", "Bilkul").
  `;

  const formattedHistory = history.map(h => ({
    role: h.role === 'user' ? 'user' : 'model',
    parts: [{ text: h.text }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...formattedHistory,
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm looking for the menu right now! How about a Paneer Pizza in the meantime? 🍕";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently updating our special recipes! But I can tell you our Double Cheese Burger is a bestseller! 🍔";
  }
}

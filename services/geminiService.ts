
import { GoogleGenAI, Type } from "@google/genai";
import type { Storyboard } from '../types';

// This function is defined outside the service to avoid being part of the class/object.
// It creates a new instance each time to ensure the latest API key is used.
function getGenAIInstance() {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
}

const storyboardSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "A creative and fitting title for the story.",
    },
    total_duration_seconds: {
      type: Type.NUMBER,
      description: "The total duration of the video in seconds, matching the user's request.",
    },
    scenes: {
      type: Type.ARRAY,
      description: "An array of scenes that make up the storyboard.",
      items: {
        type: Type.OBJECT,
        properties: {
          scene: {
            type: Type.INTEGER,
            description: "A unique, sequential number for the scene, starting from 1.",
          },
          visual_prompt: {
            type: Type.STRING,
            description: "A detailed, vivid description of the visuals for this scene. This should be a high-quality prompt suitable for a text-to-video model like Veo.",
          },
          narration: {
            type: Type.STRING,
            description: "The narration or dialogue script for this scene. Can be empty if there is no speech.",
          },
          duration_seconds: {
            type: Type.NUMBER,
            description: "The estimated duration of this specific scene in seconds. The sum of all scene durations should approximate the total requested duration.",
          },
        },
        required: ["scene", "visual_prompt", "narration", "duration_seconds"],
      },
    },
  },
  required: ["title", "total_duration_seconds", "scenes"],
};


export const generateStoryboard = async (storyDescription: string, duration: number): Promise<Storyboard> => {
  const ai = getGenAIInstance();
  
  const prompt = `
    Analyze the following story description and create a detailed video storyboard.
    The total duration of the video must be ${duration} seconds.
    Break the story down into a sequence of scenes. For each scene, provide a detailed visual prompt suitable for a text-to-video AI like Google Veo, a narration script, and an estimated duration.
    The sum of the durations for all scenes should be as close as possible to the total requested duration.

    Story Description: "${storyDescription}"
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: storyboardSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    // In case the model wraps the JSON in markdown backticks
    const cleanedJsonText = jsonText.replace(/^```json\s*|```\s*$/g, '');
    const storyboard: Storyboard = JSON.parse(cleanedJsonText);
    return storyboard;
  } catch (error) {
    console.error("Error generating storyboard:", error);
    if (error instanceof Error && error.message.includes('Requested entity was not found.')) {
        throw new Error("API key not found. Please re-select your API key.");
    }
    throw new Error("Failed to generate storyboard. Please check the console for details.");
  }
};

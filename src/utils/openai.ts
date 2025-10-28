import OpenAi from "openai";
import {PROMPT} from "../lib/prompt"

const client = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY!,
});

const openaiSummary = async (extractedPDFcontent: string) => {
    try {
        const response = await client.responses.create({
            model: "gpt-5",
            input: `${PROMPT}:\n\n${extractedPDFcontent}`,
            max_output_tokens: 2000,
        });

        console.log("OpenAI response:", response.output_text);
        return response.output_text;
    } catch (error: any) {
        if (error?.status === 429) {
            console.error("Rate limit exceeded. Please try again later.");
            throw new Error("Rate limit exceeded. Please try again later.");
        } else {
            console.error("OpenAI error:", error);
            throw error;
        }
    }
}
export default openaiSummary;

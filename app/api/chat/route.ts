import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  // You can customize the system prompt to make the AI more empathetic
  const result = streamText({
    model: openai("gpt-4o"),
    messages,
    system:
      "You are an emotionally intelligent assistant. Respond with empathy and understanding to the user's messages.",
  })

  return result.toDataStreamResponse()
}

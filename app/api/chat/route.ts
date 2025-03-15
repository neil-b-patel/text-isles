import { streamText } from 'ai'
import { createOllama } from 'ollama-ai-provider'

import Story from '@/app/utils/story'

const BASE_URL = process.env.BASE_URL || 'http://localhost:11434/api'

const ollama = createOllama({
  baseURL: BASE_URL,
})

export const POST = async (req: Request): Promise<Response> => {
  const { messages } = await req.json()

  const result = streamText({
    model: ollama('llama3.2'),
    system: Story.prep + Story.Plots.cornFieldPlot,
    messages: messages,
  })

  return result.toDataStreamResponse()
}

'use client'

import { useChat } from '@ai-sdk/react'
import { Container } from '@chakra-ui/react'

import { ChatHistory } from '@/app/components/chatHistory'
import { ChatInput } from '@/app/components/chatInput'

const Home = () => {
  const { messages, input, handleInputChange, handleSubmit, append, status } = useChat()

  return (
    <div>
      <main>
        <Container fluid h={'dvh'}>
          <ChatHistory messages={messages} />
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            append={append}
            status={status}
          />
        </Container>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home

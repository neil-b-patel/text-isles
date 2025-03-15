'use client'

import { useEffect, useRef } from 'react'
import { BsChatLeftDots } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import { Button, HStack, Input, Spinner } from '@chakra-ui/react'

import { InputGroup } from '@/app/components/ui/input-group'
import { ChatInputProps } from '@/app/types/chatTypes'

export const ChatInput = ({ input, handleInputChange, handleSubmit, append, status }: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    append({ content: `What's going on?`, role: 'user' })
  }, [])

  return (
    <HStack gap={1} mt={5}>
      <InputGroup flex={1} startElement={<BsChatLeftDots />}>
        <Input
          size={'2xl'}
          mr={5}
          variant={'flushed'}
          value={input}
          onChange={handleInputChange}
          onKeyDown={async (event) => {
            if (event.key === 'Enter') {
              append({ content: input, role: 'user' })
            }
          }}
          onSubmit={handleSubmit}
          ref={inputRef}
          disabled={status !== 'ready'}
        ></Input>
      </InputGroup>
      <Button size={'md'} colorPalette={'green'} onClick={handleSubmit}>
        {status !== 'ready' ? <Spinner /> : <FaChevronRight />}
      </Button>
    </HStack>
  )
}

export default ChatInput

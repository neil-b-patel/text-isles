'use client'

import { useEffect } from 'react'
import { FaRegUserCircle, FaRobot } from 'react-icons/fa'
import { Flex, Box, Text, Icon, VStack, HStack } from '@chakra-ui/react'

import { ChatHistoryProps } from '@/app/types/chatTypes'

export const ChatHistory = ({ messages }: ChatHistoryProps) => {
  useEffect(() => {
    const chatHistoryContainer = document.getElementById('chat-history')
    if (chatHistoryContainer) {
      chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight
    }
  }, [messages])

  return (
    <Flex
      id="chat-history"
      direction={'column'}
      h={'85dvh'}
      mt={5}
      mb={5}
      p={5}
      rounded={20}
      borderWidth={1}
      overflow={'scroll'}
      scrollBehavior={'smooth'}
    >
      {messages.map((message, index) => (
        <Box key={index} py={2} overflowAnchor={'auto'}>
          {message.role === 'user' ? (
            <Flex justifyContent={'flex-end'}>
              <VStack>
                <HStack>
                  <Text fontSize={'md'}>{message.content}</Text>
                  <Icon name={'User'} size={'md'}>
                    <FaRegUserCircle />
                  </Icon>
                </HStack>
                <Text fontSize={'sm'} color={'gray.500'} alignSelf={'flex-end'}>
                  {message.createdAt?.toLocaleTimeString()}
                </Text>
              </VStack>
            </Flex>
          ) : (
            <Flex justifyContent={'flex-start'}>
              <VStack>
                <HStack>
                  <Icon name={'Server'} size={'md'}>
                    <FaRobot />
                  </Icon>
                  <Text fontSize={'md'}>{message.content}</Text>
                </HStack>
                <Text fontSize={'sm'} color={'gray.500'} alignSelf={'flex-start'}>
                  {message.createdAt?.toLocaleTimeString()}
                </Text>
              </VStack>
            </Flex>
          )}
        </Box>
      ))}
    </Flex>
  )
}

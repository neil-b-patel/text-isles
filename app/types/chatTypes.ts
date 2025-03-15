import { ChatRequestOptions, CreateMessage, Message, UIMessage } from 'ai'

export enum ChatType {
  USER = 'user',
  SERVER = 'server',
}

export type ChatRecord = {
  text: string
  timestamp: Date
  type: ChatType
}

export type ChatRecords = ChatRecord[]

export type ChatInputProps = {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (
    event?: {
      preventDefault?: () => void
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>
  status: 'submitted' | 'streaming' | 'ready' | 'error'
}

export type ChatHistoryProps = {
  messages: UIMessage[]
}

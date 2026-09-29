export const typeDefs = `#graphql
  enum Gender {
  male
  female
}

type User {
  id: ID!
  fullName: String!
  username: String!
  password: String!
  gender: Gender!
  createdAt: String!
  updatedAt: String!
}

 type Message {
  id: ID!
  senderId: ID!
  sender: User!
  receiverId: ID!
  receiver: User!
  message: String!
  createdAt: String!
  updatedAt: String!
}

  type AIResponse {
    userMessage: Message
    aiMessage: Message
  }

  type Query {
    getUsers: [User]
    getMessages(userId: ID!): [Message]
    getConversations: [Conversation]
  }

  type Mutation {
    chatWithAI(message: String!): AIResponse
  }

  type Conversation {
    _id: ID!
    participants: [User]!
    messages: [Message]!
    createdAt: String
    updatedAt: String
  }
`;
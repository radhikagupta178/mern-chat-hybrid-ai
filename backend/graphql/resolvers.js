import User from '../models/user.model.js';
import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const resolvers = {
  Query: {
    getUsers: async (_, __, { req }) => {
      if (!req.user) throw new Error("Unauthorized");
      return await User.find({ _id: { $ne: req.user._id } }).select("-password");
    },
    getMessages: async (_, { userId }, { req }) => {
      if (!req.user) throw new Error("Unauthorized");
      const conversation = await Conversation.findOne({
        participants: { $all: [req.user._id, userId] },
      }).populate("messages");
      return conversation ? conversation.messages : [];
    },getConversations: async (_, __, { req }) => {
      if (!req.user) throw new Error("Unauthorized");
      return await Conversation.find({
        participants: req.user._id,
      })
        .populate("participants", "-password")
        .populate("messages");
    },
  },
  Mutation: {
    chatWithAI: async (_, { message }, { req }) => {
      if (!req.user) throw new Error("Unauthorized");
      const senderId = req.user._id;

      const aiUser = await User.findOne({ username: "gemini_ai" });
      if (!aiUser) throw new Error("AI Assistant not initialized");
      const aiUserId = aiUser._id;

      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, aiUserId] },
      });

      if (!conversation) {
        conversation = new Conversation({ participants: [senderId, aiUserId], messages: [] });
      }

      const userMessage = new Message({ senderId, receiverId: aiUserId, message });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message,
      });

      const aiMessage = new Message({ senderId: aiUserId, receiverId: senderId, message: response.text });

      conversation.messages.push(userMessage._id, aiMessage._id);
      await Promise.all([conversation.save(), userMessage.save(), aiMessage.save()]);

      return { userMessage, aiMessage };
    },
  },
};
import { GoogleGenAI } from '@google/genai';
import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';
import User from '../models/user.model.js';
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;
    
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const aiUser = await User.findOne({ username: "gemini_ai" });
    if (!aiUser) {
      return res.status(404).json({ error: "AI Assistant not initialized" });
    }
    const aiUserId = aiUser._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, aiUserId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, aiUserId],
        messages: [],
      });
    }

    const userMessage = new Message({
      senderId,
      receiverId: aiUserId,
      message,
    });

    // 4. Generate response from Gemini
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents: message,
    });
    const aiReplyText = response.text;
    const aiMessage = new Message({
      senderId: aiUserId,
      receiverId: senderId,
      message: aiReplyText,
    });

    if (userMessage && aiMessage) {
      conversation.messages.push(userMessage._id, aiMessage._id);
    }

    await Promise.all([conversation.save(), userMessage.save(), aiMessage.save()]);

    res.status(200).json({ 
      userMessage, 
      aiMessage 
    });

  } catch (error) {
    console.error("Error in chatWithAI controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
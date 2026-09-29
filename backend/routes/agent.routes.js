import express from 'express';
import { chatWithAI } from '../controllers/agent.controller.js';
import protectRoute from '../middleware/protectRoute.js'; // your existing middleware

const router = express.Router();

router.post('/chat', protectRoute, chatWithAI);

export default router;
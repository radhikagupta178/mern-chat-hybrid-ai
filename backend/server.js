import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// GraphQL Imports (Apollo Server v4)
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';

// Database & Model Imports
import connectToMongoDB from './db/connectToMongoDB.js';
import User from './models/user.model.js';

// REST Route Imports
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import aiRoutes from './routes/agent.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use('/api/ai', aiRoutes);

const initializeAIUser = async () => {
  try {
    const aiUsername = "gemini_ai";
    await User.findOneAndUpdate(
      { username: aiUsername },
      {
        $set: {
          fullName: "Gemini AI Assistant",
          username: aiUsername,
          password: "RANDOM_SECURE_HASH_OR_PLACEHOLDER", // Dummy placeholder password
          profilePic: "https://api.dicebear.com/7.x/bottts/svg?seed=Gemini",
        }
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    console.log("AI Assistant user synchronized in DB! 🤖");
  } catch (error) {
    console.error("Error initializing AI user:", error);
  }
};


const startServer = async () => {
  // 1. Initialize Apollo Server for GraphQL
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();

  app.use(
    '/graphql',
    express.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }) => {
        try {
          const token = req.cookies?.jwt || req.cookies?.token;
          if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!decoded) return res.status(401).json({ error: "Unauthorized - Invalid token" });
            const user = await User.findById(decoded.userId).select("-password");
            if (!user) return res.status(404).json({ error: "User not found" });
            req.user = user;
          }
        } catch (error) {
          req.user = null;
        }

        return { req, res };
      },
    })
  );

  app.listen(PORT, async () => {
    await connectToMongoDB();
    await initializeAIUser();
    console.log(`Server is running on port ${PORT} 🚀`);
    console.log(`GraphQL endpoint ready at http://localhost:${PORT}/graphql`);
  });
};

startServer();
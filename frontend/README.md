Real-Time Chat Application (MERN Stack) with Hybrid REST/GraphQL & AI Integration

A full-stack, feature-rich real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io. It supports user authentication, secure route protection with JWT, private conversations, real-time messaging, and interactive UI design. Features a **hybrid API architecture** supporting both traditional REST endpoints and **GraphQL (Apollo Server v4)**, secured with HTTP-only JWT cookies, and enhanced with a built-in **Google Gemini AI Assistant**.

Note: This project is built for portfolio demonstration and is intended to be run locally. Follow the setup instructions below to run it on your machine.

🚀 Key Features
* **Hybrid API Architecture:** Seamlessly supports both Express REST controllers and an Apollo Server v4 GraphQL endpoint mounted at `/graphql`.
* **Gemini AI Integration:** Chat directly with an automated AI assistant (`gemini_ai`) powered by the Google Gemini API.
* **Secure Authentication:** Cookie-based JWT authentication parsed securely within the Apollo Server context to authorize GraphQL queries and mutations.
* **Persistent Conversations:** Full database-backed conversation history and message state synchronization using MongoDB & Mongoose.
* **Modern Tooling:** ES Modules, CORS configuration, and modular routing.

🛠️ Tech Stack
Frontend: React, Tailwind CSS / UI Components, Context API, React Router

Backend: Node.js, Express.js, Apollo Server v4 (@as-integrations/express4)

Database: MongoDB, Mongoose

Real-Time Communication: Socket.io

Authentication: JSON Web Tokens (JWT), Cookies/Headers, bcryptjs, Cookie-Parser

AI:Google Gen AI SDK

📂 Project Architecture
Plaintext
your-project-root/
│
├── backend/                  # Node.js & Express server
│   ├── db/                   # MongoDB connection setup
│   ├── graphql/              # Apollo Server setup
│   │   ├── typeDefs.js       # GraphQL Schema definitions
│   │   └── resolvers.js
│   ├── controllers/          # Route logic
│   ├── models/               # Mongoose Models
│   ├── routes/               # Express API routes
│   ├── middleware/           # JWT Protection middleware
│   ├── utils/                # Token generation
│   ├── socket/               # Socket.io configuration
│   └── server.js             # Entry point
│
└── frontend/                 # React client application
    ├── src/
    │   ├── assets
    │   │   └── components/   # UI elements
    │   ├── components/       # UI elements & Chat components
    │   ├── context/          # AuthContext & SocketContext
    │   ├── hooks/            # Custom hooks
    │   ├── store/            # State management
    │   └── App.js
    └── package.json

⚙️ Getting Started Locally
To run this application locally on your machine, follow these steps:

1. Clone the Repository
Bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Environment Variables Setup
Create a .env file in your backend/server directory (reference the .env.example file). Your configuration should look like this:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
GEMINI_API_KEY=paste_your_gemini_api_key_here
3. Install Dependencies & Run
Backend Server:

Bash
cd backend
npm install
npm run server
(The server will typically start on http://localhost:5000)

Frontend Client:
Open a separate terminal window, navigate to the frontend folder, and start the client:

Bash
cd frontend
npm install
npm start
(The React app will open on http://localhost:3000)
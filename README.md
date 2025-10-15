# Developer Portfolio

This is a full-stack developer portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## Features

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, TypeScript, MongoDB
- **Contact Form:** Submits to a MongoDB database with validation and rate limiting.
- **Animations:** Smooth animations with Framer Motion.
- **Responsive:** Fully responsive design.
- **Deployment:** Instructions for Vercel (frontend) and Heroku/Render (backend).

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account (or a local MongoDB instance)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd ../server
   npm install
   ```

### Environment Variables

Create a `.env` file in the `server` directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the frontend development server:**
   ```bash
   cd client
   npm run dev
   ```

## Deployment

### Frontend (Vercel)

1. Push your code to a Git repository (e.g., GitHub).
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Connect your Git repository.
4. Vercel will automatically detect that it's a Vite project and configure the build settings.
5. Deploy!

### Backend (Heroku/Render)

1. Push your code to a Git repository.
2. Go to your hosting provider of choice (e.g., Heroku, Render).
3. Create a new web service.
4. Connect your Git repository.
5. Configure the build command: `npm install && npm run build` (you'll need to add a `build` script to your `server/package.json` that runs `tsc`).
6. Configure the start command: `node dist/server.js`.
7. Add your environment variables (e.g., `MONGO_URI`).
8. Deploy!

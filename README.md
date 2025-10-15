# Full-Stack Developer Portfolio

This is a production-ready, full-stack portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) and designed to showcase your skills, projects, and experience to potential employers and clients.

## Features

- **Modern Frontend**: Built with React, TypeScript, and TailwindCSS for a sleek, responsive, and professional UI.
- **Animated & Interactive**: Subtle animations with Framer Motion and smooth scrolling for an engaging user experience.
- **Contact Form**: A functional contact form with a Node.js/Express backend that saves submissions to a MongoDB database.
- **SEO & Performance Optimized**: Best practices for meta tags, Open Graph, and optimized images to ensure fast load times and search engine visibility.
- **Developer-Friendly**: A clean, organized codebase with clear instructions for setup, development, and deployment.

## Tech Stack

- **Frontend**: React, TypeScript, Vite, TailwindCSS, Framer Motion, React Scroll
- **Backend**: Node.js, Express, MongoDB, TypeScript
- **Deployment**: Vercel (Frontend), Heroku/Render (Backend)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A free MongoDB Atlas account

### Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-portfolio.git
    cd your-portfolio
    ```

2.  **Install frontend dependencies:**

    ```bash
    cd client
    npm install
    ```

3.  **Install backend dependencies:**

    ```bash
    cd ../server
    npm install
    ```

4.  **Set up environment variables:**

    -   Navigate to the `server` directory and create a `.env` file from the example:

        ```bash
        cp .env.example .env
        ```

    -   Open the `.env` file and add your MongoDB connection string:

        ```
        MONGODB_URI=your_mongodb_connection_string
        ```

### Development

-   **Run the frontend (Vite):**

    ```bash
    cd client
    npm run dev
    ```

-   **Run the backend (Node.js/Express):**

    ```bash
    cd server
    npm run dev
    ```

## Deployment

### Frontend (Vercel)

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and create a new project.
3.  Connect your GitHub repository.
4.  Vercel will automatically detect the Vite configuration and set up the build settings.
5.  Deploy!

### Backend (Heroku)

1.  Push your code to a GitHub repository.
2.  Go to [Heroku](https://www.heroku.com/) and create a new app.
3.  Connect your GitHub repository.
4.  In the "Settings" tab, add a `MONGODB_URI` config var with your connection string.
5.  Deploy the `main` branch.

---

Built with ❤️ by [Your Name]

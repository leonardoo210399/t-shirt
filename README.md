
---

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/2784/2784453.png" width="100" />
</p>
<p align="center">
    <h1 align="center">T-Shirt Customizer</h1>
</p>
<p align="center">
    <em><code>A 3D T-shirt customization tool with DALLE AI integration to create unique designs.</code></em>
</p>
<p align="center">
        <img src="https://img.shields.io/github/last-commit/yourusername/t-shirt-main?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
        <img src="https://img.shields.io/github/languages/top/yourusername/t-shirt-main?style=flat&color=0080ff" alt="repo-top-language">
        <img src="https://img.shields.io/github/languages/count/yourusername/t-shirt-main?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
        <em>Developed with the software and tools below.</em>
</p>
<p align="center">
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
        <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
        <img src="https://img.shields.io/badge/Three.js-000000.svg?style=flat&logo=Three.js&logoColor=white" alt="Three.js">
        <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
        <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=flat&logo=Tailwind%20CSS&logoColor=white" alt="Tailwind CSS">
        <img src="https://img.shields.io/badge/Framer%20Motion-EF476F.svg?style=flat&logo=Framer&logoColor=white" alt="Framer Motion">
        <img src="https://img.shields.io/badge/Node.js-339933.svg?style=flat&logo=Node.js&logoColor=white" alt="Node.js">
        <img src="https://img.shields.io/badge/Express.js-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express.js">
        <img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
</p>
<hr>🔗 Quick Links

> 📍 Overview

📦 Features

📸 Screenshots

🚀 Getting Started

⚙️ Installation

🤖 Running Locally


🌍 Environment Variables

🚀 Optimizations

🛠️ Code Refactoring

⚡ Performance Improvements


🛣️ Project Roadmap

📂 Repository Structure

👏 Acknowledgments





---

📍 Overview

The T-Shirt Customizer is a full-stack web application that allows users to create custom T-shirt designs with 3D previews. Users can modify colors, upload their own designs, or generate unique images using the OpenAI DALLE API.

📦 Features

3D T-shirt Model Customization

Real-time 3D model interactions (rotate, zoom).

Change T-shirt color.

Upload custom designs.

Generate designs using DALLE AI.


Responsive Design

Built with TailwindCSS for modern, responsive layouts.


API Integration

Connects with OpenAI DALLE for generating AI-based designs.



📸 Screenshots

TODO: Add project screenshots here.

🚀 Getting Started

⚙️ Installation

1. Clone the repository:

git clone https://github.com/yourusername/t-shirt-main.git


2. Install dependencies for the client:

cd client
npm install


3. Install dependencies for the server:

cd ../server
npm install



🤖 Running Locally

1. Start the client:

cd client
npm run dev


2. Start the server:

cd ../server
npm run start



The app will be available at http://localhost:3000 and the server at http://localhost:5000.

🌍 Environment Variables

Create a .env file in the server directory with the following content:

OPENAI_API_KEY=your_openai_api_key_here

🚀 Optimizations

🛠️ Code Refactoring

Components are modular and reusable, making future updates easier.


⚡ Performance Improvements

Lazy loading of assets to improve page speed and performance.

Efficient rendering with React Three Fiber for 3D models.


🛣️ Project Roadmap

[ ] Add support for more customization options (sleeve length, patterns).

[ ] Add social sharing capabilities for designs.

[ ] Improve mobile interactions with 3D models.


📂 Repository Structure

└── t-shirt-main/
    ├── client/
    │   ├── public/
    │   ├── src/
    │   │   ├── assets/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── App.jsx
    │   │   ├── index.jsx
    │   │   └── main.jsx
    │   ├── package.json
    │   └── vite.config.js
    ├── server/
    │   ├── routes/
    │   │   ├── designRoutes.js
    │   │   ├── imageGenerationRoutes.js
    │   ├── models/
    │   │   └── designModel.js
    │   ├── controllers/
    │   │   └── designController.js
    │   ├── app.js
    │   ├── package.json
    │   └── .env
    ├── README.md
    └── package.json

👏 Acknowledgments

React Three Fiber for 3D rendering.

TailwindCSS for styling.

Framer Motion for animations.

OpenAI for image generation via DALLE.



---




<p align="center">
  <img src="LLM" width="60%" alt="T-SHIRT.GIT-logo">
</p>
<p align="center">
    <h1 align="center">T-SHIRT.GIT</h1>
</p>
<p align="center">
    <em><code>❯ A dynamic platform for 3D T-shirt customization using AI and React</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/leonardoo210399/t-shirt.git?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/leonardoo210399/t-shirt.git?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/leonardoo210399/t-shirt.git?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/leonardoo210399/t-shirt.git?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

##### 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔖 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)
    - [🧪 Tests](#-tests)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

T-SHIRT.GIT is a web-based platform that allows users to design custom T-shirts using a 3D visualization engine. Users can personalize their designs with AI-generated graphics and text, preview them in real-time, and render final designs that are ready for production.

---

## 👾 Features

- **3D Customization**: Interactive 3D rendering of T-shirts.
- **AI Integration**: Suggests design elements like logos, patterns, or text styles using AI.
- **Real-Time Preview**: Live updates as users modify T-shirt designs.
- **Drag-and-Drop Interface**: Easy file upload for custom graphics.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Tailwind CSS Styling**: Fast and scalable UI development.

---

## 📂 Repository Structure

```sh
└── t-shirt.git/
    ├── README.md
    ├── client
    │   ├── .eslintrc.cjs
    │   ├── .gitignore
    │   ├── README.md
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── public
    │   │   ├── react.png
    │   │   ├── shirt_baked.glb
    │   │   ├── threejs.png
    │   │   └── vite.svg
    │   ├── src
    │   │   ├── App.jsx
    │   │   ├── assets
    │   │   │   ├── ai.png
    │   │   │   ├── download.png
    │   │   │   ├── file.png
    │   │   │   ├── index.js
    │   │   │   ├── logo-tshirt.png
    │   │   │   ├── stylish-tshirt.png
    │   │   │   └── swatch.png
    │   │   ├── canvas
    │   │   │   ├── Backdrop.jsx
    │   │   │   ├── CameraRig.jsx
    │   │   │   ├── Shirt.jsx
    │   │   │   └── index.jsx
    │   │   ├── components
    │   │   │   ├── AIPicker.jsx
    │   │   │   ├── ColorPicker.jsx
    │   │   │   ├── CustomButton.jsx
    │   │   │   ├── FilePicker.jsx
    │   │   │   ├── Tab.jsx
    │   │   │   └── index.js
    │   │   ├── config
    │   │   │   ├── config.js
    │   │   │   ├── constants.js
    │   │   │   ├── helpers.js
    │   │   │   └── motion.js
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   ├── pages
    │   │   │   ├── Customizer.jsx
    │   │   │   └── Home.jsx
    │   │   └── store
    │   │       └── index.js
    │   ├── tailwind.config.js
    │   └── vite.config.js
    └── server
        ├── index.js
        ├── package-lock.json
        ├── package.json
        └── routes
            └── dalle.routes.js
```
---

## 🧩 Modules

<details closed><summary>client</summary>

| File | Summary |
| --- | --- |
| [index.html](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/index.html) | Main HTML structure of the client-side. |
| [postcss.config.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/postcss.config.js) | PostCSS setup for CSS processing. |
| [vite.config.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/vite.config.js) | Vite configuration for fast development. |
| [package.json](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/package.json) | Client dependencies and scripts. |
| [.eslintrc.cjs](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/.eslintrc.cjs) | Linter configuration for consistent coding style. |
| [tailwind.config.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/tailwind.config.js) | Tailwind CSS custom configuration. |
| [package-lock.json](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/package-lock.json) | Lock file for dependencies. |

</details>

... (The rest follows the same pattern for other modules)

---

## 🚀 Getting Started



### 🔖 Prerequisites

Ensure you have the following installed before getting started:

- **Node.js** (version 18.x.x)
- **NPM** or **Yarn** (Latest version)
- **Vite** (For frontend development)
- **OpenAI API Key** (For AI features)

### 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/leonardoo210399/t-shirt.git
    cd t-shirt.git
    ```

2. Install dependencies for both client and server:
    ```bash
    cd client && npm install
    cd ../server && npm install
    ```

3. Set up environment variables:
    - Create `.env` files in the client and server folders with your OpenAI key, API URLs, etc.

### 🤖 Usage

To start the development server:

```bash
cd client
npm run dev
```

This will start the Vite dev server for the client-side. Similarly, run the server backend in a separate terminal window.

---

## 🧪 Tests

Run tests using:

```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Please follow the guidelines for submitting pull requests.

---

## 🎗 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

This project utilizes various open-source libraries and APIs. Special thanks to the OpenAI team for providing the AI services that make custom designs possible!
```

This template is ready for customization based on your needs. You can tweak and finalize it further.

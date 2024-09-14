
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
| [index.html](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/index.html) | Main HTML structure for the client-side. Contains the root element where React will mount the application. |
| [postcss.config.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/postcss.config.js) | Configuration for PostCSS, which helps process Tailwind CSS and other styles. |
| [vite.config.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/vite.config.js) | Vite configuration file for fast development and optimized builds. |
| [package.json](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/package.json) | Lists the client-side dependencies and npm scripts for the frontend. |
| [.eslintrc.cjs](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/.eslintrc.cjs) | Configuration for ESLint, enforcing code quality and consistent style. |
| [tailwind.config.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/tailwind.config.js) | Tailwind CSS configuration file for customizing design system styles. |
| [package-lock.json](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/package-lock.json) | Dependency lock file for ensuring consistent package versions. |

</details>

<details closed><summary>client.public</summary>

| File | Summary |
| --- | --- |
| [shirt_baked.glb](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/public/shirt_baked.glb) | 3D model file used to render the customizable T-shirt in the 3D view. |

</details>

<details closed><summary>client.src</summary>

| File | Summary |
| --- | --- |
| [App.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/App.jsx) | The main application component that houses all the logic for T-shirt customization. |
| [index.css](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/index.css) | Main CSS file containing global styles, imported by the application. |
| [main.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/main.jsx) | Entry point for the React application, rendering `App.jsx` into the DOM. |

</details>

<details closed><summary>client.src.store</summary>

| File | Summary |
| --- | --- |
| [index.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/store/index.js) | Redux store configuration for managing global state, including the customization features and settings. |

</details>

<details closed><summary>client.src.pages</summary>

| File | Summary |
| --- | --- |
| [Customizer.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/pages/Customizer.jsx) | Page responsible for rendering the customization interface, allowing users to select colors, upload images, and generate designs with AI. |
| [Home.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/pages/Home.jsx) | The homepage of the application, presenting an introduction to the T-shirt customization process. |

</details>

<details closed><summary>client.src.components</summary>

| File | Summary |
| --- | --- |
| [CustomButton.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/components/CustomButton.jsx) | Custom button component used throughout the application for user interactions. |
| [AIPicker.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/components/AIPicker.jsx) | AI-powered component that allows users to generate design suggestions. |
| [FilePicker.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/components/FilePicker.jsx) | File upload component for adding custom images to the T-shirt design. |
| [index.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/components/index.js) | Entry point for importing all components at once, simplifying imports in other files. |
| [ColorPicker.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/components/ColorPicker.jsx) | Color selection component for choosing T-shirt colors and textures. |
| [Tab.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/components/Tab.jsx) | Tab component for switching between different customization options. |

</details>

<details closed><summary>client.src.config</summary>

| File | Summary |
| --- | --- |
| [config.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/config/config.js) | Centralized configuration settings for the application. |
| [helpers.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/config/helpers.js) | Utility functions for simplifying various logic throughout the application. |
| [motion.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/config/motion.js) | Motion configurations for animating the 3D model and other visual elements. |
| [constants.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/config/constants.js) | Constants used throughout the app, such as color codes and API URLs. |

</details>

<details closed><summary>client.src.canvas</summary>

| File | Summary |
| --- | --- |
| [Shirt.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/canvas/Shirt.jsx) | Renders the 3D T-shirt model that users can customize with designs and colors. |
| [index.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/canvas/index.jsx) | Centralized export file for all canvas-related components. |
| [Backdrop.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/canvas/Backdrop.jsx) | The backdrop of the 3D scene, setting up the environment around the T-shirt. |
| [CameraRig.jsx](https://github.com/leonardoo210399/t-shirt.git/blob/main/client/src/canvas/CameraRig.jsx) | Manages the camera setup for viewing and interacting with the 3D model. |

</details>

<details closed><summary>server</summary>

| File | Summary |
| --- | --- |
| [package.json](https://github.com/leonardoo210399/t-shirt.git/blob/main/server/package.json) | Server-side dependencies and npm scripts. |
| [index.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/server/index.js) | Entry point for the Node.js backend server, handling requests and serving the API. |
| [package-lock.json](https://github.com/leonardoo210399/t-shirt.git/blob/main/server/package-lock.json) | Lock file for server-side dependencies, ensuring consistent package versions. |

</details>

<details closed><summary>server.routes</summary>

| File | Summary |
| --- | --- |
| [dalle.routes.js](https://github.com/leonardoo210399/t-shirt.git/blob/main/server/routes/dalle.routes.js) | API routes for interacting with the OpenAI DALL·E API, allowing the generation of custom images for T-shirts. |

</details>


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

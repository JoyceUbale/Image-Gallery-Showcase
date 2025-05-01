# 🌇 Image Gallery Showcase

A beautiful and minimal **Landing Page** built with **Next.js (App Router)**, **TypeScript**, and **Material UI**. This project showcases **10 static sunset images** along with poetic titles and descriptions – all stored and served from the local `/public` directory.  

---

## 🚀 Live Demo

🔗 [Deployed Link](https://image-gallery-showcase.netlify.app)  
📹 [Demo Video](https://drive.google.com/file/d/116F-sv_YKTl091tmMVhOZlExVaW2UJ8B/view?usp=sharing)

---

## 🧩 Features

- ✨ **10 High-Quality Sunset Images** statically stored in the `/public` directory
- 📝 **Poetic titles & descriptions** served directly from the server
- 🧠 **Memory and Local Storage Caching** to reduce bandwidth and improve load speed
- 🌙 **Simple, Eye-Comforting, and User-Friendly UI** designed with Material UI
- ⚡ **Next.js App Router with TypeScript** for modern and scalable development

---

## 🧠 Caching Strategy

To ensure smooth performance and reduce server load:

- **Memory Cache**: Images and metadata are stored in memory during the session.
- **Local Storage**: Metadata and image paths are stored in the browser's local storage on the first visit.
- **Result**: On repeat visits, the app loads the images and data from cache instead of re-fetching or reloading them – saving bandwidth and improving speed.

---

## 🛠️ Getting Started

Clone the repository and run the project locally:

```bash
git clone https://github.com/JoyceUbale/Image-Gallery-Showcase.git
cd  Image-Gallery-Showcase
npm install
npm run dev

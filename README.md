# Enamul Hasan — Portfolio Website

A modern, responsive single-page portfolio built with **React** and **Vite**, featuring glassmorphism design, dark/light theme toggle, WebGL particle backgrounds, 3D card effects, and smooth animations.

## 🚀 Tech Stack

- **React 19** + **Vite 7**
- **Framer Motion** — scroll & mount animations
- **Vanilla Tilt** — 3D card hover effects
- **tsparticles** — WebGL particle background
- **react-scroll** — smooth scrolling navigation
- **react-icons** — icon library

## 📦 Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 🌐 Deploy to GitHub Pages

1. Ensure `vite.config.js` has `base: '/portfolio/'`
2. Run:

```bash
npm run deploy
```

This runs `predeploy` (builds) then `deploy` (pushes to `gh-pages` branch).

Live at: [https://enamulhasan248.github.io/portfolio/](https://enamulhasan248.github.io/portfolio/)

## 📁 Project Structure

```
src/
  assets/
    profile.png           ← Your profile photo
    Enamul_Hasan_CV.pdf   ← Your CV
  components/
    Navbar.jsx
    Hero.jsx
    Education.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
    ParticleBackground.jsx
    ThemeToggle.jsx
  App.jsx
  main.jsx
  index.css
```

## ✏️ Customization

- **Profile photo**: Replace `src/assets/profile.png`
- **CV**: Replace `src/assets/Enamul_Hasan_CV.pdf`
- **Theme colors**: Edit CSS custom properties in `src/index.css`
- **Project data**: Edit the `projectsData` array in `src/components/Projects.jsx`

## 📄 License

MIT

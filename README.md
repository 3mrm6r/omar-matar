# ⚡ Omar Matar — Junior Full-Stack Developer Portfolio

A dark-themed developer portfolio built with **Angular 22 (Standalone Components, Signals)** and **SCSS**. It has a cyber developer look, an animated code background, an interactive hero code editor, scroll-reveal animations and a responsive layout.

🔗 **Live demo:** https://omar-matar.pages.dev


---

## 🧰 Tech Stack

Angular 22 · TypeScript · Signals · Standalone Components · Reactive Forms · SCSS · HTML5 Canvas

---

## ✨ Features

- 🌌 **Animated Code Background**
  - HTML5 Canvas with floating syntax-highlighted code lines and mouse parallax.
  - Runs outside Angular's zone so the animation doesn't trigger extra change detection.
- 💻 **Interactive Hero Code Editor**
  - Role typing animation.
  - Multi-tab editor (`Omar.ts`, `skills.json`, `architecture.sh`) with syntax highlighting.
  - "Run Snippet" button that plays an animated terminal log.
  - Copy code to clipboard.
- 📜 **Scroll Animations & Navigation**
  - Sections reveal on scroll using `IntersectionObserver`.
  - Scroll progress bar and a navbar that highlights the current section.
- 🎨 **Theme Accents**
  - Switch between Cyber Cyan, Neon Emerald, Electric Violet and Solar Amber, saved in local storage.
- 🛠️ **Skills Section**
  - Filter by Frontend, Backend, Databases & Infrastructure, and Tooling & Practices.
  - Skill levels (Advanced, Proficient, Comfortable, Learning).
- 🚀 **Projects**
  - Project cards with an architecture details modal and GitHub links.
- 🎓 **Education**
  - B.Sc. in Computer Science, University of Jordan, with relevant coursework.
- 📬 **Contact**
  - Reactive form with field validation.
  - Copy email to clipboard with tooltip feedback.
  - The form is a UI demo and does not send real emails yet (connect a service such as Formspree or EmailJS to enable it).

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** and **npm** (use the versions required by your Angular version, see the Angular docs)

### Run locally
```bash
cd omar-portfolio
npm install
npm start
```
Open `http://localhost:4200/`. The app reloads when you change a source file.

### Build for production
```bash
npm run build
```
The build output is in `dist/omar-portfolio/browser`.

---

## 🛠️ Customizing the Data

All portfolio content lives in one file:

📁 `src/app/core/services/portfolio.service.ts`

1. **Personal info and bio:** edit the `profile` signal.
2. **Projects:** edit the `projects` signal.
3. **Skills:** edit `skillsCategories`.
4. **Experience:** edit `experiences`.
5. **Education:** edit `educations`.
6. **Hero code snippets:** edit `terminalCodeSnippets`.

---

## 📂 Project Structure

```
omar-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── background-canvas/   # Animated code canvas
│   │   │   ├── navbar/              # Header and theme switcher
│   │   │   ├── hero/                # Hero banner and code editor
│   │   │   ├── about/               # Bio and highlights
│   │   │   ├── skills/              # Filterable skills section
│   │   │   ├── experience/          # Experience and journey
│   │   │   ├── projects/            # Project cards
│   │   │   ├── project-modal/       # Architecture details modal
│   │   │   ├── education/           # Degree and coursework
│   │   │   ├── contact/             # Contact form and channels
│   │   │   └── footer/              # Footer and back-to-top button
│   │   ├── core/
│   │   │   ├── models/              # TypeScript interfaces
│   │   │   └── services/            # Portfolio data, scroll and theme services
│   │   ├── shared/
│   │   │   └── components/icon/     # SVG icons
│   │   ├── app.ts                   # Root component
│   │   ├── app.html                 # Main layout
│   │   └── app.scss                 # Layout styles
│   ├── styles.scss                  # Global styles and theme variables
│   └── index.html                   # HTML entry point
├── angular.json
└── package.json
```

---

## 📫 Contact

- Email: omarmatar828@gmail.com
- GitHub: https://github.com/3mrm6r

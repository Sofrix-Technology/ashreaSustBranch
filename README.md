# ASHRAE Sudan Student Branch — Official Website

> The official web presence of the **ASHRAE Student Branch** at Sudan University of Science and Technology (SUST). Built to empower Sudan's next generation of HVAC&R engineers through knowledge, community, and sustainable innovation.

---

## 📋 Table of Contents

- [About](#about)
- [Live Features](#live-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [Components Overview](#components-overview)
- [Contributing](#contributing)

---

## About

This project is the official website for the **ASHRAE Sudan University of Science and Technology Student Branch** — one of ASHRAE's globally recognized student chapters. The site serves as a hub for:

- Showcasing the branch's mission and activities
- Providing curated HVAC&R technical resources to students
- Highlighting ongoing and completed engineering projects
- Connecting students, partners, and sponsors

---

## Live Features

- 🏠 **Hero Section** — Animated stats counter, diagonal layout, and ASHRAE logo with custom tooltip cursor interaction
- 📚 **Resources Page** — Categorized HVAC&R tools, standards, articles, and learning materials with filter support
- 🔬 **Projects Page** — Showcase of branch engineering projects
- 👥 **Join / Contact** — Member recruitment and contact form sections
- 🤝 **Partners** — Auto-scrolling partners/sponsors logo marquee
- 💡 **Core Pillars** — Branch values and focus areas
- 🎓 **Student Research** — Highlighting student-led research initiatives
- 📱 Fully **responsive** across all device sizes

---

## Tech Stack

| Category       | Technology                          |
|----------------|-------------------------------------|
| Framework      | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool     | [Vite](https://vitejs.dev/)         |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com/) |
| Routing        | [React Router v7](https://reactrouter.com/) |
| Animations     | [Framer Motion](https://www.framer-motion.com/) |
| Icons          | [Lucide React](https://lucide.dev/) |
| Notifications  | [React Hot Toast](https://react-hot-toast.com/) |
| Package Manager| [Bun](https://bun.sh/)              |
| Linting        | ESLint + TypeScript-ESLint          |

---

## Project Structure

```
ashreaSustBranch/
├── public/               # Static assets (images, etc.)
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── AshraeLogo.tsx
│   │   ├── CallToAction.tsx
│   │   ├── ComingSoon.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CorePillars.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── JoinSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── Partners.tsx
│   │   ├── PremiumResourceCard.tsx
│   │   ├── ResourceCard.tsx
│   │   ├── ResourceFilters.tsx
│   │   ├── ResourceHero.tsx
│   │   ├── ResourceRequest.tsx
│   │   ├── StudentResearch.tsx
│   │   ├── TooltipCursor.tsx
│   │   └── project/      # Project-specific sub-components
│   ├── pages/            # Page-level components (route targets)
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── Resources.tsx
│   ├── App.tsx           # Root app with routing
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) `>= 1.0` — used as the package manager and runtime
- Node.js `>= 18` (optional, if not using Bun's runtime)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ashreaSustBranch

# Install dependencies
bun install
```

### Run Development Server

```bash
bun run dev
```

The app will be available at `http://localhost:5173` by default.

---

## Available Scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `bun run dev`     | Start the Vite development server        |
| `bun run build`   | Type-check and build for production      |
| `bun run preview` | Preview the production build locally     |
| `bun run lint`    | Run ESLint across the project            |

---

## Pages & Routes

| Path          | Component         | Status        |
|---------------|-------------------|---------------|
| `/`           | `Home`            | ✅ Live        |
| `/resources`  | `Resources`       | ✅ Live        |
| `/projects`   | `Projects`        | ✅ Live        |
| `/activities` | `ComingSoon`      | 🔜 Coming Soon |
| `/team`       | `ComingSoon`      | 🔜 Coming Soon |
| `/contact`    | `ContactSection`  | ✅ Live        |
| `/join`       | `JoinSection`     | ✅ Live        |

---

## Components Overview

### Layout
- **`Navbar`** — Responsive top navigation bar with route links
- **`Footer`** — Site-wide footer with links and social info

### Home Page
- **`HeroSection`** — Flagship hero with animated stats, diagonal layout, and ASHRAE SVG logo
- **`CorePillars`** — Branch's core values and engineering focus areas
- **`Partners`** — Infinite-scroll horizontal marquee of partner/sponsor logos
- **`StudentResearch`** — Student-led research highlights
- **`CallToAction`** — CTA banner encouraging students to join or explore
- **`TooltipCursor`** — Reusable cursor-anchored tooltip component with configurable delay

### Resources Page
- **`ResourceHero`** — Page header for the resources section
- **`ResourceFilters`** — Filter bar to sort resources by category
- **`ResourceCard`** — Card displaying a single resource (tool, PDF, article, video)
- **`PremiumResourceCard`** — Highlighted card for premium/featured resources
- **`ResourceRequest`** — Section for students to request specific resources

### Other
- **`JoinSection`** — Membership recruitment page
- **`ContactSection`** + **`ContactForm`** — Contact page with submission form
- **`ComingSoon`** — Placeholder for pages under development
- **`AshraeLogo`** — High-fidelity SVG rendering of the ASHRAE logo

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow the existing code style and component conventions. Run `bun run lint` before submitting.

---

<p align="center">
  Made with ❤️ by the ASHRAE SUST Student Branch — Sudan University of Science and Technology
</p>

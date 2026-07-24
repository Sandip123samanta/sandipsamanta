# Sandip Samanta — Personal Developer Portfolio & Tech Blog

[![Live Demo](https://img.shields.io/badge/Live_Demo-sandipsamanta.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sandipsamanta.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity_CMS-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)

A modern, high-performance personal portfolio and technical blog built with **Next.js 16 (App Router)**, **TypeScript**, **Once UI Design System**, and **Sanity CMS**.

🌐 **Live Website**: [https://sandipsamanta.vercel.app/](https://sandipsamanta.vercel.app/)

---

## ✨ Features

- 🎨 **Once UI Design System**: Dark-mode-first aesthetic with semantic layout engines (`<Column>`, `<Row>`, `<Grid>`), dynamic theme tokens, and smooth entrance micro-animations (`RevealFx`).
- 📝 **Headless Sanity CMS**: Headless CMS integration for dynamic management of blog posts and featured portfolio projects.
- 🔍 **Blog Keyword Search & Pagination**: Client-side keyword search filtering across post titles and tags, paired with a 5-item-per-page pagination engine.
- 🚀 **SEO & Schema.org**: Fully optimized search engine indexing with dynamic `sitemap.xml`, `robots.txt`, OpenGraph dynamic social cards (`/api/og/generate`), and JSON-LD structured data (Person, WebPage, BlogPosting).
- 📅 **Cal.com Integration**: Embedded calendar widget for booking discovery calls directly on the `/contact` page.
- ⚡ **Turbopack & Biome**: Built for speed with Next.js Turbopack compiler and Biome linting/formatting.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components & Layout**: [@once-ui-system/core](https://once-ui.com/)
- **Content Management**: [Sanity CMS](https://www.sanity.io/) (`next-sanity`, `@sanity/client`)
- **MDX Renderer**: `next-mdx-remote` & `remark-gfm`
- **Linting & Code Formatting**: [Biome](https://biomejs.dev/)

---

## 📁 Repository Structure

```text
portfolio/
├── src/
│   ├── app/                    # Next.js App Router routes & API endpoints
│   │   ├── about/              # About page
│   │   ├── api/                # RSS, OG generation, and Auth endpoints
│   │   ├── blog/               # Blog listing page with search & pagination
│   │   │   └── [slug]/         # Dynamic MDX / Sanity blog post page
│   │   ├── contact/            # Contact form & booking page
│   │   ├── work/               # Projects portfolio showcase page
│   │   ├── layout.tsx          # Root application layout & Providers
│   │   ├── page.tsx            # Home page
│   │   ├── robots.ts           # Dynamic robots.txt generator
│   │   └── sitemap.ts          # Dynamic XML sitemap generator
│   ├── components/             # Reusable UI & layout components
│   │   ├── blog/               # Blog search, pagination, and post cards
│   │   ├── contact/            # Contact form component
│   │   └── mdx.tsx             # Custom MDX component mappings & slugifier
│   ├── resources/              # Personal content, metadata & Once UI configs
│   │   ├── content.tsx         # Profile data, experience, education & social links
│   │   ├── icons.ts            # Icon library registrations
│   │   └── once-ui.config.ts   # Design tokens, routes & baseURL configuration
│   ├── sanity/                 # Sanity CMS client setup & GROQ queries
│   └── utils/                  # Utility functions & data fetchers
├── public/                     # Static assets, images & avatars
├── README.md                   # Project documentation
└── package.json                # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18+ and `pnpm` installed:

```bash
npm install -g pnpm
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sandip123samanta/sandipsamanta.git
   cd sandipsamanta
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Run the Development Server**:
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm run dev` | Starts the Next.js development server with Turbopack |
| `pnpm run build` | Builds the production-optimized application |
| `pnpm run start` | Starts the production server |
| `pnpm run lint` | Runs Biome code formatting and lint checks |
| `npx tsc --noEmit` | Runs TypeScript type verification |

---

## 👤 Author

**Sandip Samanta**
- **Role**: Co-Founder & Full-Stack Developer at [Wefik](https://wefik.in)
- **Website**: [sandipsamanta.vercel.app](https://sandipsamanta.vercel.app/)
- **GitHub**: [@Sandip123samanta](https://github.com/Sandip123samanta)
- **LinkedIn**: [Sandip Samanta](https://www.linkedin.com/in/sandip-samanta2002/)
- **Instagram**: [@samanta_sandip_](https://www.instagram.com/samanta_sandip_/)
- **Email**: [samanthasandip565@gmail.com](mailto:samanthasandip565@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

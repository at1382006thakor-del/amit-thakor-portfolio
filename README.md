# Amit Kumar Thakor — Personal Portfolio Website

A modern, high-performance, accessible, and responsive personal portfolio website built for **Amit Kumar Thakor**, a final-year B.E. Information Technology student and aspiring Data Analyst / AI-ML developer.

![Portfolio Visual](public/images/projects/insight-ai.svg)

---

## 🌟 Key Features

- **Responsive & Modern Design**: Glassmorphic elements, vibrant color accents, fluid typography, dark and light mode theme persistence using `next-themes`.
- **Comprehensive Career Showcase**: Dedicated components for About, Skills, Projects, Education, Internship Experience, Certifications, Achievements, Services, GitHub Stats, and Contact.
- **Interactive Project Showcase**: Filterable project gallery with feature breakdowns, technology badges, live preview links, source code repositories, and expandable modal dialogs.
- **Validated Contact Form**: Full validation using **React Hook Form** and **Zod** schema with real-time field feedback, loading states, and success notifications.
- **Accessibility & SEO**: Built with semantic HTML5 elements, keyboard focus states, aria properties, OpenGraph metadata, Twitter cards, automated `sitemap.xml`, and `robots.txt`.
- **Framer Motion Animations**: Smooth entrance animations, scroll reveals, floating badges, and interactive hover elevation while respecting `prefers-reduced-motion`.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Theme System**: [next-themes](https://github.com/pacocoursey/next-themes)

---

## 📁 Project Architecture

```text
amit-thakor-portfolio/
├── app/
│   ├── globals.css         # Tailwind base, dark mode tokens & glassmorphic utilities
│   ├── layout.tsx          # Root layout with fonts, metadata & ThemeProvider
│   ├── page.tsx            # Main portfolio page assembling all sections
│   ├── robots.ts           # SEO robots.txt generator
│   └── sitemap.ts          # SEO sitemap.xml generator
├── components/
│   ├── Navbar.tsx          # Sticky glassmorphic navbar with active section detection
│   ├── Hero.tsx            # Visual hero section with terminal code mockup
│   ├── About.tsx           # Background description & highlight cards
│   ├── Skills.tsx          # Categorized skill badges (Python, SQL, ML, Web)
│   ├── Projects.tsx        # Filterable project showcase grid
│   ├── ProjectCard.tsx     # Reusable project card with modal preview
│   ├── Education.tsx       # Vertical academic timeline
│   ├── Internship.tsx      # Practical industry experience details
│   ├── Certifications.tsx # Verified certificate cards
│   ├── Achievements.tsx   # Achievements & milestone list
│   ├── Services.tsx       # Services & capabilities cards
│   ├── GithubStats.tsx    # Open source & activity heatmap section
│   ├── Contact.tsx        # Zod-validated contact form
│   ├── Footer.tsx         # Responsive footer with social links
│   ├── ThemeToggle.tsx    # Light/Dark mode toggle button
│   ├── SectionHeading.tsx # Reusable section title component
│   └── SocialLinks.tsx    # Social media button collection
├── lib/
│   ├── constants.ts       # Centralized personal info & content arrays
│   ├── utils.ts           # Classnames helper (clsx + tailwind-merge)
│   └── validations.ts     # Zod form validation schemas
├── public/
│   ├── images/projects/   # Project SVG visual previews
│   └── resume/            # Location for PDF resume upload
├── types/
│   └── index.ts           # TypeScript interfaces & types
├── .env.example
├── package.json
└── README.md
```

---

## ⚡ Quick Start & Development Commands

### 1. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/amit-thakor-portfolio.git
cd amit-thakor-portfolio
npm install --legacy-peer-deps
```

### 2. Running Locally
Start the development server:

```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Production Build
Test and verify the production bundle:

```bash
npm run build
npm run start
```

### 4. Code Quality Checks
Run ESLint code linting:

```bash
npm run lint
```

---

## 📝 Customization & Updating Content

All personal data, skills, projects, and educational details are stored separately from UI components in `lib/constants.ts`:

1. **Personal Information**: Edit `PERSONAL_INFO` in `lib/constants.ts` to update email, GitHub/LinkedIn URLs, headline, or location.
2. **Resume PDF**: Place your PDF file in `public/resume/Amit-Kumar-Thakor-Resume.pdf`.
3. **Projects**: Add or update project entries in `PROJECTS` in `lib/constants.ts`.
4. **Certifications & Achievements**: Update `CERTIFICATIONS_DATA` and `ACHIEVEMENTS_DATA` with your real credential IDs and hackathon links.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

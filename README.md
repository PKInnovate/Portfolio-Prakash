# Portfolio - Prakash

**Live URL:** [https://pkinnovate.github.io/Portfolio-Prakash/](https://pkinnovate.github.io/Portfolio-Prakash/)

A production-grade, multi-page personal website portfolio for Prakash, a visionary researcher, founder, and CEO.

## 🚀 Purpose
Positioning Prakash at the intersection of research, technology, innovation, and entrepreneurship. This platform serves as a digital headquarters to build credibility and attract collaborators, investors, and partners.

## 📁 Project Structure (Production Architecture)
The project follows a modular, industry-standard architecture designed for organizational collaboration and scalability.

```text
Portfolio/
├── src/                # Source Code (Development Area)
│   ├── assets/         # Images, icons, and media
│   ├── css/            # Stylesheets (Modular Vanilla CSS)
│   ├── js/             # JavaScript (ES Modules)
│   ├── index.html      # Home Landing Page
│   ├── about.html      # Founder's Journey
│   └── ...             # Other sub-pages
├── public/             # Static assets (fonts, robots.txt, sitemap)
├── docs/               # Organizational Documentation (Team Handoff)
│   ├── ARCHITECTURE.md # Technical deep-dive
│   ├── CONTRIBUTING.md # Guide for team members
│   └── BRANDING.md     # Design tokens and guidelines
├── README.md           # Project overview
├── package.json        # Build scripts and dev tooling
└── .gitignore          # Version control exclusions
```

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES Modules)
- **Architecture:** Multi-page with shared component injection.
- **Design:** Modern-Minimalist, Dark-Premium.
- **Verification:** Automated scroll reveals (Intersection Observer).

## 🔧 Team Setup & Usage
For teams or individual contributors:
1. **Local Development:** 
   ```bash
   npm run dev
   ```
2. **Reviewing Changes:** Use the `src/index.html` as the entry point.
3. **Adding Content:** Modify `src/js/data.js` to update ventures or research areas dynamically.

## 🏁 Quality Checklist
- [x] Responsive Mobile-First Design
- [x] Production Folder Structure
- [x] Modular Component Architecture
- [x] SEO & OpenGraph Optimization
- [x] Team Handoff Documentation

## 📄 License
MIT License - Copyright (c) 2026 Prakash

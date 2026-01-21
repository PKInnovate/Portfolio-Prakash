# Portfolio - Prakash (Bhanu Prakash Chinnabban)

> **🌐 VIEW LIVE WEBSITE:** [https://pkinnovate.github.io/Portfolio-Prakash/src/](https://pkinnovate.github.io/Portfolio-Prakash/src/)

**Repository:** [https://github.com/PKInnovate/Portfolio-Prakash](https://github.com/PKInnovate/Portfolio-Prakash)

A professional portfolio showcasing Bhanu Prakash Chinnabban's expertise in Mechatronics Engineering, EV Systems, and R&D Leadership. Features a **premium dark aesthetic** with advanced UI components including timelines, carousels, accordions, modals, and interactive navigation.

## 👨‍💼 About
Mechatronics Engineer with 4.5 years of experience in R&D, new product development, and EV system engineering. Former Research & Technology Lead at Gravton Motors specializing in:
- Battery Systems & BMS Development
- Motor Control & Powertrain Integration
- System Architecture & Validation
- MATLAB/Simulink & Python Automation
- 3 Filed Patents in EV Technology

## 🎯 Website Structure (7 Pages)

### Navigation
**Desktop:** Home | About | Ventures | Research | Education | Insights | Contact  
**Mobile:** Hamburger menu with full-screen overlay navigation

### Pages Overview

1. **Home** - Hero section with vision statement and project highlights
2. **About** - Professional profile, experience timeline, and education
3. **Ventures** - Interactive project cards with modal case studies
4. **Research** - Accordion-based R&D domains with expandable abstracts
5. **Education** ⭐ - Formal education timeline, certifications carousel, self-learning tag cloud
6. **Insights** ⭐ - Thought leadership articles with category filtering
7. **Contact** - Collaboration and inquiry form

⭐ = New pages added in restructure

## 🚀 Key Features

### Navigation & UX
- **7-Page Navigation**: Comprehensive site structure
- **Mobile Hamburger Menu**: Full-screen overlay with staggered animations
- **Sticky Bottom CTA**: "Let's Collaborate" button appears on scroll
- **Active Page Highlighting**: Visual indicator for current page

### Advanced UI Components
- **Vertical Timeline**: Animated education history with scroll-triggered reveals
- **Horizontal Carousel**: Auto-scrolling certifications with drag/swipe support
- **Accordion Panels**: Expandable research areas with smooth transitions
- **Modal Windows**: Click-to-open venture case studies
- **Tag Cloud**: Interactive learning domains with sliding side panels
- **Floating Keywords**: Animated background elements
- **Magnetic Buttons**: Interactive hover effects
- **Cursor Glow**: Premium cursor tracking effect

### Visual Design
- **Animated Mesh Gradient**: Immersive hero background
- **Bento Box Layout**: Asymmetric grid for project showcases
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Pulse Animations**: Attention-grabbing CTAs
- **Staggered Reveals**: Sequential content animations

## 📁 Project Structure

```text
Portfolio/
├── src/                          # Source Code
│   ├── assets/                   # Images, icons, media
│   ├── css/                      # Stylesheets
│   │   ├── style.css            # Main styles & design system
│   │   ├── components.css       # UI components (modals, accordions, etc.)
│   │   ├── timeline.css         # Vertical timeline styles
│   │   └── carousel.css         # Horizontal carousel/slider
│   ├── js/                       # JavaScript Modules
│   │   ├── main.js              # Entry point for home/ventures
│   │   ├── ui.js                # Core UI utilities
│   │   ├── data.js              # Content data (ventures, education, etc.)
│   │   ├── navigation.js        # Hamburger menu & sticky CTA
│   │   ├── carousel.js          # Carousel logic
│   │   ├── accordion.js         # Accordion expand/collapse
│   │   ├── modal.js             # Modal window management
│   │   ├── timeline.js          # Timeline scroll animations
│   │   ├── education.js         # Education page logic
│   │   ├── insights.js          # Insights page with filtering
│   │   └── research.js          # Research accordion rendering
│   ├── index.html               # Home page
│   ├── about.html               # Professional profile
│   ├── ventures.html            # Projects & initiatives
│   ├── research.html            # R&D focus areas
│   ├── education.html           # Education & certifications
│   ├── insights.html            # Thought leadership
│   └── contact.html             # Contact form
├── public/                       # Static assets
├── docs/                         # Documentation
├── README.md                     # This file
├── package.json                  # Build scripts
└── .gitignore                    # Git exclusions
```

## 🛠 Tech Stack

### Frontend
- **HTML5**: Semantic markup with SEO optimization
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties, Backdrop Filter)
- **JavaScript (ES6+)**: Modular architecture with ES6 imports

### Architecture
- **Multi-page Application**: 7 interconnected pages
- **Component-based CSS**: Reusable UI components
- **Modular JavaScript**: Separate modules for each feature
- **Data-driven Rendering**: Dynamic content from `data.js`

### Design System
- **Dark-Premium Aesthetic**: Professional dark theme
- **Custom CSS Variables**: Consistent design tokens
- **Modern Typography**: Inter & Outfit font families
- **Responsive Breakpoints**: Mobile-first approach

### Animations
- **CSS Transitions**: Smooth state changes
- **Intersection Observer**: Scroll-triggered animations
- **Keyframe Animations**: Pulse, float, fade effects
- **Cubic Bezier Easing**: Premium motion curves

## 🔧 Local Development

### Prerequisites
- Node.js (for development server)
- Modern web browser

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/PKInnovate/Portfolio-Prakash.git
   cd Portfolio-Prakash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000` (or as specified)
   - Or directly open `src/index.html`

### Making Changes
- **Content Updates**: Edit `src/js/data.js` to update projects, education, certifications, insights
- **Styling**: Modify CSS files in `src/css/`
- **New Components**: Add to `src/js/` and import in relevant page scripts
- **Pages**: Edit HTML files in `src/`

## 📊 Content Overview

### Ventures (4 Projects)
- Quanta S & Quanta SE (Full lifecycle EV development)
- Swappable Battery Systems (AIS-156 compliance)
- QRX & ARQ Initiatives (Powertrain efficiency)
- Patented Innovation (3 utility patents)

### Research Areas (3 Domains)
- EV Battery Systems
- System Architecture
- Automation & Control

### Education
- M.Sc. Mechatronics Engineering (University of Debrecen, 2022)
- B.Tech Mechanical Engineering (Veltech University, 2017)

### Certifications (4)
- Advanced MATLAB & Simulink
- Python for Data Science
- Systems Engineering Fundamentals
- Battery Management Systems

### Self-Learning Domains (5)
- AI & Systems Thinking
- Innovation Strategy
- Product Architecture
- Advanced Manufacturing
- Sustainability & Energy

### Insights (4 Articles)
- The Future of Modular Battery Systems
- Systems Thinking in EV Development
- Bridging Research and Production
- The Role of AI in Battery Management

## 🎨 Component Library

### Navigation Components
- `hamburger` - Mobile menu toggle
- `mobile-nav-overlay` - Full-screen navigation
- `sticky-cta` - Floating action button

### Content Components
- `timeline-container` - Vertical timeline
- `carousel-container` - Horizontal slider
- `accordion-item` - Expandable panels
- `modal-overlay` - Popup windows
- `tag-cloud` - Interactive tags
- `side-panel` - Sliding detail panel

### Utility Components
- `cursor-glow` - Custom cursor effect
- `floating-keywords` - Animated text
- `card-item` - Project cards
- `research-item` - Research cards

## 🏁 Quality Checklist

- [x] Responsive Mobile-First Design
- [x] 7-Page Navigation Structure
- [x] Mobile Hamburger Menu
- [x] Sticky CTA Across All Pages
- [x] Modular Component Architecture
- [x] SEO & OpenGraph Optimization
- [x] Professional Content Integration
- [x] Dynamic Data Rendering
- [x] Advanced UI Components (Timeline, Carousel, Accordion, Modal)
- [x] Smooth Animations & Transitions
- [x] Cross-browser Compatibility
- [x] Accessibility Considerations

## 🚀 Deployment

The site is deployed via GitHub Pages:
1. Push changes to `main` branch
2. GitHub Actions automatically deploys to live site
3. **Live URL:** https://pkinnovate.github.io/Portfolio-Prakash/src/

**Note:** The site is served from the `/src/` directory. To access the portfolio, visit the URL above.

## 📈 Future Enhancements

- [ ] Add blog functionality for insights
- [ ] Implement contact form backend
- [ ] Add analytics tracking
- [ ] Create detailed case study pages
- [ ] Add dark/light theme toggle
- [ ] Implement search functionality
- [ ] Add loading states for dynamic content
- [ ] Optimize images and assets
- [ ] Add unit tests for JavaScript modules

## 📄 License

MIT License - Copyright (c) 2026 Prakash

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please open an issue on GitHub.

---

**Built with modern web technologies and a focus on premium user experience.**

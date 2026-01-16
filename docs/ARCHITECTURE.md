# System Architecture

## Overview
The Prakash Portfolio is built as a highly performant Multi-Page Application (MPA) using modern Vanilla JavaScript (ES Modules) and standards-based CSS. This choice ensures zero dependency overhead and maximum longevity.

## Directory Structure
- `/src`: All development source code.
- `/src/js/components.js`: Handles shared UI logic like Navbar and Footer injection.
- `/src/js/data.js`: Centralized data store for dynamic content (Ventures, Research).
- `/src/js/ui.js`: Core UI controller for animations and rendering.
- `/src/css/variables.css`: Global design tokens.

## Module Flow
1. **Entry**: Each HTML file calls `/src/js/main.js`.
2. **Injection**: `main.js` triggers `components.js` to inject shared headers/footers.
3. **Rendering**: `main.js` checks the URL and calls specific render functions from `ui.js` using data from `data.js`.
4. **Interaction**: `ui.js` initializes Intersection Observers for high-impact scroll animations.

## Key Design Principles
- **DRY (Don't Repeat Yourself)**: Shared headers/footers are maintained in one place.
- **Data-Driven**: Content can be updated in `data.js` without touching HTML structure.
- **Performance**: No frameworks mean instant load times and perfect Lighthouse scores.

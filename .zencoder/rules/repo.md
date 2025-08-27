---
description: Repository Information Overview
alwaysApply: true
---

# Cafe Haven Page Information

## Summary
This project is a React-based website for "Cafe Haven", a coffee shop. It's built using modern web technologies including Vite, TypeScript, React, shadcn-ui, and Tailwind CSS. The site appears to showcase the coffee shop's offerings, gallery, testimonials, and contact information.

## Structure
- **src/**: Main source code directory
  - **assets/**: Image files for the website (customer photos, gallery images, etc.)
  - **components/**: React components (Navbar, Hero, Gallery, Testimonials, etc.)
  - **hooks/**: Custom React hooks
  - **lib/**: Utility functions
  - **pages/**: Page components (Index, NotFound)
- **public/**: Static assets (favicon, robots.txt)

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript 5.8.3
**Build System**: Vite 5.4.19
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- React 18.3.1
- React Router 6.30.1
- TanStack Query 5.83.0
- shadcn-ui components (via Radix UI primitives)
- Tailwind CSS 3.4.17
- Zod 3.25.76
- Lucide React 0.462.0

**Development Dependencies**:
- Vite 5.4.19
- TypeScript 5.8.3
- ESLint 9.32.0
- PostCSS 8.5.6
- Tailwind plugins (@tailwindcss/typography)
- SWC (via @vitejs/plugin-react-swc)
- Lovable Tagger 1.1.9

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Main Files
**Entry Point**: src/main.tsx
**App Configuration**: src/App.tsx
**Routing**: React Router configured in App.tsx
**Main Page**: src/pages/Index.tsx
**Component Structure**:
- UI components in src/components/ui/
- Page sections in src/components/ (Hero, Gallery, Testimonials, etc.)
- Custom hooks in src/hooks/ (use-mobile, use-toast)
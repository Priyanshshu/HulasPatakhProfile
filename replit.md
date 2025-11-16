# Prof. Hulas Pathak Portfolio

## Overview

This is a single-page portfolio website for Prof. Hulas Pathak, a professor and entrepreneur specializing in agricultural economics and agribusiness management. The site showcases his professional achievements, leadership roles, research contributions, and impact in India's agricultural innovation ecosystem. Built as a modern, responsive web application using React with TypeScript on the frontend and Express.js on the backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, utilizing a component-based architecture for modularity and reusability.

**Routing**: Wouter for lightweight client-side routing with a simple route structure (Home page and 404 fallback).

**Styling System**: 
- Tailwind CSS for utility-first styling with custom design tokens
- shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Custom CSS variables for theming (light mode optimized with agriculture-themed green primary color: `hsl(145 75% 35%)`)
- Google Fonts integration (Inter font family) for modern typography

**State Management**: React Query (@tanstack/react-query) for server state management, though currently the application is largely static with no backend API integration.

**Component Structure**:
- Page-level components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- shadcn/ui primitives in `client/src/components/ui/`
- Component examples for development/testing in `client/src/components/examples/`

**Design Approach**: Reference-based design inspired by Linear, Apple, and Stripe for professional aesthetics while maintaining agricultural focus. Emphasis on clean information hierarchy, generous spacing, and professional authority with approachable warmth.

### Backend Architecture

**Framework**: Express.js with TypeScript running on Node.js

**Architecture Pattern**: Simple REST API structure (currently minimal implementation)

**Storage Layer**: 
- Memory-based storage implementation (`MemStorage`) for development
- Interface-based design (`IStorage`) allowing easy swap to persistent storage
- Prepared for database integration with Drizzle ORM schema defined

**Server Configuration**:
- Vite integration for development with HMR (Hot Module Replacement)
- Static file serving for production builds
- JSON body parsing with raw body preservation for webhook support
- Request logging middleware for API routes

**Build Process**: 
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Separate development and production modes

### Data Storage Solutions

**Current Implementation**: In-memory storage with a simple user model (username/password structure)

**Prepared for Migration**:
- Drizzle ORM configured for PostgreSQL
- Schema defined in `shared/schema.ts` with users table
- Neon serverless database driver installed
- Migration setup via `drizzle-kit` pointing to `./migrations` output directory

**Rationale**: The current portfolio is static content, so persistent storage isn't immediately needed. However, the architecture is prepared for future features like contact forms, admin panels, or user authentication.

### Authentication and Authorization

**Current State**: No authentication implemented (portfolio is public-facing)

**Prepared Infrastructure**: 
- User schema with username/password fields defined
- Storage interface includes user CRUD methods
- Session management dependency installed (connect-pg-simple)

**Future Considerations**: Authentication infrastructure is in place for potential admin features or private sections.

### Build and Development Tooling

**TypeScript Configuration**: 
- Strict mode enabled
- Path aliases configured (`@/` for client, `@shared/` for shared code, `@assets/` for static assets)
- ESNext module system with bundler resolution

**Development Tools**:
- Replit-specific plugins for error overlay, cartographer, and dev banner
- Runtime error modal for better DX
- PostCSS with Tailwind and Autoprefixer

**Deployment**: Production build combines Vite-built frontend with esbuild-bundled backend into `dist/` directory.

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, etc.)
- **shadcn/ui**: Pre-configured Radix components with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command palette component (installed but not currently used)
- **embla-carousel-react**: Carousel component (installed but not currently used)

### Form and Data Management
- **React Hook Form** with **@hookform/resolvers**: Form state management
- **Zod**: Schema validation with Drizzle integration via drizzle-zod
- **date-fns**: Date manipulation and formatting

### Database and ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **connect-pg-simple**: PostgreSQL session store for Express (prepared for future use)

### Styling and UI Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **clsx** and **tailwind-merge**: ClassName utilities

### Development and Build Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Fast JavaScript bundler for backend
- **TypeScript**: Type safety across the stack
- **Replit plugins**: Development experience enhancements

### Assets
- Profile images and gallery photos stored in `attached_assets/` directory
- Custom favicon support
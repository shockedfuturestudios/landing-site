# AI Coding Agent Instructions for Shocked Future Studios Landing Site

## Project Overview

Landing site for **Shocked Future Studios**, an indie game development studio. This is a **Next.js 16 + React 19** application showcasing games and company information. The site uses **Material Design 3 Expressive** dark theme via Tailwind CSS and integrates **Supabase** for backend services.

**Key Architectural Pattern**: Full-width section-based layout with composable React components featuring Material 3 Expressive design (rounded corners, expressive shadows, dynamic hover states). Each page aggregates multiple section components (Hero, About, Contact, GameCard).

## Tech Stack

- **Framework**: Next.js 16 (App Router, server components default)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS 4 with custom Material 3 dark palette
- **UI Components**: Custom button/card components in `components/ui/`
- **Backend**: Supabase (SSR-compatible via `@supabase/ssr`)
- **Linting**: ESLint 9 with Next.js core web vitals + TypeScript config

## Development Commands

```bash
npm run dev       # Start dev server on localhost:3000 (hot reload enabled)
npm run build     # Build for production
npm run start     # Run production build
npm run lint      # Run ESLint across codebase
```

## Critical Conventions

### Material 3 Expressive Design System

All UI must follow **Material Design 3 Expressive** specifications with emphasis on:

- **Rounded corners**: Use `rounded-full` for buttons, `rounded-xl` for cards (Material 3 Expressive uses large, soft radii)
- **Expressive shadows**: Apply `shadow-lg` or `shadow-md` to interactive elements (cards, buttons on hover)
- **Dynamic hover states**: Scale, shadow, and color transitions on interactive elements (e.g., `hover:scale-[1.02] hover:shadow-lg`)
- **Semantic spacing**: Use Material 3 spacing scale (py-24, sm:py-32, px-6, gap-x-6)
- **Focus states**: Always include `focus:ring-2 focus:ring-primary` for keyboard accessibility

### Styling & Color System

- **Do NOT use raw Tailwind colors** - Use custom Material 3 palette defined in `tailwind.config.ts`
- Required semantic colors: `primary`, `on-primary`, `primary-container`, `on-primary-container`, `surface`, `on-surface`, `surface-variant`, `on-surface-variant`, `outline`, `error`, etc.
- **Example**: Text on dark backgrounds: `className="text-on-surface"` (not `text-white`)
- **Example**: Cards/containers: `className="bg-surface-variant text-on-surface-variant rounded-xl shadow-lg"` (Material 3 Expressive, not `bg-gray-800`)
- **Example**: Hover effects: `hover:shadow-md hover:bg-opacity-90 transition-all duration-150` (smooth, expressive feedback)
- All components default to **dark mode** - no light mode toggle exists

### Component Architecture

1. **Layout Components** (`app/layout.tsx`): Wraps all pages with Navbar + Footer, manages global SEO metadata
2. **Page Components** (`app/page.tsx`, `app/games/page.tsx`): Compose section components, define page-specific metadata
3. **Section Components** (`components/Hero.tsx`, `About.tsx`, `Contact.tsx`): Full-width sections with consistent Material 3 Expressive padding/spacing:
   ```tsx
   <section className="w-full bg-background py-24 sm:py-32">
     <div className="container mx-auto max-w-4xl px-4">
       {/* content with Material 3 semantic typography & color system */}
     </div>
   </section>
   ```
   - Alternating backgrounds: `bg-background` and `bg-surface-variant` for visual rhythm
   - Consistent vertical rhythm: `py-24 sm:py-32` for section spacing
4. **Reusable UI Components** (`components/ui/`): Material 3 Expressive components:
   - `Button.tsx`: Rounded-full, expressive shadows, dynamic hover states (scale, shadow elevation)
   - `GameCard.tsx`: Rounded-xl cards with hover scale effects and semantic color containers
5. **Data Models**: `GameCard.tsx` defines the `Game` type that matches Supabase schema - **always use this type**

### Button Component Pattern (Material 3 Expressive)

Fully implements Material 3 Expressive button system:

- **Polymorphic rendering**: Link (if `href` provided) or native button element
- **Three variants** with expressive styling:
  - `primary`: Filled button (bg-primary, rounded-full, shadow-md on hover, scale transform)
  - `secondary`: Outlined button (border-outline, text-primary, hover bg-primary-container)
  - `tertiary`: Text button (text-primary, hover bg-primary-container)
- **Expressive interactions**: All variants include `transition-all duration-150` + hover shadow elevation
- **Focus accessibility**: All variants include focus ring with offset
- **Example**:
  ```tsx
  <Button href="/games" variant="secondary" className="w-full">
    View Games
  </Button>
  ```

### Type Safety & Developer Experience

- All components are **fully typed** with explicit prop interfaces (Material 3 Expressive variant types)
- Supabase queries return typed results using `Game` type
- Use `React.ReactNode` for children, avoid `any`
- Metadata types use Next.js `Metadata` type (not custom types)
- Button variants are literal union types: `'primary' | 'secondary' | 'tertiary'` for IDE autocomplete

### Next.js App Router Specifics

- **Server components** are default - use `'use client'` only when needed (browser-only APIs, event handlers)
- **Path aliasing**: Use `@/` prefix for all imports (configured in `tsconfig.json`)
- **Metadata**: Define per-page in `page.tsx` or globally in `layout.tsx`; uses `title.template` pattern for consistency
- **Dynamic routes**: Use folder structure (`/games`, `/privacy`, `/terms`) - no `route.ts` handlers yet

### Supabase Integration

- **Client**: `lib/supabase/client.ts` - browser-only client, requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`
- **Server**: `lib/supabase/server.ts` - for SSR operations (not yet used)
- Only browser client is currently implemented - no server actions

## Common Tasks

### Adding a New Page

1. Create folder in `app/` (e.g., `app/about/`)
2. Create `page.tsx` with metadata and component composition
3. Add route to `Navbar.tsx` links if needed
4. Follow Material 3 Expressive section component pattern:
   - Alternating `bg-background` and `bg-surface-variant` for visual rhythm
   - Semantic typography with `text-on-surface` and `text-on-surface-variant`
   - Consistent py-24/sm:py-32 spacing

### Adding a New Component

1. For reusable UI primitives: `components/ui/ComponentName.tsx` with Material 3 Expressive styling:
   - Rounded corners: `rounded-full` (buttons), `rounded-xl` (cards)
   - Expressive shadows: `shadow-md` to `shadow-lg`
   - Hover states: combine scale, shadow, and color transitions with `transition-all duration-150`
   - Always include focus rings for accessibility
2. For full-width sections: `components/SectionName.tsx` importing UI components, following section spacing pattern
3. Always define TypeScript interfaces/types with literal union types for variants

### Updating Game Cards

- Game data source is Supabase (currently mocked in component - will be fetched)
- `GameCard` expects `Game` type with fields: `id, title, description, status, image, tags, purchase_url, disable_purchase`
- Implement Material 3 Expressive patterns:
  - Card: `bg-surface-variant rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-lg transition-transform`
  - Status badge: `bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-medium`
  - Tags: `bg-secondary-container text-on-secondary-container rounded`
- Render condition: `showPurchaseButton = !game.disable_purchase && game.purchase_url`

## File Structure Meaning

- `app/` - Next.js App Router pages and layout
- `components/` - React components (organized by scope: UI primitives in `ui/`, sections at root)
- `lib/supabase/` - Backend service clients
- `public/` - Static assets (images, favicons)
- `.github/` - GitHub-specific files (this instructions file)

## Notable Patterns NOT Currently Used

- Server Actions / API routes (all Supabase calls are client-side)
- Middleware or request interception
- Environment-specific builds
- CSS Modules (using Tailwind only)

## Material 3 Expressive Design Principles (Applied to This Project)

Material Design 3 Expressive emphasizes **bold, rounded, and dynamic** interactions. Here's how it's implemented:

### Rounded Corners Strategy

- **Buttons**: `rounded-full` for maximum expressiveness
- **Cards**: `rounded-xl` for softer, more approachable containers
- **Badges/Tags**: `rounded-full` or `rounded` depending on context
- Never use `rounded-md` or `rounded-lg` on primary interactive elements

### Shadow & Elevation

- **Resting state**: `shadow-md` for cards and containers
- **Hover state**: Elevate to `shadow-lg` to create depth and interactivity feedback
- **Navbar/Footer**: `shadow-sm` to maintain hierarchy without overwhelming
- Always pair shadow changes with smooth transitions: `transition-all duration-150`

### Dynamic Hover & Interaction States

- **Scale transforms**: Cards/buttons use `hover:scale-[1.02]` for subtle growth feedback
- **Color shifts**: Use semantic color tokens (e.g., `hover:bg-primary-container`) instead of opacity
- **Combined effects**: `hover:scale-[1.02] hover:shadow-lg transition-transform` creates polished feel
- All interactive elements respond to hover without jarring jumps

### Semantic Color Hierarchy

- **Text on dark backgrounds**: Always use `text-on-surface` or `text-on-surface-variant`
- **Accent containers**: `bg-primary-container` with `text-on-primary-container` for badges, highlights
- **Secondary accents**: `bg-secondary-container` with `text-on-secondary-container` for supporting UI
- **Status indicators**: `bg-error-container` for errors, use appropriate "on-" color for text
- Never compose colors manually (e.g., "text-primary on bg-surface") - use pre-paired semantic tokens

### Typography & Spacing

- **Section rhythm**: `py-24 sm:py-32` creates consistent vertical pacing
- **Container width**: `max-w-4xl` keeps content scannable and focused
- **Responsive scaling**: `text-3xl sm:text-4xl` for headers maintains readability across screens
- **Font tracking**: `tracking-tight` for headers adds Material 3 expressiveness

### Accessibility within Expressive Design

- **Focus states**: Never skip focus rings - `focus:ring-2 focus:ring-primary` is mandatory
- **Touch targets**: Buttons maintain `px-6 py-3` minimum for comfortable interaction
- **Color contrast**: Semantic colors are pre-tested for WCAG compliance
- **Motion**: Smooth `duration-150` transitions are fast enough to feel responsive without causing motion sickness

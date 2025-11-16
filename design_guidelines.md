# Design Guidelines for Prof. Hulas Pathak Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern professional portfolio sites like Linear (typography clarity), Apple (minimalism), and Stripe (professional elegance) while incorporating agriculture/earth-tone sensibilities.

## Core Design Principles
- Professional authority with approachable warmth
- Agriculture-focused yet modern and digital-forward
- Emphasize credibility, experience, and impact
- Clean information hierarchy with generous breathing room

---

## Typography System

**Font Family**: 'Inter' from Google Fonts (modern, highly readable)

**Hierarchy**:
- Hero Name: 4xl to 6xl font size, font-weight 700
- Hero Title: xl to 2xl, font-weight 500
- Section Headings: 3xl to 4xl, font-weight 700
- Card Titles: lg to xl, font-weight 600
- Body Text: base to lg, font-weight 400
- Small Text/Captions: sm, font-weight 400

---

## Layout & Spacing System

**Tailwind Spacing Units**: Consistent use of 4, 8, 12, 16, 20, 24 units
- Section vertical padding: py-20 (desktop), py-12 (mobile)
- Container max-width: max-w-6xl
- Card padding: p-8
- Gap between elements: gap-8 to gap-12

---

## Component Library

### 1. Hero Section
- Full-width section with centered content (min-height: 90vh)
- Profile image: Large circular frame (w-48 to w-64), subtle shadow
- Text content centered below image
- Primary CTA button with agritech green background, white text, rounded-lg, px-8 py-4
- Button background: blur effect (backdrop-blur-sm, bg-opacity-90)
- Clean white/light background with subtle gradient overlay

### 2. About Section
- Single column centered layout (max-w-3xl)
- Paragraph text with comfortable line-height (leading-relaxed)
- Professional headshot integration option on side (optional secondary image)

### 3. Achievements Cards
- Grid layout: 1 column mobile, 2 columns tablet, 3 columns desktop
- Each card: White background, border (border-gray-200), rounded-2xl, p-8
- Icon at top (text-5xl, agritech green color)
- Title below icon (font-semibold, text-xl)
- Brief description (text-gray-600, text-base)
- Subtle shadow on hover (transition-shadow duration-300)

### 4. Timeline Section
- Vertical timeline with alternating content (left-right on desktop, single column mobile)
- Timeline line: Solid agritech green line (border-l-4) running through center
- Timeline nodes: Circular markers (w-6 h-6, bg-green-500, rounded-full)
- Year badges: Bold text in agritech green
- Milestone cards: White background, rounded-xl, p-6, subtle shadow
- Stagger animation on scroll (fade-in from sides)

### 5. Gallery Section
- 3-column grid (grid-cols-1 md:grid-cols-3)
- Images: aspect-ratio-square, rounded-xl, object-cover
- Hover effect: Slight scale transform (scale-105), overlay with opacity
- Gap between images: gap-6

### 6. Social Links Section
- Horizontal flex layout, centered
- Icon buttons: Large circular backgrounds (w-14 h-14), agritech green background on hover
- Icons: LinkedIn, Instagram, Email (use Heroicons or Font Awesome)
- Spacing: gap-6 between icons

### 7. Footer
- Simple centered text
- Small font size (text-sm)
- Light gray text color (text-gray-500)
- Minimal padding (py-8)

---

## Color Palette

**Primary**: #1AA260 (Agritech Green) - buttons, accents, icons, timeline
**Background**: #FFFFFF (White) - main background
**Text Primary**: #111827 (Near Black) - headings, important text
**Text Secondary**: #6B7280 (Gray) - body text, descriptions
**Border**: #E5E7EB (Light Gray) - card borders, dividers
**Hover States**: Darken primary by 10% (#158A4F)

---

## Animations & Interactions

**Scroll Animations**: Fade-in with subtle Y-axis movement (translate-y-4 to translate-y-0)
**Button Hovers**: Background color darkening, slight scale (scale-105)
**Card Hovers**: Shadow elevation (shadow-md to shadow-xl)
**Smooth Scroll**: Implement smooth scrolling between sections
**Timing**: Use ease-in-out, 300ms duration for most transitions

---

## Images

**Profile Image**: 
- Placement: Hero section, centered above name
- Treatment: Circular crop, professional framing, subtle border (border-4 border-white with shadow)
- Provided: User will upload Prof. Pathak's LinkedIn profile photo

**Gallery Images**:
- Placement: Gallery section, 3-image horizontal grid
- Content: Professional event photos, speaking engagements, interactions
- Treatment: Rounded corners (rounded-xl), consistent aspect ratio
- Placeholders: Use 400x400px placeholder images initially

**No large hero background image** - keep hero clean with white/gradient background

---

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (stack all elements, single column)
- Tablet: 768px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Adjustments**:
- Hero text sizes reduced by 1-2 steps
- Timeline becomes single column with vertical line on left
- Achievement cards stack to 1 column
- Reduce section padding to py-12

---

## Accessibility

- All interactive elements have clear focus states (ring-2 ring-green-500)
- Sufficient color contrast for text (WCAG AA compliant)
- Alt text for all images
- Semantic HTML structure with proper heading hierarchy
- Keyboard navigation support for all interactive elements
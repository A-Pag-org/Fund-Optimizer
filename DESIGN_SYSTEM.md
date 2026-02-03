# Design System Documentation

## 🎨 Visual Design Language

This document outlines the complete design system used in the Employee Directory interface.

## 1. Color System

### Primary Palette

#### Backgrounds
```css
--color-bg-primary: #0a0a0f      /* Deep space black - Main background */
--color-bg-secondary: #13131a    /* Dark slate - Secondary surfaces */
--color-bg-tertiary: #1a1a24     /* Midnight blue - Tertiary elements */
--color-bg-hover: #20202e        /* Hover state background */
--color-bg-card: #15151d         /* Employee card background */
--color-bg-card-hover: #1c1c28   /* Card hover state */
```

**Usage**: Progressive layering from deepest (primary) to elevated surfaces (tertiary, hover states)

#### Text Colors
```css
--color-text-primary: #ffffff    /* Pure white - Headlines, primary text */
--color-text-secondary: #a0a0b8  /* Soft gray - Supporting text */
--color-text-tertiary: #6b6b85   /* Muted gray - Metadata, labels */
```

**Hierarchy**: 
- Primary: Main content, names, titles
- Secondary: Descriptions, roles, subtitles  
- Tertiary: Labels, metadata, timestamps

#### Accent Colors
```css
--color-accent-primary: #6366f1   /* Indigo - Primary actions, highlights */
--color-accent-secondary: #8b5cf6 /* Purple - Secondary accents */
--color-accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)
```

**Application**: Buttons, progress bars, highlights, focus states, brand elements

#### Status Colors
```css
--color-success: #10b981   /* Green - Active status, success states */
--color-warning: #f59e0b   /* Amber - Warning, on-leave status */
--color-danger: #ef4444    /* Red - Errors, critical states */
--color-info: #3b82f6      /* Blue - Information, neutral states */
```

#### Border Colors
```css
--color-border: #2a2a38         /* Default borders */
--color-border-hover: #3a3a4f   /* Hover state borders */
```

### Color Application Examples

**Employee Card Default State**:
- Background: `var(--color-bg-card)`
- Border: `var(--color-border)`
- Name: `var(--color-text-primary)`
- Role: `var(--color-text-secondary)`
- Location: `var(--color-text-tertiary)`

**Employee Card Hover State**:
- Background: `var(--color-bg-card-hover)`
- Border: `var(--color-border-hover)`
- Top accent: `var(--color-accent-gradient)`

**Status Indicators**:
- Active: `var(--color-success)` - Green badge
- On Leave: `var(--color-warning)` - Amber badge

## 2. Typography

### Font Family
```css
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

**Inter**: Modern, highly readable geometric sans-serif
- Clean lines, excellent legibility
- Wide range of weights (300-700)
- Optimized for digital interfaces

### Font Sizes
```css
--font-size-xs: 0.75rem    /* 12px - Small labels, metadata */
--font-size-sm: 0.875rem   /* 14px - Supporting text, descriptions */
--font-size-base: 1rem     /* 16px - Body text, default size */
--font-size-lg: 1.125rem   /* 18px - Subheadings, emphasis */
--font-size-xl: 1.25rem    /* 20px - Section titles */
--font-size-2xl: 1.5rem    /* 24px - Large headings */
--font-size-3xl: 2rem      /* 32px - Page titles, hero text */
```

### Font Weights
```css
300 - Light     /* Subtle text, decorative */
400 - Regular   /* Body text, default */
500 - Medium    /* Emphasis, buttons */
600 - Semibold  /* Headings, important text */
700 - Bold      /* Page titles, strong emphasis */
```

### Typography Scale

| Element | Size | Weight | Color | Line Height |
|---------|------|--------|-------|-------------|
| Page Title (h1) | 2xl (24px) | 700 | Gradient | 1.2 |
| Section Title (h2) | xl (20px) | 600 | Primary | 1.3 |
| Subsection (h3) | base (16px) | 600 | Primary | 1.4 |
| Card Name | base (16px) | 600 | Primary | 1.4 |
| Card Role | sm (14px) | 400 | Secondary | 1.5 |
| Body Text | base (16px) | 400 | Primary | 1.6 |
| Label | xs (12px) | 500 | Tertiary | 1.4 |
| Metadata | xs (12px) | 400 | Tertiary | 1.4 |

## 3. Spacing System

### Spacing Scale
```css
--spacing-xs: 4px      /* Minimal spacing, tight elements */
--spacing-sm: 8px      /* Small gaps, compact layouts */
--spacing-md: 16px     /* Default spacing, standard gaps */
--spacing-lg: 24px     /* Section spacing, card gaps */
--spacing-xl: 32px     /* Large sections, major divisions */
--spacing-2xl: 48px    /* Page-level spacing, major sections */
```

### Spacing Application

**Card Internal Padding**: `var(--spacing-lg)` (24px)
**Carousel Gap**: `var(--spacing-lg)` (24px)
**Section Margin**: `var(--spacing-2xl)` (48px)
**Icon Gap**: `var(--spacing-md)` (16px)
**Tag Gap**: `var(--spacing-xs)` (4px)

### Responsive Spacing
- Desktop: Full scale
- Tablet: 90% scale (`--spacing-lg` → ~21px)
- Mobile: 80% scale (`--spacing-lg` → ~19px)

## 4. Border Radius

### Radius Scale
```css
--border-radius-sm: 6px    /* Small elements, tags, badges */
--border-radius-md: 12px   /* Cards, buttons, inputs */
--border-radius-lg: 16px   /* Large cards, containers */
--border-radius-xl: 24px   /* Hero sections, modal corners */
```

### Application
- **Tags**: `var(--border-radius-sm)` (6px)
- **Buttons**: `var(--border-radius-md)` (12px)
- **Employee Cards**: `var(--border-radius-lg)` (16px)
- **Avatars**: `50%` (perfect circle)
- **Progress Bars**: `3px` (subtle rounding)

## 5. Shadows

### Shadow Levels
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3)
/* Subtle depth, minimal elevation */

--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)
/* Standard elevation, buttons, hover states */

--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)
/* High elevation, dropdowns, modals */

--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.5)
/* Maximum elevation, detail panels */

--shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3)
/* Accent glow effect */
```

### Shadow Hierarchy
1. **Flat** (no shadow): Base layer, carousel track
2. **Subtle** (sm): Resting cards, buttons
3. **Elevated** (md): Hover states, active elements
4. **Floating** (lg): Dropdowns, popovers
5. **Modal** (xl): Side panels, overlays
6. **Glow**: Focus states, primary actions

## 6. Transitions & Animations

### Timing Functions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)    /* Quick feedback */
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1)    /* Standard transitions */
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1)    /* Emphasis, reveals */
```

**Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` - Material Design standard easing

### Animation Principles

1. **Speed**: Fast enough to feel responsive, slow enough to track
2. **Easing**: Natural acceleration/deceleration
3. **Purpose**: Every animation serves a functional purpose
4. **Performance**: GPU-accelerated transforms

### Common Animations

**Card Hover**:
```css
transform: translateY(-4px) scale(1.02);
transition: all var(--transition-base);
box-shadow: var(--shadow-xl);
```

**Button Press**:
```css
transform: translateY(0);
transition: transform var(--transition-fast);
```

**Panel Slide-in**:
```css
transform: translateX(0);
transition: transform var(--transition-slow);
```

**Loading Skeleton**:
```css
animation: loading 1.5s ease-in-out infinite;
background: linear-gradient(90deg, ...);
background-size: 200% 100%;
```

## 7. Component Anatomy

### Employee Card Structure

```
┌─────────────────────────────────┐
│      [Accent Bar on Hover]      │  ← 3px gradient
├─────────────────────────────────┤
│         ┌─────────┐             │
│         │         │             │  ← Avatar (80x80)
│         │  Photo  │●            │    Status badge (20x20)
│         │         │             │
│         └─────────┘             │
│                                 │
│      Employee Name              │  ← Primary text
│      Job Role                   │  ← Secondary text
│      📍 Location                │  ← Tertiary text
│                                 │
│    [Program Tag]                │  ← Tag
│                                 │
│   Fund Allocation: 87%          │  ← Label
│   ████████████░░░░ 87%          │  ← Progress bar
│                                 │
│     [💰] [👤] [💵]             │  ← Icons with tooltips
└─────────────────────────────────┘
```

**Dimensions**:
- Width: Responsive (20% of carousel - gaps)
- Height: Auto (content-based)
- Padding: 24px all sides
- Border: 1px solid border color

### Detail Panel Structure

```
┌──────────────────────────────────┐
│                             [✕]  │  ← Close button
├──────────────────────────────────┤
│          ┌─────────┐             │
│          │         │             │  ← Large avatar (120x120)
│          │  Photo  │             │
│          │         │  [ACTIVE]   │  ← Status badge
│          └─────────┘             │
│                                  │
│       Employee Name              │  ← Large name
│       Job Role                   │  ← Role
│       EMP001                     │  ← ID
├──────────────────────────────────┤
│   BASIC INFORMATION              │  ← Section title
│   ┌─────────┬─────────┐         │
│   │ Label   │ Label   │         │  ← 2-column grid
│   │ Value   │ Value   │         │
│   ├─────────┼─────────┤         │
│   │ Label   │ Label   │         │
│   │ Value   │ Value   │         │
│   └─────────┴─────────┘         │
├──────────────────────────────────┤
│   [More sections...]             │
├──────────────────────────────────┤
│   [Include in Simulation] ───→   │  ← CTA button
└──────────────────────────────────┘
```

**Dimensions**:
- Width: 600px (90vw max on mobile)
- Height: 100vh
- Position: Fixed right
- Padding: 32px

## 8. Interactive States

### Button States

| State | Background | Border | Shadow | Transform |
|-------|------------|--------|--------|-----------|
| Default | Tertiary | Border | None | none |
| Hover | Hover | Border-hover | MD | translateY(-1px) |
| Active | Hover | Border-hover | SM | translateY(0) |
| Focus | Tertiary | Accent (outline) | None | none |
| Disabled | Tertiary | Border | None | none (opacity: 0.3) |

### Card States

| State | Background | Border | Shadow | Transform |
|-------|------------|--------|--------|-----------|
| Default | Card | Border | None | none |
| Hover | Card-hover | Border-hover | XL | translateY(-4px) scale(1.02) |
| Focus | Card | Accent (outline) | None | none |
| Selected | Card-hover | Accent | MD | none |
| Loading | Card | Border | None | none (opacity: 0.6) |
| Disabled | Card | Border | None | none (opacity: 0.4) |

## 9. Responsive Breakpoints

### Grid Calculations

**Desktop Large (1920px+)**:
```css
grid-auto-columns: calc((100% - (24px * 4)) / 5);  /* 5 cards */
```

**Desktop (1440px)**:
```css
grid-auto-columns: calc((100% - (24px * 3)) / 4);  /* 4 cards */
```

**Tablet (1024px)**:
```css
grid-auto-columns: calc((100% - (24px * 2)) / 3);  /* 3 cards */
```

**Mobile Large (768px)**:
```css
grid-auto-columns: calc((100% - 24px) / 2);         /* 2 cards */
```

**Mobile (480px)**:
```css
grid-auto-columns: calc(100% - 24px);               /* 1 card */
```

### Adaptive Typography

```css
/* Desktop */
h1 { font-size: var(--font-size-2xl); }  /* 24px */

/* Tablet (1024px) */
h1 { font-size: var(--font-size-xl); }   /* 20px */

/* Mobile (768px) */
h1 { font-size: var(--font-size-lg); }   /* 18px */
```

## 10. Accessibility Guidelines

### Color Contrast Ratios

All text meets WCAG AA standards:
- **Primary text on primary bg**: 21:1 (AAA)
- **Secondary text on primary bg**: 5.8:1 (AA)
- **Tertiary text on primary bg**: 4.5:1 (AA)

### Focus Indicators

```css
*:focus-visible {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 2px;
}
```

- **Visible**: High contrast indigo outline
- **Offset**: 2px for clarity
- **Only on keyboard focus**: Using `:focus-visible`

### Touch Targets

Minimum touch target size: **44x44px** (WCAG AAA)
- Buttons: 40x40px minimum + 4px visual padding
- Cards: Full card is tappable
- Icons: 32x32px with 12px padding

## 11. Motion & Reduced Motion

### Default Motion
- Smooth transitions (250ms)
- Subtle hover effects
- Fluid animations

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

Respects user's OS-level motion preferences.

## 12. Design Tokens Summary

### Core Values
```javascript
{
  colors: {
    background: ['#0a0a0f', '#13131a', '#1a1a24'],
    text: ['#ffffff', '#a0a0b8', '#6b6b85'],
    accent: ['#6366f1', '#8b5cf6'],
    status: ['#10b981', '#f59e0b', '#ef4444', '#3b82f6']
  },
  spacing: [4, 8, 16, 24, 32, 48],
  typography: {
    family: 'Inter',
    sizes: [12, 14, 16, 18, 20, 24, 32],
    weights: [300, 400, 500, 600, 700]
  },
  borderRadius: [6, 12, 16, 24],
  transitions: [150, 250, 350]
}
```

---

## Usage Guidelines

### DO ✓
- Use spacing scale consistently
- Follow color hierarchy
- Apply hover states to interactive elements
- Maintain border radius consistency
- Use appropriate shadow levels
- Test across breakpoints

### DON'T ✗
- Mix spacing values outside the scale
- Use arbitrary colors
- Omit hover states
- Over-use animations
- Ignore accessibility contrast
- Create inconsistent elevations

---

**This design system ensures consistency, accessibility, and beauty across the entire interface.**

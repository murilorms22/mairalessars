---
name: Editorial Communicator
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#424936'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#727a64'
  outline-variant: '#c2cab0'
  surface-tint: '#446900'
  primary: '#446900'
  on-primary: '#ffffff'
  primary-container: '#a3e635'
  on-primary-container: '#416400'
  inverse-primary: '#98da27'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#d2d2d2'
  on-tertiary-container: '#595a5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b2f746'
  primary-fixed-dim: '#98da27'
  on-primary-fixed: '#121f00'
  on-primary-fixed-variant: '#334f00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  signature:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
This design system is built upon the intersection of professional authority and personal intimacy. The brand personality is grounded yet vibrant, reflecting the essence of a modern communicator who balances strength with active listening. 

The visual direction follows a **Modern Editorial** approach, characterized by high-contrast typography, generous white space, and asymmetric layouts that mirror the flow of a premium digital magazine. It rejects the rigid symmetry of traditional corporate sites in favor of a dynamic, non-linear structure that feels both curated and organic. The emotional response is one of clarity, confidence, and transformation.

## Colors
The palette is built on high-impact contrast. 
- **Vibrant Lime (#A3E635):** Used as the primary catalyst for action. It marks CTAs, interactive states, and key emphasis points within editorial text.
- **Graphite (#1A1A1A):** Provides the structural foundation. It is used for heavy headlines and primary backgrounds to evoke "Strength" and "Purpose."
- **White and Light Neutrals (#FFFFFF, #F5F5F5):** These are essential for the "Listening" aspect of the brand, providing the silence (white space) necessary for the content to breathe.

Color application should follow a 60-30-10 rule, where white space dominates, graphite provides the weight, and lime green acts as the rhythmic accent.

## Typography
The typography strategy creates a clear hierarchy between "The Message" and "The Voice."

- **Headlines (Montserrat):** Bold, geometric, and unapologetic. Large display sizes should use tighter letter spacing to create a cohesive visual block.
- **Body (Inter):** A systematic sans-serif chosen for its extreme legibility in long-form editorial content.
- **Signature (Syne):** While not a traditional script, Syne is used in its lighter weights or specific expressive placements to represent the personal, avant-garde touch of the communicator. It should be used sparingly for quotes or sign-offs.

For mobile, display sizes must scale aggressively to ensure legibility while maintaining the "impact" of the editorial style.

## Layout & Spacing
This design system utilizes a **12-column Fluid Grid** with a twist: **Asymmetric Offsetting.**

1.  **The Grid:** Content is rarely centered. Elements should be offset by 1 or 2 columns to create a "pacing" effect similar to a magazine spread.
2.  **Section Gaps:** Large vertical gaps (120px+) are encouraged to separate different narratives or content pillars.
3.  **Photography:** Images should alternate between full-bleed and contained "inset" frames. Captions should be placed in the gutters to break the vertical flow.
4.  **Mobile Reflow:** On mobile, the asymmetry collapses into a single-column stack, but maintains large top/bottom margins to preserve the feeling of lightness.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Minimalist Shadows** rather than heavy skeuomorphism.

- **Surfaces:** Use `#F5F5F5` surfaces on `#FFFFFF` backgrounds to create subtle containers for cards.
- **Shadows:** When used, shadows must be "Ambient" — extremely diffused (30-40px blur), low opacity (around 4-6%), and slightly tinted with the `#1A1A1A` graphite tone.
- **Transitions:** Elements should feel "lifted" only upon interaction. The default state is flat, emphasizing the editorial, paper-like quality of the screen.

## Shapes
The shape language is **Modern & Controlled**. 
- **Soft Corners:** Use a 0.25rem (4px) base radius. This is enough to take the "edge" off the graphite blocks without making the design feel "bubbly" or overly casual.
- **Asymmetric Cuts:** For high-impact imagery, consider 0px radius on three corners and a large 2rem radius on one corner to reinforce the non-linear brand narrative.
- **Dividers:** Horizontal rules should be thin (1px) and use the Graphite color at 10% opacity.

## Components

### Buttons & CTAs
- **Primary:** Solid `#A3E635` background with `#1A1A1A` text. Bold, uppercase labels using the `label-caps` style. No icons, or a simple "Arrow-Right" for directional flow.
- **Ghost:** Graphite outline (1px) with no fill. For secondary actions.

### Cards
- **Editorial Cards:** Asymmetric padding (e.g., more padding at the bottom than the top). Imagery should take up 60% of the card area. Use soft ambient shadows on hover.
- **Text-Only Cards:** Use the `#F5F5F5` background with a heavy border-left (4px) in Vibrant Lime to highlight "Purpose" statements.

### Inputs & Forms
- **Fields:** Clean, bottom-border only (1px Graphite). Focus state should thicken the border to 2px and introduce a subtle Lime glow.
- **Labels:** Always visible, using `label-caps` at 12px.

### Imagery
- **Placeholders:** All imagery should be high-contrast, professional photography. Use a consistent aspect ratio (3:4 or 16:9) but vary the placement on the grid to maintain the editorial rhythm.
# 🎨 Design & Branding Guide - Dody's Handcraft

## Color Palette

### Primary Colors
```
Brand Primary (Mint Green): #A8D5BA
├─ Used for: Main CTA buttons, links, accents
├─ RGB: rgb(168, 213, 186)
├─ Darker shade: #92C9A3
└─ Lighter shade: #C5E4D3

Brand Secondary (Soft Pink): #F5E6E0
├─ Used for: Secondary buttons, backgrounds, accents
├─ RGB: rgb(245, 230, 224)
└─ Darker shade: #F0D9D2

Brand Dark (Charcoal): #4A4A4A
├─ Used for: Text, headings, primary text
└─ RGB: rgb(74, 74, 74)

Brand Light (Off White): #FAFAFA
├─ Used for: Backgrounds, sections
└─ RGB: rgb(250, 250, 250)
```

### Neutral Colors
```
White:        #FFFFFF
Black:        #000000
Gray Light:   #F5F5F5
Gray Medium:  #E0E0E0
Gray Dark:    #666666
```

### Status Colors
```
Success:      #A8D5BA (Green - same as primary)
Error:        #DC6464 (Red)
Warning:      #F5A623 (Orange)
Info:         #6496C8 (Blue)
```

---

## Typography

### Font Family
```
Primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
```

### Type Scale
```
xs:   12px (small labels)
sm:   14px (secondary text)
base: 16px (body text)
lg:   18px (emphasis)
xl:   24px (section titles)
2xl:  32px (page titles)
3xl:  48px (hero titles)
```

### Font Weights
```
Regular: 400
Medium:  500
Semi-bold: 600
Bold:    700
Extra-bold: 800
```

### Usage
```
Hero Title:    48px, 700 weight, line-height 1.2
Section Title: 32px, 700 weight, line-height 1.2
Card Title:    18px, 700 weight
Body Text:     16px, 400 weight, line-height 1.5
Label:         14px, 600 weight
```

---

## Spacing System

```
xs:   4px
sm:   8px
md:   16px   (default)
lg:   24px
xl:   32px
2xl:  48px
3xl:  64px
```

### Usage Examples
```
Container padding:       md to lg
Section padding:         2xl to 3xl
Card padding:            lg
Button padding:          md horizontal, md vertical
Form field margin:       md bottom
Gap between items:       md to xl
```

---

## Components Visual Style

### Buttons

```
Primary Button:
├─ Background: Mint Green (#A8D5BA)
├─ Text: White
├─ Hover: Darker mint (#92C9A3) + shadow
├─ Text transform: UPPERCASE
└─ Letter spacing: 0.5px

Secondary Button:
├─ Background: Soft Pink (#F5E6E0)
├─ Text: Dark (#4A4A4A)
├─ Border: 2px Mint Green
└─ Hover: Darker pink

Outline Button:
├─ Background: Transparent
├─ Text: Mint Green
├─ Border: 2px Mint Green
└─ Hover: Mint background + white text
```

### Cards

```
Card:
├─ Background: White
├─ Border radius: 12px
├─ Box shadow: 0 4px 6px rgba(0,0,0,0.1)
├─ Hover: Lift effect + larger shadow
└─ Image aspect ratio: 1:1 (square)
```

### Input Fields

```
Input:
├─ Background: White
├─ Border: 2px #E0E0E0
├─ Border radius: 8px
├─ Padding: 16px
├─ Focus: Border mint + light shadow
└─ Error: Border #DC6464
```

### Alerts

```
Success Alert:
├─ Background: rgba(168, 213, 186, 0.1)
├─ Text: #4A7C5E
└─ Left border: 4px Mint Green

Error Alert:
├─ Background: rgba(220, 100, 100, 0.1)
├─ Text: #8B3A3A
└─ Left border: 4px #DC6464

Info Alert:
├─ Background: rgba(100, 150, 200, 0.1)
├─ Text: #3A5A7C
└─ Left border: 4px #6496C8
```

---

## Layout Grid

### Desktop (1200px max-width)
```
├─ Container max-width: 1200px
├─ Padding: 16px sides
├─ Column gap: 32px (xl)
└─ Row gap: 48px (2xl) for sections
```

### Tablet (768px - 1199px)
```
├─ Container width: Full - 32px
├─ Column gap: 24px (lg)
└─ Row gap: 32px (xl) for sections
```

### Mobile (480px - 767px)
```
├─ Container width: Full - 16px
├─ Column gap: 16px (md)
└─ Row gap: 24px (lg) for sections
```

### Small Mobile (< 480px)
```
├─ Container width: Full - 16px
├─ Single column layout
├─ Column gap: 16px (md)
└─ Row gap: 16px (md) for sections
```

---

## Responsive Grid Behavior

```
Desktop (4 columns):
[Product][Product][Product][Product]

Tablet (2 columns):
[Product][Product]
[Product][Product]

Mobile (1 column):
[Product]
[Product]
[Product]
```

---

## Shadows & Depth

```
Shadow Small:   0 1px 2px rgba(0, 0, 0, 0.05)
Shadow Medium:  0 4px 6px rgba(0, 0, 0, 0.1)
Shadow Large:   0 10px 15px rgba(0, 0, 0, 0.1)
Shadow XL:      0 20px 25px rgba(0, 0, 0, 0.1)
```

### Usage
```
Small:   Subtle elevation, hover states
Medium:  Cards, default elements
Large:   Modals, important components
XL:      Hero sections, hero text
```

---

## Animations & Transitions

```
Fast:       150ms ease-in-out
Normal:     300ms ease-in-out (default)
Slow:       500ms ease-in-out
```

### Hover Effects
```
Button hover:      Color change + translate -2px + shadow
Card hover:        Translate -4px + larger shadow
Link hover:        Color change + underline (optional)
Input focus:       Border color + glow shadow
```

---

## Border Radius

```
Small:      4px   (inputs, small elements)
Medium:     8px   (buttons, cards)
Large:      12px  (larger cards, containers)
Full:       50%   (circles, badges, avatars)
```

---

## Line Heights

```
Tight:      1.2   (headings)
Normal:     1.5   (body text)
Relaxed:    1.75  (descriptions)
```

---

## Design Patterns

### Hero Section
```
Background: Light (#FAFAFA)
Padding: 48-64px vertical
Max-width: 1200px centered
Content: Title + subtitle + buttons
Title size: 48px
Spacing: 24px between elements
```

### Card Section
```
Background: White or light
Padding: 48-64px vertical
Grid: 4 columns (desktop), 2 (tablet), 1 (mobile)
Gap: 32px
Card elevation: Medium shadow
Hover: Lift + larger shadow
```

### CTA Section
```
Background: Brand primary (#A8D5BA)
Text: White
Padding: 64px vertical
Button: White background, primary text
Layout: Center aligned
```

### Form Section
```
Max-width: 500px
Spacing: 16px between fields
Border: 2px gray
Radius: 8px
Padding: 16px
Focus: Mint border + glow
```

---

## Icon Guidelines

### Icon Style
```
Style: Emoji-based
Size: 48px for section headers
Size: 24px for inline
Color: Brand primary or text color
```

### Common Icons
```
🛍️  Shopping bag - shopping
🛒  Cart - shopping cart
🎨  Artist palette - creative
♻️  Recycle - sustainable
⭐  Star - quality
📍 Pin - location
📧 Email - contact
📱 Phone - contact
💬 Chat bubble - WhatsApp
💚 Heart - love/favorite
```

---

## Page Layouts

### Home Page Structure
```
┌─────────────────────────────────────┐
│         HEADER & NAVIGATION         │
├─────────────────────────────────────┤
│          HERO SECTION               │
│    (Title + CTA Buttons)            │
├─────────────────────────────────────┤
│       ABOUT SECTION (3 Cards)       │
├─────────────────────────────────────┤
│       FEATURED PRODUCTS (Grid)      │
├─────────────────────────────────────┤
│        CTA SECTION                  │
│     (Call to action)                │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### Shop Page Structure
```
┌─────────────────────────────────────┐
│         HEADER & NAVIGATION         │
├─────────────────────────────────────┤
│    SHOP HEADER (Title + Filters)    │
├─────────────────────────────────────┤
│    PRODUCT GRID (4/2/1 columns)     │
│  ┌────────────────────────────────┐ │
│  │  [Card] [Card] [Card] [Card]   │ │
│  │  [Card] [Card] [Card] [Card]   │ │
│  └────────────────────────────────┘ │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### Cart Page Structure
```
┌─────────────────────────────────────┐
│         HEADER & NAVIGATION         │
├─────────────────────────────────────┤
│        CART TITLE                   │
├──────────────────────┬──────────────┤
│  CART ITEMS LIST     │   SUMMARY    │
│  ┌─────────────────┐ │  ┌────────┐ │
│  │  Item 1         │ │  │ Total  │ │
│  │  [qty] [remove] │ │  │ $XX.XX │ │
│  ├─────────────────┤ │  │ [Pay]  │ │
│  │  Item 2         │ │  └────────┘ │
│  │  [qty] [remove] │ │             │
│  └─────────────────┘ │             │
├──────────────────────┴──────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### Checkout Page Structure
```
┌─────────────────────────────────────┐
│         HEADER & NAVIGATION         │
├─────────────────────────────────────┤
│        CHECKOUT TITLE               │
├──────────────────────┬──────────────┤
│  FORM SECTIONS       │   SUMMARY    │
│  ┌─────────────────┐ │  ┌────────┐ │
│  │ Customer Info   │ │  │ Items  │ │
│  │ [Inputs]        │ │  │ Total  │ │
│  ├─────────────────┤ │  │ $XX.XX │ │
│  │ Shipping Addr   │ │  │[Order] │ │
│  │ [Inputs]        │ │  └────────┘ │
│  ├─────────────────┤ │             │
│  │ Order Notes     │ │             │
│  │ [Textarea]      │ │             │
│  ├─────────────────┤ │             │
│  │ [Submit] [Back] │ │             │
│  └─────────────────┘ │             │
├──────────────────────┴──────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

---

## Accessibility Features

### Color Contrast
```
Text vs Background: Minimum 4.5:1 ratio
Buttons: Minimum 3:1 ratio
Focus states: Clearly visible
```

### Interactive Elements
```
Minimum touch target: 44px × 44px
Focus outline: 2px solid brand color
Hover state: Clear visual feedback
Disabled state: Reduced opacity (0.5)
```

### Semantic HTML
```
Use proper heading hierarchy (h1, h2, h3)
Use semantic elements (nav, main, section, article)
Use labels for form inputs
Use alt text for images
Use aria-labels where needed
```

---

## Animation Principles

```
Purpose: Enhance user experience
Duration: 150-500ms
Easing: ease-in-out for natural feel
Avoid: Gratuitous animations
Use: Hover, focus, transitions, modals
```

### Smooth Transitions
```
Button hover:   Color + shadow + lift
Card hover:     Lift + enlarged shadow
Link hover:     Color change
Input focus:    Border + glow effect
```

---

## Best Practices

✅ DO:
- Use the defined color palette
- Maintain consistent spacing
- Keep typography hierarchy clear
- Ensure sufficient color contrast
- Use animations subtly
- Test on real devices
- Keep designs clean and minimal

❌ DON'T:
- Use gradients (flat colors only)
- Mix too many fonts
- Add unnecessary shadows
- Use inconsistent spacing
- Overcomplicate layouts
- Ignore mobile experience
- Use low-contrast combinations

---

## Brand Voice

**Elegant** - Premium, sophisticated, refined
**Minimal** - Clean, uncluttered, focused
**Warm** - Approachable, friendly, welcoming
**Authentic** - Genuine, honest, transparent
**Handmade** - Personal touch, artisan quality, unique

---

## Visual Hierarchy

```
Primary:    Large, bright, attention-grabbing
Secondary:  Medium, supporting information
Tertiary:   Small, supplementary details
```

### Implementation
```
Headings:        Large, bold, brand color
Subheadings:     Medium, semi-bold, dark
Body text:       Regular, neutral color
Links:           Brand color, underlined on hover
Buttons:         Brand color, uppercase
```

---

*This design guide ensures consistency and quality across the entire Dody's Handcraft website!* 🎨

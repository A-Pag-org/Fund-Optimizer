# Visual Guide & Screenshots

## 🖼️ Interface Overview

This document provides a visual guide to the Employee Directory interface. Screenshots show the key features and interactions.

---

## Main Screen - Employee Cards View

### Desktop View (1920px)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  Employee Directory                                      [View Simulation (0)] │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  All Employees                                                      [←]  [→]    │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐                  │
│  │   🧑   │  │   👩   │  │   👨   │  │   👩   │  │   🧑   │                  │
│  │ Sarah  │  │Michael │  │ Emily  │  │ David  │  │Jessica │                  │
│  │Anderson│  │  Chen  │  │Rodriguez│ │ Kumar  │  │ Taylor │                  │
│  │Sr Prog │  │Tech Ld │  │Finance │  │UX Dsgn │  │HR BP   │                  │
│  │  NYC   │  │  SF    │  │Chicago │  │Austin  │  │Boston  │                  │
│  │[EdInit]│  │[DigInf]│  │[FinOps]│  │[UXTeam]│  │[Talent]│                  │
│  │████ 87%│  │████ 92%│  │████ 95%│  │███░ 78%│  │████ 85%│                  │
│  │[💰][👤][💵]│[💰][👤][💵]│[💰][👤][💵]│[💰][👤][💵]│[💰][👤][💵]│            │
│  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘                  │
│                                                                                  │
│  Recently Active                                                    [←]  [→]    │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐                  │
│  │   👨   │  │   👩   │  │   🧑   │  │   👨   │  │   👩   │                  │
│  │ Robert │  │ Maria  │  │ James  │  │ Linda  │  │ Kevin  │                  │
│  │Johnson │  │ Garcia │  │ Wilson │  │Martinez│  │ Brown  │                  │
│  │Data An │  │Content │  │DevOps  │  │Research│  │Marketng│                  │
│  │Seattle │  │ Miami  │  │Denver  │  │Portland│  │Atlanta │                  │
│  │[Analyt]│  │[Contnt]│  │[Infra] │  │[R&D]   │  │[Brand] │                  │
│  │███░ 81%│  │███░ 74%│  │████ 89%│  │███░ 83%│  │████ 91%│                  │
│  │[💰][👤][💵]│[💰][👤][💵]│[💰][👤][💵]│[💰][👤][💵]│[💰][👤][💵]│            │
│  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘                  │
│                                                                                  │
│  By Program                                                         [←]  [→]    │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐                  │
│  │   👩   │  │   👨   │  │   👩   │  │   👨   │  │   👩   │                  │
│  │ Sophie │  │ Chris  │  │ Amanda │  │ Daniel │  │ Rachel │                  │
│  │  Lee   │  │ Davis  │  │ White  │  │Thompson│  │ Green  │                  │
│  │Product │  │Securty │  │  Ops   │  │SoftEng │  │Community│                 │
│  │San Dgo │  │Phoenix │  │Philada │  │Houston │  │Nashville│                 │
│  │[Mobile]│  │[CyberS]│  │[OpsExc]│  │[Platfm]│  │[Commty]│                  │
│  │████ 88%│  │████ 94%│  │████ 90%│  │████ 86%│  │███░ 79%│                  │
│  │[💰][👤][💵]│[💰][👤][💵]│[💰][👤][💵]│[💰][👤][💵]│[💰][👤][💵]│            │
│  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘                  │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

**Key Features Visible**:
- Three horizontal carousels
- 5 cards per row on desktop
- Navigation arrows
- Card components: avatar, name, role, location, tag, progress bar, icons
- Clean, minimalistic layout
- Dark theme with excellent contrast

---

## Card States

### Normal State
```
┌──────────────┐
│              │
│     🧑       │  ← Avatar with subtle border
│              │
│ Sarah        │  ← Name (primary text)
│ Anderson     │
│              │
│ Sr Program   │  ← Role (secondary text)
│ Manager      │
│              │
│ 📍 New York  │  ← Location (tertiary text)
│              │
│ [Education]  │  ← Program tag
│              │
│ Fund: 87%    │  ← Label
│ ████████░░   │  ← Progress bar
│              │
│ [💰] [👤] [💵] │  ← Quick info icons
│              │
└──────────────┘
```

### Hover State
```
┌══════════════┐  ← Accent bar (gradient)
│              │
│     🧑       │  ← Avatar border highlights
│    ● ●       │    Elevated card
│              │    Shadow + glow
│ Sarah        │
│ Anderson     │
│              │
│ Sr Program   │
│ Manager      │
│              │
│ 📍 New York  │
│              │
│ [Education]  │
│              │
│ Fund: 87%    │
│ ████████░░   │  ← Animated progress bar
│              │
│ [💰] [👤] [💵] │  ← Icons with visible tooltips
│  ↑           │
│ "Salary Band:│
│   L4"        │
└──────────────┘
```

### Focus State (Keyboard)
```
╔══════════════╗  ← Focus outline (indigo)
║              ║
║     🧑       ║
║              ║
║ Sarah        ║
║ Anderson     ║
║              ║
║ Sr Program   ║
║ Manager      ║
║              ║
║ 📍 New York  ║
║              ║
║ [Education]  ║
║              ║
║ Fund: 87%    ║
║ ████████░░   ║
║              ║
║ [💰] [👤] [💵] ║
║              ║
╚══════════════╝
```

---

## Detail Panel - Side Drawer

### Full Detail View
```
┌─────────────────────────────────────────────────────────────┐
│                                                      [✕]    │
├─────────────────────────────────────────────────────────────┤
│                       ┌────────────┐                        │
│                       │            │                        │
│                       │     🧑     │                        │
│                       │            │                        │
│                       │            │  [ACTIVE]              │
│                       └────────────┘                        │
│                                                              │
│                    Sarah Anderson                           │
│                 Senior Program Manager                      │
│                       EMP001                                │
├─────────────────────────────────────────────────────────────┤
│  BASIC INFORMATION                                          │
│  ┌─────────────────────┬─────────────────────┐            │
│  │ Joining Date        │ Location            │            │
│  │ March 15, 2019      │ New York            │            │
│  ├─────────────────────┼─────────────────────┤            │
│  │ Current Project     │ Current Program     │            │
│  │ Education           │ Community           │            │
│  │ Initiative          │ Development         │            │
│  └─────────────────────┴─────────────────────┘            │
│                                                              │
│  COMPENSATION                                               │
│  ┌─────────────────────┬─────────────────────┐            │
│  │ Gross Salary        │ Net Salary          │            │
│  │ $95,000             │ $72,150             │            │
│  ├─────────────────────┼─────────────────────┤            │
│  │ PF Deduction        │ TDS Deduction       │            │
│  │ $11,400             │ $11,450             │            │
│  ├─────────────────────┼─────────────────────┤            │
│  │ Salary Band         │ PF Indicator        │            │
│  │ L4                  │ Yes                 │            │
│  └─────────────────────┴─────────────────────┘            │
│                                                              │
│  FUND ALLOCATION (87% Total)                               │
│  ┌────────────────────────────────────────────┐            │
│  │ Foundation A - Education Fund       60%    │            │
│  │ ████████████████████████░░░░░░░░░         │            │
│  └────────────────────────────────────────────┘            │
│  ┌────────────────────────────────────────────┐            │
│  │ Foundation B - Community Fund       27%    │            │
│  │ ███████████░░░░░░░░░░░░░░░░░░░░░░         │            │
│  └────────────────────────────────────────────┘            │
│                                                              │
│  LAST MOVEMENT                                              │
│  ┌────────────────────────────────────────────┐            │
│  │ December 1, 2025                           │            │
│  │ [Health Program] → [Education Initiative]  │            │
│  └────────────────────────────────────────────┘            │
│                                                              │
│  RECENT HISTORY                                             │
│  │                                                           │
│  ●─┐ December 1, 2025                                      │
│  │ │ Program Transfer                                      │
│  │ │ Transferred from Health Program to Education         │
│  │                                                           │
│  ●─┐ September 15, 2025                                    │
│  │ │ Salary Revision                                       │
│  │ │ Annual increment - 8% increase                        │
│  │                                                           │
│  ●─┐ June 1, 2025                                          │
│  │ │ Fund Reallocation                                     │
│  │ │ Fund allocation adjusted to 87%                       │
│  │                                                           │
│  ●   March 15, 2025                                         │
│    │ Anniversary                                            │
│    │ Completed 6 years with the organization               │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│          [➕ Include in Simulation]                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Panel Features**:
- Slides in from right with overlay
- Scrollable content area
- Comprehensive employee data
- Visual progress bars for fund allocation
- Timeline with connector lines
- Fixed header and footer
- Primary action button

---

## Mobile View (480px)

### Portrait Mode
```
┌────────────────────┐
│  Employee          │
│  Directory         │
│  [View Sim (0)]    │
├────────────────────┤
│                    │
│  All Employees     │
│        [←]  [→]    │
│                    │
│  ┌──────────────┐  │
│  │              │  │
│  │      🧑      │  │
│  │              │  │
│  │    Sarah     │  │
│  │   Anderson   │  │
│  │              │  │
│  │  Sr Program  │  │
│  │   Manager    │  │
│  │              │  │
│  │ 📍 New York  │  │
│  │              │  │
│  │ [Education]  │  │
│  │              │  │
│  │  Fund: 87%   │  │
│  │ ██████████   │  │
│  │              │  │
│  │[💰][👤][💵]   │  │
│  │              │  │
│  └──────────────┘  │
│                    │
│  Recently Active   │
│        [←]  [→]    │
│                    │
│  ┌──────────────┐  │
│  │   (Card)     │  │
│  └──────────────┘  │
│                    │
│  By Program        │
│        [←]  [→]    │
│                    │
│  ┌──────────────┐  │
│  │   (Card)     │  │
│  └──────────────┘  │
│                    │
└────────────────────┘
```

**Mobile Optimizations**:
- Single card per row
- Stacked carousels
- Touch-optimized buttons
- Swipe-friendly cards
- Full-width detail panel
- Readable text sizes
- Adequate touch targets

---

## Tablet View (1024px)

### Landscape Mode
```
┌──────────────────────────────────────────────────────┐
│  Employee Directory                 [View Sim (0)]   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  All Employees                            [←]  [→]  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │   🧑    │  │   👩    │  │   👨    │            │
│  │  Sarah  │  │ Michael │  │  Emily  │            │
│  │Anderson │  │  Chen   │  │Rodriguez│            │
│  │ Sr Prog │  │Tech Lead│  │ Finance │            │
│  │   NYC   │  │   SF    │  │ Chicago │            │
│  │[EdInit] │  │[DigInfr]│  │[FinOps] │            │
│  │████ 87% │  │████ 92% │  │████ 95% │            │
│  │[💰][👤][💵] │[💰][👤][💵] │[💰][👤][💵] │            │
│  └─────────┘  └─────────┘  └─────────┘            │
│                                                      │
│  (More carousels below...)                          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Tablet Features**:
- 3 cards per row
- Balanced layout
- Touch and mouse support
- Responsive spacing
- 500px detail panel

---

## Interaction Flows

### Flow 1: Browse and View Details
```
1. User lands on page
   ↓
2. Views carousels with employee cards
   ↓
3. Hovers/focuses on card (preview effect)
   ↓
4. Clicks/taps card
   ↓
5. Detail panel slides in from right
   ↓
6. User scrolls through details
   ↓
7. User clicks "Include in Simulation"
   ↓
8. Button updates, notification appears
   ↓
9. Header counter increments
   ↓
10. User closes panel (X, Escape, or click outside)
    ↓
11. Panel slides out, returns to browse
```

### Flow 2: Keyboard Navigation
```
1. User presses Tab
   ↓
2. Focus moves to first interactive element
   ↓
3. Tab/Shift+Tab to navigate
   ↓
4. Arrow keys to move within carousel
   ↓
5. Enter/Space to activate card
   ↓
6. Detail panel opens, focus trapped
   ↓
7. Tab through panel elements
   ↓
8. Escape to close panel
   ↓
9. Focus returns to triggering card
```

### Flow 3: Touch Gestures
```
1. User swipes left on carousel
   ↓
2. Cards scroll smoothly
   ↓
3. User taps card
   ↓
4. Detail panel slides in
   ↓
5. User swipes up to scroll details
   ↓
6. User taps outside panel
   ↓
7. Panel closes
```

---

## Color Showcase

### Teal-Green & Yellow Theme Palette
```
Background Layers:
███ #1F2E2E  Primary (Deepest)
███ #283C3C  Secondary
███ #324646  Tertiary
███ #355050  Card
███ #3d5a5a  Card Hover

Text Colors:
███ #E6ECEC  Primary Text
███ #B0C0C0  Secondary Text
███ #8a9999  Tertiary Text

Accent Colors:
███ #FDDC00  Yellow (Primary)
███ #E6C300  Dark Yellow (Secondary)
███ #D6AF00  Active Yellow
█████████    Gradient

Status Colors:
███ #3FBF7F  Success (Active)
███ #FDDC00  Warning (Leave)
███ #ef4444  Danger
███ #5dbbdb  Info
```

---

## Typography Examples

```
┌─────────────────────────────────────────┐
│                                         │
│  Page Title (32px Bold)                 │
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                 │
│                                         │
│  Section Title (20px Semibold)          │
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                │
│                                         │
│  Card Name (16px Semibold)              │
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                │
│                                         │
│  Card Role (14px Regular)               │
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                │
│                                         │
│  Body Text (16px Regular)               │
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                │
│                                         │
│  Label (12px Medium)                    │
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                │
│                                         │
│  Metadata (12px Regular)                │
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                │
│                                         │
└─────────────────────────────────────────┘
```

---

## Icon Reference

### Card Icons
- 💰 **Salary Band**: Shows salary level (L1-L6)
- 👤 **PF Indicator**: Provident Fund status
- 💵 **TDS Indicator**: Tax deduction status

### Status Badges
- 🟢 **Active**: Employee is currently working
- 🟠 **On Leave**: Employee is on leave

### Navigation Icons
- ← **Previous**: Navigate to previous cards
- → **Next**: Navigate to next cards
- ✕ **Close**: Close detail panel
- 📍 **Location**: City/location marker

---

## Animation Showcase

### Hover Animation Sequence
```
Frame 1 (0ms):    Normal state
Frame 2 (50ms):   Begin elevation
Frame 3 (125ms):  Halfway elevated
Frame 4 (250ms):  Fully elevated + accent bar + glow

Duration: 250ms
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

### Panel Slide-In Sequence
```
Frame 1 (0ms):    Off-screen right (translateX(100%))
Frame 2 (100ms):  Quarter visible
Frame 3 (200ms):  Half visible
Frame 4 (350ms):  Fully visible (translateX(0))

Duration: 350ms
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Accessibility Indicators

### Focus Indicators
```
Keyboard Focus:
╔══════════════╗
║   Element    ║  ← 2px indigo outline
╚══════════════╝    2px offset

Mouse Hover:
┌──────────────┐
│   Element    │  ← Elevation + glow
└──────────────┘
```

### ARIA Labels
```
<button aria-label="Previous employees">
  ←
</button>

<div role="button" aria-label="View details for Sarah Anderson">
  [Employee Card]
</div>

<div role="dialog" aria-modal="true" aria-labelledby="detailPanelTitle">
  [Detail Panel Content]
</div>
```

---

**Note**: These are ASCII art representations. The actual interface features:
- High-resolution images and icons
- Smooth gradients and shadows
- Inter font family
- Subtle animations and transitions
- Professional polish and attention to detail

---

## 📸 Taking Screenshots

To capture screenshots of the actual interface:

1. Open `index.html` in your browser
2. Use browser DevTools to test different viewport sizes
3. Take screenshots of:
   - Desktop view (1920px)
   - Tablet view (1024px)
   - Mobile view (480px)
   - Card hover states
   - Detail panel open
   - Different carousels
   - Focus states (keyboard navigation)

---

**The actual interface is even more beautiful than these ASCII representations suggest!** ✨

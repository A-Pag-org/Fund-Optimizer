# Employee Directory - Netflix-Style UI

A state-of-the-art, minimalistic employee browsing interface with Netflix-style horizontal carousels and detailed employee information panels.

## 🎨 Design Philosophy

This application embodies:
- **Minimalistic Design**: Clean, uncluttered interface focusing on content
- **Modern Aesthetics**: Teal-green dark theme with vibrant yellow accents
- **Smooth Interactions**: Fluid animations and transitions
- **Accessibility First**: Full keyboard navigation and ARIA support
- **Responsive Excellence**: Perfect experience across all devices

## ✨ Features

### 1. Netflix-Style Carousels
- **Three Carousel Rows**: All Employees, Recently Active, By Program
- **Smooth Navigation**: Arrow buttons, keyboard controls, touch swipe
- **Responsive Grid**: Automatically adjusts card count per row
  - Desktop (1920px+): 5-6 cards
  - Desktop (1440px): 4 cards
  - Tablet (1024px): 3 cards
  - Mobile Large (768px): 2 cards
  - Mobile (480px): 1 card

### 2. Employee Cards
Each card displays:
- **Avatar** with status indicator (active/on leave)
- **Name** and **Role**
- **Location** with icon
- **Program Tags**
- **Fund Allocation** progress bar with percentage
- **Quick Info Icons**: Salary Band, PF Indicator, TDS Indicator (with tooltips)

#### Card States
- **Normal**: Default appearance
- **Hover**: Elevated with glow effect
- **Focus**: Keyboard focus outline
- **Selected**: When detail panel is open
- **Disabled**: Grayed out for missing data
- **Loading**: Skeleton animation

### 3. Detail Panel (Side Drawer)
Opens on card click with comprehensive employee information:

#### Sections:
1. **Header**
   - Large avatar with status badge
   - Name, role, and employee ID

2. **Basic Information**
   - Joining date
   - Location
   - Current project
   - Current program

3. **Compensation**
   - Gross salary
   - Net salary
   - PF deduction
   - TDS deduction
   - Salary band
   - PF indicator

4. **Fund Allocation**
   - Breakdown by donor/fund
   - Visual progress bars
   - Percentage distribution

5. **Last Movement**
   - Movement path (from → to)
   - Date of transfer

6. **Recent History Timeline**
   - Chronological events
   - Dates, titles, descriptions
   - Visual timeline connector

7. **Action Button**
   - "Include in Simulation" CTA
   - Adds employee to simulation list

### 4. Navigation Controls

#### Mouse
- Click arrow buttons to navigate carousels
- Click cards to view details
- Click overlay or X to close detail panel
- Horizontal scroll with mouse wheel

#### Keyboard
- `Tab` to navigate between interactive elements
- `Enter` or `Space` to activate cards
- `Arrow Left/Right` to navigate within carousel when card is focused
- `Escape` to close detail panel
- Focus trap within detail panel

#### Touch
- Swipe left/right on carousels
- Tap cards to view details
- Tap overlay to close detail panel

### 5. Simulation Management
- Add employees to simulation list
- Track simulation count in header
- View simulation list (button in header)
- Visual feedback notifications

## 🎯 Accessibility Features

### ARIA Implementation
- `role="region"` for carousel sections
- `role="button"` for interactive cards
- `role="dialog"` with `aria-modal="true"` for detail panel
- `aria-label` for all interactive elements
- `aria-labelledby` for panel title

### Keyboard Navigation
- Full keyboard support for all interactions
- Visible focus indicators
- Focus trap in modal/drawer
- Logical tab order

### Visual Accessibility
- High contrast text (WCAG AA compliant)
- Clear focus indicators
- Reduced motion support via CSS media query
- Screen reader friendly labels

## 🎨 Color Palette

```css
Background Colors:
- Primary: #1F2E2E (Dark teal)
- Secondary: #283C3C (Medium teal)
- Tertiary: #324646 (Lighter teal)
- Card: #355050 (Card background)

Text Colors:
- Primary: #E6ECEC (Light gray)
- Secondary: #B0C0C0 (Medium gray)
- Tertiary: #8a9999 (Muted gray)

Accent Colors:
- Primary: #FDDC00 (Bright yellow)
- Secondary: #E6C300 (Dark yellow)
- Gradient: Yellow → Dark yellow

Status Colors:
- Success: #3FBF7F (Teal green) - Active status
- Warning: #FDDC00 (Yellow) - On leave
- Danger: #ef4444 (Red)
- Info: #5dbbdb (Cyan)
```

## 🏗️ Architecture

### File Structure
```
.
├── index.html          # Main HTML structure
├── styles.css          # Complete styling system
├── app.js             # Application logic
├── data.js            # Mock employee data
└── README.md          # Documentation
```

### State Management
```javascript
state = {
    simulationList: [],              // Employees added to simulation
    activeCarousels: {},             // Current carousel positions
    currentDetailEmployee: null      // Currently viewed employee
}
```

### Key Functions

#### Carousel Management
- `initializeCarousels()` - Setup all carousels
- `renderCarousel()` - Render cards in carousel
- `navigateCarousel()` - Handle navigation
- `updateCarouselButtons()` - Enable/disable nav buttons

#### Card Rendering
- `createEmployeeCard()` - Generate card HTML
- Card event listeners for click and keyboard

#### Detail Panel
- `openDetailPanel()` - Show employee details
- `closeDetailPanel()` - Close panel
- `createDetailPanelContent()` - Generate detail HTML
- `setupFocusTrap()` - Trap focus in modal

#### Simulation
- `addToSimulation()` - Add employee to list
- `updateSimulationCount()` - Update counter
- `viewSimulation()` - View simulation list

#### Utilities
- `formatCurrency()` - Format monetary values
- `formatDate()` - Format date strings
- `showNotification()` - Display toast messages

## 📱 Responsive Breakpoints

```css
Desktop Large: 1920px+  (5-6 cards)
Desktop:       1440px   (4 cards)
Tablet:        1024px   (3 cards)
Mobile Large:  768px    (2 cards)
Mobile:        480px    (1 card)
```

## 🚀 Usage

### Basic Setup
1. Open `index.html` in a modern web browser
2. No build process or dependencies required
3. Works offline (uses CDN fonts)

### Adding New Employees
Add employee objects to the `EMPLOYEES` array in `data.js`:

```javascript
{
    id: "EMP999",
    name: "John Doe",
    role: "Role Title",
    location: "City",
    avatar: "https://i.pravatar.cc/150?img=1",
    status: "active", // or "leave"
    joiningDate: "2020-01-01",
    currentProject: "Project Name",
    currentProgram: "Program Name",
    grossSalary: 100000,
    netSalary: 75000,
    pfDeduction: 12000,
    tdsDeduction: 13000,
    salaryBand: "L4",
    pfIndicator: "Yes",
    tdsIndicator: "Standard",
    fundAllocation: 85,
    fundAllocations: [
        { donor: "Donor A", fund: "Fund Name", percentage: 85 }
    ],
    lastMovement: {
        from: "Previous Project",
        to: "Current Project",
        date: "2025-01-01"
    },
    history: [
        {
            date: "2025-01-01",
            title: "Event Title",
            description: "Event description"
        }
    ]
}
```

### Customizing Styles
All design tokens are defined as CSS variables in `:root`:
- Colors: `--color-*`
- Spacing: `--spacing-*`
- Typography: `--font-*`
- Borders: `--border-radius-*`
- Shadows: `--shadow-*`
- Transitions: `--transition-*`

## 🎭 Interactions & Animations

### Card Hover Effects
- Elevation increase (translateY + scale)
- Shadow expansion with glow
- Accent bar reveal at top
- Border color transition
- Avatar border highlight

### Carousel Navigation
- Smooth scroll behavior
- Button scale on hover
- Disable state for boundaries
- Mouse wheel horizontal scroll
- Touch swipe support

### Detail Panel
- Slide-in from right
- Backdrop blur effect
- Focus trap activation
- Smooth close animation

### Micro-interactions
- Button press feedback
- Tooltip fade-in
- Progress bar animations
- Timeline connector
- Notification slide-in

## 🔧 Technical Details

### CSS Techniques
- CSS Grid for responsive layouts
- Flexbox for card content
- CSS custom properties (variables)
- CSS transforms for animations
- Backdrop filter for glassmorphism
- CSS gradients for accents

### JavaScript Features
- ES6+ syntax
- Event delegation
- State management
- Focus management
- Scroll behavior control
- Touch event handling
- Keyboard event handling

### Performance Optimizations
- `requestAnimationFrame` for scroll updates
- CSS `will-change` for animations
- Debounced resize handlers
- Smooth scroll with native CSS
- Lazy evaluation of states

## 🌐 Browser Support

### Recommended
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features Used
- CSS Grid
- CSS Custom Properties
- Backdrop Filter
- Smooth Scroll
- Touch Events
- Focus-visible

## 📝 License

This is a demonstration project for UI/UX design capabilities.

## 🤝 Contributing

This is a showcase project. Feel free to fork and adapt for your needs.

## 📞 Support

For questions or feedback about the design and implementation, please refer to the inline code comments and this documentation.

---

**Built with ❤️ and attention to detail**

*Design System: Minimalistic Dark Theme*  
*Framework: Vanilla JavaScript*  
*Styling: Pure CSS3*  
*No external dependencies*

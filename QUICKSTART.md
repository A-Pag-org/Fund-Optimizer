# Quick Start Guide

## 🚀 Get Started in 30 Seconds

### Step 1: Open the Application
Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Your browser, or
- Drag and drop into browser window

### Step 2: Explore the Interface

#### Browse Employees
- **Scroll through carousels** using arrow buttons or mouse wheel
- **Three sections available**:
  - All Employees (15 employees)
  - Recently Active (filtered by last 3 months)
  - By Program (program-based grouping)

#### View Employee Details
1. **Click any employee card** to open the detail panel
2. Review comprehensive information:
   - Personal details
   - Compensation breakdown
   - Fund allocation distribution
   - Movement history
   - Timeline of recent events
3. **Click "Include in Simulation"** to add to your simulation list
4. **Close panel** by clicking X, pressing Escape, or clicking outside

#### Navigation Options
- **Mouse**: Click arrows, scroll wheel, click cards
- **Keyboard**: Tab to navigate, Enter/Space to select, Arrow keys within carousels, Escape to close
- **Touch**: Swipe carousels, tap cards, tap to close

### Step 3: Manage Simulations
- Click **"View Simulation"** button in header to see your list
- Count updates automatically as you add employees
- Use simulation list for fund allocation planning

## 🎯 Key Features to Try

### 1. Responsive Design
Resize your browser to see the interface adapt:
- **Large screens**: 5-6 cards per row
- **Medium screens**: 3-4 cards per row
- **Small screens**: 1-2 cards per row

### 2. Card Interactions
Hover over cards to see:
- Elevation and shadow effects
- Accent bar animation
- Avatar border highlight
- Icon tooltips (hover over salary/PF/TDS icons)

### 3. Keyboard Navigation
Try these keyboard shortcuts:
- `Tab` - Move between elements
- `Shift + Tab` - Move backwards
- `Enter` or `Space` - Activate selected card
- `Arrow Left/Right` - Navigate within carousel (when card focused)
- `Escape` - Close detail panel

### 4. Accessibility Features
- Screen reader support via ARIA labels
- High contrast text for readability
- Focus indicators for keyboard navigation
- Focus trap in detail panel

## 📊 Understanding the Data

### Employee Card Shows:
- **Avatar**: Profile picture with status badge
- **Name & Role**: Employee identification
- **Location**: City information
- **Program Tag**: Current program assignment
- **Fund Allocation Bar**: Visual representation (0-100%)
- **Quick Icons**: Salary band, PF status, TDS status

### Detail Panel Shows:
1. **Basic Info**: Joining date, location, project, program
2. **Compensation**: Gross/net salary, deductions, salary band
3. **Fund Allocation**: Detailed breakdown by donor/fund
4. **Last Movement**: Transfer history (from → to)
5. **Timeline**: Recent events and milestones

## 🎨 Design Highlights

### Color System
- **Dark theme** for reduced eye strain
- **Indigo-purple gradients** for accents
- **Status indicators**: Green (active), Amber (on leave)
- **High contrast** text for readability

### Typography
- **Inter font family** for modern, clean appearance
- **Weight hierarchy**: Light (300) to Bold (700)
- **Responsive sizing** across devices

### Interactions
- **Smooth animations** (250-350ms transitions)
- **Hover effects** on all interactive elements
- **Loading states** for async operations
- **Toast notifications** for user feedback

## 🔧 Customization

### Quick Customizations

#### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-accent-primary: #6366f1;  /* Change to your brand color */
    --color-bg-primary: #0a0a0f;      /* Change background */
}
```

#### Add More Employees
Edit `data.js` and add to `EMPLOYEES` array:
```javascript
{
    id: "EMP016",
    name: "Your Name",
    role: "Your Role",
    // ... add all required fields
}
```

#### Adjust Card Count
Edit `styles.css` media queries:
```css
.carousel-track {
    grid-auto-columns: calc((100% - (var(--spacing-lg) * 4)) / 5);
    /* Change 5 to desired card count */
}
```

## 💡 Tips & Tricks

### Performance
- Interface is lightweight (no external dependencies)
- All animations use CSS transforms (GPU accelerated)
- Smooth scrolling with native browser APIs

### Best Practices
- Use keyboard navigation for efficiency
- Add employees to simulation as you browse
- Check fund allocation percentages for planning
- Review history timelines for context

### Mobile Usage
- Swipe left/right on carousels
- Tap cards to view details
- Works in portrait and landscape
- Optimized touch targets (minimum 44x44px)

## 🐛 Troubleshooting

### Cards Not Displaying?
- Check browser console for errors
- Ensure `data.js` is loaded before `app.js`
- Verify `EMPLOYEES` array has valid data

### Styles Not Applied?
- Clear browser cache
- Check `styles.css` is linked correctly
- Verify font CDN is accessible

### Carousel Not Scrolling?
- Check if carousel has enough cards to scroll
- Try keyboard navigation instead
- Verify buttons aren't disabled

## 📱 Device Testing

Tested and optimized for:
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablets (iPad, Android tablets)
- ✅ Mobile (iOS, Android)
- ✅ Browsers (Chrome, Firefox, Safari, Edge)

## 🎓 Learning Resources

### Understanding the Code
1. **HTML Structure**: `index.html` - Semantic markup
2. **Styling System**: `styles.css` - CSS Grid, Flexbox, Custom Properties
3. **Application Logic**: `app.js` - Vanilla JavaScript, Event handling
4. **Data Layer**: `data.js` - Mock data structure

### Key Concepts Used
- CSS Grid for responsive layouts
- CSS Custom Properties for theming
- Event delegation for performance
- Focus management for accessibility
- State management with plain objects

## 🎉 Next Steps

1. **Explore all features** - Click around, try different interactions
2. **Customize the design** - Make it match your brand
3. **Add real data** - Replace mock data with your employees
4. **Extend functionality** - Add filters, search, export features
5. **Deploy** - Host on any static web server

## 📞 Need Help?

- Check the full `README.md` for detailed documentation
- Review inline code comments for implementation details
- Inspect element in browser DevTools to understand structure

---

**Enjoy exploring your new Employee Directory! 🎊**

*Built with vanilla HTML, CSS, and JavaScript - no frameworks, no dependencies*

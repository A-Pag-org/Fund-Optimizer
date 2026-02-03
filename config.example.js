// Configuration Example File
// Copy this to config.js and customize as needed

const APP_CONFIG = {
    // ===================================
    // CAROUSEL SETTINGS
    // ===================================
    carousels: {
        // Number of cards to scroll per navigation click
        scrollAmount: 1,
        
        // Enable/disable auto-scroll on hover at edges
        autoScroll: false,
        
        // Carousel definitions
        sections: [
            {
                id: 'all-employees',
                title: 'All Employees',
                filter: 'getAllEmployees',  // Function name from data.js
                enabled: true
            },
            {
                id: 'recently-active',
                title: 'Recently Active',
                filter: 'getRecentlyActive',
                enabled: true
            },
            {
                id: 'by-program',
                title: 'By Program',
                filter: 'getByProgram',
                enabled: true
            }
            // Add more carousels as needed
        ]
    },
    
    // ===================================
    // DISPLAY SETTINGS
    // ===================================
    display: {
        // Show/hide elements on cards
        card: {
            showAvatar: true,
            showStatusBadge: true,
            showLocation: true,
            showTags: true,
            showFundAllocation: true,
            showIcons: true,
            
            // Icon display options
            icons: {
                salaryBand: true,
                pfIndicator: true,
                tdsIndicator: true
            }
        },
        
        // Detail panel sections
        detailPanel: {
            sections: {
                basicInfo: true,
                compensation: true,
                fundAllocation: true,
                lastMovement: true,
                historyTimeline: true
            }
        }
    },
    
    // ===================================
    // FEATURE FLAGS
    // ===================================
    features: {
        // Enable simulation functionality
        enableSimulation: true,
        
        // Enable search/filter
        enableSearch: false,
        
        // Enable export functionality
        enableExport: false,
        
        // Enable favorites/bookmarks
        enableFavorites: false,
        
        // Show loading states
        showLoadingStates: true,
        
        // Enable keyboard shortcuts
        enableKeyboardShortcuts: true,
        
        // Enable touch/swipe gestures
        enableTouchGestures: true
    },
    
    // ===================================
    // RESPONSIVE BREAKPOINTS
    // ===================================
    responsive: {
        breakpoints: {
            desktop_xl: 1920,    // 5-6 cards
            desktop: 1440,       // 4 cards
            tablet: 1024,        // 3 cards
            mobile_lg: 768,      // 2 cards
            mobile: 480          // 1 card
        },
        
        cardsPerRow: {
            desktop_xl: 5,
            desktop: 4,
            tablet: 3,
            mobile_lg: 2,
            mobile: 1
        }
    },
    
    // ===================================
    // THEME CUSTOMIZATION
    // ===================================
    theme: {
        // Override CSS variables
        colors: {
            // Primary brand color (affects accents, buttons, highlights)
            accentPrimary: '#6366f1',
            accentSecondary: '#8b5cf6',
            
            // Background colors
            bgPrimary: '#0a0a0f',
            bgSecondary: '#13131a',
            bgTertiary: '#1a1a24',
            
            // Status colors
            statusActive: '#10b981',
            statusLeave: '#f59e0b',
            statusInactive: '#6b7280'
        },
        
        // Typography
        typography: {
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            baseFontSize: '16px'
        },
        
        // Spacing multiplier (1.0 = default)
        spacingScale: 1.0,
        
        // Border radius scale (1.0 = default)
        borderRadiusScale: 1.0,
        
        // Animation speed multiplier (1.0 = normal, 0.5 = fast, 2.0 = slow)
        animationSpeed: 1.0
    },
    
    // ===================================
    // DATA SETTINGS
    // ===================================
    data: {
        // Data source
        source: 'local',  // 'local' | 'api' | 'mock'
        
        // API endpoint (if source is 'api')
        apiEndpoint: '/api/employees',
        
        // Refresh interval in milliseconds (0 = no auto-refresh)
        refreshInterval: 0,
        
        // Cache duration in milliseconds
        cacheDuration: 300000,  // 5 minutes
        
        // Items per page for pagination
        itemsPerPage: 50
    },
    
    // ===================================
    // SIMULATION SETTINGS
    // ===================================
    simulation: {
        // Maximum employees allowed in simulation
        maxEmployees: 20,
        
        // Show simulation summary
        showSummary: true,
        
        // Auto-calculate total fund allocation
        autoCalculate: true,
        
        // Export formats available
        exportFormats: ['JSON', 'CSV', 'PDF']
    },
    
    // ===================================
    // ACCESSIBILITY SETTINGS
    // ===================================
    accessibility: {
        // Announce changes to screen readers
        announceChanges: true,
        
        // High contrast mode
        highContrastMode: false,
        
        // Large text mode
        largeTextMode: false,
        
        // Reduce motion (override user preference)
        reduceMotion: null,  // null = use system preference, true/false = force
        
        // Focus indicator style
        focusStyle: 'outline',  // 'outline' | 'ring' | 'glow'
        
        // Keyboard navigation hints
        showKeyboardHints: false
    },
    
    // ===================================
    // PERFORMANCE SETTINGS
    // ===================================
    performance: {
        // Virtual scrolling for large datasets
        enableVirtualScroll: false,
        
        // Lazy load images
        lazyLoadImages: true,
        
        // Debounce scroll events (milliseconds)
        scrollDebounce: 16,  // ~60fps
        
        // Debounce resize events (milliseconds)
        resizeDebounce: 100,
        
        // Maximum cards to render initially
        initialRenderLimit: 100
    },
    
    // ===================================
    // LOCALIZATION
    // ===================================
    localization: {
        // Current locale
        locale: 'en-US',
        
        // Date format
        dateFormat: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        },
        
        // Currency format
        currencyFormat: {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        },
        
        // Custom labels
        labels: {
            allEmployees: 'All Employees',
            recentlyActive: 'Recently Active',
            byProgram: 'By Program',
            viewSimulation: 'View Simulation',
            includeInSimulation: 'Include in Simulation',
            alreadyInSimulation: 'Already in Simulation',
            closePanel: 'Close',
            loading: 'Loading...',
            noData: 'No employees found',
            error: 'An error occurred'
        }
    },
    
    // ===================================
    // ANALYTICS (Optional)
    // ===================================
    analytics: {
        // Enable analytics tracking
        enabled: false,
        
        // Analytics provider
        provider: 'google-analytics',  // 'google-analytics' | 'mixpanel' | 'custom'
        
        // Tracking ID
        trackingId: '',
        
        // Events to track
        trackEvents: {
            cardView: true,
            detailPanelOpen: true,
            simulationAdd: true,
            carouselNavigation: true
        }
    }
};

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Apply configuration to the application
 * Call this function before initializing the app
 */
function applyConfig(config) {
    // Apply theme colors
    if (config.theme?.colors) {
        const root = document.documentElement;
        Object.entries(config.theme.colors).forEach(([key, value]) => {
            const cssVar = '--color-' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
            root.style.setProperty(cssVar, value);
        });
    }
    
    // Apply animation speed
    if (config.theme?.animationSpeed) {
        const root = document.documentElement;
        const speed = config.theme.animationSpeed;
        root.style.setProperty('--transition-fast', `${150 * speed}ms cubic-bezier(0.4, 0, 0.2, 1)`);
        root.style.setProperty('--transition-base', `${250 * speed}ms cubic-bezier(0.4, 0, 0.2, 1)`);
        root.style.setProperty('--transition-slow', `${350 * speed}ms cubic-bezier(0.4, 0, 0.2, 1)`);
    }
    
    // Store config globally
    window.APP_CONFIG = config;
}

/**
 * Get configuration value
 * @param {string} path - Dot notation path (e.g., 'features.enableSimulation')
 * @param {*} defaultValue - Default value if path doesn't exist
 */
function getConfig(path, defaultValue = null) {
    const keys = path.split('.');
    let value = window.APP_CONFIG || APP_CONFIG;
    
    for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            return defaultValue;
        }
    }
    
    return value;
}

/**
 * Update configuration value
 * @param {string} path - Dot notation path
 * @param {*} value - New value
 */
function setConfig(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let target = window.APP_CONFIG || APP_CONFIG;
    
    for (const key of keys) {
        if (!(key in target)) {
            target[key] = {};
        }
        target = target[key];
    }
    
    target[lastKey] = value;
}

// ===================================
// EXAMPLE USAGE
// ===================================

/*
// 1. Apply configuration on page load
document.addEventListener('DOMContentLoaded', () => {
    applyConfig(APP_CONFIG);
});

// 2. Get configuration values
const simulationEnabled = getConfig('features.enableSimulation', true);
const accentColor = getConfig('theme.colors.accentPrimary', '#6366f1');

// 3. Update configuration dynamically
setConfig('theme.colors.accentPrimary', '#ff6b6b');
applyConfig(window.APP_CONFIG);

// 4. Check feature flags
if (getConfig('features.enableSearch')) {
    // Initialize search functionality
}
*/

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APP_CONFIG, applyConfig, getConfig, setConfig };
}

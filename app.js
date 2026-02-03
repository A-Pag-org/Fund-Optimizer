// ===================================
// STATE MANAGEMENT
// ===================================
const state = {
    simulationList: [],
    activeCarousels: {
        'all-employees': 0,
        'recently-active': 0,
        'by-program': 0
    },
    currentDetailEmployee: null
};

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
    initializeEventListeners();
    initializeKeyboardNavigation();
});

// ===================================
// CAROUSEL INITIALIZATION
// ===================================
function initializeCarousels() {
    // Populate carousels with employee cards
    renderCarousel('all-employees', getAllEmployees());
    renderCarousel('recently-active', getRecentlyActive());
    renderCarousel('by-program', getByProgram());
    
    // Update carousel navigation buttons
    updateCarouselButtons();
}

// ===================================
// CARD RENDERING
// ===================================
function renderCarousel(carouselId, employees) {
    const carouselTrack = document.getElementById(carouselId);
    if (!carouselTrack) return;
    
    carouselTrack.innerHTML = employees.map(employee => createEmployeeCard(employee)).join('');
    
    // Add click listeners to cards
    carouselTrack.querySelectorAll('.employee-card').forEach(card => {
        card.addEventListener('click', () => {
            const employeeId = card.dataset.employeeId;
            const employee = EMPLOYEES.find(emp => emp.id === employeeId);
            if (employee) {
                openDetailPanel(employee);
            }
        });
        
        // Add keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

function createEmployeeCard(employee) {
    const statusClass = employee.status === 'active' ? 'status-active' : 'status-leave';
    const statusText = employee.status === 'active' ? 'Active' : 'On Leave';
    
    return `
        <div class="employee-card" 
             data-employee-id="${employee.id}" 
             tabindex="0"
             role="button"
             aria-label="View details for ${employee.name}">
            <!-- Avatar -->
            <div class="card-avatar">
                <img src="${employee.avatar}" alt="${employee.name}">
                <div class="card-status-badge ${statusClass}" 
                     title="${statusText}"
                     aria-label="${statusText}"></div>
            </div>
            
            <!-- Info -->
            <div class="card-info">
                <h3 class="card-name">${employee.name}</h3>
                <p class="card-role">${employee.role}</p>
                
                <div class="card-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${employee.location}</span>
                </div>
                
                <!-- Tags -->
                <div class="card-tags">
                    <span class="card-tag">${employee.currentProgram}</span>
                </div>
                
                <!-- Fund Allocation -->
                <div class="card-fund">
                    <div class="card-fund-label">Fund Allocation: ${employee.fundAllocation}%</div>
                    <div class="card-fund-bar">
                        <div class="card-fund-fill" style="width: ${employee.fundAllocation}%"></div>
                    </div>
                </div>
                
                <!-- Icons -->
                <div class="card-icons">
                    <div class="card-icon" aria-label="Salary Band: ${employee.salaryBand}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        <span class="card-icon-tooltip">Salary Band: ${employee.salaryBand}</span>
                    </div>
                    <div class="card-icon" aria-label="PF: ${employee.pfIndicator}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span class="card-icon-tooltip">PF: ${employee.pfIndicator}</span>
                    </div>
                    <div class="card-icon" aria-label="TDS: ${employee.tdsIndicator}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span class="card-icon-tooltip">TDS: ${employee.tdsIndicator}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===================================
// CAROUSEL NAVIGATION
// ===================================
function initializeEventListeners() {
    // Carousel button controls
    document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const carouselId = btn.dataset.carousel;
            const isPrev = btn.classList.contains('carousel-btn-prev');
            navigateCarousel(carouselId, isPrev ? -1 : 1);
        });
    });
    
    // Detail panel close
    const closeBtn = document.getElementById('closeDetailPanel');
    const overlay = document.getElementById('detailPanelOverlay');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeDetailPanel);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeDetailPanel);
    }
    
    // View simulation button
    const viewSimBtn = document.getElementById('viewSimulation');
    if (viewSimBtn) {
        viewSimBtn.addEventListener('click', viewSimulation);
    }
    
    // Touch/swipe support for carousels
    document.querySelectorAll('.carousel-track').forEach(track => {
        let startX = 0;
        let scrollLeft = 0;
        
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });
        
        track.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - track.offsetLeft;
            const walk = (x - startX) * 2;
            track.scrollLeft = scrollLeft - walk;
        });
    });
    
    // Mouse wheel horizontal scroll
    document.querySelectorAll('.carousel-track').forEach(track => {
        track.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                track.scrollLeft += e.deltaY;
            }
        });
    });
}

function navigateCarousel(carouselId, direction) {
    const track = document.querySelector(`[data-carousel-track="${carouselId}"]`);
    if (!track) return;
    
    const cardWidth = track.querySelector('.employee-card')?.offsetWidth || 0;
    const gap = 24; // var(--spacing-lg)
    const scrollAmount = (cardWidth + gap) * direction;
    
    track.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
    
    // Update button states after scroll
    setTimeout(() => updateCarouselButtons(), 300);
}

function updateCarouselButtons() {
    document.querySelectorAll('.carousel-track').forEach(track => {
        const carouselId = track.dataset.carouselTrack;
        const prevBtn = document.querySelector(`.carousel-btn-prev[data-carousel="${carouselId}"]`);
        const nextBtn = document.querySelector(`.carousel-btn-next[data-carousel="${carouselId}"]`);
        
        if (prevBtn && nextBtn) {
            const isAtStart = track.scrollLeft <= 1;
            const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
            
            prevBtn.disabled = isAtStart;
            nextBtn.disabled = isAtEnd;
        }
    });
}

// Update buttons on scroll
document.querySelectorAll('.carousel-track').forEach(track => {
    track.addEventListener('scroll', () => {
        requestAnimationFrame(updateCarouselButtons);
    });
});

// ===================================
// KEYBOARD NAVIGATION
// ===================================
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close detail panel on Escape
        if (e.key === 'Escape') {
            const detailPanel = document.getElementById('detailPanel');
            if (detailPanel && detailPanel.classList.contains('active')) {
                closeDetailPanel();
            }
        }
        
        // Navigate carousels with arrow keys when focused
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList.contains('employee-card')) {
            const track = focusedElement.closest('.carousel-track');
            if (!track) return;
            
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextCard = focusedElement.nextElementSibling;
                if (nextCard) {
                    nextCard.focus();
                    nextCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevCard = focusedElement.previousElementSibling;
                if (prevCard) {
                    prevCard.focus();
                    prevCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            }
        }
    });
}

// ===================================
// DETAIL PANEL
// ===================================
function openDetailPanel(employee) {
    state.currentDetailEmployee = employee;
    const panel = document.getElementById('detailPanel');
    const body = document.getElementById('detailPanelBody');
    
    if (!panel || !body) return;
    
    // Render detail content
    body.innerHTML = createDetailPanelContent(employee);
    
    // Show panel
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Setup focus trap
    setupFocusTrap(panel);
    
    // Add simulation button listener
    const simBtn = body.querySelector('#addToSimulation');
    if (simBtn) {
        simBtn.addEventListener('click', () => addToSimulation(employee));
    }
    
    // Focus on close button
    setTimeout(() => {
        document.getElementById('closeDetailPanel')?.focus();
    }, 100);
}

function closeDetailPanel() {
    const panel = document.getElementById('detailPanel');
    if (!panel) return;
    
    panel.classList.remove('active');
    document.body.style.overflow = '';
    state.currentDetailEmployee = null;
}

function createDetailPanelContent(employee) {
    const statusClass = employee.status === 'active' ? 'status-active' : 'status-leave';
    const statusText = employee.status === 'active' ? 'Active' : 'On Leave';
    const isInSimulation = state.simulationList.some(emp => emp.id === employee.id);
    
    return `
        <!-- Header -->
        <div class="detail-header">
            <div class="detail-avatar">
                <img src="${employee.avatar}" alt="${employee.name}">
            </div>
            <div class="detail-status-badge ${statusClass}">${statusText}</div>
            <h2 class="detail-name" id="detailPanelTitle">${employee.name}</h2>
            <p class="detail-role">${employee.role}</p>
            <p class="detail-id">${employee.id}</p>
        </div>
        
        <!-- Basic Information -->
        <div class="detail-section">
            <h3 class="detail-section-title">Basic Information</h3>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-item-label">Joining Date</div>
                    <div class="detail-item-value">${formatDate(employee.joiningDate)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">Location</div>
                    <div class="detail-item-value">${employee.location}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">Current Project</div>
                    <div class="detail-item-value">${employee.currentProject}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">Current Program</div>
                    <div class="detail-item-value">${employee.currentProgram}</div>
                </div>
            </div>
        </div>
        
        <!-- Compensation -->
        <div class="detail-section">
            <h3 class="detail-section-title">Compensation</h3>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-item-label">Gross Salary</div>
                    <div class="detail-item-value highlight">${formatCurrency(employee.grossSalary)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">Net Salary</div>
                    <div class="detail-item-value highlight">${formatCurrency(employee.netSalary)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">PF Deduction</div>
                    <div class="detail-item-value">${formatCurrency(employee.pfDeduction)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">TDS Deduction</div>
                    <div class="detail-item-value">${formatCurrency(employee.tdsDeduction)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">Salary Band</div>
                    <div class="detail-item-value">${employee.salaryBand}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">PF Indicator</div>
                    <div class="detail-item-value">${employee.pfIndicator}</div>
                </div>
            </div>
        </div>
        
        <!-- Fund Allocation -->
        <div class="detail-section">
            <h3 class="detail-section-title">Fund Allocation (${employee.fundAllocation}% Total)</h3>
            <div class="fund-allocation-list">
                ${employee.fundAllocations.map(fund => `
                    <div class="fund-allocation-item">
                        <div class="fund-allocation-header">
                            <span class="fund-name">${fund.donor} - ${fund.fund}</span>
                            <span class="fund-percentage">${fund.percentage}%</span>
                        </div>
                        <div class="fund-bar">
                            <div class="fund-bar-fill" style="width: ${fund.percentage}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Last Movement -->
        <div class="detail-section">
            <h3 class="detail-section-title">Last Movement</h3>
            <div class="movement-item">
                <div class="movement-date">${formatDate(employee.lastMovement.date)}</div>
                <div class="movement-path">
                    <span class="movement-from">${employee.lastMovement.from}</span>
                    <span class="movement-arrow">→</span>
                    <span class="movement-to">${employee.lastMovement.to}</span>
                </div>
            </div>
        </div>
        
        <!-- History Timeline -->
        <div class="detail-section">
            <h3 class="detail-section-title">Recent History</h3>
            <div class="timeline">
                ${employee.history.map(item => `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-date">${formatDate(item.date)}</div>
                            <div class="timeline-title">${item.title}</div>
                            <div class="timeline-description">${item.description}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Footer Action -->
        <div class="detail-panel-footer">
            <button class="btn-primary" id="addToSimulation" ${isInSimulation ? 'disabled' : ''}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"></path>
                </svg>
                ${isInSimulation ? 'Already in Simulation' : 'Include in Simulation'}
            </button>
        </div>
    `;
}

function setupFocusTrap(panel) {
    const focusableElements = panel.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const trapFocus = (e) => {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    };
    
    panel.addEventListener('keydown', trapFocus);
}

// ===================================
// SIMULATION MANAGEMENT
// ===================================
function addToSimulation(employee) {
    if (state.simulationList.some(emp => emp.id === employee.id)) {
        return; // Already in simulation
    }
    
    state.simulationList.push(employee);
    updateSimulationCount();
    
    // Update button state
    const btn = document.getElementById('addToSimulation');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Already in Simulation
        `;
    }
    
    // Show success feedback
    showNotification(`${employee.name} added to simulation`);
}

function updateSimulationCount() {
    const countElement = document.getElementById('simulationCount');
    if (countElement) {
        countElement.textContent = state.simulationList.length;
    }
}

function viewSimulation() {
    if (state.simulationList.length === 0) {
        showNotification('No employees in simulation yet');
        return;
    }
    
    // This would open a simulation view - for now just log
    console.log('Simulation List:', state.simulationList);
    showNotification(`Viewing ${state.simulationList.length} employee(s) in simulation`);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 32px;
        right: 32px;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
        z-index: 300;
        animation: slideIn 0.3s ease-out;
        font-family: var(--font-family);
        font-weight: 500;
    `;
    notification.textContent = message;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-in reverse';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 3000);
}

// ===================================
// RESPONSIVE UPDATES
// ===================================
window.addEventListener('resize', () => {
    updateCarouselButtons();
});

// Initial button state update
window.addEventListener('load', () => {
    updateCarouselButtons();
});

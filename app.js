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
    initializeDonorCarousels();
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
// DONOR CAROUSEL INITIALIZATION
// ===================================
function initializeDonorCarousels() {
    // Populate donor carousels
    renderDonorCarousel('all-donors', getAllDonors());
    renderDonorCarousel('donors-warning', getDonorsByWarningStatus());
    
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
// DONOR CARD RENDERING
// ===================================
function renderDonorCarousel(carouselId, donors) {
    const carouselTrack = document.getElementById(carouselId);
    if (!carouselTrack) return;
    
    carouselTrack.innerHTML = donors.map(donor => createDonorCard(donor)).join('');
    
    // Add click listeners to cards
    carouselTrack.querySelectorAll('.donor-card').forEach(card => {
        card.addEventListener('click', () => {
            const donorId = card.dataset.donorId;
            const donor = DONORS.find(d => d.id === donorId);
            if (donor) {
                openDonorDetailPanel(donor);
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

function createDonorCard(donor) {
    const usagePercentage = getDonorUsagePercentage(donor);
    const isWarning = isDonorInWarning(donor);
    const warningClass = isWarning ? 'donor-warning' : '';
    const usageFillClass = usagePercentage >= 90 ? 'critical' : (isWarning ? 'warning' : '');
    
    // Map donor type to CSS class
    const typeClassMap = {
        'National': 'donor-type-national',
        'International': 'donor-type-international',
        'CSR': 'donor-type-csr',
        'FCRA': 'donor-type-fcra',
        'Admin Overhead': 'donor-type-admin'
    };
    const typeClass = typeClassMap[donor.type] || 'donor-type-national';
    
    return `
        <div class="donor-card ${warningClass}" 
             data-donor-id="${donor.id}" 
             tabindex="0"
             role="button"
             aria-label="View details for ${donor.name}">
            
            <!-- Donor Header -->
            <div class="donor-card-header">
                <div class="donor-type-badge ${typeClass}">
                    ${donor.type}
                </div>
                <h3 class="donor-name">${donor.name}</h3>
            </div>
            
            <!-- Amounts -->
            <div class="donor-amounts">
                <div class="donor-amount-item">
                    <div class="donor-amount-label">Total Fund</div>
                    <div class="donor-amount-value">${formatCurrency(donor.totalFund)}</div>
                </div>
                <div class="donor-amount-item">
                    <div class="donor-amount-label">Available</div>
                    <div class="donor-amount-value ${isWarning ? 'warning' : ''}">${formatCurrency(donor.availableBalance)}</div>
                </div>
            </div>
            
            <!-- Usage Bar -->
            <div class="donor-usage">
                <div class="donor-usage-label">
                    <span>Fund Utilization</span>
                    <span class="donor-usage-percentage ${isWarning ? 'warning' : ''}">${usagePercentage}%</span>
                </div>
                <div class="donor-usage-bar">
                    <div class="donor-usage-fill ${usageFillClass}" style="width: ${usagePercentage}%"></div>
                </div>
            </div>
            
            <!-- Constraints -->
            <div class="donor-constraints">
                <div class="donor-constraint-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>FCRA: ${donor.constraints.fcra ? 'Yes' : 'No'}</span>
                </div>
                <div class="donor-constraint-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${donor.constraints.region}</span>
                </div>
                <div class="donor-constraint-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>${donor.constraints.purpose}</span>
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
// DONOR DETAIL PANEL
// ===================================
function openDonorDetailPanel(donor) {
    state.currentDetailEmployee = donor; // Reuse the same state property
    const panel = document.getElementById('detailPanel');
    const body = document.getElementById('detailPanelBody');
    
    if (!panel || !body) return;
    
    // Render donor detail content
    body.innerHTML = createDonorDetailPanelContent(donor);
    
    // Show panel
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Setup focus trap
    setupFocusTrap(panel);
    
    // Add button listeners
    const allocateBtn = body.querySelector('#allocateToSimulation');
    const viewLinkedBtn = body.querySelector('#viewLinkedEmployees');
    
    if (allocateBtn) {
        allocateBtn.addEventListener('click', () => allocateDonorToSimulation(donor));
    }
    
    if (viewLinkedBtn) {
        viewLinkedBtn.addEventListener('click', () => viewLinkedEmployees(donor));
    }
    
    // Focus on close button
    setTimeout(() => {
        document.getElementById('closeDetailPanel')?.focus();
    }, 100);
}

function createDonorDetailPanelContent(donor) {
    const usagePercentage = getDonorUsagePercentage(donor);
    const isWarning = isDonorInWarning(donor);
    
    const typeClassMap = {
        'National': 'donor-type-national',
        'International': 'donor-type-international',
        'CSR': 'donor-type-csr',
        'FCRA': 'donor-type-fcra',
        'Admin Overhead': 'donor-type-admin'
    };
    const typeClass = typeClassMap[donor.type] || 'donor-type-national';
    
    return `
        <!-- Header -->
        <div class="detail-header">
            <div class="donor-type-badge ${typeClass}" style="margin-bottom: 16px;">
                ${donor.type}
            </div>
            <h2 class="detail-name" id="detailPanelTitle">${donor.name}</h2>
            <p class="detail-id">${donor.id}</p>
            ${isWarning ? `
                <div style="margin-top: 16px; padding: 12px; background: rgba(253, 220, 0, 0.1); border: 1px solid rgba(253, 220, 0, 0.3); border-radius: 8px; color: #FDDC00; font-size: 14px; text-align: center;">
                    ⚠️ Warning: ${usagePercentage}% of funds utilized
                </div>
            ` : ''}
        </div>
        
        <!-- Fund Summary -->
        <div class="detail-section">
            <h3 class="detail-section-title">Fund Summary</h3>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-item-label">Total Fund</div>
                    <div class="detail-item-value highlight">${formatCurrency(donor.totalFund)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">Used Amount</div>
                    <div class="detail-item-value">${formatCurrency(donor.usedAmount)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">Available Balance</div>
                    <div class="detail-item-value highlight">${formatCurrency(donor.availableBalance)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">Utilization</div>
                    <div class="detail-item-value ${isWarning ? 'warning' : ''}">${usagePercentage}%</div>
                </div>
            </div>
        </div>
        
        <!-- Contact Information -->
        ${donor.contact.allowed ? `
            <div class="detail-section">
                <h3 class="detail-section-title">Contact Information</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <div class="detail-item-label">Contact Person</div>
                        <div class="detail-item-value">${donor.contact.name}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">Email</div>
                        <div class="detail-item-value" style="font-size: 12px;">${donor.contact.email}</div>
                    </div>
                    ${donor.contact.phone ? `
                        <div class="detail-item">
                            <div class="detail-item-label">Phone</div>
                            <div class="detail-item-value">${donor.contact.phone}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        ` : ''}
        
        <!-- Constraints -->
        <div class="detail-section">
            <h3 class="detail-section-title">Fund Constraints</h3>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-item-label">FCRA Registered</div>
                    <div class="detail-item-value">${donor.constraints.fcra ? 'Yes' : 'No'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-item-label">Geographic Region</div>
                    <div class="detail-item-value">${donor.constraints.region}</div>
                </div>
                <div class="detail-item" style="grid-column: 1 / -1;">
                    <div class="detail-item-label">Purpose</div>
                    <div class="detail-item-value">${donor.constraints.purpose}</div>
                </div>
            </div>
        </div>
        
        <!-- Fund Breakdown by Purpose -->
        <div class="detail-section">
            <h3 class="detail-section-title">Fund Breakdown by Purpose</h3>
            <div class="fund-allocation-list">
                ${donor.fundBreakdown.map(fund => {
                    const percentage = Math.round((fund.allocated / fund.amount) * 100);
                    return `
                        <div class="fund-allocation-item">
                            <div class="fund-allocation-header">
                                <span class="fund-name">${fund.purpose}</span>
                                <span class="fund-percentage">${formatCurrency(fund.allocated)} / ${formatCurrency(fund.amount)}</span>
                            </div>
                            <div class="fund-bar">
                                <div class="fund-bar-fill" style="width: ${percentage}%"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        
        <!-- Disbursement Conditions -->
        <div class="detail-section">
            <h3 class="detail-section-title">Disbursement Conditions</h3>
            <div style="background: var(--color-bg-tertiary); padding: 16px; border-radius: 12px; border: 1px solid var(--color-border);">
                <ul style="list-style: none; padding: 0; margin: 0;">
                    ${donor.disbursementConditions.map(condition => `
                        <li style="padding: 8px 0; border-bottom: 1px solid var(--color-border); display: flex; gap: 12px; align-items: flex-start;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span style="color: var(--color-text-secondary); font-size: 14px;">${condition}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
        
        <!-- Reporting Timeline -->
        <div class="detail-section">
            <h3 class="detail-section-title">Reporting Timeline</h3>
            <div class="detail-item">
                <div class="detail-item-value" style="color: var(--color-text-secondary);">${donor.reportingTimeline}</div>
            </div>
        </div>
        
        <!-- City/Program Allocation -->
        <div class="detail-section">
            <h3 class="detail-section-title">City & Program Allocation</h3>
            <div class="timeline">
                ${donor.cityProgramAllocation.map(allocation => `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-title">${allocation.city} - ${allocation.program}</div>
                            <div class="timeline-description">Allocated: ${formatCurrency(allocation.allocated)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Linked Employees -->
        <div class="detail-section">
            <h3 class="detail-section-title">Linked Employees</h3>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${donor.linkedEmployees.map(empId => {
                    const emp = EMPLOYEES.find(e => e.id === empId);
                    return emp ? `
                        <span style="padding: 8px 12px; background: var(--color-bg-tertiary); border-radius: 8px; font-size: 12px; color: var(--color-text-secondary);">
                            ${emp.name}
                        </span>
                    ` : '';
                }).join('')}
            </div>
        </div>
        
        <!-- Footer Actions -->
        <div class="detail-panel-footer" style="display: flex; gap: 12px; flex-direction: column;">
            <button class="btn-primary" id="allocateToSimulation">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"></path>
                </svg>
                Allocate to Simulation
            </button>
            <button class="btn-secondary" id="viewLinkedEmployees" style="width: 100%;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                View Linked Employees (${donor.linkedEmployees.length})
            </button>
        </div>
    `;
}

function allocateDonorToSimulation(donor) {
    // Add donor to simulation
    showNotification(`${donor.name} allocated to simulation`);
}

function viewLinkedEmployees(donor) {
    closeDetailPanel();
    showNotification(`Showing ${donor.linkedEmployees.length} linked employees`);
    // Could open employee carousel filtered to linked employees
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
        background: linear-gradient(135deg, #FDDC00 0%, #E6C300 100%);
        color: #1F2E2E;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
        z-index: 300;
        animation: slideIn 0.3s ease-out;
        font-family: var(--font-family);
        font-weight: 600;
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

# FundFlow Demo Build Plan (Final v1.3)

**Status:** Locked and ready for Step-by-Step execution  
**Rule:** Build one small step at a time, verify with stakeholder before moving on.

---

## 1) Goals
- Deliver a **demo-ready, impressive, understandable** FundFlow app.
- Support **deep links** to employee, donor, and program detail pages.
- Build a **deterministic simulation** that is easy to explain.
- Use a **minimal, subtle, light-mode UI** based on the provided palette.

---

## 2) Scope Summary (Locked)
- **Data scale:** 50 employees, 6 donors, 3 programs  
- **Deep links:** Full detail pages  
- **Simulation:** Deterministic, donor preference-based  
- **Geography:** Region badges only  
- **Photos:** Public domain portraits  
- **Theme:** Light mode only

---

## 3) Routes & Deep Links
- `/dashboard`
- `/employees`, `/employees/:employeeId`
- `/donors`, `/donors/:donorId`
- `/programs`, `/programs/:programId`
- `/simulation`

**Rule:** Deep links always open full detail pages.

---

## 4) Regions (Badges)
Final list (confirmed):
- Delhi NCR  
- UP – Prayagraj  
- UP – Banaras  
- UP – Lucknow  
- Bihar – Gaya  
- Bihar – Muzaffarpur

---

## 5) Simulation Model (Deterministic)

### 5.1 Admin Cost by Donor Type
| Donor Type | Admin % |
|---|---:|
| International | 18% |
| India | 12% |
| CSR | 15% |
| HNI | 10% |

### 5.2 Allocation Formula (per donor)
DonorNet = contributionAmount * (1 - adminPct) ProgramAllocation = DonorNet * preferenceWeight

### 5.3 Remainder Allocation (Chosen: Option A)
If donor preference weights don’t sum to 100%, the remainder goes into a **General Fund** pool.

**Why:**  
- Transparent and easy to explain in the demo  
- Keeps donor intent intact  
- Lets us showcase “unrestricted funds” as a realistic feature

### 5.4 Monthly Runway
MonthlyBurn = sum(employeeMonthlyCost) + operationalOverhead RunwayMonths = TotalMonthlyFunding / MonthlyBurn

### 5.5 Outputs (Required)
- Impact score  
- Funded programs count  
- Monthly runway  
- Donor-wise net remaining  
- Admin cost % + amount  
- Allocation by geography  
- (Optional) Headcount affordability

---

## 6) Visual System (Light Mode)
**Palette usage:**
- Background: `#E6ECEC`
- Cards: `#FFFFFF`
- Primary text: `#1F2E2E`
- Secondary text: `#283C3C` (lower opacity)
- Borders: `#324646` at low opacity
- Brand/CTA: `#FDDC00` only

---

## 7) Incremental Delivery Plan (Micro-Steps)
**Rule:** Complete one micro-step at a time, get stakeholder approval before continuing.

### Step 1 — App Shell & Routing  
**1.1** Create app shell layout + basic page container  
**1.2** Add Navbar with placeholder links (no styling yet)  
**1.3** Wire top-level routes (`/dashboard`, `/employees`, `/donors`, `/programs`, `/simulation`)  
**1.4** Add deep link routes (`/employees/:id`, `/donors/:id`, `/programs/:id`)  
**1.5** Confirm all routes render stub pages  

---

### Step 2 — Types + Mock Data  
**2.1** Define core types (employee, donor, program, geography)  
**2.2** Add mock data subset (5 employees, 2 donors, 1 program)  
**2.3** Expand to full dataset (50/6/3)  
**2.4** Add public domain photo URLs  

---

### Step 3 — List Pages + Cards  
**3.1** Build base list layout for employees  
**3.2** Build EmployeeCard component (minimal styling)  
**3.3** Repeat for donors  
**3.4** Repeat for programs  

---

### Step 4 — Detail Pages  
**4.1** Employee detail page structure  
**4.2** Donor detail page structure  
**4.3** Program detail page structure  
**4.4** Add metrics sections  

---

### Step 5 — Simulation Engine  
**5.1** Write deterministic formulas (pure functions)  
**5.2** Implement donor admin cost rules  
**5.3** Implement donor preference allocation + general fund  
**5.4** Implement monthly runway  

---

### Step 6 — Simulation UI  
**6.1** Base Simulation page layout  
**6.2** Output cards (impact, runway, etc.)  
**6.3** Donor breakdown table  
**6.4** Geography badges  

---

### Step 7 — Visual Polish  
**7.1** Apply light palette tokens  
**7.2** Improve spacing/typography  
**7.3** Final alignment + CTA styling  

---

## 8) Known Issues (Resolved)
- **Dark palette vs light mode** → addressed with light background + dark accents.  
- **Geography mismatch** → corrected to Bihar – Muzaffarpur.  
- **Preference remainder** → resolved with General Fund pool.

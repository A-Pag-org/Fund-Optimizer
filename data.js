// Mock Employee Data
const EMPLOYEES = [
    {
        id: "EMP001",
        name: "Sarah Anderson",
        role: "Senior Program Manager",
        location: "New York",
        avatar: "https://i.pravatar.cc/150?img=1",
        status: "active",
        joiningDate: "2019-03-15",
        currentProject: "Education Initiative",
        currentProgram: "Community Development",
        grossSalary: 95000,
        netSalary: 72150,
        pfDeduction: 11400,
        tdsDeduction: 11450,
        salaryBand: "L4",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 87,
        fundAllocations: [
            { donor: "Foundation A", fund: "Education Fund", percentage: 60 },
            { donor: "Foundation B", fund: "Community Fund", percentage: 27 }
        ],
        lastMovement: {
            from: "Health Program",
            to: "Education Initiative",
            date: "2025-12-01"
        },
        history: [
            {
                date: "2025-12-01",
                title: "Program Transfer",
                description: "Transferred from Health Program to Education Initiative"
            },
            {
                date: "2025-09-15",
                title: "Salary Revision",
                description: "Annual increment - 8% increase"
            },
            {
                date: "2025-06-01",
                title: "Fund Reallocation",
                description: "Fund allocation adjusted to 87%"
            },
            {
                date: "2025-03-15",
                title: "Anniversary",
                description: "Completed 6 years with the organization"
            }
        ]
    },
    {
        id: "EMP002",
        name: "Michael Chen",
        role: "Technical Lead",
        location: "San Francisco",
        avatar: "https://i.pravatar.cc/150?img=12",
        status: "active",
        joiningDate: "2020-07-22",
        currentProject: "Digital Infrastructure",
        currentProgram: "Technology Development",
        grossSalary: 105000,
        netSalary: 79380,
        pfDeduction: 12600,
        tdsDeduction: 13020,
        salaryBand: "L5",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 92,
        fundAllocations: [
            { donor: "Tech Foundation", fund: "Innovation Fund", percentage: 70 },
            { donor: "Foundation C", fund: "Operations Fund", percentage: 22 }
        ],
        lastMovement: {
            from: "Platform Development",
            to: "Digital Infrastructure",
            date: "2025-11-10"
        },
        history: [
            {
                date: "2025-11-10",
                title: "Project Transition",
                description: "Moved to lead Digital Infrastructure project"
            },
            {
                date: "2025-08-20",
                title: "Promotion",
                description: "Promoted to Technical Lead"
            },
            {
                date: "2025-05-15",
                title: "Training Completion",
                description: "Completed Advanced Leadership Training"
            }
        ]
    },
    {
        id: "EMP003",
        name: "Emily Rodriguez",
        role: "Finance Manager",
        location: "Chicago",
        avatar: "https://i.pravatar.cc/150?img=5",
        status: "active",
        joiningDate: "2018-11-05",
        currentProject: "Financial Operations",
        currentProgram: "Operations & Finance",
        grossSalary: 88000,
        netSalary: 67100,
        pfDeduction: 10560,
        tdsDeduction: 10340,
        salaryBand: "L4",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 95,
        fundAllocations: [
            { donor: "Foundation A", fund: "Operations Fund", percentage: 95 }
        ],
        lastMovement: {
            from: "Accounting Team",
            to: "Financial Operations",
            date: "2025-08-01"
        },
        history: [
            {
                date: "2025-08-01",
                title: "Role Change",
                description: "Promoted to Finance Manager"
            },
            {
                date: "2025-04-10",
                title: "Certification",
                description: "Obtained CPA certification"
            },
            {
                date: "2024-11-05",
                title: "Anniversary",
                description: "Completed 6 years with the organization"
            }
        ]
    },
    {
        id: "EMP004",
        name: "David Kumar",
        role: "UX Designer",
        location: "Austin",
        avatar: "https://i.pravatar.cc/150?img=14",
        status: "active",
        joiningDate: "2021-02-10",
        currentProject: "User Experience Team",
        currentProgram: "Digital Products",
        grossSalary: 82000,
        netSalary: 62860,
        pfDeduction: 9840,
        tdsDeduction: 9300,
        salaryBand: "L3",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 78,
        fundAllocations: [
            { donor: "Tech Foundation", fund: "Product Fund", percentage: 50 },
            { donor: "Foundation B", fund: "Innovation Fund", percentage: 28 }
        ],
        lastMovement: {
            from: "Design Team",
            to: "User Experience Team",
            date: "2025-10-01"
        },
        history: [
            {
                date: "2025-10-01",
                title: "Team Transfer",
                description: "Joined specialized UX team"
            },
            {
                date: "2025-07-15",
                title: "Project Completion",
                description: "Successfully launched mobile app redesign"
            },
            {
                date: "2025-02-10",
                title: "Anniversary",
                description: "Completed 4 years with the organization"
            }
        ]
    },
    {
        id: "EMP005",
        name: "Jessica Taylor",
        role: "HR Business Partner",
        location: "Boston",
        avatar: "https://i.pravatar.cc/150?img=9",
        status: "leave",
        joiningDate: "2019-09-18",
        currentProject: "Talent Management",
        currentProgram: "Human Resources",
        grossSalary: 76000,
        netSalary: 58520,
        pfDeduction: 9120,
        tdsDeduction: 8360,
        salaryBand: "L3",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 85,
        fundAllocations: [
            { donor: "Foundation A", fund: "Operations Fund", percentage: 85 }
        ],
        lastMovement: {
            from: "Recruitment Team",
            to: "Talent Management",
            date: "2025-06-15"
        },
        history: [
            {
                date: "2025-12-15",
                title: "Leave",
                description: "Parental leave - 3 months"
            },
            {
                date: "2025-06-15",
                title: "Role Change",
                description: "Transitioned to HR Business Partner role"
            },
            {
                date: "2024-09-18",
                title: "Anniversary",
                description: "Completed 5 years with the organization"
            }
        ]
    },
    {
        id: "EMP006",
        name: "Robert Johnson",
        role: "Data Analyst",
        location: "Seattle",
        avatar: "https://i.pravatar.cc/150?img=15",
        status: "active",
        joiningDate: "2020-05-12",
        currentProject: "Analytics Platform",
        currentProgram: "Data & Insights",
        grossSalary: 79000,
        netSalary: 60650,
        pfDeduction: 9480,
        tdsDeduction: 8870,
        salaryBand: "L3",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 81,
        fundAllocations: [
            { donor: "Tech Foundation", fund: "Data Fund", percentage: 60 },
            { donor: "Foundation C", fund: "Research Fund", percentage: 21 }
        ],
        lastMovement: {
            from: "BI Team",
            to: "Analytics Platform",
            date: "2025-09-20"
        },
        history: [
            {
                date: "2025-09-20",
                title: "Project Assignment",
                description: "Assigned to Analytics Platform development"
            },
            {
                date: "2025-05-12",
                title: "Anniversary",
                description: "Completed 5 years with the organization"
            }
        ]
    },
    {
        id: "EMP007",
        name: "Maria Garcia",
        role: "Content Strategist",
        location: "Miami",
        avatar: "https://i.pravatar.cc/150?img=10",
        status: "active",
        joiningDate: "2021-08-30",
        currentProject: "Content Development",
        currentProgram: "Communications",
        grossSalary: 71000,
        netSalary: 54990,
        pfDeduction: 8520,
        tdsDeduction: 7490,
        salaryBand: "L2",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 74,
        fundAllocations: [
            { donor: "Foundation B", fund: "Marketing Fund", percentage: 45 },
            { donor: "Foundation A", fund: "Communications Fund", percentage: 29 }
        ],
        lastMovement: {
            from: "Marketing Team",
            to: "Content Development",
            date: "2025-07-10"
        },
        history: [
            {
                date: "2025-07-10",
                title: "Team Transfer",
                description: "Moved to specialized content team"
            },
            {
                date: "2025-04-20",
                title: "Award",
                description: "Employee of the Quarter - Q1 2025"
            }
        ]
    },
    {
        id: "EMP008",
        name: "James Wilson",
        role: "DevOps Engineer",
        location: "Denver",
        avatar: "https://i.pravatar.cc/150?img=13",
        status: "active",
        joiningDate: "2020-01-20",
        currentProject: "Infrastructure Team",
        currentProgram: "Technology Operations",
        grossSalary: 98000,
        netSalary: 74130,
        pfDeduction: 11760,
        tdsDeduction: 12110,
        salaryBand: "L4",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 89,
        fundAllocations: [
            { donor: "Tech Foundation", fund: "Infrastructure Fund", percentage: 89 }
        ],
        lastMovement: {
            from: "Cloud Team",
            to: "Infrastructure Team",
            date: "2025-11-05"
        },
        history: [
            {
                date: "2025-11-05",
                title: "Role Expansion",
                description: "Leading infrastructure modernization"
            },
            {
                date: "2025-08-10",
                title: "Certification",
                description: "AWS Solutions Architect - Professional"
            },
            {
                date: "2025-01-20",
                title: "Anniversary",
                description: "Completed 5 years with the organization"
            }
        ]
    },
    {
        id: "EMP009",
        name: "Linda Martinez",
        role: "Research Coordinator",
        location: "Portland",
        avatar: "https://i.pravatar.cc/150?img=20",
        status: "active",
        joiningDate: "2019-06-25",
        currentProject: "Research & Development",
        currentProgram: "Impact Assessment",
        grossSalary: 73000,
        netSalary: 56450,
        pfDeduction: 8760,
        tdsDeduction: 7790,
        salaryBand: "L3",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 83,
        fundAllocations: [
            { donor: "Foundation C", fund: "Research Fund", percentage: 55 },
            { donor: "Foundation A", fund: "Development Fund", percentage: 28 }
        ],
        lastMovement: {
            from: "Field Research",
            to: "Research & Development",
            date: "2025-05-20"
        },
        history: [
            {
                date: "2025-05-20",
                title: "Program Change",
                description: "Transitioned to R&D coordination"
            },
            {
                date: "2024-06-25",
                title: "Anniversary",
                description: "Completed 5 years with the organization"
            }
        ]
    },
    {
        id: "EMP010",
        name: "Kevin Brown",
        role: "Marketing Manager",
        location: "Atlanta",
        avatar: "https://i.pravatar.cc/150?img=11",
        status: "active",
        joiningDate: "2018-04-12",
        currentProject: "Brand Strategy",
        currentProgram: "Marketing & Outreach",
        grossSalary: 91000,
        netSalary: 69160,
        pfDeduction: 10920,
        tdsDeduction: 10920,
        salaryBand: "L4",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 91,
        fundAllocations: [
            { donor: "Foundation B", fund: "Marketing Fund", percentage: 65 },
            { donor: "Foundation A", fund: "Outreach Fund", percentage: 26 }
        ],
        lastMovement: {
            from: "Digital Marketing",
            to: "Brand Strategy",
            date: "2025-10-15"
        },
        history: [
            {
                date: "2025-10-15",
                title: "Promotion",
                description: "Promoted to Marketing Manager"
            },
            {
                date: "2025-04-12",
                title: "Anniversary",
                description: "Completed 7 years with the organization"
            },
            {
                date: "2024-12-05",
                title: "Campaign Success",
                description: "Led successful Q4 campaign - 150% ROI"
            }
        ]
    },
    {
        id: "EMP011",
        name: "Sophie Lee",
        role: "Product Manager",
        location: "San Diego",
        avatar: "https://i.pravatar.cc/150?img=24",
        status: "active",
        joiningDate: "2021-03-08",
        currentProject: "Mobile Products",
        currentProgram: "Product Development",
        grossSalary: 102000,
        netSalary: 77010,
        pfDeduction: 12240,
        tdsDeduction: 12750,
        salaryBand: "L5",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 88,
        fundAllocations: [
            { donor: "Tech Foundation", fund: "Product Fund", percentage: 88 }
        ],
        lastMovement: {
            from: "Web Products",
            to: "Mobile Products",
            date: "2025-12-10"
        },
        history: [
            {
                date: "2025-12-10",
                title: "Team Transfer",
                description: "Leading mobile product initiatives"
            },
            {
                date: "2025-09-01",
                title: "Product Launch",
                description: "Successfully launched iOS app v2.0"
            }
        ]
    },
    {
        id: "EMP012",
        name: "Christopher Davis",
        role: "Security Analyst",
        location: "Phoenix",
        avatar: "https://i.pravatar.cc/150?img=17",
        status: "active",
        joiningDate: "2020-10-05",
        currentProject: "Cybersecurity",
        currentProgram: "IT Security",
        grossSalary: 87000,
        netSalary: 66330,
        pfDeduction: 10440,
        tdsDeduction: 10230,
        salaryBand: "L4",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 94,
        fundAllocations: [
            { donor: "Tech Foundation", fund: "Security Fund", percentage: 94 }
        ],
        lastMovement: {
            from: "IT Support",
            to: "Cybersecurity",
            date: "2025-08-25"
        },
        history: [
            {
                date: "2025-08-25",
                title: "Role Change",
                description: "Moved to specialized security team"
            },
            {
                date: "2025-06-15",
                title: "Certification",
                description: "CISSP certification obtained"
            }
        ]
    },
    {
        id: "EMP013",
        name: "Amanda White",
        role: "Operations Manager",
        location: "Philadelphia",
        avatar: "https://i.pravatar.cc/150?img=16",
        status: "active",
        joiningDate: "2019-01-14",
        currentProject: "Operations Excellence",
        currentProgram: "Operations",
        grossSalary: 85000,
        netSalary: 64900,
        pfDeduction: 10200,
        tdsDeduction: 9900,
        salaryBand: "L4",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 90,
        fundAllocations: [
            { donor: "Foundation A", fund: "Operations Fund", percentage: 90 }
        ],
        lastMovement: {
            from: "Process Improvement",
            to: "Operations Excellence",
            date: "2025-09-01"
        },
        history: [
            {
                date: "2025-09-01",
                title: "Program Launch",
                description: "Initiated operations excellence program"
            },
            {
                date: "2025-01-14",
                title: "Anniversary",
                description: "Completed 6 years with the organization"
            }
        ]
    },
    {
        id: "EMP014",
        name: "Daniel Thompson",
        role: "Software Engineer",
        location: "Houston",
        avatar: "https://i.pravatar.cc/150?img=18",
        status: "active",
        joiningDate: "2021-11-22",
        currentProject: "Platform Development",
        currentProgram: "Engineering",
        grossSalary: 93000,
        netSalary: 70530,
        pfDeduction: 11160,
        tdsDeduction: 11310,
        salaryBand: "L4",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 86,
        fundAllocations: [
            { donor: "Tech Foundation", fund: "Engineering Fund", percentage: 65 },
            { donor: "Foundation C", fund: "Innovation Fund", percentage: 21 }
        ],
        lastMovement: {
            from: "Frontend Team",
            to: "Platform Development",
            date: "2025-11-22"
        },
        history: [
            {
                date: "2025-11-22",
                title: "Anniversary & Transfer",
                description: "Completed 4 years and moved to platform team"
            },
            {
                date: "2025-07-10",
                title: "Project Completion",
                description: "Led successful migration to microservices"
            }
        ]
    },
    {
        id: "EMP015",
        name: "Rachel Green",
        role: "Community Manager",
        location: "Nashville",
        avatar: "https://i.pravatar.cc/150?img=23",
        status: "active",
        joiningDate: "2020-08-17",
        currentProject: "Community Engagement",
        currentProgram: "Partnerships",
        grossSalary: 68000,
        netSalary: 52700,
        pfDeduction: 8160,
        tdsDeduction: 7140,
        salaryBand: "L2",
        pfIndicator: "Yes",
        tdsIndicator: "Standard",
        fundAllocation: 79,
        fundAllocations: [
            { donor: "Foundation B", fund: "Community Fund", percentage: 50 },
            { donor: "Foundation A", fund: "Partnerships Fund", percentage: 29 }
        ],
        lastMovement: {
            from: "Social Media Team",
            to: "Community Engagement",
            date: "2025-06-30"
        },
        history: [
            {
                date: "2025-06-30",
                title: "Role Expansion",
                description: "Expanded to full community management"
            },
            {
                date: "2025-03-15",
                title: "Award",
                description: "Community Impact Award 2025"
            }
        ]
    }
];

// Filter functions for different carousels
function getAllEmployees() {
    return EMPLOYEES;
}

function getRecentlyActive() {
    return EMPLOYEES.filter(emp => {
        const lastDate = new Date(emp.history[0]?.date || emp.joiningDate);
        const monthsAgo = new Date();
        monthsAgo.setMonth(monthsAgo.getMonth() - 3);
        return lastDate > monthsAgo;
    }).sort((a, b) => {
        return new Date(b.history[0]?.date || b.joiningDate) - new Date(a.history[0]?.date || a.joiningDate);
    });
}

function getByProgram() {
    // Group by program and return employees from diverse programs
    return EMPLOYEES.filter((emp, index) => index % 2 === 0);
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

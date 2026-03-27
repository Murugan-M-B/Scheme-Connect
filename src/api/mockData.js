// ─── src/api/mockData.js ──────────────────────────────────────────────────────

export let users = [
  { id: 1, username: 'citizen', password: 'password', role: 'USER', name: 'Murugan', email: 'murugan@example.com', profile: { age: 25, gender: 'Male', income: 150000 } },
  { id: 2, username: 'admin', password: 'admin', role: 'ADMIN', name: 'System Admin', email: 'admin@tn.gov.in' }
];

export let schemes = [
  { id: 1, title: 'Pudhumai Penn Scheme', department: 'Social Welfare', category: "Women's Welfare",
    description: 'Financial assistance of ₹1000/month for girl students from govt schools (6–12th) to pursue higher education.',
    benefits: ['₹1000 monthly stipend', 'Direct Bank Transfer'], deadline: '2025-12-31',
    eligibilityRules: { gender: 'Female', minAge: 17, maxAge: 25, maxIncome: 250000 },
    documents: ['School Transfer Certificate', 'Bank Passbook', 'Community Certificate'],
    officialUrl: 'https://www.pudhumaippenn.tn.gov.in/', active: true },

  { id: 2, title: 'Naan Mudhalvan Scheme', department: 'Skill Development', category: 'Education & Youth',
    description: 'Free skill development and training programme for youth to enhance employability.',
    benefits: ['Free training', 'Certification', 'Job placement assistance'], deadline: '2025-12-31',
    eligibilityRules: { minAge: 18, maxAge: 35 },
    documents: ['Age Proof', 'Educational Certificate', 'Bank Passbook'],
    officialUrl: 'https://www.naanmudhalvan.tn.gov.in/', active: true },

  { id: 3, title: 'KMUT - Kalaignar Magalir Urimai Thogai', department: 'Social Welfare', category: "Women's Welfare",
    description: '₹1000/month financial assistance to women heads of household families.',
    benefits: ['₹1000 monthly', 'Direct Bank Transfer'], deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', minAge: 21 },
    documents: ['Ration Card', 'Bank Passbook', 'Residence Proof'],
    officialUrl: 'https://www.tn.gov.in/scheme/data_view/3957', active: true },

  { id: 4, title: 'Chief Minister\'s Breakfast Scheme', department: 'School Education', category: 'Education & Youth',
    description: 'Free nutritious breakfast for government primary school students to improve attendance.',
    benefits: ['Free daily breakfast', 'Improved nutrition'], deadline: 'Ongoing',
    eligibilityRules: { maxAge: 14 },
    documents: ['School Admission Record'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { id: 5, title: 'Free Bus Pass for Students', department: 'Transport', category: "Women's Welfare",
    description: 'Free bus travel for students and women in Tamil Nadu government buses.',
    benefits: ['Free travel on all govt buses', 'Monthly pass'], deadline: 'Ongoing',
    eligibilityRules: {},
    documents: ['Student ID / Voter ID', 'Application Form'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { id: 6, title: 'Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme', department: 'Higher Education', category: 'Education & Youth',
    description: 'Monthly financial assistance for first-generation graduates from low income families.',
    benefits: ['₹1000/month for UG', '₹1500/month for PG'], deadline: '2025-12-31',
    eligibilityRules: { minAge: 17, maxAge: 30, maxIncome: 200000 },
    documents: ['College Fee Receipt', 'Income Certificate', 'Bank Passbook'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { id: 7, title: 'PM Kisan Samman Nidhi', department: 'Agriculture', category: 'Agriculture & Housing',
    description: '₹6000/year income support to farmer families across India.',
    benefits: ['₹6000/year in 3 instalments', 'Direct Bank Transfer'], deadline: 'Ongoing',
    eligibilityRules: { maxIncome: 200000 },
    documents: ['Land Records', 'Bank Passbook', 'Aadhaar (on official portal)'],
    officialUrl: 'https://pmkisan.gov.in/', active: true },

  { id: 8, title: 'Tamil Nadu Housing Board Scheme', department: 'Rural Development', category: 'Agriculture & Housing',
    description: 'Subsidized housing for economically weaker sections and low income groups.',
    benefits: ['Subsidized plots/flats', 'Loan assistance'], deadline: '2025-06-30',
    eligibilityRules: { maxIncome: 300000 },
    documents: ['Income Proof', 'Residence Proof', 'Application Form'],
    officialUrl: 'https://www.tnhb.gov.in/', active: true },

  { id: 9, title: 'Anaithu Grama Anna Marumalarchi Thittam', department: 'Rural Development', category: 'Agriculture & Housing',
    description: 'Comprehensive rural development for infrastructure, sanitation, and livelihoods.',
    benefits: ['Infrastructure development', 'Livelihood support'], deadline: 'Ongoing',
    eligibilityRules: {},
    documents: ['Residence Proof', 'Application Form'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { id: 10, title: 'Dr. Muthulakshmi Reddy Maternity Assistance Scheme', department: 'Health & Family Welfare', category: 'Health & Social Security',
    description: '₹18000 financial aid for pregnant women for nutrition and maternal care.',
    benefits: ['₹18000 in instalments', 'Free check-ups'], deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', minAge: 18, maxIncome: 200000 },
    documents: ['Pregnancy Certificate', 'Bank Passbook', 'Ration Card'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { id: 11, title: 'Chief Minister\'s Comprehensive Health Insurance Scheme', department: 'Health & Family Welfare', category: 'Health & Social Security',
    description: 'Free health insurance up to ₹5 lakh per year for low income families.',
    benefits: ['₹5 lakh insurance cover', 'Free hospitalization', 'Cashless treatment'], deadline: 'Ongoing',
    eligibilityRules: { maxIncome: 72000 },
    documents: ['Ration Card', 'Residence Proof'],
    officialUrl: 'https://www.cmchistn.com/', active: true },

  { id: 12, title: 'Tamil Nadu Startup and Innovation Policy', department: 'MSME', category: 'Employment & Entrepreneurship',
    description: 'Support for startups including funding, mentorship, and incubation.',
    benefits: ['Seed funding', 'Mentorship', 'Tax benefits'], deadline: 'Ongoing',
    eligibilityRules: { minAge: 21, maxAge: 45 },
    documents: ['Business Plan', 'ID Proof', 'Bank Account Details'],
    officialUrl: 'https://www.startuptn.in/', active: true },

  { id: 13, title: 'Self Employment Scheme for Ex-Servicemen', department: 'Employment & Training', category: 'Employment & Entrepreneurship',
    description: 'Loans and subsidies for ex-servicemen to start small businesses.',
    benefits: ['Soft loans up to ₹10 lakh', 'Subsidy on interest'], deadline: 'Ongoing',
    eligibilityRules: { minAge: 25, maxAge: 60 },
    documents: ['Discharge Certificate', 'Bank Passbook', 'Business Plan'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { id: 14, title: 'Patta Chitta Land Record Digitization', department: 'Revenue', category: 'Health & Social Security',
    description: 'Online access to land records (Patta, Chitta, FMB) for Tamil Nadu citizens.',
    benefits: ['Online land records', 'Easy verification'], deadline: 'Ongoing',
    eligibilityRules: {},
    documents: ['Survey Number', 'ID Proof'],
    officialUrl: 'https://eservices.tn.gov.in/', active: true },

  { id: 15, title: 'Special Marriage Financial Assistance for Intercaste Marriages', department: 'Social Welfare', category: "Women's Welfare",
    description: '₹50000 assistance to couples from different castes to promote social harmony.',
    benefits: ['₹50000 one-time grant'], deadline: 'Ongoing',
    eligibilityRules: { minAge: 18 },
    documents: ['Marriage Certificate', 'Caste Certificates of Both', 'Bank Passbook'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { 
    id: 16, 
    title: 'Ulagam Ungal Kaiyil (Free Laptop Scheme)', 
    department: 'Higher Education', 
    category: 'Education & Youth',
    description: 'Distribution of high-spec laptops with AI tools to 20 lakh college students to bridge the digital divide.',
    benefits: ['Free Laptop (8GB RAM/256GB SSD)', 'Perplexity Pro Subscription', 'Windows 11 / BOSS Linux'], 
    deadline: '2026-12-31',
    eligibilityRules: { minAge: 17, residency: 'Tamil Nadu', collegeType: 'Govt/Aided' },
    documents: ['College ID', 'Aadhaar Card', 'UMIS Portal Registration'],
    officialUrl: 'https://www.tnesevai.co.in/', 
    active: true 
  },

  { 
    id: 17, 
    title: 'Tamil Pudhalvan Scheme', 
    department: 'Social Welfare', 
    category: 'Education & Youth',
    description: 'Financial assistance of ₹1000/month for boy students from govt schools (6–12th) to pursue higher education.',
    benefits: ['₹1000 monthly stipend', 'Direct Bank Transfer'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Male', minAge: 17, maxAge: 25 },
    documents: ['School TC', 'Aadhaar Card', 'Bank Passbook'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 18, 
    title: 'Makkalai Thedi Maruthuvam', 
    department: 'Health & Family Welfare', 
    category: 'Health & Social Security',
    description: 'Doorstep healthcare services including screening and medicine delivery for non-communicable diseases.',
    benefits: ['Free Doorstep Medicines', 'Free BP/Sugar Screening', 'Home-based Dialysis'], 
    deadline: 'Ongoing',
    eligibilityRules: { residency: 'Tamil Nadu' },
    documents: ['Family Card (Ration Card)', 'Aadhaar Card'],
    officialUrl: 'https://www.tnhealth.tn.gov.in/', 
    active: true 
  },

  { 
    id: 19, 
    title: 'Ungalai Thedi, Ungal Ooril', 
    department: 'Revenue & Disaster Management', 
    category: 'Citizenship & Public Services',
    description: 'District Collectors spend 24 hours in a taluk to ensure delivery of services and redress grievances.',
    benefits: ['Direct interaction with officials', 'On-the-spot grievance resolution'], 
    deadline: 'Monthly Rotation',
    eligibilityRules: {},
    documents: ['Grievance Application', 'ID Proof'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 20, 
    title: 'Chief Minister\'s Thayumanavar Thittam', 
    department: 'Rural Development', 
    category: 'Social Welfare & Empowerment',
    description: 'A poverty alleviation program targeting the poorest of the poor families for specialized support.',
    benefits: ['Customized livelihood support', 'Nutritional assistance', 'Housing priority'], 
    deadline: 'Ongoing',
    eligibilityRules: { maxIncome: 72000, category: 'Destitute' },
    documents: ['Income Certificate', 'Ration Card'],
    officialUrl: 'https://www.tnrd.tn.gov.in/', 
    active: true 
  },

  { 
    id: 21, 
    title: 'Vidiyal Payanam Thittam (Free Bus Travel)', 
    department: 'Transport', 
    category: 'Women\'s Welfare',
    description: 'Free travel for women, transgender persons, and persons with disabilities in town buses.',
    benefits: ['Zero-cost commuting in Ordinary Town Buses'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: ['Female', 'Transgender'] },
    documents: ['Not required (Direct benefit)'],
    officialUrl: 'https://www.tnstc.in/', 
    active: true 
  },

  { 
    id: 22, 
    title: 'Illam Thedi Kalvi', 
    department: 'School Education', 
    category: 'Education & Youth',
    description: 'Volunteer-led after-school education program to bridge learning gaps caused by school closures.',
    benefits: ['Free evening classes', 'Community-based learning'], 
    deadline: 'Ongoing',
    eligibilityRules: { maxAge: 14 },
    documents: ['School Enrollment Proof'],
    officialUrl: 'https://illamthedikalvi.tn.gov.in/', 
    active: true 
  },

  { 
    id: 23, 
    title: 'Kalaignar All Village Integrated Agriculture Development Programme', 
    department: 'Agriculture & Farmers Welfare', 
    category: 'Agriculture & Housing',
    description: 'Transforming agricultural activities in all village panchayats by improving water sources and fallow land cultivation.',
    benefits: ['Borewell/Tubewell for clusters', 'Farm ponds construction', 'Free saplings distribution'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Farmer', residency: 'Tamil Nadu' },
    documents: ['Patta/Chitta', 'Aadhaar Card', 'Farmer ID'],
    officialUrl: 'https://www.tnagrisnet.tn.gov.in/', 
    active: true 
  },

  { 
    id: 24, 
    title: 'Tamil Nadu CM Fellow Programme (TNCMFP)', 
    department: 'Special Programme Implementation', 
    category: 'Employment & Entrepreneurship',
    description: 'A two-year fellowship for young professionals to work with the government on policy implementation.',
    benefits: ['₹75,000 monthly stipend', 'Experience certificate from Govt of TN'], 
    deadline: '2026-05-15',
    eligibilityRules: { minAge: 22, maxAge: 30, education: 'Post Graduate' },
    documents: ['Degree Certificate', 'Proof of Work Experience', 'Aadhaar Card'],
    officialUrl: 'https://www.tn.gov.in/tncmfp', 
    active: true 
  },

  { 
    id: 25, 
    title: 'Innuyir Kaakum 48 - Nammai Kaakum 48', 
    department: 'Health & Family Welfare', 
    category: 'Health & Social Security',
    description: 'Free medical treatment for the first 48 hours to accident victims in empanelled hospitals.',
    benefits: ['Cashless treatment up to ₹1 Lakh', 'Coverage for non-residents in TN accidents'], 
    deadline: 'Ongoing',
    eligibilityRules: { accidentType: 'Road Traffic Accident' },
    documents: ['Not required for emergency entry', 'ID Proof for discharge'],
    officialUrl: 'https://www.tnhealth.tn.gov.in/', 
    active: true 
  },

  { 
    id: 26, 
    title: 'Free Bicycle Scheme', 
    department: 'School Education', 
    category: 'Education & Youth',
    description: 'Provision of free bicycles to students of Class 11 in Government and Government-aided schools.',
    benefits: ['Free high-quality bicycle'], 
    deadline: 'Annual Distribution',
    eligibilityRules: { class: 11, schoolType: 'Govt/Aided' },
    documents: ['School Identity Card', 'Bonafide Certificate'],
    officialUrl: 'https://www.tnschools.gov.in/', 
    active: true 
  },

  { 
    id: 27, 
    title: 'Sathiyavani Muthu Ammaiyar Free Sewing Machine Scheme', 
    department: 'Social Welfare & Women Empowerment', 
    category: 'Women\'s Welfare',
    description: 'Supply of free sewing machines to widows, deserted wives, and women from economically weaker sections.',
    benefits: ['Free motorized/manual sewing machine'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', minAge: 20, maxAge: 45, maxIncome: 100000 },
    documents: ['Income Certificate', 'Tailoring Course Certificate', 'Destitute/Widow Certificate'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 28, 
    title: 'BC/MBC/DNC Post-Matric Scholarship', 
    department: 'BC, MBC & Minorities Welfare', 
    category: 'Education & Youth',
    description: 'Scholarship for students belonging to Backward and Most Backward classes pursuing post-matric courses.',
    benefits: ['Tuition fee reimbursement', 'Special fee coverage', 'Exam fee waiver'], 
    deadline: '2026-03-31',
    eligibilityRules: { community: ['BC', 'MBC', 'DNC'], maxIncome: 250000 },
    documents: ['Community Certificate', 'Income Certificate', 'Bank Passbook'],
    officialUrl: 'https://ssp24-25.tnega.org/', 
    active: true 
  },

  { 
    id: 29, 
    title: 'UYEGP - Unemployed Youth Employment Generation Programme', 
    department: 'MSME', 
    category: 'Employment & Entrepreneurship',
    description: 'Providing loans and subsidies to unemployed youth for starting manufacturing or service ventures.',
    benefits: ['Loan up to ₹15 Lakhs', '25% Government Subsidy'], 
    deadline: 'Ongoing',
    eligibilityRules: { minAge: 18, maxAge: 45, maxIncome: 500000 },
    documents: ['Project Report', 'Educational Certificate', 'ID Proof'],
    officialUrl: 'https://www.msmeonline.tn.gov.in/uyegp/', 
    active: true 
  },

  { 
    id: 30, 
    title: 'Tamil Nadu Startup Seed Grant Fund (TANSEED)', 
    department: 'MSME', 
    category: 'Employment & Entrepreneurship',
    description: 'Financial support for early-stage startups in Tamil Nadu to help them build prototypes and launch.',
    benefits: ['Grant up to ₹10 Lakhs', 'Mentorship and incubation support'], 
    deadline: 'Rolling Basis',
    eligibilityRules: { entityType: 'Startup', residency: 'Tamil Nadu' },
    documents: ['Pitch Deck', 'DPIIT Recognition', 'Bank Details'],
    officialUrl: 'https://startuptn.in/', 
    active: true 
  },

  // --- 6. LABOUR WELFARE BOARD SCHEMES ---
  { 
    id: 31, 
    title: 'Educational Scholarship for Wards of Organized Workers', 
    department: 'Labour Welfare Board', 
    category: 'Education & Youth',
    description: 'Scholarships for children of workers in the organized sector (factories, shops, plantations) who contribute to the Labour Welfare Fund.',
    benefits: ['Scholarships from ₹1000 to ₹12,000 based on course', 'Textbook and uniform allowance'], 
    deadline: '2026-12-31',
    eligibilityRules: { maxIncome: 420000, parentWorkType: 'Organized Sector' },
    documents: ['Labour Fund Contribution Proof', 'Student Marksheet', 'Identity Card'],
    officialUrl: 'https://www.lwb.tn.gov.in/', 
    active: true 
  },

  { 
    id: 32, 
    title: 'Marriage Assistance for Unorganized Workers', 
    department: 'Tamil Nadu Manual Workers Welfare Board', 
    category: 'Women\'s Welfare',
    description: 'Financial assistance for the marriage of registered members or their children in 17 different unorganized worker boards.',
    benefits: ['₹5000 for female marriage', '₹3000 for male marriage'], 
    deadline: 'Ongoing',
    eligibilityRules: { membership: 'Registered Worker', minAge: 18 },
    documents: ['Membership ID Card', 'Marriage Invitation', 'Aadhaar Card'],
    officialUrl: 'https://labour.tn.gov.in/', 
    active: true 
  },

  // --- 7. FISHERIES & FISHERMEN WELFARE ---
  { 
    id: 41, 
    title: 'Lean Period Relief Assistance for Fishermen', 
    department: 'Fisheries & Fishermen Welfare', 
    category: 'Health & Social Security',
    description: 'Financial aid provided to fishing families during the annual fishing ban/lean period to sustain their livelihood.',
    benefits: ['₹5000 to ₹8000 cash assistance per family'], 
    deadline: 'Varies by Coast',
    eligibilityRules: { occupation: 'Fisherman', residency: 'Coastal TN' },
    documents: ['Biometric ID Card', 'Bank Passbook', 'Ration Card'],
    officialUrl: 'https://www.fisheries.tn.gov.in/', 
    active: true 
  },

  { 
    id: 42, 
    title: 'Subsidy for Purchasing Ice Boxes for Fish Vendors', 
    department: 'Fisheries & Fishermen Welfare', 
    category: 'Employment & Entrepreneurship',
    description: 'Subsidized distribution of insulated ice boxes to help small-scale fish vendors preserve their catch.',
    benefits: ['50% to 75% subsidy on ice box cost'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Fish Vendor', gender: 'Any' },
    documents: ['Fisherman ID', 'Residence Proof'],
    officialUrl: 'https://www.fisheries.tn.gov.in/', 
    active: true 
  },

  // --- 8. ADI DRAVIDAR & TRIBAL WELFARE ---
  { 
    id: 51, 
    title: 'Annal Ambedkar Overseas Higher Education Scholarship', 
    department: 'Adi Dravidar Welfare', 
    category: 'Education & Youth',
    description: 'Financial support for SC/ST students to pursue Masters or PhD programs in top foreign universities.',
    benefits: ['Full Tuition Fee Coverage', 'Maintenance allowance up to ₹36 Lakhs'], 
    deadline: '2026-08-30',
    eligibilityRules: { community: ['SC', 'ST'], maxIncome: 800000 },
    documents: ['University Admission Letter', 'Passport', 'Income Certificate'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 52, 
    title: 'Chief Minister\'s Merit Award for SC/ST Students', 
    department: 'Adi Dravidar Welfare', 
    category: 'Education & Youth',
    description: 'A cash award for the top scorers in 10th and 12th public examinations among SC/ST/SCC students.',
    benefits: ['₹3000 to ₹6000 cash prize', 'Certificate of Merit'], 
    deadline: 'Post-Results',
    eligibilityRules: { community: 'SC/ST', examType: 'Public' },
    documents: ['Marksheet', 'Community Certificate'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  // --- 9. REVENUE & DISASTER MANAGEMENT ---
  { 
    id: 61, 
    title: 'Free House Site Patta Scheme', 
    department: 'Revenue', 
    category: 'Agriculture & Housing',
    description: 'Distribution of free house site pattas to houseless poor families across the state.',
    benefits: ['Legal Ownership of House Plot'], 
    deadline: 'Ongoing',
    eligibilityRules: { status: 'Houseless', maxIncome: 72000 },
    documents: ['Income Certificate', 'No House Certificate', 'Voter ID'],
    officialUrl: 'https://eservices.tn.gov.in/', 
    active: true 
  },

  { 
    id: 62, 
    title: 'Social Security Pension - Destitute Deserted Wives', 
    department: 'Revenue', 
    category: 'Health & Social Security',
    description: 'Monthly pension for women who have been deserted by their husbands for more than 5 years.',
    benefits: ['₹1200 Monthly Pension', 'Free Dhoti/Saree twice a year'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', status: 'Deserted', minAge: 30 },
    documents: ['Desertion Certificate', 'Income Certificate', 'Aadhaar'],
    officialUrl: 'https://www.tnesevai.tn.gov.in/', 
    active: true 
  },

  // --- 10. WELFARE OF DIFFERENTLY ABLED PERSONS ---
  { 
    id: 71, 
    title: 'Maintenance Allowance for Severely Differently Abled', 
    department: 'Welfare of Differently Abled Persons', 
    category: 'Health & Social Security',
    description: 'Monthly financial assistance for persons with more than 75% disability who cannot be easily employed.',
    benefits: ['₹1,500 to ₹2,000 monthly allowance', 'Free medical check-ups'], 
    deadline: 'Ongoing',
    eligibilityRules: { disabilityPercent: 75, residency: 'Tamil Nadu' },
    documents: ['Disability Certificate', 'National ID Card (UDID)', 'Bank Passbook'],
    officialUrl: 'https://www.tnesevai.tn.gov.in/', 
    active: true 
  },

  { 
    id: 72, 
    title: 'Free Petrol Scooter with Support Wheels', 
    department: 'Welfare of Differently Abled Persons', 
    category: 'Employment & Entrepreneurship',
    description: 'Provision of retrofitted petrol scooters for students or workers with locomotor disabilities in both legs.',
    benefits: ['Free Petrol Scooter with extra support wheels', 'Registration and Insurance covered'], 
    deadline: 'Annual Application',
    eligibilityRules: { disabilityType: 'Locomotor', minAge: 18, maxAge: 45 },
    documents: ['Disability Certificate', 'Work/Student Proof', 'Driving License (LLR)'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 73, 
    title: 'Marriage Assistance for Normal Person Marrying Differently Abled', 
    department: 'Welfare of Differently Abled Persons', 
    category: 'Women\'s Welfare',
    description: 'Financial incentive for a non-disabled person who marries a person with a visual or hearing impairment/disability.',
    benefits: ['₹25,000 to ₹50,000 assistance', '8-gram gold coin for Thirumangalyam'], 
    deadline: 'Within 2 years of marriage',
    eligibilityRules: { spouseDisability: true, minAge: 18 },
    documents: ['Marriage Certificate', 'Disability ID of spouse', 'Income Certificate'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  // --- 11. ANIMAL HUSBANDRY & DAIRYING ---
  { 
    id: 81, 
    title: 'Free Distribution of Milch Cows', 
    department: 'Animal Husbandry', 
    category: 'Agriculture & Housing',
    description: 'Distribution of one cross-bred milch cow free of cost to women from the poorest of the poor families in rural areas.',
    benefits: ['One Milch Cow free of cost', 'Three-year insurance for the cow'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', status: 'Rural Landless', residency: 'Tamil Nadu' },
    documents: ['Ration Card', 'Self-declaration of Landless status', 'Aadhaar'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 82, 
    title: 'Scheme for Free Distribution of Goats/Sheep', 
    department: 'Animal Husbandry', 
    category: 'Agriculture & Housing',
    description: 'Distribution of 4 goats or sheep to landless poor families to improve their standard of living.',
    benefits: ['4 Goats/Sheep (1 Male + 3 Females)', 'Seed money for shed construction'], 
    deadline: 'Ongoing',
    eligibilityRules: { status: 'Landless Laborer', residency: 'Tamil Nadu' },
    documents: ['BPL Certificate', 'Aadhaar Card', 'Residence Proof'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 83, 
    title: 'State Fodder Development Scheme (SFDS)', 
    department: 'Animal Husbandry', 
    category: 'Agriculture & Housing',
    description: 'Subsidies for farmers to cultivate high-yielding green fodder to increase livestock productivity.',
    benefits: ['Subsidized seeds/slips', 'Hydroponic technology for green fodder'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Farmer', landType: 'Agri' },
    documents: ['Land Records (Patta/Chitta)', 'Farmer ID'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  // --- 12. HANDLOOMS & TEXTILES ---
  { 
    id: 91, 
    title: 'Free Electricity for Handloom Weavers', 
    department: 'Handlooms, Handicrafts & Textiles', 
    category: 'Employment & Entrepreneurship',
    description: 'Provision of free electricity up to 300 units bi-monthly for registered handloom weaving households.',
    benefits: ['300 units free power every 2 months'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Handloom Weaver', registry: 'Co-operative Society' },
    documents: ['Weaver Identity Card', 'EB Connection Number'],
    officialUrl: 'https://www.tnhandlooms.tn.gov.in/', 
    active: true 
  },

  { 
    id: 92, 
    title: 'Co-optex Rebate Subsidy Scheme', 
    department: 'Handlooms, Handicrafts & Textiles', 
    category: 'Employment & Entrepreneurship',
    description: 'Providing a 20% to 30% discount on handloom clothes throughout the year to boost weaver sales.',
    benefits: ['20% regular rebate', '30% festival season rebate'], 
    deadline: 'Continuous',
    eligibilityRules: {},
    documents: ['Not required (Retail Benefit)'],
    officialUrl: 'https://www.cooptex.com/', 
    active: true 
  },

  // --- 13. BACKWARD CLASSES, MBC & DENOTIFIED COMMUNITIES WELFARE ---
  { 
    id: 101, 
    title: 'Scholarship for BC/MBC Students in Central Institutions', 
    department: 'Backward Classes & MBC Welfare', 
    category: 'Education & Youth',
    description: 'Scholarship for students pursuing UG/PG courses in premium institutions like IIT, IIM, NIT, and Central Universities.',
    benefits: ['Reimbursement of fees up to ₹2 Lakh per year', 'Covers Tuition, Special, and Exam fees'], 
    deadline: '2026-10-31',
    eligibilityRules: { community: ['BC', 'MBC', 'DNC'], maxIncome: 250000, residency: 'Tamil Nadu' },
    documents: ['Bonafide Certificate', 'Fee Receipt', 'Community Certificate', 'Income Certificate'],
    officialUrl: 'https://bcmbcmw.tn.gov.in/', 
    active: true 
  },

  { 
    id: 102, 
    title: 'Rural Girls Incentive Scheme (MBC/DNC)', 
    department: 'Backward Classes & MBC Welfare', 
    category: 'Education & Youth',
    description: 'Financial incentive for MBC/DNC girl students in rural areas to encourage them to complete primary education.',
    benefits: ['₹500/year for 3rd to 5th Std', '₹1000/year for 6th Std'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', community: ['MBC', 'DNC'], location: 'Rural' },
    documents: ['School Study Certificate', 'Community Certificate'],
    officialUrl: 'https://bcmbcmw.tn.gov.in/', 
    active: true 
  },

  { 
    id: 103, 
    title: 'Free Supply of Brass Iron Boxes', 
    department: 'Backward Classes & MBC Welfare', 
    category: 'Employment & Entrepreneurship',
    description: 'Supply of iron boxes to laundry workers belonging to BC, MBC, and Denotified Communities.',
    benefits: ['Free heavy-duty Brass Iron Box'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Laundry Work', maxIncome: 100000, minAge: 20, maxAge: 45 },
    documents: ['Community Certificate', 'Income Certificate', 'Aadhaar Card'],
    officialUrl: 'https://bcmbcmw.tn.gov.in/', 
    active: true 
  },

  // --- 14. MINORITIES WELFARE ---
  { 
    id: 111, 
    title: 'Jerusalem Pilgrimage Subsidy for Christians', 
    department: 'Minorities Welfare', 
    category: 'Citizenship & Public Services',
    description: 'Financial assistance for Christians in Tamil Nadu to undertake a pilgrimage to the Holy Land (Jerusalem).',
    benefits: ['₹37,000 subsidy per pilgrim'], 
    deadline: 'Annual Application',
    eligibilityRules: { religion: 'Christian', residency: 'Tamil Nadu' },
    documents: ['Aadhaar Card', 'Religion Certificate', 'Medical Fitness Certificate'],
    officialUrl: 'https://bcmbcmw.tn.gov.in/', 
    active: true 
  },

  { 
    id: 112, 
    title: 'Muslim Women Aid Society (MWAS) Assistance', 
    department: 'Minorities Welfare', 
    category: 'Women\'s Welfare',
    description: 'Providing vocational training and small-trade financial assistance to destitute Muslim women.',
    benefits: ['Vocational Training', 'Financial aid for tailoring or small shops'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', religion: 'Muslim', status: 'Destitute/Widow' },
    documents: ['Income Certificate', 'Aadhaar', 'Death Certificate of Husband (if applicable)'],
    officialUrl: 'https://bcmbcmw.tn.gov.in/', 
    active: true 
  },

  // --- 15. HINDU RELIGIOUS & CHARITABLE ENDOWMENTS (HR&CE) ---
  { 
    id: 121, 
    title: 'Village Poosarigal Welfare Board Pension', 
    department: 'Hindu Religious & Charitable Endowments', 
    category: 'Health & Social Security',
    description: 'Monthly pension for retired poosarigal (priests) of village temples that are not under the HR&CE direct control.',
    benefits: ['₹4,000 monthly pension'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Village Poosari', minAge: 60 },
    documents: ['ID Card from Poosarigal Welfare Board', 'Bank Passbook', 'Aadhaar'],
    officialUrl: 'https://hrce.tn.gov.in/', 
    active: true 
  },

  { 
    id: 122, 
    title: 'Orukala Poojai Scheme Support', 
    department: 'Hindu Religious & Charitable Endowments', 
    category: 'Citizenship & Public Services',
    description: 'Financial support to ensure at least one puja per day is performed in temples with very low income.',
    benefits: ['Puja materials (Oil, Wick, camphor)', 'Financial grant for priest'], 
    deadline: 'Ongoing',
    eligibilityRules: { templeType: 'Low Income/Village' },
    documents: ['Temple Identification Details', 'Inspector Verification'],
    officialUrl: 'https://hrce.tn.gov.in/', 
    active: true 
  },

  { 
    id: 123, 
    title: 'Annadhanam Scheme in Temples', 
    department: 'Hindu Religious & Charitable Endowments', 
    category: 'Health & Social Security',
    description: 'Provision of free meals to devotees in selected major temples across Tamil Nadu.',
    benefits: ['Free daily lunch/meals for all visitors'], 
    deadline: 'Daily',
    eligibilityRules: {},
    documents: ['Not Required'],
    officialUrl: 'https://hrce.tn.gov.in/', 
    active: true 
  },

  // --- 16. TRIBAL WELFARE DEPARTMENT ---
  { 
    id: 131, 
    title: 'Model Residential Schools (EMRS) for Tribal Students', 
    department: 'Tribal Welfare', 
    category: 'Education & Youth',
    description: 'Providing free high-quality residential education to ST students in remote areas to ensure equal opportunities.',
    benefits: ['Free Boarding & Lodging', 'Free Uniforms & Books', 'Special Coaching for Competitive Exams'], 
    deadline: 'Admission cycle (May-June)',
    eligibilityRules: { community: 'ST', minAge: 10, maxAge: 18 },
    documents: ['Community Certificate', 'Aadhaar Card', 'Previous School Transfer Certificate'],
    officialUrl: 'https://www.tn.gov.in/department/30', 
    active: true 
  },

  { 
    id: 132, 
    title: 'Vocational Training Centers for Tribal Youth', 
    department: 'Tribal Welfare', 
    category: 'Employment & Entrepreneurship',
    description: 'Skill development training in trades like nursing, driving, and computer applications specifically for tribal youth.',
    benefits: ['Free Skill Training', 'Stipend during training period', 'Job Placement assistance'], 
    deadline: 'Ongoing',
    eligibilityRules: { community: 'ST', minAge: 18, maxAge: 35 },
    documents: ['Community Certificate', 'Educational Proof', 'Bank Passbook'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  // --- 17. FOREST DEPARTMENT ---
  { 
    id: 141, 
    title: 'Green Tamil Nadu Mission - Seedling Distribution', 
    department: 'Forest Department', 
    category: 'Agriculture & Housing',
    description: 'Distribution of high-quality tree seedlings to farmers and the public to increase the states forest cover to 33%.',
    benefits: ['Free/Subsidized saplings (Teak, Mahogany, Fruit trees)', 'Technical guidance on planting'], 
    deadline: 'Monsoon Season',
    eligibilityRules: { residency: 'Tamil Nadu' },
    documents: ['Aadhaar Card', 'Land Details (if for farm planting)'],
    officialUrl: 'https://greentnmission.com/', 
    active: true 
  },

  { 
    id: 142, 
    title: 'Compensation for Crop Damage by Wild Animals', 
    department: 'Forest Department', 
    category: 'Agriculture & Housing',
    description: 'Providing immediate financial relief to farmers whose crops or property are damaged by wild animals (elephants, wild boars).',
    benefits: ['Direct cash compensation based on damage assessment'], 
    deadline: 'Within 24 hours of incident',
    eligibilityRules: { location: 'Forest Fringe Villages', occupation: 'Farmer' },
    documents: ['Damage Report', 'Photo Evidence', 'Patta/Chitta'],
    officialUrl: 'https://www.forests.tn.gov.in/', 
    active: true 
  },

  // --- 18. YOUTH WELFARE & SPORTS DEVELOPMENT ---
  { 
    id: 151, 
    title: 'Tamil Nadu Sports CM Merit Scholarship', 
    department: 'Sports Development Authority of Tamil Nadu (SDAT)', 
    category: 'Education & Youth',
    description: 'Financial assistance to talented sportspersons who have won medals at National or International levels.',
    benefits: ['Annual scholarship up to ₹10,000 - ₹30,000', 'Special kits and training support'], 
    deadline: 'Annual Application',
    eligibilityRules: { achievement: 'State/National Medalist', residency: 'Tamil Nadu' },
    documents: ['Sports Achievement Certificates', 'Aadhaar Card', 'School/College Bonafide'],
    officialUrl: 'https://www.sdat.tn.gov.in/', 
    active: true 
  },

  { 
    id: 152, 
    title: 'Elite Sportspersons Scheme', 
    department: 'Sports Development Authority of Tamil Nadu (SDAT)', 
    category: 'Education & Youth',
    description: 'Special funding for world-class athletes from TN to prepare for Olympics and Asian Games.',
    benefits: ['Funding for international coaching', 'Support for travel and foreign competitions'], 
    deadline: 'Ongoing',
    eligibilityRules: { level: 'International', residency: 'Tamil Nadu' },
    documents: ['Passport', 'International Participation Proof', 'Detailed Training Plan'],
    officialUrl: 'https://www.sdat.tn.gov.in/', 
    active: true 
  },

  { 
    id: 153, 
    title: 'Chief Ministers Trophy State Level Games', 
    department: 'Sports Development Authority of Tamil Nadu (SDAT)', 
    category: 'Education & Youth',
    description: 'Large-scale sports tournament across various disciplines to identify and nurture grassroots talent.',
    benefits: ['Cash prizes for winners', 'Opportunity to enter State Excellence Centers'], 
    deadline: 'Annual Event',
    eligibilityRules: { ageGroups: ['School', 'College', 'Public', 'Govt Employees'] },
    documents: ['Age Proof', 'School/College ID'],
    officialUrl: 'https://www.sdat.tn.gov.in/', 
    active: true 
  },

  // --- 19. MSME & ENTREPRENEURSHIP DEVELOPMENT ---
  { 
    id: 161, 
    title: 'NEEDS - New Entrepreneur cum Enterprise Development Scheme', 
    department: 'MSME', 
    category: 'Employment & Entrepreneurship',
    description: 'Promoting first-generation entrepreneurs by providing training and financial assistance for manufacturing or service projects.',
    benefits: ['25% Capital Subsidy (up to ₹75 Lakhs)', '3% Interest Subvention'], 
    deadline: 'Ongoing',
    eligibilityRules: { minAge: 21, maxAge: 45, education: 'Degree/Diploma/ITI' },
    documents: ['Business Project Report', 'Educational Certificate', 'Community Certificate'],
    officialUrl: 'https://www.msmeonline.tn.gov.in/needs/', 
    active: true 
  },

  { 
    id: 162, 
    title: 'PMEGP (TN State Component) - Prime Minister Employment Generation', 
    department: 'MSME / KVIC', 
    category: 'Employment & Entrepreneurship',
    description: 'Credit-linked subsidy program for setting up new micro-enterprises in non-farm sectors.',
    benefits: ['Subsidy of 15% to 35% based on location and category', 'Bank-financed loans up to ₹50 Lakhs'], 
    deadline: 'Ongoing',
    eligibilityRules: { minAge: 18, education: '8th Pass (for large projects)' },
    documents: ['Aadhaar Card', 'Project Profile', 'Population Certificate (for Rural)'],
    officialUrl: 'https://www.kviconline.gov.in/', 
    active: true 
  },

  // --- 20. INFORMATION TECHNOLOGY & DIGITAL SERVICES ---
  { 
    id: 171, 
    title: 'e-Pettagam (Digital Document Wallet)', 
    department: 'TNeGA', 
    category: 'Citizenship & Public Services',
    description: 'A secure digital locker for Tamil Nadu citizens to store and share government-issued certificates (Community, Income, etc.).',
    benefits: ['Paperless verification', 'Encrypted cloud storage for state certificates'], 
    deadline: 'Ongoing',
    eligibilityRules: { residency: 'Tamil Nadu' },
    documents: ['Aadhaar Card', 'Mobile Number'],
    officialUrl: 'https://epettagam.tn.gov.in/', 
    active: true 
  },

  { 
    id: 172, 
    title: 'Tamil Nadu i-Tamil (AI for Tamil Development)', 
    department: 'IT & Digital Services', 
    category: 'Education & Youth',
    description: 'Support for startups and developers building AI tools, LLMs, and translation software specifically for the Tamil language.',
    benefits: ['Grants for Tamil computing tools', 'Access to government datasets for training'], 
    deadline: 'Rolling Basis',
    eligibilityRules: { type: 'Startup/Developer', techFocus: 'Tamil NLP' },
    documents: ['Technical Proposal', 'Prototype Demo'],
    officialUrl: 'https://www.tnega.tn.gov.in/', 
    active: true 
  },

  // --- 21. HANDLOOMS, HANDICRAFTS & TEXTILES ---
  { 
    id: 181, 
    title: 'Free Saree and Dhoti Distribution Scheme', 
    department: 'Handlooms & Textiles', 
    category: 'Health & Social Security',
    description: 'Distribution of free sarees and dhotis to the poor during the Pongal festival, also supporting weavers livelihoods.',
    benefits: ['Free Dhoti and Saree provided annually'], 
    deadline: 'January (Pongal)',
    eligibilityRules: { status: 'BPL / Ration Card Holder' },
    documents: ['Smart Ration Card'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 182, 
    title: 'Old Age Pension for Handloom Weavers', 
    department: 'Handlooms & Textiles', 
    category: 'Health & Social Security',
    description: 'Monthly pension for retired handloom weavers who have spent their lives in the weaving profession.',
    benefits: ['₹1,200 Monthly Pension'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Handloom Weaver', minAge: 60 },
    documents: ['Weaver Identity Card', 'Bank Passbook'],
    officialUrl: 'https://www.tnhandlooms.tn.gov.in/', 
    active: true 
  },

  { 
    id: 183, 
    title: 'Co-operative Weavers Savings and Security Scheme', 
    department: 'Handlooms & Textiles', 
    category: 'Health & Social Security',
    description: 'A contributory thrift fund where the government provides a matching contribution to ensure financial security for weavers.',
    benefits: ['8% interest on savings', 'Government matching contribution of 8%'], 
    deadline: 'Ongoing',
    eligibilityRules: { membership: 'Co-operative Society Weaver' },
    documents: ['Society Membership Passbook', 'Aadhaar'],
    officialUrl: 'https://www.tnhandlooms.tn.gov.in/', 
    active: true 
  },

  // --- 22. COOPERATION, FOOD AND CONSUMER PROTECTION ---
  { 
    id: 191, 
    title: 'Short Term Agricultural Crop Loans', 
    department: 'Cooperation', 
    category: 'Agriculture & Housing',
    description: 'Interest-free crop loans provided through Primary Agricultural Cooperative Credit Societies (PACCS) to farmers.',
    benefits: ['Interest-free loans for timely repayment', 'Access to fertilizers and seeds at subsidized rates'], 
    deadline: 'Season-based (Kharif/Rabi)',
    eligibilityRules: { occupation: 'Farmer', membership: 'PACCS Member' },
    documents: ['Land Records (Patta/Chitta)', 'Crop Insurance Receipt', 'Aadhaar Card'],
    officialUrl: 'https://www.tnpds.gov.in/', 
    active: true 
  },

  { 
    id: 192, 
    title: 'Cooperative Joint Liability Group (JLG) Loans', 
    department: 'Cooperation', 
    category: 'Employment & Entrepreneurship',
    description: 'Providing small business loans to groups of 4-10 individuals who carry out similar economic activities.',
    benefits: ['Collateral-free loans', 'Simplified group-based repayment'], 
    deadline: 'Ongoing',
    eligibilityRules: { status: 'Small Trader/Artisan', groupSize: '4 to 10' },
    documents: ['Group Member IDs', 'Business Activity Proof'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  // --- 23. EX-SERVICEMEN WELFARE ---
  { 
    id: 201, 
    title: 'Financial Assistance for Daughter\'s Marriage (Ex-Servicemen)', 
    department: 'Ex-Servicemen Welfare', 
    category: 'Women\'s Welfare',
    description: 'Grants provided to help ex-servicemen of the rank of Havildar and below for their daughters\' marriage.',
    benefits: ['₹50,000 one-time financial grant'], 
    deadline: 'Within 6 months of marriage',
    eligibilityRules: { rank: 'Havildar & Below', status: 'Ex-Serviceman' },
    documents: ['Discharge Book', 'Marriage Certificate', 'PPO Copy'],
    officialUrl: 'https://www.tn.gov.in/exservicemen', 
    active: true 
  },

  { 
    id: 202, 
    title: 'CM Special Scholarship for Children of Ex-Servicemen', 
    department: 'Ex-Servicemen Welfare', 
    category: 'Education & Youth',
    description: 'Merit-based scholarships for the children of ex-servicemen pursuing professional courses like MBBS, BE, and MBA.',
    benefits: ['₹20,000 to ₹50,000 per year', 'Tuition fee reimbursement'], 
    deadline: '2026-11-30',
    eligibilityRules: { parentStatus: 'Ex-Serviceman', minMarks: '60%' },
    documents: ['Bonafide Certificate', 'Ex-Servicemen ID Card', 'Marksheet'],
    officialUrl: 'https://www.tn.gov.in/exservicemen', 
    active: true 
  },

  // --- 24. FISHERIES (Advanced Support) ---
  { 
    id: 211, 
    title: 'Motorization of Traditional Crafts', 
    department: 'Fisheries & Fishermen Welfare', 
    category: 'Employment & Entrepreneurship',
    description: 'Providing 40% subsidy for the purchase of Outboard Motors (OBM) or Inboard Engines for traditional fishing boats.',
    benefits: ['Subsidy up to ₹30,000 per engine', 'Reduced physical labor for fishermen'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Fisherman', boatType: 'Traditional/Country' },
    documents: ['Fishing License', 'Vessel Registration Proof', 'Biometric ID'],
    officialUrl: 'https://www.fisheries.tn.gov.in/', 
    active: true 
  },

  { 
    id: 212, 
    title: 'Savings-cum-Relief Scheme for Marine Fisherwomen', 
    department: 'Fisheries & Fishermen Welfare', 
    category: 'Health & Social Security',
    description: 'A social security scheme where women save money during the fishing season, and the government provides a matching grant during lean months.',
    benefits: ['₹4,500 during the non-fishing months (contributory)'], 
    deadline: 'Subscription period starts in April',
    eligibilityRules: { gender: 'Female', occupation: 'Fishery allied activities' },
    documents: ['Membership ID', 'Ration Card', 'Bank Details'],
    officialUrl: 'https://www.fisheries.tn.gov.in/', 
    active: true 
  },

  // --- 25. TAMIL NADU CONSTRUCTION WORKERS WELFARE BOARD ---
  { 
    id: 221, 
    title: 'Accidental Death at Work Site Assistance', 
    department: 'Labour Welfare & Skill Development', 
    category: 'Health & Social Security',
    description: 'High-value financial assistance specifically for registered or even unregistered construction workers who face fatal accidents at a work site.',
    benefits: ['₹5,00,000 for families of deceased construction workers', 'Immediate funeral expenses of ₹5,000'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Construction Worker', accidentType: 'Work Site' },
    documents: ['FIR Copy', 'Post-mortem Report', 'Work Site Verification'],
    officialUrl: 'https://tnuwwb.tn.gov.in/', 
    active: true 
  },

  { 
    id: 222, 
    title: 'Maternity Assistance for Registered Construction Workers', 
    department: 'Labour Welfare & Skill Development', 
    category: 'Women\'s Welfare',
    description: 'Financial aid for registered female construction workers for pregnancy and childbirth, covering up to two children.',
    benefits: ['₹18,000 for childbirth', '₹3,000 for abortion/miscarriage'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', membership: 'Registered Construction Board' },
    documents: ['Membership ID Card', 'Birth Certificate', 'Medical Certificate'],
    officialUrl: 'https://tnuwwb.tn.gov.in/', 
    active: true 
  },

  // --- 26. UNORGANISED WORKERS WELFARE (GIG WORKERS & OTHERS) ---
  { 
    id: 231, 
    title: 'eScooter Subsidy for Platform-based Gig Workers', 
    department: 'Labour Welfare & Skill Development', 
    category: 'Employment & Entrepreneurship',
    description: 'A 2026 initiative providing subsidies for electric scooters to delivery partners and gig workers registered with TN boards.',
    benefits: ['₹25,000 subsidy for purchase of Electric Scooter'], 
    deadline: '2026-12-31',
    eligibilityRules: { occupation: 'Gig Worker / Delivery Partner', residency: 'Tamil Nadu' },
    documents: ['Platform ID (Zomato/Swiggy/etc)', 'Board Registration', 'Aadhaar'],
    officialUrl: 'https://tnuwwb.tn.gov.in/', 
    active: true 
  },

  { 
    id: 232, 
    title: 'Educational Assistance for PhD (Children of Workers)', 
    department: 'Labour Welfare & Skill Development', 
    category: 'Education & Youth',
    description: 'Revised 2026 guidelines allowing children of registered unorganised workers to claim research-level educational grants.',
    benefits: ['Annual grant for PhD research up to ₹25,000', 'Compatible with other merit-based scholarships'], 
    deadline: 'Academic Year cycle',
    eligibilityRules: { parentStatus: 'Registered Worker', course: 'PhD' },
    documents: ['University Admission Letter', 'Parent Board ID', 'Aadhaar Card'],
    officialUrl: 'https://tnuwwb.tn.gov.in/', 
    active: true 
  },

  // --- 27. MUNICIPAL ADMINISTRATION & WATER SUPPLY ---
  { 
    id: 241, 
    title: 'Urban Greening Policy 2026 - Home Tree Grant', 
    department: 'Municipal Administration & Water Supply', 
    category: 'Agriculture & Housing',
    description: 'A new 2026 policy where residents in urban local bodies receive support for maintaining green cover in private plots.',
    benefits: ['Property tax rebate for high green cover', 'Free climate-resilient saplings'], 
    deadline: 'Ongoing',
    eligibilityRules: { location: 'Urban Local Body (Corporation/Municipality)' },
    documents: ['Property Tax Receipt', 'Site Photo'],
    officialUrl: 'https://www.tn.gov.in/department/21', 
    active: true 
  },

  { 
    id: 242, 
    title: 'AMRUT 2.0 Sewerage Connection Subsidy', 
    department: 'Municipal Administration & Water Supply', 
    category: 'Health & Social Security',
    description: 'Subsidized household sewerage connections in municipalities to ensure 100% urban sanitation coverage.',
    benefits: ['Low-cost/Free underground drainage connection'], 
    deadline: 'Project-based',
    eligibilityRules: { status: 'BPL / Low Income' },
    documents: ['Ration Card', 'Residence Proof'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  // --- 28. TOURISM & CULTURE ---
  { 
    id: 251, 
    title: 'Tamil Nadu Tourism Innovation Hackathon Grant', 
    department: 'Tourism', 
    category: 'Employment & Entrepreneurship',
    description: 'Seed funding for startups building technology solutions for heritage, culinary, or eco-tourism in Tamil Nadu.',
    benefits: ['Seed grant up to ₹10 Lakhs (TANSEED linked)', 'Mentorship from Tourism Dept'], 
    deadline: 'Annual / Cycle-based',
    eligibilityRules: { type: 'Startup', sector: 'Tourism' },
    documents: ['Project Proposal', 'DPIIT Recognition'],
    officialUrl: 'https://hackathons.startuptn.in/', 
    active: true 
  },
  // --- 29. HEALTH & FAMILY WELFARE (2026 UPDATES) ---
  { 
    id: 252, 
    title: 'Mudhalvar Marundhagam (Chief Minister Pharmacy)', 
    department: 'Health & Family Welfare', 
    category: 'Health & Social Security',
    description: 'Providing high-quality generic and branded medicines to the public at highly affordable prices through dedicated outlets.',
    benefits: ['Up to 50% discount on essential medicines', 'Available in all major towns'], 
    deadline: 'Ongoing',
    eligibilityRules: { residency: 'Tamil Nadu' },
    documents: ['Doctor Prescription', 'Aadhaar Card'],
    officialUrl: 'https://www.tnhealth.tn.gov.in/', 
    active: true 
  },

  { 
    id: 253, 
    title: 'Tamil Nadu Trust for Children Affected by HIV/AIDS (TNTCAA)', 
    department: 'Health & Family Welfare', 
    category: 'Health & Social Security',
    description: 'Special financial trust to support the education, nutrition, and medical needs of children affected by HIV/AIDS.',
    benefits: ['Monthly nutrition grant', 'Educational scholarship support'], 
    deadline: 'Ongoing',
    eligibilityRules: { medicalCondition: 'CLHIV (Children Living with HIV)' },
    documents: ['Medical Certificate', 'Birth Certificate', 'Income Certificate'],
    officialUrl: 'https://tnsacs.in/', 
    active: true 
  },

  // --- 30. SOCIAL WELFARE (WOMEN & CHILDREN) ---
  { 
    id: 261, 
    title: 'Government Service Home for Destitute Women', 
    department: 'Social Welfare & Women Empowerment', 
    category: 'Women\'s Welfare',
    description: 'Residential facilities providing food, clothing, and vocational training for widows, deserted wives, and adolescent girls.',
    benefits: ['Free accommodation and food', 'Vocational training in tailoring/computers', 'Support for children up to Class 12'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', maxIncome: 72000, status: ['Widow', 'Destitute', 'Deserted'] },
    documents: ['Income Certificate', 'Widow/Destitute Certificate', 'Age Proof'],
    officialUrl: 'https://www.myscheme.gov.in/schemes/gshtn', 
    active: true 
  },

  { 
    id: 262, 
    title: 'Chief Minister\'s Girl Child Protection Scheme - Phase II', 
    department: 'Social Welfare & Women Empowerment', 
    category: 'Women\'s Welfare',
    description: 'Promotion of small family norms and girl child education through a long-term fixed deposit in the name of the girl child.',
    benefits: ['₹25,000 fixed deposit for single girl child', 'Maturity amount at age 18 for higher studies'], 
    deadline: 'Before child reaches 3 years',
    eligibilityRules: { gender: 'Female', maxIncome: 72000, parentSterilization: true },
    documents: ['Birth Certificate', 'Sterilization Certificate', 'Income Certificate'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  // --- 31. ART & CULTURE (ARTIST WELFARE) ---
  { 
    id: 271, 
    title: 'Kalai Ilamani Award & Grant', 
    department: 'Art & Culture', 
    category: 'Employment & Entrepreneurship',
    description: 'Recognizing and encouraging young talented artists in traditional Tamil arts, music, and dance.',
    benefits: ['₹4,000 cash award', 'Certificate of appreciation', 'Opportunities for state performances'], 
    deadline: 'Annual Selection',
    eligibilityRules: { minAge: 18, maxAge: 35, talent: 'Traditional Arts' },
    documents: ['Artistic Portfolio', 'Age Proof', 'Recommendation Letter'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 272, 
    title: 'Porkizhi for Indigent Kalaimamani Awardees', 
    department: 'Art & Culture', 
    category: 'Health & Social Security',
    description: 'One-time financial grant for elderly artists who have received the Kalaimamani award and are currently in financial distress.',
    benefits: ['₹15,000 one-time financial grant'], 
    deadline: 'Ongoing',
    eligibilityRules: { awardeeStatus: 'Kalaimamani', status: 'Indigent' },
    documents: ['Award Certificate', 'Income Certificate', 'Bank Passbook'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  // --- 32. AGRICULTURE (SPECIFIC MISSIONS) ---
  { 
    id: 281, 
    title: 'National Food Security Mission (NFSM) - Oil Seeds', 
    department: 'Agriculture & Farmers Welfare', 
    category: 'Agriculture & Housing',
    description: 'Subsidies for farmers to increase production of oilseeds like groundnut, sunflower, and castor.',
    benefits: ['₹10,000/hectare subsidy for demonstration plots', 'Subsidized high-quality seeds'], 
    deadline: 'Sowing Season',
    eligibilityRules: { occupation: 'Farmer', landSize: '0.5 to 5 acres' },
    documents: ['Patta/Chitta', 'Aadhaar Card', 'Farmer ID'],
    officialUrl: 'https://perambalur.nic.in/agriculture-department-schemes/', 
    active: true 
  },

  { 
    id: 282, 
    title: 'Moovalur Ramamirtham Ammaiyar Ninaivu Marriage Assistance', 
    department: 'Social Welfare', 
    category: 'Women\'s Welfare',
    description: 'Financial assistance and a gold coin for brides who have completed Class 10th to help poor parents with marriage expenses.',
    benefits: ['₹25,000 cash assistance', '8-gram gold coin'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', education: '10th Pass', residency: 'Tamil Nadu' },
    documents: ['10th Marksheet', 'Marriage Invitation', 'Income Certificate'],
    officialUrl: 'https://www.myscheme.gov.in/search/state/Tamil%20Nadu', 
    active: true 
  },

  { 
    id: 283, 
    title: 'National Family Benefit Scheme (NFBS) - TN Component', 
    department: 'Social Welfare', 
    category: 'Health & Social Security',
    description: 'Lump sum assistance to a household below the poverty line upon the death of the primary breadwinner.',
    benefits: ['₹20,000 one-time lump sum grant'], 
    deadline: 'Within 1 year of death',
    eligibilityRules: { status: 'BPL', breadwinnerAge: { min: 18, max: 60 } },
    documents: ['Death Certificate of Breadwinner', 'BPL Card', 'Legal Heir Certificate'],
    officialUrl: 'https://www.myscheme.gov.in/schemes/nfbs', 
    active: true 
  },

  // --- 34. ADI DRAVIDAR & TRIBAL WELFARE (EDUCATION) ---
  { 
    id: 291, 
    title: 'Post-Matric Scholarship for SC/ST/SCC Students', 
    department: 'Adi Dravidar and Tribal Welfare', 
    category: 'Education & Youth',
    description: 'Reimbursement of all compulsory and non-refundable fees for students studying in recognized institutions beyond Class 10.',
    benefits: ['Full Tuition Fee Reimbursement', 'Monthly maintenance allowance up to ₹1,200'], 
    deadline: 'Academic Year cycle',
    eligibilityRules: { community: ['SC', 'ST', 'SCC'], maxIncome: 250000 },
    documents: ['Community Certificate', 'Income Certificate', 'Bank Passbook'],
    officialUrl: 'https://kancheepuram.nic.in/departments/adi-dravidar-and-tribal-welfare/', 
    active: true 
  },

  { 
    id: 292, 
    title: 'Scholarship for Public Examination Fees (10th & 12th)', 
    department: 'Adi Dravidar and Tribal Welfare', 
    category: 'Education & Youth',
    description: 'Full reimbursement of public examination fees for SC/ST students appearing for 10th and 12th standard exams.',
    benefits: ['100% Exam Fee Waiver'], 
    deadline: 'Exam Registration Period',
    eligibilityRules: { community: ['SC', 'ST', 'SCC'], residency: 'Tamil Nadu' },
    documents: ['Caste Certificate', 'Public Exam Registration Slip'],
    officialUrl: 'https://www.myscheme.gov.in/schemes/adtwspe', 
    active: true 
  },

  // --- 35. BC / MBC & MINORITIES WELFARE ---
  { 
    id: 301, 
    title: 'Scholarship for BC/MBC Students in IIT/IIM/NIT', 
    department: 'Backward Classes & MBC Welfare', 
    category: 'Education & Youth',
    description: 'Special scholarship for TN students from BC/MBC/DNC communities pursuing UG/PG in premium central institutions.',
    benefits: ['Actual fees paid or ₹2 Lakh per annum (whichever is less)'], 
    deadline: '2025-10-31',
    eligibilityRules: { community: ['BC', 'MBC', 'DNC'], maxIncome: 250000, institutionType: 'Central Govt' },
    documents: ['Bonafide Certificate', 'Fee Receipt', 'Nativity Certificate'],
    officialUrl: 'https://ariyalur.nic.in/departments/bc-mbc-dnc-and-minorities-welfare/', 
    active: true 
  },

  { 
    id: 302, 
    title: 'Christian Jerusalem Pilgrimage Subsidy (2026)', 
    department: 'Minorities Welfare', 
    category: 'Health & Social Security',
    description: 'Financial assistance for Christians from Tamil Nadu to visit the Holy Land (Jerusalem).',
    benefits: ['₹37,000 subsidy per pilgrim'], 
    deadline: 'Annual Application',
    eligibilityRules: { religion: 'Christian', residency: 'Tamil Nadu' },
    documents: ['Aadhaar Card', 'Religion Certificate', 'Medical Fitness'],
    officialUrl: 'https://bcmbcmw.tn.gov.in/welfschemes_minorities.htm', 
    active: true 
  },

  // --- 36. LABOUR & UNORGANISED WORKERS ---
  { 
    id: 311, 
    title: 'Marriage Assistance for Manual Workers Welfare Board', 
    department: 'Labour Welfare', 
    category: 'Women\'s Welfare',
    description: 'Marriage grant for registered manual workers or their children to support social wellbeing.',
    benefits: ['₹5,000 for Female marriage', '₹3,000 for Male marriage'], 
    deadline: 'Ongoing',
    eligibilityRules: { membership: 'Registered Board Member' },
    documents: ['Board Identity Card', 'Marriage Certificate'],
    officialUrl: 'https://ariyalur.nic.in/labour-welfare-sss/', 
    active: true 
  },

  // --- 37. AGRICULTURE & FARMER TRAINING ---
  { 
    id: 321, 
    title: 'Farmers Training Programme (Skills & Knowledge)', 
    department: 'Agriculture & Farmers Welfare', 
    category: 'Agriculture & Housing',
    description: 'Providing technical training to farmers and agricultural laborers in clusters of 50 members.',
    benefits: ['Grant of ₹5,000 per session to cover training costs'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: ['Farmer', 'Agri Laborer'] },
    documents: ['Proof of Farming Status', 'Identity Proof'],
    officialUrl: 'https://www.myscheme.gov.in/schemes/ft', 
    active: true 
  },

  // --- 38. TRANSPORT (WOMEN'S WELFARE) ---
  { 
    id: 322, 
    title: 'Free Bus Travel for Transgender Persons', 
    department: 'Transport', 
    category: "Women's Welfare",
    description: 'Extending the Vidiyal Payanam scheme to provide free travel for transgender persons in ordinary town buses across Tamil Nadu.',
    benefits: ['100% fare waiver in town buses'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Transgender', residency: 'Tamil Nadu' },
    documents: ['Transgender ID Card issued by Welfare Board'],
    officialUrl: 'https://www.tnstc.in/', 
    active: true 
  },

  // --- 39. HEALTH & SOCIAL SECURITY (PENSION & INSURANCE) ---
  { 
    id: 331, 
    title: 'Destitute Widow Pension Scheme', 
    department: 'Revenue', 
    category: 'Health & Social Security',
    description: 'Monthly financial support for widows who are in destitute condition and have no other source of income.',
    benefits: ['₹1,200 monthly pension', 'Free rice (4kg/month) and clothes during festivals'], 
    deadline: 'Ongoing',
    eligibilityRules: { status: 'Widow', maxIncome: 72000, minAge: 18 },
    documents: ['Death Certificate of Husband', 'Income Certificate', 'Aadhaar Card'],
    officialUrl: 'https://www.tnesevai.tn.gov.in/', 
    active: true 
  },

  { 
    id: 332, 
    title: 'Chief Minister\'s Comprehensive Health Insurance (CMCHIS) - New 2026 Limits', 
    department: 'Health', 
    category: 'Health & Social Security',
    description: 'Updated insurance coverage for low-income families covering over 1,500 life-saving procedures.',
    benefits: ['₹5 Lakh annual coverage per family', 'Cashless treatment in govt and empanelled private hospitals'], 
    deadline: 'Ongoing',
    eligibilityRules: { maxIncome: 120000, residency: 'Tamil Nadu' },
    documents: ['Ration Card', 'Income Certificate', 'Aadhaar'],
    officialUrl: 'https://www.cmchistn.com/', 
    active: true 
  },

  // --- 40. AGRICULTURE & HOUSING (RURAL INFRASTRUCTURE) ---
  { 
    id: 341, 
    title: 'Chief Minister\'s Solar Powered Green House Scheme (CMSPGHS)', 
    department: 'Rural Development', 
    category: 'Agriculture & Housing',
    description: 'Providing solar-powered concrete houses for the rural poor to improve living standards and promote clean energy.',
    benefits: ['Free 300 sq.ft concrete house', 'Unit cost of ₹2.10 Lakhs fully subsidized'], 
    deadline: 'Ongoing',
    eligibilityRules: { status: 'Houseless / BPL', location: 'Rural' },
    documents: ['BPL Certificate', 'Land Patta', 'Ration Card'],
    officialUrl: 'https://tnrd.tn.gov.in/', 
    active: true 
  },

  // --- 41. EMPLOYMENT & ENTREPRENEURSHIP (HANDLOOMS) ---
  { 
    id: 351, 
    title: 'Handloom Weavers Old Age Pension Scheme', 
    department: 'Handlooms & Textiles', 
    category: 'Employment & Entrepreneurship',
    description: 'Providing a monthly pension to retired handloom weavers who have completed 60 years of age.',
    benefits: ['₹1,200 monthly pension'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Handloom Weaver', minAge: 60 },
    documents: ['Weaver Identity Card', 'Bank Passbook', 'Aadhaar'],
    officialUrl: 'https://www.tnhandlooms.tn.gov.in/', 
    active: true 
  },

  // --- 42. HEALTH & SOCIAL SECURITY (DIFFERENTLY ABLED WELFARE) ---
  { 
    id: 352, 
    title: 'Differently Abled Pension Scheme (DAPS)', 
    department: 'Social Welfare and Women Empowerment', 
    category: 'Health & Social Security',
    description: 'Providing a monthly pension to differently-abled persons with 40% disability and above to ensure social security.',
    benefits: ['₹1,000 monthly pension', 'Free saree/dhoti on Pongal and Diwali', 'Nutritious meal through Anganwadi'], 
    deadline: 'Ongoing',
    eligibilityRules: { minAge: 18, disabilityPercent: 40, maxIncome: 300000 },
    documents: ['Differently Abled ID Card', 'Aadhaar Card', 'Smart Ration Card'],
    officialUrl: 'https://www.myscheme.gov.in/schemes/daps', 
    active: true 
  },

  { 
    id: 353, 
    title: 'Accident Death Relief for Differently Abled', 
    department: 'Differently Abled Welfare', 
    category: 'Health & Social Security',
    description: 'Financial assistance provided to the families of differently-abled persons in case of accidental death.',
    benefits: ['₹1,00,000 accidental death relief'], 
    deadline: 'Ongoing',
    eligibilityRules: { disabilityStatus: 'Certified' },
    documents: ['FIR Copy', 'Post-mortem Report', 'Disability Identity Card'],
    officialUrl: 'https://ranipet.nic.in/differently-abled-welfare-schemes/', 
    active: true 
  },

  // --- 43. EDUCATION & YOUTH (LABOUR BOARD SCHOLARSHIPS) ---
  { 
    id: 361, 
    title: 'Labour Card Scholarship for Children of Unorganised Workers', 
    department: 'Labour Department', 
    category: 'Education & Youth',
    description: 'Educational assistance for the children of registered unorganised workers to pursue school and higher studies.',
    benefits: ['₹1,000 to ₹25,000 annually based on course level'], 
    deadline: 'Annual Application',
    eligibilityRules: { parentStatus: 'Registered Labour Card Holder', studentAge: { min: 18, max: 40 } },
    documents: ['Valid Labour Card of Parent', 'Aadhaar Card', 'Bonafide Certificate from Institution'],
    officialUrl: 'https://cleartax.in/s/labour-card', 
    active: true 
  },

  { 
    id: 362, 
    title: 'Scholarship to Son and Daughter of Differently Abled Persons', 
    department: 'Differently Abled Welfare', 
    category: 'Education & Youth',
    description: 'Financial support for the children of differently-abled parents to ensure their education is not interrupted.',
    benefits: ['₹1,000 to ₹6,000 depending on the level of study'], 
    deadline: 'Ongoing',
    eligibilityRules: { parentDisability: 'Certified' },
    documents: ['Parent Disability ID', 'Student Marksheet', 'School/College ID'],
    officialUrl: 'https://ranipet.nic.in/differently-abled-welfare-schemes/', 
    active: true 
  },

  // --- 44. EMPLOYMENT & ENTREPRENEURSHIP (FISHERIES SECTOR) ---
  { 
    id: 371, 
    title: 'Pradhan Mantri Matsya Sampada Yojana (PMMSY) - TN Component', 
    department: 'Fisheries & Fishermen Welfare', 
    category: 'Employment & Entrepreneurship',
    description: 'Comprehensive scheme for the development of the fisheries sector, including infrastructure and livelihood support for fishermen.',
    benefits: ['Financial assistance for fishing infrastructure', 'Subsidy for seaweed farming and ice plants', 'Modernization of value chain'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Fisher / Fish Farmer', residency: 'Tamil Nadu' },
    documents: ['Biometric ID Card', 'Aadhaar Card', 'Project Report for infrastructure'],
    officialUrl: 'https://www.myscheme.gov.in/schemes/pmmsy', 
    active: true 
  },

  { 
    id: 372, 
    title: 'Loan for Self Employment for Differently Abled', 
    department: 'Differently Abled Welfare', 
    category: 'Employment & Entrepreneurship',
    description: 'Providing bank loans and government subsidies to differently-abled individuals to start their own businesses.',
    benefits: ['Loan recommendation up to ₹75,000', 'Subsidy of 1/3rd or max ₹25,000 provided by government'], 
    deadline: 'Ongoing',
    eligibilityRules: { minAge: 18, disabilityStatus: 'Certified' },
    documents: ['Identity Card for Disabled', 'Passport Size Photo', 'Aadhaar Card'],
    officialUrl: 'https://ranipet.nic.in/differently-abled-welfare-schemes/', 
    active: true 
  },

  // --- 45. AGRICULTURE & HOUSING (2026 FLAGSHIP) ---
  { 
    id: 376, 
    title: 'Kalaignarin Kanavu Illam (Hut-Free TN 2030)', 
    department: 'Rural Development', 
    category: 'Agriculture & Housing',
    description: 'A massive 2026 initiative to replace all huts with permanent concrete houses by 2030. Phase 1 targets 1 lakh houses.',
    benefits: ['₹3.50 Lakhs cash grant for house construction', '360 sq.ft minimum plinth area', 'Concrete roofing support'], 
    deadline: '2026-12-31 (Phase 1)',
    eligibilityRules: { status: 'Hut Dweller', location: 'Rural', residency: 'Tamil Nadu' },
    documents: ['Land Patta', 'Ration Card', 'BPL Survey ID'],
    officialUrl: 'https://tnrd.tn.gov.in/', 
    active: true 
  },

  { 
    id: 377, 
    title: 'Chief Minister\'s Mannuyir Kaathu Mannuyir Kaappom', 
    department: 'Agriculture & Farmers Welfare', 
    category: 'Agriculture & Housing',
    description: 'Mission to improve soil health by encouraging the use of green manure and organic farming practices.',
    benefits: ['Subsidy for green manure seeds', 'Free soil testing and health card', 'Support for organic certification'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Farmer', landType: 'Agri' },
    documents: ['Aadhaar Card', 'Patta/Chitta', 'Soil Test Report'],
    officialUrl: 'https://www.tnagrisnet.tn.gov.in/', 
    active: true 
  },

  { 
    id: 378, 
    title: 'Nannilam Mahalir Nila Udaimai Thittam', 
    department: 'TAHDCO', 
    category: 'Agriculture & Housing',
    description: 'Purchasing agricultural land in the name of Adi Dravidar and Tribal women to empower them with land ownership.',
    benefits: ['50% subsidy on land cost (up to ₹5 Lakhs)', '100% Stamp Duty exemption', 'Registration fee waiver'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', community: ['SC', 'ST'], maxIncome: 300000 },
    documents: ['Community Certificate', 'Income Certificate', 'Land Selection Document'],
    officialUrl: 'https://tahdco.com/land-purchase-scheme.php', 
    active: true 
  },

  // --- 46. WOMEN'S WELFARE (2026 NEW TNWeSafe) ---
  { 
    id: 391, 
    title: 'TNWeSafe - Womenomics Programme', 
    department: 'Social Welfare & Women Empowerment', 
    category: "Women's Welfare",
    description: 'A World Bank-funded 2026 initiative to increase female workforce participation and provide independent living infrastructure.',
    benefits: ['Subsidized childcare facilities for working moms', 'Career transition grants', 'Safe workplace certification'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', status: 'Working/Job-seeking' },
    documents: ['Employment Proof', 'Aadhaar Card', 'Residence Proof'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  { 
    id: 392, 
    title: 'Thirancudar Skill Development for Women', 
    department: 'Tamil Nadu Women Development Corporation', 
    category: "Women's Welfare",
    description: 'Specialized skill training for women in high-growth sectors like electronics and green energy.',
    benefits: ['Free technical training', 'Placement in leading industries', 'Post-training stipend'], 
    deadline: 'Rolling Basis',
    eligibilityRules: { gender: 'Female', minAge: 18, maxAge: 35 },
    documents: ['Educational Certificate', 'Aadhaar Card'],
    officialUrl: 'https://www.tamilnaduwomen.org/', 
    active: true 
  },

  { 
    id: 393, 
    title: 'HPV Vaccination for Girl Students (Budget 2026)', 
    department: 'Health & Family Welfare', 
    category: "Women's Welfare",
    description: 'New 2026 state scheme to provide HPV vaccines to prevent cervical cancer among young girls.',
    benefits: ['Free HPV vaccination', 'Preventive health check-ups'], 
    deadline: 'School Academic Year',
    eligibilityRules: { gender: 'Female', maxAge: 14 },
    documents: ['School ID', 'Parent Consent Form'],
    officialUrl: 'https://www.tnhealth.tn.gov.in/', 
    active: true 
  },

  // --- 47. HEALTH & SOCIAL SECURITY (2026 SOCIAL DEFENCE) ---
  { 
    id: 401, 
    title: 'Tamil Nadu ART Pension Scheme', 
    department: 'Health & Family Welfare (TNSACS)', 
    category: 'Health & Social Security',
    description: 'A dedicated pension scheme for People Living with HIV/AIDS (PLHIV) who are under Anti-Retroviral Therapy (ART).',
    benefits: ['₹1,000 monthly pension', 'Free bus pass for travel to ART centers', 'Priority in housing schemes'], 
    deadline: 'Ongoing',
    eligibilityRules: { medicalStatus: 'Under ART Treatment', residency: 'Tamil Nadu' },
    documents: ['ART Green Book', 'Aadhaar Card', 'Income Certificate'],
    officialUrl: 'https://tnsacs.in/social-welfare-schemes/', 
    active: true 
  },

  { 
    id: 402, 
    title: 'Transgender Welfare Board Pension', 
    department: 'Social Welfare & Women Empowerment', 
    category: 'Health & Social Security',
    description: 'Financial assistance to destitute transgender persons who are above 40 years of age to ensure their dignity and care.',
    benefits: ['₹1,500 monthly pension', 'Free medical insurance coverage'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Transgender', minAge: 40, status: 'Destitute' },
    documents: ['Transgender Identity Card', 'Aadhaar Card', 'Residence Proof'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  },

  // --- 48. EMPLOYMENT & ENTREPRENEURSHIP (2026 SKILLS & UNEMPLOYMENT) ---
  { 
    id: 421, 
    title: 'Unemployment Assistance for Graduates (Revised 2026)', 
    department: 'Employment & Training', 
    category: 'Employment & Entrepreneurship',
    description: 'Providing monthly financial support to unemployed youth who have been registered in the employment exchange for more than 5 years.',
    benefits: ['₹600/month for Graduates', '₹1,000/month for Differently Abled Graduates'], 
    deadline: 'Ongoing',
    eligibilityRules: { registrationPeriod: '5 Years+', maxAge: 40, maxIncome: 72000 },
    documents: ['Employment Exchange Identity Card', 'Degree Marksheet', 'Income Certificate'],
    officialUrl: 'https://www.tnprivatejobs.tn.gov.in/', 
    active: true 
  },

  { 
    id: 422, 
    title: 'En Kanavu En Ethirkalam - AI Support Grant', 
    department: 'IT & Digital Services / TNeGA', 
    category: 'Employment & Entrepreneurship',
    description: 'A 2026 flagship for students and job seekers providing subscriptions to AI learning tools and technical support.',
    benefits: ['Free access to AI learning platforms', 'Laptop purchase support for high-performing learners'], 
    deadline: 'Academic Year 2026-27',
    eligibilityRules: { status: 'Student/Job Seeker', residency: 'Tamil Nadu' },
    documents: ['Educational ID', 'Aadhaar Card', 'Enrollment Proof'],
    officialUrl: 'https://www.tnega.tn.gov.in/', 
    active: true 
  },

  { 
    id: 423, 
    title: 'Annal Ambedkar Business Champions Scheme (AABCS)', 
    department: 'MSME', 
    category: 'Employment & Entrepreneurship',
    description: 'Encouraging first-generation entrepreneurs from SC/ST communities to start new manufacturing or service ventures.',
    benefits: ['35% Capital Subsidy (up to ₹1.5 Crore)', '6% Interest Subvention for 10 years'], 
    deadline: 'Ongoing',
    eligibilityRules: { community: ['SC', 'ST'], minAge: 21, maxAge: 55 },
    documents: ['Community Certificate', 'Detailed Project Report', 'Educational Proof'],
    officialUrl: 'https://www.msmeonline.tn.gov.in/', 
    active: true 
  },

  { 
    id: 426, 
    title: 'Free School Uniform Scheme', 
    department: 'School Education', 
    category: 'Education & Youth',
    description: 'Providing four sets of free uniforms to all students studying from Class 1 to 8 in Government and Aided schools.',
    benefits: ['4 sets of stitched uniforms annually', 'Footwear and socks included'], 
    deadline: 'Re-opening of Schools (June)',
    eligibilityRules: { class: { min: 1, max: 8 }, schoolType: 'Govt/Aided' },
    documents: ['School Admission Record', 'Ration Card'],
    officialUrl: 'https://www.tnschools.gov.in/', 
    active: true 
  },

  { 
    id: 427, 
    title: 'Special Incentive Scheme for X and XII Students', 
    department: 'School Education', 
    category: 'Education & Youth',
    description: 'Cash incentive deposited in post office savings to reduce the dropout rate of students in higher secondary classes.',
    benefits: ['₹1,500 for Class 10 & 11', '₹2,000 for Class 12'], 
    deadline: 'Ongoing',
    eligibilityRules: { class: [10, 11, 12], schoolType: 'Govt/Aided' },
    documents: ['School Identity Card', 'Post Office Account Details'],
    officialUrl: 'https://www.tnschools.gov.in/', 
    active: true 
  },

  { 
    id: 428, 
    title: 'Ennum Ezhuthum Mission (Foundational Literacy)', 
    department: 'School Education', 
    category: 'Education & Youth',
    description: 'A special mission to ensure all children under age 8 are able to read with comprehension and do basic math.',
    benefits: ['Specialized workbooks and learning kits', 'Child-centric activity based learning'], 
    deadline: 'Ongoing',
    eligibilityRules: { maxAge: 8, schoolType: 'Govt' },
    documents: ['Aadhaar Card'],
    officialUrl: 'https://www.tnschools.gov.in/', 
    active: true 
  },

  // --- 50. HEALTH & SOCIAL SECURITY (SPECIFIC PENSIONS) ---
  { 
    id: 441, 
    title: 'Indira Gandhi National Old Age Pension (IGNOAP)', 
    department: 'Revenue (Social Security)', 
    category: 'Health & Social Security',
    description: 'Central-state combined pension for elderly citizens from BPL families to ensure financial independence.',
    benefits: ['₹1,200 monthly pension', 'Free rice and seasonal clothing'], 
    deadline: 'Ongoing',
    eligibilityRules: { minAge: 60, status: 'BPL' },
    documents: ['BPL Certificate', 'Aadhaar Card', 'Age Proof'],
    officialUrl: 'https://www.tnesevai.tn.gov.in/', 
    active: true 
  },

  { 
    id: 442, 
    title: 'Indira Gandhi National Widow Pension (IGNWPS)', 
    department: 'Revenue (Social Security)', 
    category: 'Health & Social Security',
    description: 'Monthly pension for widows belonging to households living below the poverty line.',
    benefits: ['₹1,200 monthly pension'], 
    deadline: 'Ongoing',
    eligibilityRules: { status: ['Widow', 'BPL'], minAge: 40 },
    documents: ['Death Certificate of Husband', 'Income Certificate', 'Aadhaar'],
    officialUrl: 'https://www.tnesevai.tn.gov.in/', 
    active: true 
  },

  { 
    id: 443, 
    title: 'Unmarried Women Pension Scheme', 
    department: 'Revenue (Social Security)', 
    category: 'Health & Social Security',
    description: 'Social security pension for poor, unmarried women who are over 50 years of age and in destitute condition.',
    benefits: ['₹1,200 monthly pension'], 
    deadline: 'Ongoing',
    eligibilityRules: { maritalStatus: 'Unmarried', minAge: 50, status: 'Destitute' },
    documents: ['Voter ID', 'Aadhaar Card', 'Income Certificate'],
    officialUrl: 'https://www.tnesevai.tn.gov.in/', 
    active: true 
  },

  // --- 51. AGRICULTURE & HOUSING (RURAL DEVELOPMENT) ---
  { 
    id: 451, 
    title: 'Tamil Nadu Village Habitation Improvement (THAI) Scheme', 
    department: 'Rural Development', 
    category: 'Agriculture & Housing',
    description: 'Fulfilling the minimum basic requirements of all habitations in a village panchayat like water, street lights, and roads.',
    benefits: ['Improved street lighting', 'Cement concrete roads', 'Potable water supply'], 
    deadline: 'Ongoing',
    eligibilityRules: { location: 'Rural' },
    documents: ['Resident Proof'],
    officialUrl: 'https://www.tnrd.tn.gov.in/', 
    active: true 
  },

  // --- 52. EDUCATION & YOUTH (2026 FLAGSHIP & AIDS AWARENESS) ---
  { 
    id: 456, 
    title: 'TN Vetri Nichayam Scheme 2026', 
    department: 'Tamil Nadu Skill Development Corporation (TNSDC)', 
    category: 'Education & Youth',
    description: 'A 100-hour industry-oriented skill training program for graduates and dropouts to ensure immediate placement.',
    benefits: ['₹12,000 Skill Voucher for recognized training', 'Industry-led placement support', 'Free technical certification'], 
    deadline: 'Rolling Basis 2026',
    eligibilityRules: { minAge: 18, maxAge: 35, status: 'Unemployed' },
    documents: ['Degree/Diploma Certificate', 'Aadhaar Card', 'Skill Voucher Registration'],
    officialUrl: 'https://www.tnsdc.tn.gov.in/', 
    active: true 
  },

  { 
    id: 457, 
    title: 'TNTCAA Educational Support for CLHIV', 
    department: 'TNSACS', 
    category: 'Education & Youth',
    description: 'The Tamil Nadu Trust for Children Affected by HIV/AIDS provides dedicated support for their schooling and higher education.',
    benefits: ['Full tuition fee reimbursement', 'Special monthly educational allowance'], 
    deadline: 'Ongoing',
    eligibilityRules: { medicalStatus: 'CLHIV (Affected/Infected)' },
    documents: ['Medical Certificate', 'School Bonafide', 'Trust Membership Card'],
    officialUrl: 'https://tnsacs.in/welfareschemeslist', 
    active: true 
  },

  // --- 53. WOMEN'S WELFARE (EMPOWERMENT & SAFETY) ---
  { 
    id: 461, 
    title: 'Amma Two Wheeler Scheme (Working Women)', 
    department: 'Social Welfare & Women Empowerment', 
    category: "Women's Welfare",
    description: 'Empowering working women by providing a subsidy to purchase motorized two-wheelers for easy commuting.',
    benefits: ['50% subsidy up to ₹25,000 for scooter purchase'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', minAge: 18, maxAge: 40, maxIncome: 250000 },
    documents: ['Driving License (LLR/Permanent)', 'Employment Proof', 'Salary Certificate'],
    officialUrl: 'https://www.myscheme.gov.in/schemes/atwsww', 
    active: true 
  },

  { 
    id: 462, 
    title: 'Government Working Women Hostel Scheme', 
    department: 'Social Welfare & Women Empowerment', 
    category: "Women's Welfare",
    description: 'Providing safe and affordable residential facilities for working women in urban and semi-urban centers.',
    benefits: ['Safe accommodation at nominal rent', 'Food and security services included'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', status: 'Working', residency: 'Tamil Nadu' },
    documents: ['Employee ID', 'Income Certificate', 'Aadhaar Card'],
    officialUrl: 'https://www.myscheme.gov.in/schemes/gwwh', 
    active: true 
  },

  // --- 54. EMPLOYMENT & ENTREPRENEURSHIP (MSME & STARTUP) ---
  { 
    id: 471, 
    title: 'Capital Subsidy for Micro Manufacturing Enterprises', 
    department: 'MSME', 
    category: 'Employment & Entrepreneurship',
    description: 'Incentivizing the setup of new micro manufacturing units with significant capital investment support.',
    benefits: ['25% capital subsidy on plant & machinery (up to ₹1.5 Cr)', 'Additional 5% subsidy for Women/SC/ST/TG entrepreneurs'], 
    deadline: 'Ongoing',
    eligibilityRules: { type: 'Micro Enterprise', sector: 'Manufacturing' },
    documents: ['Udyam Registration', 'Invoices of Machinery', 'Chartered Accountant Certificate'],
    officialUrl: 'https://www.msmeonline.tn.gov.in/', 
    active: true 
  },

  { 
    id: 472, 
    title: 'Tamil Nadu Startup Seed Grant (TANSEED 2026)', 
    department: 'TANSIM', 
    category: 'Employment & Entrepreneurship',
    description: 'Seed funding for early-stage startups in Tamil Nadu to help them build prototypes and reach market readiness.',
    benefits: ['Equity-free grant up to ₹10 Lakhs', 'Access to government incubation centers'], 
    deadline: 'Cycle-based (Check portal)',
    eligibilityRules: { entityType: 'DPIIT Registered Startup', residency: 'Tamil Nadu' },
    documents: ['Startup India Recognition', 'Pitch Deck', 'PAN/GST of Entity'],
    officialUrl: 'https://startuptn.in/', 
    active: true 
  },

  // --- 52. AGRICULTURE (HORTICULTURE & MICRO-IRRIGATION) ---
  { 
    id: 481, 
    title: 'Mission on Sustainable Dryland Agriculture (MSDA)', 
    department: 'Agriculture', 
    category: 'Agriculture & Housing',
    description: 'Empowering dryland farmers by forming clusters to adopt collective farming and value addition for millets and pulses.',
    benefits: ['Subsidy of ₹11,250 per hectare for summer ploughing', 'Free seed kits for dryland crops'], 
    deadline: 'Pre-monsoon (June)',
    eligibilityRules: { landType: 'Dryland', minLand: '0.5 Acre' },
    documents: ['Patta/Chitta', 'Aadhaar Card', 'Bank Passbook'],
    officialUrl: 'https://www.tnagrisnet.tn.gov.in/', 
    active: true 
  },

  { 
    id: 482, 
    title: 'Establishment of Permanent Pandal System', 
    department: 'Horticulture', 
    category: 'Agriculture & Housing',
    description: 'Providing financial assistance for the construction of permanent Pandal structures for climbing vegetables like Bitter Gourd and Snake Gourd.',
    benefits: ['Subsidy of ₹2 Lakhs per hectare', 'Technical support for structure design'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Farmer', cropType: 'Climbing Vegetables' },
    documents: ['FMB Sketch', 'Chitta/Adangal', 'Aadhaar Card'],
    officialUrl: 'https://tnhorticulture.tn.gov.in/', 
    active: true 
  },

  { 
    id: 483, 
    title: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY-Micro Irrigation)', 
    department: 'Agricultural Engineering', 
    category: 'Agriculture & Housing',
    description: 'Promoting "Per Drop More Crop" by installing Drip and Sprinkler irrigation systems with massive state subsidies.',
    benefits: ['100% subsidy for Small & Marginal farmers', '75% subsidy for Big farmers', 'GST absorbed by State Govt'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Farmer', residency: 'Tamil Nadu' },
    documents: ['Soil and Water Test Report', 'Land Records', 'Field Photos'],
    officialUrl: 'https://tnhorticulture.tn.gov.in/pmksy/', 
    active: true 
  },

  // --- 53. HOUSING (TNHB & RURAL REPAIRS) ---
  { 
    id: 501, 
    title: 'Tamil Nadu Housing Board (TNHB) - HIG/MIG Allotment', 
    department: 'Housing & Urban Development', 
    category: 'Agriculture & Housing',
    description: 'Allotment of developed plots, flats, and houses under various income groups (HIG, MIG, LIG) through a lottery system.',
    benefits: ['Affordable quality housing', 'Clear titles and planned infrastructure'], 
    deadline: 'Project Specific',
    eligibilityRules: { minAge: 21, residency: 'Tamil Nadu Native', incomeCategory: ['HIG', 'MIG'] },
    documents: ['Nativity Certificate', 'Income Certificate', 'Non-possession Certificate (Affidavit)'],
    officialUrl: 'https://www.tnhb.tn.gov.in/', 
    active: true 
  },

  { 
    id: 502, 
    title: 'Repairs to Rural Houses Scheme (2025-26)', 
    department: 'Rural Development', 
    category: 'Agriculture & Housing',
    description: 'A special 2026 initiative for the renovation and repair of houses built under various government schemes before the year 2001.',
    benefits: ['Financial grant for major structural repairs', 'Ensuring safety of old government-allotted houses'], 
    deadline: '2026-03-31',
    eligibilityRules: { houseAge: 'Built before 2001', location: 'Rural' },
    documents: ['House Allotment Order', 'Current Photo of House', 'Ration Card'],
    officialUrl: 'https://tnrd.tn.gov.in/', 
    active: true 
  },

  // --- 54. EDUCATION & YOUTH (MBC/BC SCHOLARSHIP WING) ---
  { 
    id: 503, 
    title: 'MBC Free Education (3-Year UG in Govt/Aided)', 
    department: 'Backward Classes & MBC Welfare', 
    category: 'Education & Youth',
    description: 'Full tuition fee waiver for MBC/DNC students pursuing three-year undergraduate courses in Government and Government-aided colleges.',
    benefits: ['100% Tuition Fee Waiver', 'Special fee reimbursement'], 
    deadline: 'October (Annual)',
    eligibilityRules: { community: ['MBC', 'DNC'], residency: 'Tamil Nadu' },
    documents: ['Community Certificate', 'Bonafide Certificate', 'Aadhaar Card'],
    officialUrl: 'https://ssp24-25.tnega.org/', 
    active: true 
  },

  { 
    id: 504, 
    title: 'Post-Matric Scholarship for BC Students (Private Colleges)', 
    department: 'Backward Classes & MBC Welfare', 
    category: 'Education & Youth',
    description: 'Financial support for Backward Class students studying in private colleges to help cover educational expenses.',
    benefits: ['Partial tuition fee reimbursement', 'Maintenance allowance'], 
    deadline: 'Academic Year cycle',
    eligibilityRules: { community: 'BC', maxIncome: 250000 },
    documents: ['Income Certificate', 'Community Certificate', 'College ID'],
    officialUrl: 'https://ssp24-25.tnega.org/', 
    active: true 
  },

  // --- 55. WOMEN'S WELFARE (LABOUR & SERVICE HOMES) ---
  { 
    id: 511, 
    title: 'TN Government Service Home (GSHTN)', 
    department: 'Social Welfare & Women Empowerment', 
    category: "Women's Welfare",
    description: 'Comprehensive residential support including food, education, and vocational training for deserted, destitute, and widow women.',
    benefits: ['Free accommodation & Food', 'Vocational training (Tailoring/Secretarial)', 'Free textbooks & uniforms'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', maxIncome: 72000, status: ['Widow', 'Deserted', 'Destitute'] },
    documents: ['Status Certificate from Tahsildar', 'Income Certificate', 'Age Proof'],
    officialUrl: 'https://www.myscheme.gov.in/schemes/gshtn', 
    active: true 
  },

  { 
    id: 512, 
    title: 'E.V.R. Maniammaiyar Ninaivu Marriage Assistance', 
    department: 'Social Welfare', 
    category: "Women's Welfare",
    description: 'Financial aid specifically for the daughters of poor widows to support their marriage expenses.',
    benefits: ['₹25,000 for Non-degree holders', '₹50,000 for Degree/Diploma holders', '8-gram gold coin'], 
    deadline: '40 days prior to marriage',
    eligibilityRules: { status: 'Daughter of Widow', minAge: 18 },
    documents: ['Widow Certificate', 'Marriage Invite', 'Educational Certificate'],
    officialUrl: 'https://dharmapuri.nic.in/scheme/social-welfare-schemes/', 
    active: true 
  },

  // --- 56. HEALTH & SOCIAL SECURITY (SPECIFIC INSURANCE) ---
  { 
    id: 521, 
    title: 'Health Insurance Scheme for Weavers (HIS)', 
    department: 'Handlooms & Textiles', 
    category: 'Health & Social Security',
    description: 'Tailored health insurance for the weaving community, covering maternity, eye treatment, and hospitalization.',
    benefits: ['₹2,500 Maternity Benefit', '₹4,000 for Domiciliary Hospitalization', 'Coverage for family members'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Handloom Weaver', incomeSource: '50% from Weaving' },
    documents: ['Weaver ID Card', 'Aadhaar Card', 'Ration Card'],
    officialUrl: 'https://eshram.gov.in/social-security-welfare-schemes', 
    active: true 
  },

  // --- 57. EMPLOYMENT & ENTREPRENEURSHIP (ART & CULTURE) ---
  { 
    id: 531, 
    title: 'Encouragement to Young Artists Scheme', 
    department: 'Art & Culture', 
    category: 'Employment & Entrepreneurship',
    description: 'Providing performing opportunities and remuneration to talented young artists to showcase traditional arts.',
    benefits: ['Performance grants', 'Stage opportunities in government programs'], 
    deadline: 'Annual Selection',
    eligibilityRules: { minAge: 18, maxAge: 35, talent: 'Traditional Arts' },
    documents: ['Artist Profile', 'Identity Proof', 'Awards/Certificates'],
    officialUrl: 'https://www.myscheme.gov.in/search/state/Tamil%20Nadu', 
    active: true 
  },

  // --- 58. AGRICULTURE & HOUSING (NADP & INFRASTRUCTURE) ---
  { 
    id: 532, 
    title: 'NADP - Integrated Pest Management for Maize', 
    department: 'Agriculture', 
    category: 'Agriculture & Housing',
    description: 'Providing specialized bio-pesticides and pheromone traps to farmers to control the Fall Army Worm in Maize cultivation.',
    benefits: ['₹1,500 per hectare for pest control kits', 'Technical training on organic pest management'], 
    deadline: 'Sowing Season',
    eligibilityRules: { cropType: 'Maize', minLand: '0.5 Hectare' },
    documents: ['Adangal/Chitta', 'Aadhaar Card', 'Farmer ID'],
    officialUrl: 'https://perambalur.nic.in/agriculture-department-schemes/', 
    active: true 
  },

  { 
    id: 533, 
    title: 'Seed Village Programme (Paddy & Pulses)', 
    department: 'Agriculture', 
    category: 'Agriculture & Housing',
    description: 'Providing foundation/certified seeds of high-yielding varieties at subsidized rates to farmers to ensure seed security at the village level.',
    benefits: ['Subsidy of ₹17.5 to ₹48 per kg based on crop type', 'Training on seed production techniques'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Farmer', residency: 'Tamil Nadu' },
    documents: ['Patta/Chitta', 'Ration Card', 'Bank Passbook'],
    officialUrl: 'https://perambalur.nic.in/agriculture-department-schemes/', 
    active: true 
  },

  { 
    id: 534, 
    title: 'National Food Security Mission (NFSM) - Oilpalm', 
    department: 'Agriculture', 
    category: 'Agriculture & Housing',
    description: 'Promoting oil palm cultivation in selected districts to increase domestic edible oil production.',
    benefits: ['₹12,000 per hectare for seedlings', 'Maintenance subsidy for the first 4 years'], 
    deadline: 'Annual Cycle',
    eligibilityRules: { district: 'Selected (Perambalur/Trichy/etc)', waterResource: 'Available' },
    documents: ['Land Records', 'Borewell/Well Ownership Proof'],
    officialUrl: 'https://perambalur.nic.in/agriculture-department-schemes/', 
    active: true 
  },

  // --- 59. EMPLOYMENT & ENTREPRENEURSHIP (SUBSIDIES & LOANS) ---
  { 
    id: 551, 
    title: 'Low Tension Power Tariff Subsidy', 
    department: 'MSME / FaMe TN', 
    category: 'Employment & Entrepreneurship',
    description: 'Assisting new micro-manufacturing units by subsidizing their electricity consumption charges during the initial 5 years.',
    benefits: ['20% subsidy on LT power consumption charges', 'Applicable for the first 60 months of operation'], 
    deadline: 'Ongoing',
    eligibilityRules: { type: 'Micro Manufacturing', powerType: 'LT Connection' },
    documents: ['Udyam Registration', 'EB Bill Copy', 'Commencement of Production Certificate'],
    officialUrl: 'https://fametn.com/scheme', 
    active: true 
  },

  { 
    id: 552, 
    title: 'Generator Subsidy for Micro Enterprises', 
    department: 'MSME / FaMe TN', 
    category: 'Employment & Entrepreneurship',
    description: 'Subsidizing the cost of purchasing diesel generators to ensure uninterrupted production for small units.',
    benefits: ['25% subsidy on generator cost (up to ₹5 Lakhs)'], 
    deadline: 'Ongoing',
    eligibilityRules: { type: 'Micro Manufacturing', location: 'Tamil Nadu' },
    documents: ['Udyam Registration', 'Generator Purchase Invoice', 'Physical Inspection Report'],
    officialUrl: 'https://fametn.com/scheme', 
    active: true 
  },

  { 
    id: 553, 
    title: 'Scheme for Quality Certification (Q-Cert)', 
    department: 'MSME', 
    category: 'Employment & Entrepreneurship',
    description: 'Encouraging MSMEs to acquire national and international quality standards (ISO, HACCP, etc.) for their products.',
    benefits: ['100% reimbursement of certification costs (up to ₹1 Lakh)'], 
    deadline: 'Post-certification',
    eligibilityRules: { type: 'Registered MSME', residency: 'Tamil Nadu' },
    documents: ['Valid Quality Certificate', 'Payment Receipts', 'Udyam Registration'],
    officialUrl: 'https://fametn.com/scheme', 
    active: true 
  },

  // --- 49. EDUCATION & YOUTH (SCHOOL LEVEL WELFARE) ---
  { 
    id: 426, 
    title: 'Free School Uniform Scheme', 
    department: 'School Education', 
    category: 'Education & Youth',
    description: 'Providing four sets of free uniforms to all students studying from Class 1 to 8 in Government and Aided schools.',
    benefits: ['4 sets of stitched uniforms annually', 'Footwear and socks included'], 
    deadline: 'Re-opening of Schools (June)',
    eligibilityRules: { class: { min: 1, max: 8 }, schoolType: 'Govt/Aided' },
    documents: ['School Admission Record', 'Ration Card'],
    officialUrl: 'https://www.tnschools.gov.in/', 
    active: true 
  },

  { 
    id: 427, 
    title: 'Special Incentive Scheme for X and XII Students', 
    department: 'School Education', 
    category: 'Education & Youth',
    description: 'Cash incentive deposited in post office savings to reduce the dropout rate of students in higher secondary classes.',
    benefits: ['₹1,500 for Class 10 & 11', '₹2,000 for Class 12'], 
    deadline: 'Ongoing',
    eligibilityRules: { class: [10, 11, 12], schoolType: 'Govt/Aided' },
    documents: ['School Identity Card', 'Post Office Account Details'],
    officialUrl: 'https://www.tnschools.gov.in/', 
    active: true 
  },

  { 
    id: 428, 
    title: 'Ennum Ezhuthum Mission (Foundational Literacy)', 
    department: 'School Education', 
    category: 'Education & Youth',
    description: 'A special mission to ensure all children under age 8 are able to read with comprehension and do basic math.',
    benefits: ['Specialized workbooks and learning kits', 'Child-centric activity based learning'], 
    deadline: 'Ongoing',
    eligibilityRules: { maxAge: 8, schoolType: 'Govt' },
    documents: ['Aadhaar Card'],
    officialUrl: 'https://www.tnschools.gov.in/', 
    active: true 
  },

  // --- 50. HEALTH & SOCIAL SECURITY (SPECIFIC PENSIONS) ---
  { 
    id: 441, 
    title: 'Indira Gandhi National Old Age Pension (IGNOAP)', 
    department: 'Revenue (Social Security)', 
    category: 'Health & Social Security',
    description: 'Central-state combined pension for elderly citizens from BPL families to ensure financial independence.',
    benefits: ['₹1,200 monthly pension', 'Free rice and seasonal clothing'], 
    deadline: 'Ongoing',
    eligibilityRules: { minAge: 60, status: 'BPL' },
    documents: ['BPL Certificate', 'Aadhaar Card', 'Age Proof'],
    officialUrl: 'https://www.tnesevai.tn.gov.in/', 
    active: true 
  },

  { 
    id: 442, 
    title: 'Indira Gandhi National Widow Pension (IGNWPS)', 
    department: 'Revenue (Social Security)', 
    category: 'Health & Social Security',
    description: 'Monthly pension for widows belonging to households living below the poverty line.',
    benefits: ['₹1,200 monthly pension'], 
    deadline: 'Ongoing',
    eligibilityRules: { status: ['Widow', 'BPL'], minAge: 40 },
    documents: ['Death Certificate of Husband', 'Income Certificate', 'Aadhaar'],
    officialUrl: 'https://www.tnesevai.tn.gov.in/', 
    active: true 
  },

  { 
    id: 443, 
    title: 'Unmarried Women Pension Scheme', 
    department: 'Revenue (Social Security)', 
    category: 'Health & Social Security',
    description: 'Social security pension for poor, unmarried women who are over 50 years of age and in destitute condition.',
    benefits: ['₹1,200 monthly pension'], 
    deadline: 'Ongoing',
    eligibilityRules: { maritalStatus: 'Unmarried', minAge: 50, status: 'Destitute' },
    documents: ['Voter ID', 'Aadhaar Card', 'Income Certificate'],
    officialUrl: 'https://www.tnesevai.tn.gov.in/', 
    active: true 
  },

  // --- 51. AGRICULTURE & HOUSING (RURAL DEVELOPMENT) ---
  { 
    id: 451, 
    title: 'Tamil Nadu Village Habitation Improvement (THAI) Scheme', 
    department: 'Rural Development', 
    category: 'Agriculture & Housing',
    description: 'Fulfilling the minimum basic requirements of all habitations in a village panchayat like water, street lights, and roads.',
    benefits: ['Improved street lighting', 'Cement concrete roads', 'Potable water supply'], 
    deadline: 'Ongoing',
    eligibilityRules: { location: 'Rural' },
    documents: ['Resident Proof'],
    officialUrl: 'https://www.tnrd.tn.gov.in/', 
    active: true 
  },

  // --- 60. ADI DRAVIDAR & TRIBAL WELFARE (AWARDS & INCENTIVES) ---
  { 
    id: 561, 
    title: 'Awards to Bright Students (SC/ST/SCC)', 
    department: 'Adi Dravidar Welfare', 
    category: 'Education & Youth',
    description: 'Financial award for the top two boys and two girls in each district who secure the highest marks in 10th standard exams.',
    benefits: ['₹1,600 for the first year', '₹2,000 per annum for next five years'], 
    deadline: 'Post-Results (June/July)',
    eligibilityRules: { community: ['SC', 'ST', 'SCC'], residency: 'Tamil Nadu' },
    documents: ['10th Marksheet', 'Community Certificate', 'Bank Passbook'],
    officialUrl: 'https://chennai.nic.in/departments/social-welfare-sw/', 
    active: true 
  },

  { 
    id: 562, 
    title: 'Special Incentive Scheme for SC/ST Girl Students', 
    department: 'Adi Dravidar Welfare', 
    category: 'Education & Youth',
    description: 'A monthly incentive paid to SC/ST girl students from Class 3 to 8 to reduce dropouts and promote continuing education.',
    benefits: ['₹50/month (Class 3-5)', '₹100/month (Class 6)', '₹150/month (Class 7-8)'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', community: ['SC', 'ST'], schoolType: 'Govt/Aided' },
    documents: ['School Study Certificate', 'Community Certificate'],
    officialUrl: 'https://chennai.nic.in/departments/social-welfare-sw/', 
    active: true 
  },

  // --- 61. BC / MBC / DNC WELFARE (SPECIAL SCHOLARSHIPS) ---
  { 
    id: 571, 
    title: 'Rural Girls Incentive Scheme (BC/MBC)', 
    department: 'BC, MBC & Minorities Welfare', 
    category: 'Education & Youth',
    description: 'Promoting awareness about education among BC/MBC and Denotified Community girl students in rural blocks.',
    benefits: ['₹500/year (Class 3-5)', '₹1000/year (Class 6)'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', location: 'Rural', community: ['BC', 'MBC', 'DNC'], maxIncome: 72000 },
    documents: ['Community Certificate', 'Income Certificate', 'School ID'],
    officialUrl: 'https://ranipet.nic.in/bc-mbc-dnc-and-minorities-welfare/', 
    active: true 
  },

  { 
    id: 572, 
    title: 'Free Supply of Sewing Machines (BC/MBC)', 
    department: 'BC, MBC & Minorities Welfare', 
    category: 'Women\'s Welfare',
    description: 'Distribution of free sewing machines to women belonging to BC/MBC/DNC communities to encourage self-employment.',
    benefits: ['Free Motorized Sewing Machine'], 
    deadline: 'Ongoing',
    eligibilityRules: { gender: 'Female', community: ['BC', 'MBC', 'DNC'], maxIncome: 72000 },
    documents: ['Income Certificate', 'Tailoring Course Certificate', 'Aadhaar'],
    officialUrl: 'https://pudukkottai.nic.in/bcmbc-welfare/', 
    active: true 
  },

  // --- 62. SOCIAL DEFENCE & ATROCITIES PREVENTION ---
  { 
    id: 581, 
    title: 'Accident Relief Scheme for Narikoravar Board', 
    department: 'Narikoravar Welfare Board', 
    category: 'Health & Social Security',
    description: 'Assistance for registered members of the Narikoravar Board in case of accidents or natural death.',
    benefits: ['₹1,00,000 for Accidental Death', '₹15,000 for Natural Death', '₹2,000 for Funeral Expenses'], 
    deadline: 'Ongoing',
    eligibilityRules: { membership: 'Registered Narikoravar Board' },
    documents: ['Board ID Card', 'Death/Medical Certificate'],
    officialUrl: 'https://ranipet.nic.in/bc-mbc-dnc-and-minorities-welfare/', 
    active: true 
  },

  { 
    id: 582, 
    title: 'Financial Assistance for Best Writers (SC/ST)', 
    department: 'Adi Dravidar Welfare', 
    category: 'Employment & Entrepreneurship',
    description: 'A special 2026 grant for writers from SC/ST communities to publish their research or literary works.',
    benefits: ['₹1,00,000 financial assistance for publication'], 
    deadline: 'Annual Application',
    eligibilityRules: { community: ['SC', 'ST'], status: 'Writer/Author' },
    documents: ['Manuscript Copy', 'Community Certificate', 'Aadhaar'],
    officialUrl: 'https://perambalur.nic.in/adi-dravidar-tribal-welfare-department/', 
    active: true 
  },

  // --- 71. RURAL DEVELOPMENT & PANCHAYAT RAJ (INFRASTRUCTURE) ---
  { 
    id: 645, 
    title: 'Rural Buildings Maintenance and Renovation Scheme (RBMRS)', 
    department: 'Rural Development', 
    category: 'Agriculture & Housing',
    description: 'A massive 2026 funding drive to repair and renovate aging community buildings, library blocks, and panchayat offices.',
    benefits: ['Structural safety upgrades for public buildings', 'Modernization of village libraries'], 
    deadline: 'Ongoing',
    eligibilityRules: { location: 'Rural Panchayat' },
    documents: ['Panchayat Resolution', 'Site Photos'],
    officialUrl: 'https://www.tnrd.tn.gov.in/', 
    active: true 
  },

  { 
    id: 646, 
    title: 'Self Sufficiency Scheme (SSS)', 
    department: 'Rural Development', 
    category: 'Employment & Entrepreneurship',
    description: 'A participatory scheme where the public contributes 1/3rd of the cost and the government provides 2/3rd for community assets.',
    benefits: ['Fast-track creation of community halls, parks, and bridges'], 
    deadline: 'Rolling Basis',
    eligibilityRules: { contribution: '33% Public Share' },
    documents: ['Public Contribution Receipt', 'Project Proposal'],
    officialUrl: 'https://www.tnrd.tn.gov.in/', 
    active: true 
  },

  // --- 72. DIFFERENTLY ABLED WELFARE (EQUIPMENT & EDUCATION) ---
  { 
    id: 651, 
    title: 'Modular Artificial Limbs for Amputees', 
    department: 'Differently Abled Welfare', 
    category: 'Health & Social Security',
    description: 'High-quality, lightweight modular artificial limbs provided free to eligible amputees to improve mobility.',
    benefits: ['Free Custom-fitted Modular Limb (Value up to ₹25,000)'], 
    deadline: 'Ongoing',
    eligibilityRules: { disabilityType: 'Amputee', residency: 'Tamil Nadu' },
    documents: ['Disability Identity Card', 'Aadhaar Card', 'Clinical Assessment Form'],
    officialUrl: 'https://chennai.nic.in/', 
    active: true 
  },

  { 
    id: 652, 
    title: 'Assistance to Law Graduates (Differently Abled)', 
    department: 'Differently Abled Welfare', 
    category: 'Education & Youth',
    description: 'One-time financial grant for differently abled law graduates to purchase law books and set up their practice.',
    benefits: ['₹50,000 one-time grant'], 
    deadline: 'Within 2 years of graduation',
    eligibilityRules: { qualification: 'Law Graduate', disabilityStatus: 'Certified' },
    documents: ['Degree Certificate', 'Bar Council Enrollment', 'Disability ID'],
    officialUrl: 'https://chennai.nic.in/', 
    active: true 
  },

  // --- 73. EDUCATION & YOUTH (DNT & TRIBE SPECIALS) ---
  { 
    id: 661, 
    title: 'Talent Pool Scheme for DNTs', 
    department: 'BC/MBC & Minorities Welfare', 
    category: 'Education & Youth',
    description: 'A special merit scholarship for students belonging to De-notified Tribes (DNT) who show exceptional academic performance.',
    benefits: ['Scholarship up to ₹50,000', 'Covers exam and admission fees for professional courses'], 
    deadline: 'Academic Year cycle',
    eligibilityRules: { community: 'DNT', residency: 'Tamil Nadu' },
    documents: ['Community Certificate', 'Marksheet', 'Admission Receipt'],
    officialUrl: 'https://dwbdnc.dosje.gov.in/state', 
    active: true 
  },

  // --- 74. AGRICULTURE (MILLET MISSION 2026) ---
  { 
    id: 671, 
    title: 'Tamil Nadu Millet Mission (Consumer & Farm Support)', 
    department: 'Agriculture', 
    category: 'Agriculture & Housing',
    description: '2026 expansion of the Millet Mission to provide processing units for small farmers and millets through the PDS system.',
    benefits: ['Subsidy for millet processing machinery', 'Guaranteed buy-back for millet farmers'], 
    deadline: 'Sowing Season',
    eligibilityRules: { cropType: 'Millets', membership: 'FPO' },
    documents: ['Farmer ID', 'Patta/Chitta'],
    officialUrl: 'https://www.tnagrisnet.tn.gov.in/', 
    active: true 
  },

  // --- 75. ENVIRONMENT & CLIMATE CHANGE (NET ZERO 2050 MISSIONS) ---
  { 
    id: 672, 
    title: 'Tamil Nadu Coastal Restoration Mission (TNCRM)', 
    department: 'Environment, Climate Change and Forest', 
    category: 'Agriculture & Housing',
    description: 'A dedicated 2026 mission to prevent sea erosion, reduce marine pollution, and restore coral reefs and mangroves along the 1,076 km coastline.',
    benefits: ['Subsidies for nature-based coastal protection', 'Grants for artificial reef installation', 'Support for Blue Flag beach certification'], 
    deadline: 'Ongoing',
    eligibilityRules: { location: 'Coastal Districts', residency: 'Tamil Nadu' },
    documents: ['Coastal Residency Proof', 'Project Proposal (for NGOs/Local Bodies)'],
    officialUrl: 'https://tnclimatechangemission.in/', 
    active: true 
  },

  { 
    id: 673, 
    title: 'Chief Minister’s Solar Rooftop Capital Incentive (Revised 2026)', 
    department: 'TEDA', 
    category: 'Agriculture & Housing',
    description: 'State-funded incentive to encourage domestic consumers to install grid-connected solar PV plants on their rooftops.',
    benefits: ['₹20,000 State Subsidy (in addition to Central PM-Surya Ghar subsidy)', 'Free comprehensive maintenance for 5 years'], 
    deadline: 'Ongoing',
    eligibilityRules: { consumerType: 'Domestic', connectionType: 'TANGEDCO Grid-connected' },
    documents: ['EB Bill Copy', 'Roof Ownership Proof', 'Aadhaar Card'],
    officialUrl: 'https://teda.in/', 
    active: true 
  },

  // --- 76. MINORITY WELFARE (HERITAGE & RELIGIOUS SITES) ---
  { 
    id: 681, 
    title: 'Heritage Church Repair and Renovation Grant', 
    department: 'Minorities Welfare', 
    category: 'Health & Social Security',
    description: 'Special 2026 allocation for the structural preservation and renovation of historic churches across Tamil Nadu.',
    benefits: ['Grants up to ₹10 Lakhs for structural repairs'], 
    deadline: 'Annual Application',
    eligibilityRules: { siteType: 'Heritage Church', age: '50+ Years' },
    documents: ['Building Age Certificate', 'Worship Place Registration', 'Trust Deed'],
    officialUrl: 'https://bcmbcmw.tn.gov.in/', 
    active: true 
  },

  { 
    id: 682, 
    title: 'Ulama and Other Employees Welfare Board Benefits', 
    department: 'Minorities Welfare', 
    category: 'Health & Social Security',
    description: 'Social security and educational assistance for the children of employees working in Mosques and Dargahs registered with the Wakf Board.',
    benefits: ['Scholarships for children from ₹1,000 to ₹6,000', 'Marriage assistance of ₹10,000', 'Natural death relief of ₹20,000'], 
    deadline: 'Ongoing',
    eligibilityRules: { membership: 'Ulama Welfare Board', parentOccupation: 'Religious Worker' },
    documents: ['Board Identity Card', 'Community Certificate', 'Aadhaar'],
    officialUrl: 'https://bcmbcmw.tn.gov.in/', 
    active: true 
  },

  // --- 77. EMPLOYMENT & ENTREPRENEURSHIP (2026 MSME UPDATES) ---
  { 
    id: 691, 
    title: 'Tamil Nadu Semiconductor Mission 2030 (Startup Grant)', 
    department: 'Industries / MSME', 
    category: 'Employment & Entrepreneurship',
    description: 'Special incentive for domestic startups to establish semiconductor design and fabless units in the state.',
    benefits: ['Design infrastructure support up to ₹50 Lakhs', 'Matching grants for R&D centers'], 
    deadline: 'Cycle-based 2026',
    eligibilityRules: { sector: 'Semiconductor / Electronics', type: 'Startup' },
    documents: ['DPIIT Recognition', 'Technical Roadmap', 'Udyam Registration'],
    officialUrl: 'https://www.msmeonline.tn.gov.in/', 
    active: true 
  },

  { 
    id: 692, 
    title: 'Kalaignar Kaivinai Thittam (Artisan Credit)', 
    department: 'MSME', 
    category: 'Employment & Entrepreneurship',
    description: 'Integrated support for artisans in 25 handicraft categories including bronze icons, stone carving, and woodcraft.',
    benefits: ['Credit assistance up to ₹5 Lakhs', 'Skill training stipend', 'Infrastructure support for common work-sheds'], 
    deadline: 'Ongoing',
    eligibilityRules: { occupation: 'Handicraft Artisan', category: 'Recognized 25 Crafts' },
    documents: ['Artisan ID Card', 'Address Proof', 'Bank Account details'],
    officialUrl: 'https://www.msmeonline.tn.gov.in/', 
    active: true 
  },

  // --- 78. HEALTH & NUTRITION (2026 EXPANSION) ---
  { 
    id: 701, 
    title: 'CM Breakfast Scheme - Urban Aided Schools Expansion', 
    department: 'Social Welfare & Women Empowerment', 
    category: 'Education & Youth',
    description: 'Expansion of the landmark breakfast scheme to include students of government-aided schools in urban municipal areas.',
    benefits: ['Daily free nutritious breakfast for Class 1-5 students'], 
    deadline: 'Academic Year 2026',
    eligibilityRules: { class: { min: 1, max: 5 }, schoolType: 'Govt Aided (Urban)' },
    documents: ['School Enrollment Record'],
    officialUrl: 'https://www.tn.gov.in/', 
    active: true 
  }
];

// ── In-memory DB helpers (used by service.js admin functions) ─────────────────
let nextId = 100;

export const db = {
  addScheme(data) {
    const newScheme = { ...data, id: nextId++ };
    schemes.push(newScheme);
    return newScheme;
  },
  updateScheme(id, data) {
    const idx = schemes.findIndex(s => s.id == id);
    if (idx === -1) return null;
    schemes[idx] = { ...schemes[idx], ...data };
    return schemes[idx];
  },
  deleteScheme(id) {
    const idx = schemes.findIndex(s => s.id == id);
    if (idx === -1) return false;
    schemes.splice(idx, 1);
    return true;
  }
};

// ── External govt schemes for Sync feature ────────────────────────────────────
export const externalGovtSchemes = [
  { id: 201, title: 'Amma Unavagam Scheme', department: 'Social Welfare', category: "Women's Welfare",
    description: 'Subsidized meals at ₹1 for the public through government canteens.',
    benefits: ['₹1 meals', 'Nutritious food'], deadline: 'Ongoing',
    eligibilityRules: {}, documents: ['No documents required'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { id: 202, title: 'Innuyir Kaakum 48 Scheme', department: 'Health & Family Welfare', category: 'Health & Social Security',
    description: '48-hour quick discharge scheme for patients in government hospitals after treatment.',
    benefits: ['Fast-track discharge', 'Free treatment'], deadline: 'Ongoing',
    eligibilityRules: {}, documents: ['Hospital Registration'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { id: 203, title: 'Vazhndhu Kaattuvom Project', department: 'Rural Development', category: 'Agriculture & Housing',
    description: 'World Bank aided project for rural poor livelihood improvement.',
    benefits: ['Livelihood support', 'Self-help group funding'], deadline: 'Ongoing',
    eligibilityRules: { maxIncome: 150000 }, documents: ['Residence Proof', 'SHG Certificate'],
    officialUrl: 'https://www.tn.gov.in/', active: true },

  { id: 204, title: 'Tamil Nadu Skill Development Corporation', department: 'Skill Development', category: 'Education & Youth',
    description: 'Short-term skill training programs in various trades for unemployed youth.',
    benefits: ['Free training', 'Certificate', 'Job assistance'], deadline: 'Ongoing',
    eligibilityRules: { minAge: 18, maxAge: 35 }, documents: ['Educational Certificate', 'ID Proof'],
    officialUrl: 'https://www.tnsdc.in/', active: true },
];
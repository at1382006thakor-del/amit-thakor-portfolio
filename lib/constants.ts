import {
  Project,
  Skill,
  EducationItem,
  InternshipItem,
  CertificationItem,
  AchievementItem,
  ServiceItem,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Amit Kumar Thakor",
  initials: "AK",
  headline: "B.E. Information Technology Student | Data Analyst | AI/ML Enthusiast",
  shortBio:
    "Final-year B.E. Information Technology student passionate about Data Analytics, Artificial Intelligence, Machine Learning, Python, and modern web technologies. I enjoy transforming data and ideas into useful, interactive, and practical solutions.",
  aboutDetailed:
    "As a final-year B.E. Information Technology student in Gujarat, India, I specialize in leveraging data analytics and artificial intelligence to extract actionable business insights and construct intelligent web applications. My core strength lies in combining statistical data manipulation using Python, Pandas, and SQL with modern machine learning algorithms and full-stack web capabilities to deliver end-to-end analytics systems.",
  location: "Gujarat, India",
  status: "Final Year Student",
  educationDegree: "B.E. Information Technology",
  githubUrl: "https://github.com/YOUR_GITHUB_USERNAME",
  linkedinUrl: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
  email: "YOUR_EMAIL@example.com",
  resumeUrl: "/resume/Amit-Kumar-Thakor-Resume.pdf",
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const HIGHLIGHT_CARDS = [
  { icon: "GraduationCap", text: "🎓 B.E. Information Technology" },
  { icon: "BarChart3", text: "📊 Data Analytics & Visualization" },
  { icon: "Brain", text: "🤖 AI / Machine Learning" },
  { icon: "Code2", text: "💻 Python & Web Development" },
  { icon: "MapPin", text: "📍 Gujarat, India" },
];

export const SKILLS: Skill[] = [
  // Programming
  { name: "Python", category: "Programming", iconName: "Terminal", level: "Advanced", description: "Primary language for Data Science, AI/ML, and Scripting" },
  { name: "SQL", category: "Programming", iconName: "Database", level: "Advanced", description: "Complex queries, aggregations, and data manipulation" },
  { name: "JavaScript", category: "Programming", iconName: "FileCode", level: "Intermediate", description: "Frontend logic and dynamic web interactions" },
  { name: "TypeScript", category: "Programming", iconName: "FileCode2", level: "Intermediate", description: "Type-safe web application development" },
  { name: "HTML", category: "Programming", iconName: "Layout", level: "Advanced", description: "Semantic web structure and accessibility" },
  { name: "CSS", category: "Programming", iconName: "Palette", level: "Advanced", description: "Responsive layouts, animations, and custom styling" },

  // Data Analytics
  { name: "Pandas", category: "Data Analytics", iconName: "Table", level: "Advanced", description: "Data Wrangling, Cleaning, and Exploratory Data Analysis" },
  { name: "NumPy", category: "Data Analytics", iconName: "Binary", level: "Advanced", description: "Numerical operations and multi-dimensional arrays" },
  { name: "Matplotlib", category: "Data Analytics", iconName: "LineChart", level: "Intermediate", description: "Statistical visualization and data plotting" },
  { name: "Power BI", category: "Data Analytics", iconName: "PieChart", level: "Advanced", description: "Interactive dashboards, DAX queries, and report generation" },
  { name: "Excel", category: "Data Analytics", iconName: "Sheet", level: "Advanced", description: "Pivot tables, dynamic formulas, and data analysis" },
  { name: "Data Cleaning", category: "Data Analytics", iconName: "Filter", level: "Advanced", description: "Handling missing values, anomalies, and normalization" },
  { name: "Data Visualization", category: "Data Analytics", iconName: "Activity", level: "Advanced", description: "Communicating key trends and insights visually" },

  // AI / Machine Learning
  { name: "Scikit-learn", category: "AI / Machine Learning", iconName: "Cpu", level: "Intermediate", description: "Classification, regression, clustering, and pipeline building" },
  { name: "XGBoost", category: "AI / Machine Learning", iconName: "Zap", level: "Intermediate", description: "Gradient boosted decision trees for tabular prediction" },
  { name: "Machine Learning", category: "AI / Machine Learning", iconName: "BrainCircuit", level: "Intermediate", description: "Supervised and unsupervised algorithm implementations" },
  { name: "Predictive Analytics", category: "AI / Machine Learning", iconName: "TrendingUp", level: "Intermediate", description: "Forecasting metrics and predictive modeling" },
  { name: "Generative AI", category: "AI / Machine Learning", iconName: "Sparkles", level: "Intermediate", description: "LLM integration and prompt engineering" },
  { name: "Google Gemini API", category: "AI / Machine Learning", iconName: "Bot", level: "Intermediate", description: "Building AI assistants and dynamic text processing" },

  // Web Development
  { name: "Next.js", category: "Web Development", iconName: "Globe", level: "Intermediate", description: "React framework with Server Components and App Router" },
  { name: "React", category: "Web Development", iconName: "Atom", level: "Intermediate", description: "Component-driven user interface architecture" },
  { name: "FastAPI", category: "Web Development", iconName: "Server", level: "Intermediate", description: "High-performance Python backend APIs" },
  { name: "Tailwind CSS", category: "Web Development", iconName: "Layers", level: "Advanced", description: "Utility-first design system and custom styling" },
  { name: "REST APIs", category: "Web Development", iconName: "Webhook", level: "Advanced", description: "Designing and consuming JSON REST interfaces" },

  // Database
  { name: "PostgreSQL", category: "Database", iconName: "DatabaseZap", level: "Intermediate", description: "Relational database management and indexing" },
  { name: "MySQL", category: "Database", iconName: "HardDrive", level: "Advanced", description: "Structured querying and database schema design" },

  // Tools
  { name: "Git", category: "Tools", iconName: "GitBranch", level: "Advanced", description: "Version control and branching workflows" },
  { name: "GitHub", category: "Tools", iconName: "Github", level: "Advanced", description: "Project hosting, issue tracking, and code review" },
  { name: "VS Code", category: "Tools", iconName: "Code", level: "Advanced", description: "Primary IDE with custom python and web dev extensions" },
  { name: "Jupyter Notebook", category: "Tools", iconName: "BookOpen", level: "Advanced", description: "Interactive exploratory data analysis and ML prototyping" },
];

export const PROJECTS: Project[] = [
  {
    id: "insight-ai",
    title: "InsightAI – AI Sales Analytics Assistant",
    category: "AI/ML",
    featured: true,
    description:
      "An AI-powered sales analytics platform designed to transform raw sales data into interactive dashboards, predictive insights, KPIs, and automated business reports.",
    longDescription:
      "InsightAI allows business users to upload raw sales datasets and instantly generate comprehensive sales reports, predict future quarterly revenue using gradient boosting models, and interact with a Gemini-powered AI assistant for natural language business intelligence query execution.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Google Gemini API",
    ],
    features: [
      "Dataset upload & automatic parsing",
      "Data cleaning & missing value handling",
      "Real-time KPI summary dashboard",
      "Exploratory sales analytics & breakdown",
      "Interactive time-series charts",
      "Sales prediction with XGBoost",
      "AI-generated executive business reports",
      "Natural language QA on datasets",
    ],
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/InsightAI",
    demoUrl: "https://YOUR_DEMO_URL_PLACEHOLDER.com/insight-ai",
    image: "/images/projects/insight-ai.svg",
  },
  {
    id: "aura-platform",
    title: "AURA – AI Investor Self-Service Platform",
    category: "AI/ML",
    featured: true,
    description:
      "An AI-powered investor self-service platform designed to simplify common mutual-fund support tasks and provide intelligent assistance to users.",
    longDescription:
      "AURA streamlines mutual fund investment workflows by automating FAQ resolutions, Systematic Investment Plan (SIP) management guidance, Know Your Customer (KYC) verification walkthroughs, account statement downloads, and nominee updates via a responsive user dashboard and intelligent conversational agent.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Google Gemini API",
      "JWT",
      "REST API",
    ],
    features: [
      "Personalized investor dashboard",
      "Gemini-powered financial query assistant",
      "Automated FAQ guidance engine",
      "SIP management & calculator assistance",
      "KYC status tracking & checklist",
      "Account statement generation helper",
      "Nominee detail management wizard",
    ],
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/AURA",
    demoUrl: "https://YOUR_DEMO_URL_PLACEHOLDER.com/aura",
    image: "/images/projects/aura.svg",
  },
  {
    id: "data-analytics-dashboard",
    title: "Personal Data Analytics Dashboard",
    category: "Data Analytics",
    featured: true,
    description:
      "A comprehensive interactive analytics solution featuring KPI tracking, sales trend analysis, category breakdowns, and regional performance monitoring.",
    longDescription:
      "Built to showcase end-to-end data analysis workflows, this project processes multi-region transaction records to calculate key performance metrics, uncover seasonal revenue trends, and present interactive multi-filter reports.",
    technologies: ["Python", "Pandas", "Power BI", "SQL", "Matplotlib", "NumPy"],
    features: [
      "Executive KPI summary cards",
      "Decomposed sales trend visualization",
      "Product category performance comparison",
      "Regional market share geospatial analysis",
      "Interactive multi-parameter slicers & filters",
      "Automated data cleaning script pipeline",
    ],
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/Data-Analytics-Dashboard",
    demoUrl: "https://YOUR_DEMO_URL_PLACEHOLDER.com/dashboard",
    image: "/images/projects/analytics-dashboard.svg",
  },
  {
    id: "customer-churn-predictor",
    title: "Predictive Customer Churn Engine",
    category: "AI/ML",
    featured: false,
    description:
      "Machine learning pipeline analyzing customer behavioral patterns and demographics to predict churn probability and recommend retention strategies.",
    longDescription:
      "Developed using Python, Scikit-learn, and XGBoost to classify customer risk profiles based on historical transactional behavior, service usage, and engagement signals.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "Behavioral feature extraction",
      "Imbalanced data handling (SMOTE)",
      "Model evaluation (ROC-AUC, Confusion Matrix)",
      "Automated risk scoring thresholding",
    ],
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/Customer-Churn-Prediction",
    demoUrl: "https://YOUR_DEMO_URL_PLACEHOLDER.com/churn-prediction",
    image: "/images/projects/churn-prediction.svg",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "be-it",
    degree: "B.E. Information Technology",
    institution: "Gujarat Technological University",
    status: "Final Year Student",
    location: "Gujarat, India",
    period: "2022 – 2026",
    description:
      "Pursuing a Bachelor of Engineering degree with a focus on computer science fundamentals, data analytics, artificial intelligence, software engineering, and database management systems.",
    subjects: [
      "Artificial Intelligence",
      "Data Analysis & Visualization",
      "Data Warehousing & Mining",
      "Cryptography & Network Security",
      "Software Engineering",
      "Computer Networks",
      "Analysis & Design of Algorithms",
      "Web Development",
    ],
  },
];

export const INTERNSHIP_DATA: InternshipItem[] = [
  {
    id: "internship-1",
    role: "AI/ML & Data Analytics Intern",
    organization: "[ORGANIZATION_NAME_PLACEHOLDER]",
    duration: "[INTERNSHIP_DURATION_PLACEHOLDER e.g., Jan 2025 – Present]",
    location: "Gujarat, India (Remote / On-site)",
    project: {
      name: "InsightAI – AI Sales Analytics Assistant",
      description:
        "Contributed to constructing an AI-driven analytics solution that transforms raw sales data into interactive dashboards, predictive revenue models, and automated business insights.",
    },
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Power BI",
      "Google Gemini API",
      "FastAPI",
    ],
    responsibilities: [
      "Data Preprocessing: Automated raw dataset cleaning, missing value imputation, and feature transformations.",
      "Exploratory Data Analysis: Analyzed key transaction metrics to discover seasonality, correlations, and growth trends.",
      "Dashboard Development: Created dynamic visual reporting modules and key performance indicator (KPI) widgets.",
      "Data Visualization: Engineered clear charts and plots for technical and non-technical stakeholders.",
      "Machine Learning Exploration: Built and validated predictive regression algorithms for sales volume forecasting.",
      "AI Integration: Utilized Gemini API for natural-language query resolution and executive summary creation.",
      "Documentation & Presentation: Drafted technical documentation and presented project milestones to team leaders.",
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-data-analytics",
    title: "Data Analytics Certification",
    issuer: "[ISSUING_ORGANIZATION_PLACEHOLDER e.g., Coursera / Google / IBM]",
    date: "[ISSUED_DATE_PLACEHOLDER]",
    credentialId: "[CREDENTIAL_ID_PLACEHOLDER]",
    credentialUrl: "https://YOUR_CERTIFICATE_URL_PLACEHOLDER.com/data-analytics",
    skills: ["Python", "Pandas", "Data Cleaning", "Data Visualization", "SQL"],
  },
  {
    id: "cert-aiml",
    title: "AI/ML Certification",
    issuer: "[ISSUING_ORGANIZATION_PLACEHOLDER e.g., DeepLearning.AI / Kaggle]",
    date: "[ISSUED_DATE_PLACEHOLDER]",
    credentialId: "[CREDENTIAL_ID_PLACEHOLDER]",
    credentialUrl: "https://YOUR_CERTIFICATE_URL_PLACEHOLDER.com/aiml",
    skills: ["Machine Learning", "Scikit-learn", "Predictive Analytics", "Generative AI"],
  },
  {
    id: "cert-powerbi",
    title: "Power BI Certification",
    issuer: "[ISSUING_ORGANIZATION_PLACEHOLDER e.g., Microsoft / Udemy]",
    date: "[ISSUED_DATE_PLACEHOLDER]",
    credentialId: "[CREDENTIAL_ID_PLACEHOLDER]",
    credentialUrl: "https://YOUR_CERTIFICATE_URL_PLACEHOLDER.com/power-bi",
    skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence Dashboards"],
  },
  {
    id: "cert-python",
    title: "Python Programming Certification",
    issuer: "[ISSUING_ORGANIZATION_PLACEHOLDER e.g., HackerRank / University]",
    date: "[ISSUED_DATE_PLACEHOLDER]",
    credentialId: "[CREDENTIAL_ID_PLACEHOLDER]",
    credentialUrl: "https://YOUR_CERTIFICATE_URL_PLACEHOLDER.com/python",
    skills: ["Python Data Structures", "OOP", "File Handling", "Scripting"],
  },
  {
    id: "cert-internship",
    title: "Internship Completion Certificate",
    issuer: "[ORGANIZATION_NAME_PLACEHOLDER]",
    date: "[ISSUED_DATE_PLACEHOLDER]",
    credentialId: "[CREDENTIAL_ID_PLACEHOLDER]",
    credentialUrl: "https://YOUR_CERTIFICATE_URL_PLACEHOLDER.com/internship",
    skills: ["AI/ML Development", "Data Analytics", "Technical Documentation"],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "achieve-1",
    title: "InsightAI & AURA Capstone Projects",
    category: "Academic & Technical Project",
    description:
      "Successfully conceptualized, designed, and developed two full-scale AI projects combining Next.js frontends with Python FastAPI backends and Gemini AI.",
  },
  {
    id: "achieve-2",
    title: "Data Analytics & AI Internship",
    category: "Professional Experience",
    description:
      "Gained hands-on practical industry experience solving real-world data processing challenges, constructing predictive ML pipelines, and designing interactive dashboards.",
  },
  {
    id: "achieve-3",
    title: "Technical Hackathons & Presentations",
    category: "Co-curricular",
    description:
      "[HACKATHON_ACHIEVEMENT_PLACEHOLDER e.g., Participated in regional IT hackathons and technical project exhibitions showcasing machine learning models].",
  },
  {
    id: "achieve-4",
    title: "Open Source & GitHub Showcase",
    category: "Open Source Development",
    description:
      "Maintained structured, documented GitHub repositories featuring clean Python data scripts, web templates, and AI integration prototypes.",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-data-analytics",
    title: "Data Analytics",
    description:
      "Transforming raw, unstructured datasets into clean, actionable business insights through rigorous statistical exploratory analysis, data cleaning, and aggregation.",
    iconName: "BarChart",
    skills: ["Python", "Pandas", "SQL", "Exploratory Analysis", "Statistical Insights"],
  },
  {
    id: "service-aiml",
    title: "AI / Machine Learning",
    description:
      "Building intelligent predictive solutions and ML models tailored for classification, forecasting, and natural-language tasks using Scikit-learn, XGBoost, and LLM APIs.",
    iconName: "BrainCircuit",
    skills: ["Scikit-learn", "XGBoost", "Predictive Modeling", "Generative AI", "Gemini API"],
  },
  {
    id: "service-data-vis",
    title: "Data Visualization",
    description:
      "Creating clear, interactive dashboards and visual reports using Power BI and Matplotlib to effectively communicate key metrics to stakeholders.",
    iconName: "PieChart",
    skills: ["Power BI", "DAX", "Dashboard Design", "Matplotlib", "KPI Tracking"],
  },
  {
    id: "service-web-dev",
    title: "Web Development",
    description:
      "Building modern, fast, and responsive web applications using React, Next.js, TypeScript, Tailwind CSS, and Python FastAPI backend interfaces.",
    iconName: "Globe",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI"],
  },
];

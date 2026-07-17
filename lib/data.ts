export const profile = {
  name: "Myint Thu Aung",
  role: "Senior Full-Stack .NET Developer",
  location: "Sathon, Bangkok, Thailand",
  email: "myintthuaung.km@gmail.com",
  phone: "+66 96 140 3022",
  nationality: "Myanmar",
  languages: "English — Intermediate",
  summary:
    "Senior Full-Stack .NET Developer with over 7 years of experience designing, developing, and deploying secure, scalable web applications. Proven expertise across the full software development lifecycle — from concept to deployment — using C#, ASP.NET Core, Vue.js, React, and MS SQL Server.",
  objective:
    "I seek challenging opportunities where I can fully use my skills for the success of the organization.",
}

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "3", label: "Companies" },
  { value: "2", label: "Degrees" },
]

export type Experience = {
  company: string
  location: string
  title: string
  period: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    company: "Mahar Bawga Money Co., Ltd",
    location: "Bangkok, Thailand",
    title: "Senior Software Developer",
    period: "Jun 2024 — Present",
    points: [
      "Lead the design and development of scalable financial systems including a cross-border Remittance System.",
      "Design database schemas, stored procedures, views, and performance-optimized queries in MS SQL Server.",
      "Implement secure financial workflows including KYC document handling, transaction processing, and compliance reporting.",
      "Develop financial reporting modules generating Excel reports for auditing and regulatory compliance.",
      "Integrate Redis, RabbitMQ, and message queue systems for asynchronous transaction processing.",
      "Implement authentication, role-based access control (RBAC), and system activity logging.",
      "Coordinate with the CTO, product managers, and cross-functional teams to translate business requirements into technical solutions.",
    ],
  },
  {
    company: "Naung Yoe Technologies Co., Ltd",
    location: "Nay Pyi Taw, Myanmar",
    title: "Full Stack Developer",
    period: "Feb 2022 — Apr 2024",
    points: [
      "Designed and developed full-stack web applications using ASP.NET Core, Web API, Vue.js, and SQL Server.",
      "Built secure backend services handling data validation, API integrations, and business logic.",
      "Developed interactive frontend interfaces using Vue.js, Vuetify, and Bootstrap.",
      "Implemented data exchange and encryption mechanisms (XML, PGP) for secure enterprise reporting systems.",
      "Designed database schemas, stored procedures, and views for large-scale applications.",
      "Participated in Agile development processes, including sprint planning and technical discussions.",
    ],
  },
  {
    company: "Naung Yoe Technologies Co., Ltd",
    location: "Nay Pyi Taw, Myanmar",
    title: "Junior Software Developer",
    period: "Nov 2019 — Apr 2022",
    points: [
      "Assisted in developing web-based systems using ASP.NET Core, C#, and SQL Server.",
      "Wrote SQL queries, stored procedures, and database scripts under the guidance of senior developers.",
      "Maintained and enhanced existing applications through debugging and performance tuning.",
    ],
  },
  {
    company: "Naung Yoe Technologies Co., Ltd",
    location: "Nay Pyi Taw, Myanmar",
    title: "Internship",
    period: "May 2019 — Jul 2019",
    points: [
      "Assisted senior developers in building web applications using ASP.NET, JavaScript, and SQL.",
      "Learned software development lifecycle processes, including requirement analysis and coding.",
    ],
  },
]

export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Languages",
    skills: ["C#", "ASP.NET Core", "MVC", "Web API", "Entity Framework", "LINQ", "ADO.NET"],
  },
  {
    title: "Frontend",
    skills: ["Vue.js", "Vuetify", "React", "JavaScript", "Tailwind", "Vite", "Bootstrap"],
  },
  {
    title: "Data & Messaging",
    skills: ["MS SQL Server", "Views", "Stored Procedures", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "Jenkins", "SVN", "IIS", "NGINX", "Azure"],
  },
  {
    title: "Reporting & Integration",
    skills: ["Excel / Word / PDF Reports", "SMS Gateway", "Email Service", "XML / PGP Encryption"],
  },
]

export type Project = {
  name: string
  category: string
  description: string
  highlights: string[]
  stack: string[]
  url?: string
}

export const projects: Project[] = [
  {
    name: "Remittance System",
    category: "Fintech",
    description:
      "A cross-border remittance platform for transferring and exchanging money between Thailand and Myanmar.",
    highlights: [
      "User authorization, role-based access control, and system logging.",
      "Excel-based daily, weekly, and monthly financial reports for compliance and auditing.",
      "KYC and transaction document attachment handling.",
    ],
    stack: ["C#", ".NET", "Vue.js", "Vuetify", "SQL Server"],
  },
  {
    name: "Core Loan Management System",
    category: "Fintech",
    description:
      "Core loan lifecycle modules covering loan creation, contract generation, and repayment processing.",
    highlights: [
      "Loan simulation logic supporting real-rate and flat-rate interest calculations.",
      "Customer management with document storage and transaction history tracking.",
    ],
    stack: ["C#", ".NET", "SQL Server"],
  },
  {
    name: "Compliance & Operation Reporting",
    category: "Fintech",
    description:
      "Reporting system for sender information, beneficiary management, and transaction monitoring for compliance officers.",
    highlights: [
      "Advanced filtering, search, and transaction dashboards.",
      "React frontend integrated with RESTful APIs for compliance reports.",
    ],
    stack: ["React", "REST APIs", "SQL Server"],
  },
  {
    name: "Public Library Management System",
    category: "Public Sector",
    description:
      "A national digital library platform supporting OPAC, eBook management, newspaper archives, cataloguing, circulation, and inventory.",
    highlights: [
      "Barcode scanner integration and real-time notifications.",
      "SQL Server schema and reporting modules for library operations.",
    ],
    stack: ["ASP.NET Core", "Vue.js", "SQL Server"],
    url: "https://publiclibrary.gov.mm",
  },
  {
    name: "Case Management System",
    category: "Public Sector",
    description:
      "A secure system for managing corruption investigation cases for authorities.",
    highlights: [
      "Backend APIs built with ASP.NET Core Web API.",
      "Frontend modules using Vue.js and Vuetify with optimized SQL Server queries.",
    ],
    stack: ["ASP.NET Core", "Vue.js", "Vuetify", "SQL Server"],
  },
  {
    name: "Personnel Management System",
    category: "Public Sector",
    description:
      "A centralized personnel management system for organizations to track and manage employee records.",
    highlights: [
      "Modules for personal data, education, leave, awards, and disciplinary records.",
      "Normalized relational data models with secure ASP.NET Core APIs.",
    ],
    stack: ["ASP.NET Core", "Vue.js", "Vuetify", "SQL Server"],
  },
  {
    name: "Document Management System",
    category: "Public Sector",
    description:
      "A centralized system to organize case-related data for individuals and organizations along with supporting files.",
    highlights: [
      "Scalable database structure with ASP.NET Core backend APIs.",
      "Intuitive Vue.js / Vuetify UI components for smooth navigation.",
    ],
    stack: ["ASP.NET Core", "Vue.js", "Vuetify"],
  },
  {
    name: "Meeting Management System",
    category: "Enterprise",
    description:
      "A meeting management system supporting scheduling, agenda creation, and participant management.",
    highlights: [
      "Role-based access control with email/SMS notifications.",
      "Calendar-based tracking with Excel/PDF export and meeting history.",
    ],
    stack: ["ASP.NET Core", "SQL Server"],
  },
  {
    name: "Monastic School Management",
    category: "Education",
    description:
      "A centralized platform to manage student, teacher, and school administration data across monastic schools.",
    highlights: [
      "Modules for enrollment, roll call (attendance), and academic results.",
      "Excel reporting features and database design.",
    ],
    stack: ["ASP.NET Core", "SQL Server"],
  },
]

export const education = [
  {
    school: "Technological University (Meiktila)",
    degree: "Bachelor of Engineering (Information Technology)",
    period: "2018 — 2020",
  },
  {
    school: "Technological University (Meiktila)",
    degree: "Bachelor of Technology (Information Technology)",
    period: "2014 — 2018",
  },
]

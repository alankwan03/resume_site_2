export const profile = {
  name: 'Alan Kwan',
  title: 'Strategic Operations, Organisational Development & Compliance Leader',
  tagline:
    'Bridging strategic vision, large-scale systems deployment, and organisational development across enterprise, vocational education, and heavily regulated sectors.',
  location: 'Sydney / NSW, Australia',
  email: 'alan.kwan@live.com.au',
  phone: '0490 146 677',
  phoneHref: '+61490146677',
  linkedin: 'https://au.linkedin.com/in/kwanaj',
  cvPath: 'https://drive.google.com/file/d/1CWU3ePKIFrw0uROl_qUJAmlaJkfPiMr3/view?usp=sharing',
  photo: '/images/alan-kwan.jpg',
  availability: {
    headline: 'Available now',
    detail: 'Full-time roles or contracted services via AK Professional Services',
  },
}

export const projects = [
  {
    id: 'flix4us',
    name: 'Flix4us',
    tagline: 'Smart movie & series discovery',
    status: 'In development · Beta',
    version: 'v0.10',
    href: 'https://flix4us-beta.pages.dev/',
    displayUrl: 'flix4us-beta.pages.dev/',
    description:
      Flix4us ends the endless scroll. Choose who’s watching, set a vibe and select your streaming services — Flix4us curates titles you can actually watch in your region, tuned to your rating, runtime and personal dealbreakers.',
    features: [
      'Viewer profiles & watchlists',
      'Vibe-based recommendations',
      'Australian streaming services',
      'Live TMDB & JustWatch data',
    ],
  },
  {
    id: 'keepgreen',
    status: 'In Alpha',
    version: 'v0.01',
    name: 'KeepGreen',
    tagline: 'Mobile-first plant watering & care tracker',
    description:
      'A streamlined, zero-scroll web application tailored for indoor plant lovers. Features one-tap watering logging, automated overdue and due-today schedules, and a multi-tier visual picker supporting preset botanical thumbnails, category icons, and custom photos.',
    href: 'https://keepgreen-5qw.pages.dev',
    displayUrl: 'keepgreen-5qw.pages.dev',
    features: [
      'Zero-scroll, mobile-first interface optimized for rapid daily checks',
      'Dynamic status badging (Healthy, Due Today, Overdue) with custom frequencies',
      '3-tier visual selector: verified preset photos, category SVG icons, or camera uploads',
      'Client-side image compression and persistent offline-ready browser storage',
    ],
  },
] as const

export const navItems = [
  { href: '#impact', label: 'Impact' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#career', label: 'Career' },
  { href: '#projects', label: 'Projects' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export const metrics = [
  {
    value: '$2M+',
    unit: 'p.a.',
    label: 'Sustainable Cost Reduction',
    detail: 'Co-delivered via national operational restructure at Boral Ltd.',
    org: 'Boral Ltd.',
  },
  {
    value: '$25M+',
    unit: 'p.a.',
    label: 'Commercial Revenue Oversight',
    detail: 'Managed across NSW & ACT state contracting operations.',
    org: 'Boral Ltd.',
  },
  {
    value: '4 Days',
    unit: '/ 800 Students',
    label: 'Rapid Digital Transition',
    detail: 'Emergency move to online learning across 42 classes during COVID-19.',
    org: 'ATMC',
  },
  {
    value: 'Multi-Region',
    unit: 'Reach',
    label: 'Compliance Governance',
    detail: 'Corporate compliance deployed across Australia, NZ, the Philippines & India.',
    org: 'Probe CX',
  },
] as const

export const competencies = [
  {
    id: 'leadership',
    label: 'Strategic & People Leadership',
    summary:
      'Leading teams through change, aligning programs to strategic objectives, and building durable partnerships with executives and external vendors.',
    skills: [
      {
        name: 'Organisational Development',
        note: 'Corporate inductions, traineeship programs and OD projects across ANZ.',
      },
      {
        name: 'Executive Stakeholder Liaison',
        note: 'Recommendations to senior management; reporting to Directors on trends and opportunities.',
      },
      {
        name: 'Vendor Partnerships',
        note: 'Partnering with external training vendors and industry bodies.',
      },
      {
        name: 'Change Management',
        note: 'Mentored State Contracting Managers through national process standardisation.',
      },
    ],
  },
  {
    id: 'compliance',
    label: 'Compliance & Government Standards',
    summary:
      'Designing and governing compliance frameworks in regulated environments — from federal government contracts to vocational education and workplace safety.',
    skills: [
      {
        name: 'My Aged Care Portfolio',
        note: 'Training delivery to Department of Health and Aged Care requirements.',
      },
      {
        name: 'ASQA / VET Standards',
        note: 'RTO compliance, nationally accredited training and assessment.',
      },
      {
        name: 'ACS / APYP Accreditation',
        note: 'Key liaison for Professional Year Program industry partners.',
      },
      {
        name: 'SafeWork WHS',
        note: 'Off-site subcontractor WHS procedures aligned to NSW legislation.',
      },
    ],
  },
  {
    id: 'systems',
    label: 'Systems, EdTech & Operations',
    summary:
      'Configuring, implementing and administering critical business systems — and training the people who depend on them.',
    skills: [
      { name: 'LMS: Moodle, Matrix', note: 'Systems Administrator; online deployment of AQF programs.' },
      { name: 'SMS: RTO Manager', note: 'Configured and administered student management.' },
      { name: 'ERP: MK8', note: 'SME & Project Lead for national ERP rollout.' },
      { name: 'Knowledge IQ', note: 'Knowledge management in contact centre operations.' },
      { name: 'Advanced Excel', note: 'Data extraction, reporting and performance analysis.' },
      { name: 'Video Conferencing', note: 'Zoom, WebEx, Adobe Connect and MS Teams facilitation.' },
    ],
  },
] as const

export type Role = {
  title: string
  period: string
  highlights: string[]
}

export type Employer = {
  id: string
  company: string
  span: string
  sector: string
  focus: string
  roles: Role[]
}

export const career: Employer[] = [
  {
    id: 'probe',
    company: 'Probe CX',
    span: '2021 — 2026',
    sector: 'Customer Experience · Government Services',
    focus:
      'Cross-border compliance governance and organisational development for a multinational CX provider.',
    roles: [
      {
        title: 'Organisational Development + Traineeships Coordinator',
        period: 'Aug 2023 — Aug 2026',
        highlights: [
          'Deployed, monitored and reported on compliance training across Australia, New Zealand, the Philippines and India.',
          'Reviewed and updated the compliance program with recommendations to the senior management team, aligned to strategic objectives.',
          'Developed and delivered corporate inductions for new employees across Australia and New Zealand.',
          'Administered and coordinated employee traineeship programs nationally.',
          'Led organisational development projects and partnered with external training vendors and L&D teams across the Probe group.',
        ],
      },
      {
        title: 'Customer Solutions Specialist & Trainer',
        period: 'Jun 2021 — Jul 2023',
        highlights: [
          'Delivered training to meet Australian Government Department of Health and Aged Care requirements for the My Aged Care services portfolio.',
          'Coordinated and conducted online training for remote and work-from-home staff.',
          'Provided quality audits, feedback and coaching aligned to contract KPIs.',
          'Hands-on frontline experience as a Customer Solutions Specialist within Aged Care services.',
        ],
      },
    ],
  },
  {
    id: 'atmc',
    company: 'Australian Technical Management College',
    span: '2017 — 2020',
    sector: 'Vocational Education · RTO',
    focus:
      'Program leadership, RTO compliance and an emergency digital transformation during COVID-19.',
    roles: [
      {
        title: 'Program Manager — Professional Year',
        period: 'May 2018 — Apr 2020',
        highlights: [
          'Designed online learning systems for 800 students across 42 classes and implemented the full off-campus transition in 4 days — preventing program disruption.',
          'Developed the Stay-in-Business strategy that became the model for the ongoing Flexible Delivery strategy.',
          'Delivered rapid-response training to staff and 30 trainers to enable off-campus delivery.',
          'Key liaison with industry partners: the Australian Computer Society (ACS) and the Accounting Professional Year Program body (APYP).',
          'Established enrolment systems validating eligibility against DHA, ACS and APYP compliance and legal requirements.',
          'Configured and administered RTO Manager (SMS) and Moodle (LMS); produced performance and trend reporting for Directors.',
          'Led recruitment, onboarding and induction of academic staff across Sydney and Melbourne campuses.',
        ],
      },
      {
        title: 'Program Coordinator',
        period: 'Sep 2017 — Apr 2018',
        highlights: [
          'Coordinated Professional Year Program operations, establishing the foundation for subsequent program leadership.',
        ],
      },
    ],
  },
  {
    id: 'akps',
    company: 'AK Professional Services',
    span: '2014 — 2017',
    sector: 'Consulting · EdTech · Local Government',
    focus: 'LMS administration, VET delivery and council asset-system implementation.',
    roles: [
      {
        title: 'Consultant (Part-time)',
        period: 'Jul 2014 — Sep 2017',
        highlights: [
          'Supported data conversion and project delivery for Technology One & Assetic asset-management implementation at Hawkesbury City Council.',
          'Administered LMS websites and content for an RTO delivering nationally accredited training.',
          'Converted learning and assessment resources and deployed Diploma (AQF Level 5) programs online.',
          'Provided technical support to trainers and students across Moodle, Matrix, WebEx and Adobe Connect.',
        ],
      },
      {
        title: 'Trainer and Assessor (Part-time)',
        period: 'Jul 2014 — Sep 2014',
        highlights: [
          'Delivered national VET competency-based training and assessment in Information, Digital Media & Technology.',
        ],
      },
      {
        title: 'Electoral Leadership — NSWEC & AEC',
        period: '2016 — 2017',
        highlights: [
          'Polling Place Manager for the NSW Local Government Election (2017) and State By-Election (2016).',
          'Officer In Charge for the Federal Election (2016).',
        ],
      },
    ],
  },
  {
    id: 'boral',
    company: 'Boral Ltd.',
    span: '2001 — 2013',
    sector: 'Construction · Manufacturing',
    focus:
      'National operations leadership delivering multi-million-dollar savings, revenue oversight and safety compliance.',
    roles: [
      {
        title: 'National Contracting Coordinator',
        period: 'Sep 2006 — Sep 2013',
        highlights: [
          'Co-led delivery of a $2M p.a. sustainable savings project.',
          'Delivered a further $260K p.a. in savings by designing and implementing a department restructure.',
          'Led the national Safety Systems roll-out for roofing subcontractors.',
          'Researched a "Best Practice" contracting process model and led its standardised rollout across all operating regions.',
          'Authored department SOPs and the national "Contracting Manual"; designed KPI targets and tracking systems.',
          'Partnered with State Sales Managers on business development and key account management.',
        ],
      },
      {
        title: 'Project Lead / SME Contracting',
        period: 'Jul 2005 — Aug 2006',
        highlights: [
          'SME and Project Lead for the Contracting stream of the national MK8 ERP rollout.',
          'Delivered current- and future-state process maps with documented SOPs.',
          'Ensured functional requirements including safety management and COR tracking; trained and supported end users.',
        ],
      },
      {
        title: 'State Contracting Manager — C & C New Residential',
        period: 'May 2001 — Jun 2005',
        highlights: [
          'Ran Supply & Install roofing operations across NSW & ACT, generating more than $25M revenue p.a.',
          'Developed off-site subcontractor WHS procedures meeting state legislation, consulting with SafeWork NSW.',
          'Negotiated and managed contracts between Boral, subcontractors and customers.',
          'Applied customer growth, retention and acquisition strategies through direct customer engagement.',
        ],
      },
    ],
  },
]

export const credentials = [
  {
    category: 'Higher Education',
    items: [
      { name: 'University Certificate of Management', issuer: 'Deakin University' },
      { name: 'Technology for Healthy Living (Unit)', issuer: 'University of Tasmania' },
      { name: 'Foundations of Food and Nutrition (Unit)', issuer: 'University of Tasmania' },
    ],
  },
  {
    category: 'Vocational Qualifications',
    items: [
      { name: 'Certificate IV in Training & Assessment (TAE)', issuer: 'Nationally Recognised' },
      { name: 'Certificate IV in Accounting', issuer: 'Nationally Recognised' },
      { name: 'Certificate IV in Bookkeeping', issuer: 'Nationally Recognised' },
      {
        name: 'Statement of Attainment — Build Simple Websites',
        issuer: 'Nationally Recognised · OTEN & TAFE NSW',
      },
      { name: 'Statement of Attainment — Construction Owner Builder', issuer: 'Nationally Recognised' },
    ],
  },
  {
    category: 'Micro-Credentials',
    items: [{ name: 'AI Essentials', issuer: 'TAFE SA' }],
  },
  {
    category: 'Industry Accreditations',
    items: [
      { name: 'Mental Health First Aid', issuer: 'Certificate of Accreditation' },
      { name: 'Construction Industry White Card', issuer: 'Safety Induction' },
      { name: 'Working With Children Check', issuer: 'NSW Clearance' },
    ],
  },
] as const

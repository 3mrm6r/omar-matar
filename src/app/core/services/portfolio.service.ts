import { Injectable, signal } from '@angular/core';
import { Project, Experience, SkillCategory, Education, Certification, StatItem } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly profile = signal({
    name: 'Omar',
    fullName: 'Omar Matar',
    title: 'Junior Full-Stack Developer',
    roles: [
      'Junior Full-Stack Developer',
      'Computer Science Graduate',
      'Angular & TypeScript',
      'ASP.NET Core & C#',
      'Entity Framework Core & SQL',
      'REST APIs & Clean Architecture'
    ],
    bio: 'Junior Full-Stack Developer and recent Computer Science graduate, building responsive web applications with Angular and secure backend APIs with ASP.NET Core & C#.',
    aboutLong: [
      "I'm a recent Computer Science graduate from the University of Jordan, focused on full-stack development with Angular, TypeScript, ASP.NET Core and C#. I care about clean, readable code, SOLID principles, and well-designed relational databases. I'm eager to join an experienced development team as a junior full-stack developer or intern to learn, contribute, and grow."
    ],
    location: 'Amman, Jordan / Remote Worldwide',
    email: 'omarmatar828@gmail.com',
    github: 'https://github.com/3mrm6r',
    linkedin: 'https://linkedin.com/in/omar-matar-26785a265',
    status: 'Available for Junior Full-Stack Roles & Internships',
    openToWork: true,
    yearsOfExperience: 'Fresh',
    completedProjects: '1+',
    uptimeMindset: 'Clean Code',
    codeCommits: '1.2k+'
  });

  readonly stats = signal<StatItem[]>([
    {
      value: 'Fresh',
      label: 'CS Graduate',
      sublabel: 'University of Jordan',
      icon: 'award'
    },
    {
      value: '1+',
      label: 'Projects Built',
      sublabel: 'Angular & ASP.NET Core',
      icon: 'rocket'
    },
    {
      value: 'SOLID%',
      label: 'Type-Safe Code',
      sublabel: 'SOLID & Type-Safe Code',
      icon: 'shield-check'
    },
    {
      value: '2026',
      label: 'Graduation Year',
      sublabel: 'B.Sc. in Computer Science',
      icon: 'sparkles'
    }
  ]);

  readonly skillsCategories = signal<SkillCategory[]>([
    {
      name: 'Frontend (Angular & Web)',
      key: 'frontend',
      icon: 'layout',
      description: 'Crafting responsive, accessible, and reactive user interfaces using Angular and modern web standards.',
      skills: [
        { name: 'Angular', level: 'Proficient', icon: 'angular', badge: 'Core' },
        { name: 'TypeScript & JavaScript (ES6+)', level: 'Proficient', icon: 'code', badge: 'Core' },
        { name: 'RxJS & Reactive Programming', level: 'Comfortable', icon: 'zap', badge: 'Proficient' },
        { name: 'HTML5, SCSS & Responsive CSS', level: 'Proficient', icon: 'layout', badge: 'Proficient' },
        { name: 'Angular Forms (Reactive / Template)', level: 'Proficient', icon: 'code', badge: 'Advanced' },
        { name: 'TailwindCSS / Bootstrap', level: 'Comfortable', icon: 'layout', badge: 'Proficient' }
      ]
    },
    {
      name: 'Backend (ASP.NET Core & C#)',
      key: 'backend',
      icon: 'server',
      description: 'Building secure, high-performance RESTful APIs and business logic with C# and .NET.',
      skills: [
        { name: 'ASP.NET Core Web API', level: 'Proficient', icon: 'server', badge: 'Core' },
        { name: 'C# & .NET', level: 'Proficient', icon: 'code', badge: 'Core' },
        { name: 'Entity Framework Core (EF Core)', level: 'Proficient', icon: 'database', badge: 'Advanced' },
        { name: 'RESTful API Design & Swagger', level: 'Proficient', icon: 'server', badge: 'Proficient' },
        { name: 'JWT Authentication & ASP.NET Identity', level: 'Comfortable', icon: 'shield-check', badge: 'Proficient' },
        { name: 'LINQ & Dependency Injection', level: 'Proficient', icon: 'cpu', badge: 'Core' }
      ]
    },
    {
      name: 'Databases & Infrastructure',
      key: 'cloud',
      icon: 'database',
      description: 'Designing relational schemas, writing queries, and understanding cloud fundamentals.',
      skills: [
        { name: 'Microsoft SQL Server (T-SQL)', level: 'Proficient', icon: 'database', badge: 'Proficient' },
        { name: 'MySQL & Relational Design', level: 'Comfortable', icon: 'database', badge: 'Proficient' },
        { name: 'Database Migrations & Normalization', level: 'Comfortable', icon: 'database', badge: 'Proficient' },
        { name: 'Docker (Containerization Basics)', level: 'Learning', icon: 'cloud', badge: 'Intermediate' },
        { name: 'CI/CD (GitHub Actions Basics)', level: 'Learning', icon: 'git-merge', badge: 'Intermediate' }
      ]
    },
    {
      name: 'Tooling, Architecture & Practices',
      key: 'tools',
      icon: 'tool',
      description: 'Applying clean architecture principles, version control, and developer workflows.',
      skills: [
        { name: 'Git & GitHub Version Control', level: 'Proficient', icon: 'git-merge', badge: 'Proficient' },
        { name: 'Clean Architecture & N-Tier Design', level: 'Comfortable', icon: 'cpu', badge: 'Proficient' },
        { name: 'SOLID Principles & Clean Code', level: 'Proficient', icon: 'cpu', badge: 'Core' },
        { name: 'Postman & API Testing', level: 'Proficient', icon: 'tool', badge: 'Proficient' },
        { name: 'Unit Testing (xUnit / Jasmine)', level: 'Learning', icon: 'tool', badge: 'Intermediate' }
      ]
    }
  ]);

  readonly experiences = signal<Experience[]>([
    // Add your professional experience / internships here as you gain them.
    // Example:
    // {
    //   id: 'exp-1',
    //   role: 'Junior Full-Stack Developer',
    //   company: 'Company Name',
    //   companyUrl: 'https://example.com',
    //   location: 'Amman, Jordan',
    //   period: '2026 - Present',
    //   type: 'Full-time',
    //   current: true,
    //   description: 'Developing web applications with Angular and ASP.NET Core.',
    //   highlights: [
    //     'Built RESTful API endpoints and integrated with Angular frontend',
    //     'Implemented responsive UI components using TailwindCSS and SCSS'
    //   ],
    //   skills: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server']
    // }
  ]);

  readonly projects = signal<Project[]>([
   {
      id: 'proj-sqlshield-ai',
      title: 'SQLShield AI // Angular 22 & ASP.NET Core 10 & Python ML',
      tagline: 'An intelligent cybersecurity system detecting and classifying SQL injection attacks in real time using Machine Learning.',
      description: 'Enterprise-grade cybersecurity platform leveraging Angular 22, ASP.NET Core 10 Web API, and a Python FastAPI ML inference service to detect and analyze SQL injection threats with high accuracy.',
      longDescription: 'SQLShield AI is an intelligent SQL Injection (SQLi) detection and analysis system designed to outperform traditional regex-based Web Application Firewalls (WAFs). Built upon a decoupled 3-tier microservice architecture, the system combines a reactive Angular single-page application with Signals, an ASP.NET Core REST API gateway handling audit logging via EF Core and SQLite, and a Python FastAPI service serving an ensemble Scikit- Learn ML pipeline (Random Forest / MLP) trained on Kaggle datasets using custom SQL tokenization and TF-IDF feature extraction.',
      category: 'fullstack',
      featured: true,
      image: 'assets/projects/sqlshield-ai.webp',
      demoUrl: 'https://github.com/3mrm6r/SQLSield-AI',
      githubUrl: 'https://github.com/3mrm6r/SQLSield-AI',
      tags: [
        'Angular 22',
        'TypeScript',
        'ASP.NET Core 10',
        'C#',
        'Python',
        'FastAPI',
        'Scikit-Learn',
        'EF Core',
        'SQLite',
        'Docker Compose',
        'SCSS'
      ],
      metrics: [
        '98.7% 5-Fold F1 Score',
        '3-Tier Microservices',
        'Real-Time ML Inference',
        'Persistent Audit History'
      ],
      architectureHighlights: [
        '3-tier decoupled microservice architecture: Angular SPA, ASP.NET Core Gateway, and Python ML engine',
        'Custom regex SQL tokenizer preserving syntax-critical symbols alongside TF-IDF n-gram feature extraction',
        'Ensemble ML evaluation pipeline comparing Random Forest, MLP Neural Network, and Naive Bayes classifiers',
        'Modern reactive UI built with Angular 22 Standalone Components, Signals, and a dark cybersecurity theme',
        'Persistent scan history and audit logging using Entity Framework Core and SQLite',
        'Full multi-container orchestration with Docker Compose and Nginx reverse proxying'
      ],
      techDetails: {
        frontend: 'Angular 22, TypeScript, Standalone Components, Signals, SCSS',
        backend: 'ASP.NET Core 10 Web API, C#, Python 3, FastAPI, Scikit-Learn',
        database: 'SQLite via Entity Framework Core',
        deployment: 'Docker Compose, Multi-stage Dockerfiles, Nginx'
      }
    },
     {
      id: 'proj-omar-portfolio',
      title: 'Omar Portfolio // Angular 22 & Reactive Signals & SCSS',
      tagline: 'An interactive, dark cyber-themed developer portfolio engineered with Angular 22 standalone components and reactive signals.',
      description: 'Ultra-modern developer portfolio platform featuring an HTML5 canvas code background stream, interactive hero IDE workstation, dynamic skills matrix, and smooth scroll animations.',
      longDescription: 'Omar Portfolio is a high-performance personal developer portfolio built with Angular 22 and modern web technologies. Designed with a sleek cyber aesthetic, it features a custom HTML5 canvas rendering interactive floating code particles with mouse parallax outside Angular zone performance, an interactive in-browser IDE simulator with multi-tab syntax highlighting, a discrete 4-tier skills matrix, an architecture deep-dive modal, and dynamic theme accent switching with persistent local storage.',
      category: 'frontend',
      featured: true,
      image: 'assets/projects/portfolio-preview.webp',
      githubUrl: 'https://github.com/3mrm6r/Omar-Matar',
      tags: [
        'Angular 22',
        'TypeScript',
        'Signals & State',
        'Standalone Components',
        'SCSS',
        'HTML5 Canvas',
        'Reactive Forms',
        'Responsive Design'
      ],
      metrics: [
        'Signals-Based State',
        'Zero External UI Libs',
        '4 Dynamic Cyber Accents'
      ],
      architectureHighlights: [
        'Built with Angular 22 Standalone Components and reactive Signals for fine-grained reactivity and optimal change detection',
        'Custom HTML5 Canvas rendering interactive syntax particles with mouse parallax running outside Angular zone (NgZone) to prevent UI frame drops',
        'Interactive developer IDE workstation with multi-tab code viewer, typewriter role animations, and clipboard integration',
        'Modular SCSS design system with custom CSS variables, glassmorphism cards, and live theme accent switching',
        'Hardware-accelerated IntersectionObserver scroll-reveal pipeline with active section scroll-spy navigation',
        'Reactive contact form with real-time field validation, clipboard copy helpers, and submission feedback flows'
      ],
      techDetails: {
        frontend: 'Angular 22, TypeScript 5.x, Standalone Components, Signals, Reactive Forms, SCSS',
        backend: 'Client-Side SPA / Static Web Application',
        database: 'Local Storage (Theme State) & Centralized Signal Store',
        deployment: 'GitHub Pages / Netlify / Vercel with Production Angular Build'
      }
    }


  ]);

  readonly educations = signal<Education[]>([
    {
      id: 'edu-1',
      degree: 'Bachelor of Science (B.Sc.)',
      field: 'Computer Science',
      institution: 'University of Jordan',
      location: 'Amman, Jordan',
      period: '2022 - 2026',
      coursework: [
        'Algorithms & Data Structure Design',
        'Database Management & Query Optimization',
        'Object-Oriented Software Design',
        'Computer Networks & Security',
        'Operating Systems & Architecture'
      ]
    }
  ]);

  readonly certifications = signal<Certification[]>([
    //placeholder example
    // Uncomment and add your certifications here:
    // {
    //   id: 'ex-1',
    //   title: 'AWS Certified Solutions Architect – Associate',
    //   issuer: 'Amazon Web Services (AWS)',
    //   issueDate: '2026',
    //   credentialId: 'AWS-SAA-XXXXXX',
    //   verifyUrl: 'https://aws.amazon.com/verification',
    //   badgeIcon: 'cloud',
    //   color: '#FF9900'
    // },
  ]);

  readonly terminalCodeSnippets = signal([
    {
      filename: 'Omar.ts',
      language: 'typescript',
      code: `import { Developer, Passion } from '@dev/core';

export class OmarDeveloper implements Developer {
  readonly name = 'Omar Matar';
  readonly title = 'Junior Full-Stack Developer';
  readonly degree = 'B.Sc. in Computer Science';
  readonly passions = [
    Passion.AngularAndTypeScript,
    Passion.AspNetCoreAndDotNet,
    Passion.CleanArchitecture,
    Passion.RelationalDatabases
  ];

  public async createValue(): Promise<Impact> {
    const stack = ['Angular 22', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server / MySQL'];
    return await buildScalableSystems({
      quality: 'high',
      architecture: 'clean',
    });
  }
}`
    },
    {
      filename: 'skills.json',
      language: 'json',
      code: `{
  "coreExpertise": [
    "Angular & TypeScript",
    "ASP.NET Core & C#",
    "Entity Framework Core & SQL",
    "RESTful APIs & JWT Authentication"
  ],
  "philosophy": "Write clean, type-safe code, follow SOLID principles, and build intuitive user experiences.",
  "availability": "Open to Junior Full-Stack roles and internships"
}`
    },
    {
      filename: 'architecture.sh',
      language: 'bash',
      code: `#!/usr/bin/env bash
# Running Omar's Full-Stack Workspace
$ dotnet build && dotnet test
✔ Backend build & tests passed: 0 errors
$ ng build --configuration production
✔ Angular production bundle generated
$ echo "🚀 Ready to build clean full-stack solutions."`
    }
  ]);
}

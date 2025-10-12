export type Project = {
  slug: string;
  title: string;
  summary: string;
  features: string[];
  tech: {
    frontend: string[];
    backend: string[];
  };
  links?: {
    repo?: string;
    live?: string;
    docs?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "geoaddressing-system",
    title: "GeoAddressing System",
    summary:
      "A comprehensive addressing system for local authorities with hierarchical address management, full CRUD, auth, and map integration.",
    features: [
      "Hierarchical addresses: state → city → district → street → address",
      "Full CRUD with admin features and role-based access",
      "User authentication with JWT and secure password hashing",
      "Interactive maps using Leaflet",
      "Swagger API documentation and security hardening",
    ],
    tech: {
      frontend: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "Redux Toolkit",
        "React Router",
        "React Hook Form + Yup",
        "Axios",
        "Leaflet",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "MongoDB + Mongoose",
        "JWT",
        "bcryptjs",
        "Swagger",
        "Helmet",
        "Rate limiting",
      ],
    },
    links: {},
  },
  {
    slug: "tuition-centre-management",
    title: "Tuition Centre Management System: Codebase Review",
    summary:
      "Comprehensive review of a multi-tenant system spanning backend and multiple React frontends, documenting technologies and architecture.",
    features: [
      "Analyzed backend (Express + Sequelize) and three React frontends",
      "Outlined architectural patterns and transition state across admin apps",
      "Documented REST API usage and data flow",
    ],
    tech: {
      frontend: ["React"],
      backend: ["Node.js", "Express.js", "Sequelize", "REST API"],
    },
    links: {},
  },
  {
    slug: "property-sim-management",
    title: "Property & SIM Card Management System",
    summary:
      "Full‑stack system for property rentals and SIM card registrations with dashboards, analytics, and role‑based access.",
    features: [
      "Property, landlord, tenant, broker, guarantor CRUD",
      "Digital lease creation, signing, and management",
      "SIM card registration with provider/license tracking and bulk import",
      "Role-based access (Admin/Manager/Officer/Viewer) with JWT auth",
      "Dashboards for properties, leases, and SIM registrations",
    ],
    tech: {
      frontend: [
        "React 18",
        "TypeScript",
        "MUI",
        "React Router",
        "React Hook Form + Yup",
        "Axios",
        "Recharts",
        "MUI X Data Grid",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "MongoDB + Mongoose",
        "JWT",
        "bcryptjs",
        "Express Validator",
        "Helmet",
        "Rate limiting",
      ],
    },
    links: {},
  },
];

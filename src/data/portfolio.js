export const caseStudies = {
  sfl: {
    title: "Simple Formations",
    label: "Professional experience · React / Node.js / MongoDB",
    intro:
      "Corporate compliance has many moving parts: company information, officials, ownership, documents, signatures, and review stages. My work spans the interfaces and backend services that connect those workflows.",
    sections: [
      [
        "The problem",
        "Keep company and organization information consistent across formation, compliance, and reporting workflows, while respecting access boundaries.",
      ],
      [
        "My contribution",
        "Developed React workflows and Node/Express APIs; worked on MongoDB aggregation pipelines, organization-level filtering, beneficial-owner processing, invoice branding, and company-official change tracking.",
      ],
      [
        "Engineering decisions",
        "Resolve organization relationships in the backend. Track appointment and cessation dates against reporting periods. Scope ownership reporting to authorized users. Handle optional transaction IDs explicitly rather than constructing invalid routes.",
      ],
      [
        "Integrations",
        "Worked with payment, e-signature, document editing, and email integrations, including Paystack, Dropbox Sign, OnlyOffice, and SendGrid.",
      ],
      [
        "What this demonstrates",
        "Business-rule modeling, full-stack delivery, complex MongoDB querying, and careful handling of authorization and time-based data. The visual on this portfolio is an illustration using sample data, rather than a production screenshot.",
      ],
    ],
  },
  ops: {
    title: "OpsDesk",
    label: "Portfolio concept · Proposed Next.js / NestJS architecture",
    intro:
      "A SaaS-style business workspace that brings team access, invoicing, and asynchronous workflows together. The billing interaction is implemented locally as a portfolio demonstration.",
    sections: [
      [
        "Product scope",
        "Organizations, team roles, invoices, file attachments, notifications, and audit history. A focused workspace for small teams managing client work.",
      ],
      [
        "Proposed architecture",
        "Next.js handles the web experience. NestJS exposes domain-focused APIs. PostgreSQL stores organizations, memberships, and billing records. Redis and BullMQ support background notifications.",
      ],
      [
        "Key tradeoffs",
        "Enforce organization access in every API operation. Use database transactions for related billing updates. Make webhook processing idempotent, and keep external service calls outside database transactions.",
      ],
      [
        "Demo boundaries",
        "The interactive billing demo uses sample data in browser memory. It demonstrates filtering, invoice status updates, derived totals, and reset behavior. It is not connected to a backend or payment provider.",
      ],
      [
        "Next production milestone",
        "Implement organization-scoped APIs, verify cross-tenant access controls, add payment webhook validation, and deploy the frontend, API, and worker with automated checks.",
      ],
    ],
  },
  foodi: {
    title: "Foodi",
    label: "Mobile project · React Native / Expo",
    intro:
      "A mobile food discovery and ordering project, exploring how a shared React skill set translates to native mobile experiences.",
    sections: [
      [
        "Experience",
        "Organize discovery, home, orders, and profile into a tab-based journey, with separate authentication screens.",
      ],
      [
        "Implementation focus",
        "React Native with Expo and Expo Router. Shared layouts, safe-area handling, stack and tab navigation, and routing from the entry screen.",
      ],
      [
        "Engineering lessons",
        "Align Expo packages with the SDK version. Keep navigation side effects out of render. Test startup and routing on a real device, including the path from authentication to the main tabs.",
      ],
      [
        "Portfolio view",
        "This mobile interface is a design illustration for the showcase. A downloadable build, live ordering service, and adoption metrics have not been supplied.",
      ],
    ],
  },
};
export const introduction =
  "I’m a software engineer based in Nairobi, with full-stack experience at Simple Formations building React interfaces, Node.js APIs, MongoDB reporting, and corporate compliance workflows. My focus includes TypeScript, NestJS, Next.js, and React Native. I’m interested in backend and full-stack engineering opportunities.";

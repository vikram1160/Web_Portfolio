export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  usedFor?: string;
  role?: string;
  features: ProjectFeature[];
  techStack: string[];
  impact: string[];
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'i1fit',
    title: 'i1Fit',
    shortDescription:
      'A cross-platform React Native wellness app that unifies holistic scoring, activity tracking, mood logging, brain games, and health-device sync in one experience.',
    overview:
      'i1Fit is a personal health and wellness companion for people who want to build healthier habits in one place. It combines holistic wellness scoring (mental, physical, and overall), structured activities, mood logging, gamified challenges, reward vouchers, and optional health-device connections. The app is backed by a production REST API and targets everyday users building long-term healthy habits, with optional ties to wellness service providers and social connectivity.',
    usedFor:
      'Users sign in, complete onboarding and biodata, then use a dashboard-centric workflow: check daily holistic scores and tips, log mood, start or plan activities (brain games, body workouts, and home habits), join daily/weekly/monthly challenges, review score history in charts, redeem vouchers, and connect wearables such as Apple HealthKit or Fitbit. It supports both self-guided wellness tracking and community-oriented motivation through challenges and social deep links.',
    role: 'React Native mobile app',
    features: [
      {
        title: 'Holistic wellness dashboard',
        description:
          'Calendar-based score history with holistic, mental, and physical scores, health tips, and today’s breakdown views.',
      },
      {
        title: 'Activities & brain games',
        description:
          'Brain Fit games plus Body Fit and Home Fit activities such as walk/run, swim, gym, cook, meditate, and more—with plan and log flows.',
      },
      {
        title: 'Challenges & rewards',
        description:
          'Daily, weekly, and monthly challenges with timed sessions and participant selection, plus voucher browsing and redemption.',
      },
      {
        title: 'Mood Meter & biodata',
        description:
          'Five-level mood logging with server persistence, plus a comprehensive personal biodata and health questionnaire.',
      },
      {
        title: 'Health device integrations',
        description:
          'Apple HealthKit sync on iOS (steps, heart rate, sleep) and Fitbit OAuth authorization via WebView.',
      },
      {
        title: 'Profile, theme & notifications',
        description:
          'Profile photo upload, light/dark theme, drawer navigation, and local notifications driven by server polling.',
      },
    ],
    techStack: [
      'React Native 0.84',
      'React 19',
      'React Navigation 7',
      'Axios',
      'AsyncStorage',
      'Notifee',
      'HealthKit',
      'React Native WebView',
      'Jest',
    ],
    impact: [
      'Ships as a production-oriented client against a live wellness API.',
      'Covers scoring, activities, challenges, biodata, devices, and rewards in one shared mobile codebase.',
      'Includes automated tests for critical auth and dashboard flows across Android and iOS.',
    ],
  },
  {
    id: 'sbm-upgrade',
    title: 'SBM',
    shortDescription:
      'Modernized Sparebanken Møre’s WealthMapper wealth portal to Angular 20, with dual customer and advisor experiences, portfolio analytics, and secure IDP authentication.',
    overview:
      'SBM-Upgrade is a frontend modernization of Sparebanken Møre’s digital wealth portal (WealthMapper). Built as an Angular 20 single-page application, it serves two audiences from one codebase: retail customers managing investments and financial advisors overseeing client portfolios. The app integrates with Evry/TietoEvry WealthMapper microservices (Identity, Fund Management, Report Management) through an Enterprise Service Bus, using IDP-based OAuth authentication and environment-driven configuration for customer and advisor deployments.',
    usedFor:
      'Bank customers use it for self-service portfolio views, performance charts, documents, market content, and advisor messaging. Advisors use it for client oversight, AUM dashboards, broadcast messaging, report batch monitoring, and login audit history.',
    role: 'Frontend modernization / Angular upgrade',
    features: [
      {
        title: 'Customer portfolio hub',
        description:
          'Dashboard with portfolio value, performance indicators, deposits/withdrawals, and an integrated news feed.',
      },
      {
        title: 'Portfolio analytics',
        description:
          'Returns charts (Highcharts), holdings tree/table views, and filterable transaction history with Excel export.',
      },
      {
        title: 'Document center',
        description:
          'Browse, download, and upload portfolio-related documents (PDF and Office formats).',
      },
      {
        title: 'Market insights & communication',
        description:
          'CMS-backed market news plus messaging rooms between customers and advisors.',
      },
      {
        title: 'Advisor operations',
        description:
          'AUM dashboards, broadcast messaging, scheduled report batch monitoring, and login audit history.',
      },
      {
        title: 'Security & access control',
        description:
          'Dynamic permission system with route guards, menu filtering, and template-level directives; secure token handling via Evry ESB headers.',
      },
    ],
    techStack: [
      'Angular 20',
      'TypeScript',
      'Bootstrap 5',
      'Highcharts',
      'ngx-translate',
      'NSwag API clients',
      'Evry ESB / IDP OAuth',
      'Luxon',
    ],
    impact: [
      'Upgraded the wealth portal to a current Angular stack with standalone components and lazy routing.',
      'Unified customer and advisor experiences in one maintainable, config-driven codebase.',
      'Preserved integration with existing WealthMapper backend services while improving developer experience.',
    ],
  },
  {
    id: 'i1wealth-ui',
    title: 'i1Wealth UI',
    shortDescription:
      'Enterprise Angular wealth-management platform for customers, advisors, and admins—covering portfolios, trading, financial planning, KYC, and open-banking connectivity.',
    overview:
      'i1Wealth UI is the client-facing web application for the WMStandard/i1Core wealth management platform. It centralizes portfolio management, regulated advice, compliance workflows, and market intelligence for wealth firms serving retail and corporate clients—delivering a full wealth-management experience in one multi-tenant web application.',
    usedFor:
      'Users start at a multi-tenant landing page, then register or sign in. Customers manage investments end-to-end—view dashboards, trade, track transactions, connect bank accounts via WealthConnect, complete KYC/suitability, receive model-portfolio advice, and use financial-planning tools. Advisors manage client books, run suitability and risk analysis, produce reports, and collaborate via chat. Administrators operate the platform across tenants with user/role management, localization, and UI customization.',
    role: 'Enterprise Angular wealth platform',
    features: [
      {
        title: 'Portfolio & trading',
        description:
          'Dashboards, performance graphs, buy/sell and bulk orders, recurring saving plans, transaction history, and portfolio-impact analysis.',
      },
      {
        title: 'Financial planning suite',
        description:
          'Income/expenses, assets/liabilities, retirement, goals, tax, emergency fund, insurance, and net-worth projection tools.',
      },
      {
        title: 'KYC, suitability & advice',
        description:
          'SurveyJS questionnaires, risk analyzer, model-portfolio self-connect wizard, and customer advice workflows with allocation and comparison charts.',
      },
      {
        title: 'WealthConnect open banking',
        description:
          'Bank subscription, authentication, and unsubscribe flows for connecting customer bank accounts.',
      },
      {
        title: 'Market data & analytics',
        description:
          'Millistream/Stockdio market widgets, allocation and ESG analytics, FX dashboard with Monte Carlo and hedge modeling.',
      },
      {
        title: 'Reporting, chat & admin',
        description:
          'CKEditor reports with scheduling, SignalR chat, iTrustAI assistant, and admin tools for tenants, users, roles, and localization.',
      },
    ],
    techStack: [
      'Angular 17',
      'TypeScript',
      'ABP Framework',
      'ag-Grid',
      'Highcharts',
      'SurveyJS',
      'SignalR',
      'NSwag',
      'ngx-translate',
      'CKEditor 5',
    ],
    impact: [
      'Unifies customer, advisor, and admin experiences in one permission-guarded, multi-tenant Angular application.',
      'Integrates market data, open banking, SurveyJS compliance flows, and real-time chat against microservice backends.',
    ],
  },
  {
    id: 'i1ui-lib',
    title: 'Component Library',
    shortDescription:
      'Angular UI component library (80+ themed components) with config-driven forms, AG Grid tables, and a unified i1ui- design system for enterprise apps.',
    overview:
      'Angular component library for building consistent, themeable enterprise web applications. It provides a shared set of inputs, data views, navigation, overlays, and specialized business components under the i1ui- namespace—so teams reuse one design system instead of mixing ad hoc UI code across products.',
    usedFor:
      'Developers install i1uiCore and @i1ui/themes, bootstrap apps with provideI1ui(), and compose screens from modular imports such as i1uiCore/table or i1uiCore/dynamicform. Beyond standard UI primitives, they use custom modules for config-driven forms, AG Grid-backed data tables, PDF viewing, international phone capture, multi-step wizards, KPI stats, and programmatic alerts/spinners. A showcase app with 130+ demo pages serves as live documentation.',
    role: 'Angular UI component library',
    features: [
      {
        title: '80+ themed components',
        description:
          'Reusable inputs, tables, dialogs, menus, charts, editors, and layout primitives under a unified i1ui- selector prefix.',
      },
      {
        title: 'Theme system',
        description:
          'Four theme presets via @i1ui/themes—Aura, Material, Lara, and Nora—configured through provideI1ui().',
      },
      {
        title: 'Dynamic Form & AgGrid',
        description:
          'Config-driven forms with validation and actions, plus an AG Grid wrapper with search, export (CSV/Excel/PDF), and custom cells.',
      },
      {
        title: 'Enterprise utilities',
        description:
          'PDF Viewer, Phone Input, Wizard, TopStat KPI cards, History Menu, breadcrumbs, SweetAlert, and loading spinner modules.',
      },
      {
        title: 'Modular packaging',
        description:
          'Per-component entry points (e.g. i1uiCore/button) for tree-shaking-friendly imports across Angular 17–21 apps.',
      },
      {
        title: 'Docs & monorepo pipeline',
        description:
          'Showcase/documentation app with TypeDoc, plus pnpm workspaces, lint/test, and release packaging workflows.',
      },
    ],
    techStack: [
      'Angular 19',
      'TypeScript',
      'pnpm',
      'ng-packagr',
      'AG Grid',
      '@i1ui/themes',
      'ng2-pdf-viewer',
      'ngx-intl-tel-input',
      'Karma / Jasmine',
    ],
    impact: [
      'Standardizes UI across products with a shared, installable component library.',
      'Consolidates enterprise patterns (e.g. Dynamic Form ported from i1Wealth_UI) into reusable modules.',
    ],
  },
];

export function getProjectById(id: string): ProjectDetail | undefined {
  return PROJECTS.find((project) => project.id === id);
}

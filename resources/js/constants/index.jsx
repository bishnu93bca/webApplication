export const ITEMS = [
  { label: "No of patients", href: "no_of_patients" },
  { label: "Lead Sources", href: "lead_sources" },
  { label: "Top Geographies", href: "top_geographies" },
  { label: "Website Visits", href: "website_visits" },
  { label: "Keywords", href: "keywords" },
  { label: "DAS & PAS", href: "das_and_pas" },
  { label: "Patient Checklist", href: "patient_checklist" },
  { label: "Research", href: "research" },
];

export const PX_32 = "md:px-32 px-8";
export const LOGO_DEFAULT_WIDTH = 200;
export const START_PAGE = "startpage";
export const HOME_PAGE = "homepage";
export const WIZARD_FORM_PAGE = "wizardformpage";
export const ICON_ALIGN_LEFT = "left";
export const ICON_ALIGN_RIGHT = "right";

export const cardLabels = [
  { name: "Total visits", value: "1.2M" },
  { name: "Bounce rate", value: "24.71%" },
  { name: "Pages per Visit", value: "15.09" },
  { name: " Average Visit Duration", value: "00:26:36" },
];

export const topCompetitors = [
  { siteName: "salesforce", value: "10M" },
  { siteName: "pipedrive", value: "4M" },
  { siteName: "zoho", value: "2.2M" },
];

export const keywordsInfo = [
  {
    keyword: "healthcare crm",
    position: 3,
    volume: 14800,
    kd: 64,
    traffic: 20.45,
  },
  {
    keyword: "healthcare callcenter",
    position: 5,
    volume: 9900,
    kd: 55,
    traffic: 16.3,
  },
  {
    keyword: "medical device management",
    position: 6,
    volume: 7890,
    kd: 51,
    traffic: 10.45,
  },
  {
    keyword: "medical scheduling software",
    position: 7,
    volume: 6680,
    kd: 89,
    traffic: 6.6,
  },
];

export const keywordsCompetitors = {
  PPC: [
    { keyword: "hipaa crm", rank: 1 },
    { keyword: "hipaa compliancy", rank: 1 },
  ],
  organic: [
    { keyword: "hipaa compliant crm", rank: 1 },
    { keyword: "crm for patient management", rank: 1 },
  ],
};

export const patientDataA = [
  { label: "HIPAA compliance + AICPA SOC 2", crm: ["salesforce"] },
  { label: "Data security" },
  { label: "Secure integrations", crm: ["salesforce", "pipedrive"] },
  { label: "patient health records" },
  { label: "Appointment history" },
  { label: "Digital intake forms", crm: ["zoho", "pipedrive"] },
  { label: "Appointment scheduling", crm: ["zoho", "salesforce", "pipedrive"] },
];

export const patientDataB = [
  { label: "Appointment remainders", crm: ["zoho", "salesforce", "pipedrive"] },
  { label: "Patient portal" },
  { label: "Built-in dailers", crm: ["salesforce", "pipedrive"] },
  { label: "Patient-doctor mapping" },
  { label: "Email marketing" },
  { label: "Bulk texting", crm: ["salesforce", "zoho"] },
  { label: "Referral tracking" },
];

export const authorityScore = {
  domain: "78%",
  page: "65%",
};

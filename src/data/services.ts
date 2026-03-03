export interface Service {
  name: string;
  slug: string;
  color: 'green' | 'cyan' | 'pink' | 'yellow' | 'orange' | 'purple' | 'red';
  iconPath: string;
  tagline: string;
  features: string[];
  proofNum: string;
  proofLabel: string;
}

export const services: Service[] = [
  {
    name: 'Server-Side Tracking',
    slug: 'server-side-tracking',
    color: 'green',
    iconPath:
      'M5 12h14M12 5l7 7-7 7M21 3v4h-4M3 21v-4h4M21 3L3 21',
    tagline: 'Deine Daten direkt erfassen — ohne Verlust durch AdBlocker',
    features: [
      'GTM Server-Side (Stape / Google Cloud Run)',
      'Meta CAPI & TikTok Events API',
      'Enhanced Conversions Google Ads',
      'Consent Mode v2 & CMP-Integration',
      'GA4 Server-Side-Streaming',
    ],
    proofNum: '+35%',
    proofLabel: 'mehr erfasste Conversions',
  },
  {
    name: 'Google Ads',
    slug: 'google-ads',
    color: 'cyan',
    iconPath:
      'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z',
    tagline: 'Mehr Kunden, weniger Kosten — mit datengetriebenem Google Ads',
    features: [
      'Search & Shopping mit Feed-Optimierung',
      'Performance Max & Demand Gen',
      'Smart Bidding: tROAS & tCPA',
      'Enhanced Conversions & Offline Import',
      'YouTube & Discover Kampagnen',
    ],
    proofNum: '340%',
    proofLabel: 'Ø ROAS-Steigerung',
  },
  {
    name: 'Social Ads',
    slug: 'social-ads',
    color: 'pink',
    iconPath:
      'M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5ZM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm3.5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z',
    tagline: 'Deine Zielgruppe dort erreichen, wo sie scrollt',
    features: [
      'Meta Advantage+ Shopping & Leads',
      'TikTok Smart+ & Spark Ads',
      'LinkedIn B2B- & ABM-Targeting',
      'Retargeting & Lookalike Audiences',
      'Creative Testing & UGC-Briefings',
    ],
    proofNum: '-45%',
    proofLabel: 'Cost per Lead (B2B SaaS)',
  },
  {
    name: 'Webdesign & Entwicklung',
    slug: 'webdesign-entwicklung',
    color: 'yellow',
    iconPath:
      'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tagline: 'Websites die nicht nur gut aussehen — sondern konvertieren',
    features: [
      'Webflow & Shopify Development',
      'Core Web Vitals optimiert',
      'WCAG 2.2 AA — barrierefrei & Enterprise-ready',
      'Conversion-First Landing Pages',
      'CRM- & Tracking-Integration',
      'Laufende CRO & A/B-Testing',
    ],
    proofNum: '+67%',
    proofLabel: 'CVR nach Relaunch',
  },
  {
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    color: 'purple',
    iconPath:
      'M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5',
    tagline: 'Interfaces die Nutzer führen — nicht verwirren',
    features: [
      'User Research & Journey Mapping',
      'Wireframing & Prototyping in Figma',
      'Design-Systeme & Component Libraries',
      'WCAG 2.2 AA — EU EAA Compliance ab 2025',
      'Responsive UI für Web & Mobile',
      'Datengestützte Conversion-Optimierung',
    ],
    proofNum: '-35%',
    proofLabel: 'Bounce Rate',
  },
  {
    name: 'Shop Design',
    slug: 'shop-design',
    color: 'red',
    iconPath:
      'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0',
    tagline: 'Online-Shops die verkaufen — Shopify, Shopware & WooCommerce',
    features: [
      'Shopify, Shopware 6 & WooCommerce',
      'Conversion-optimierte Produktseiten & Checkout',
      'Performance & Core Web Vitals',
      'Server-Side Tracking ab Launch',
      'Payment, Versand & ERP-Integration',
      'Laufende CRO & A/B-Testing',
    ],
    proofNum: '+42%',
    proofLabel: 'Umsatz nach Relaunch',
  },
  {
    name: 'Strategie & Beratung',
    slug: 'strategie-beratung',
    color: 'orange',
    iconPath:
      'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2ZM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z',
    tagline: 'Klarheit statt Komplexität — ein Plan der funktioniert',
    features: [
      'Full-Funnel-Audit & Gap-Analyse',
      'Channel-Mix & Budget-Allokation',
      'KPI-Framework & Attribution',
      'Wettbewerbsanalyse & Growth Roadmap',
      'Quartalsweise Strategy Reviews',
    ],
    proofNum: '+40%',
    proofLabel: 'ROAS durch Channel-Mix',
  },
];

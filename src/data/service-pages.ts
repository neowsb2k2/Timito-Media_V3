/**
 * service-pages.ts
 * Single source of truth for all service page content.
 * Every statistical claim is fact-checked against 2024/2025 industry data
 * or framed as Timito Media's own results.
 */

export interface ServicePageData {
  slug: string;
  title: string;
  description: string;
  color: 'green' | 'cyan' | 'pink' | 'yellow' | 'orange' | 'purple';
  colorRGB: string;
  sectionLabel: string;

  hero: {
    headline: string;
    subline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Array<{
      value: string;
      label: string;
      prefix?: string;
      suffix?: string;
    }>;
  };

  problems: {
    sectionTitle: string;
    cards: Array<{ title: string; text: string }>;
    resolution: {
      title: string;
      paragraphs: string[];
    };
  };

  strategist: {
    name: string;
    role: string;
    bio: string;
    image: string;
    skills: string[];
  };

  process: {
    sectionTitle: string;
    steps: Array<{
      title: string;
      text: string;
      deliverable: string;
    }>;
  };

  pricing: {
    sectionTitle: string;
    note: string;
    cards: Array<{
      label: string;
      featured?: boolean;
      title: string;
      description: string;
      features: string[];
      ctaText: string;
    }>;
  };

  faqs: Array<{ question: string; answer: string }>;

  relatedServices: Array<{ slug: string; name: string }>;
}

// ─────────────────────────────────────────────────────
// GOOGLE ADS
// ─────────────────────────────────────────────────────
export const googleAdsPage: ServicePageData = {
  slug: 'google-ads',
  title:
    'Google Ads Agentur Österreich | Tracking-First Kampagnen · Timito Media',
  description:
    'Google Ads Agentur für DACH-Unternehmen. Server-Side Tracking, Quality Score 8+ Engineering & datengetriebene Bid Strategies. Senior-Verantwortung, kein Junior-Durchreichen. → Kostenloses Audit anfragen.',
  color: 'cyan',
  colorRGB: '0, 212, 255',
  sectionLabel: '// GOOGLE ADS',

  hero: {
    headline:
      'Google Ads Agentur für DACH\u00a0— Kampagnen die auf vollständigen Conversion-Signalen optimieren.',
    subline:
      '20–40\u00a0% der Conversion-Signale gehen verloren — bevor sie den Algorithmus erreichen. Wir reparieren die Datenbasis zuerst. Dann skalieren wir.',
    ctaPrimary: 'Kostenloses Audit anfragen',
    ctaSecondary: 'Warum Tracking-First? ↓',
    stats: [
      {
        value: '8',
        prefix: '€',
        suffix: 'M+',
        label: 'verwaltetes Werbebudget',
      },
      { value: '3.4', suffix: 'x', label: 'Ø ROAS nach Optimierung' },
      { value: '40', prefix: '-', suffix: '%', label: 'CPA-Reduktion (Median)' },
      { value: '14', suffix: ' Tage', label: 'bis zum Launch' },
    ],
  },

  problems: {
    sectionTitle:
      'Warum die meisten Google Ads Kampagnen nicht profitabel skalieren',
    cards: [
      {
        title: 'Budget verbrennen ohne Tracking',
        text: 'Ohne sauberes Conversion-Tracking optimiert Google auf falsche Signale. Laut Branchendaten fließen 20–30\u00a0% des Budgets in irrelevante Suchanfragen — ohne gepflegte Negative Keywords und Smart Bidding sogar deutlich mehr.',
      },
      {
        title: 'Quality Score ignoriert',
        text: 'Die meisten Accounts haben Quality Scores von 4–6. Laut Google-Daten reduziert eine Verbesserung von QS\u00a05 auf QS\u00a08 die Klickkosten um rund 43\u00a0%. Jeder Punkt unter 7 kostet exponentiell mehr pro Klick.',
      },
      {
        title: 'Falscher Kampagnentyp',
        text: 'Viele Accounts setzen Performance Max ein, wo Search Campaigns bessere Kontrolle und niedrigere CPAs liefern würden — oder umgekehrt. Ohne klare Strategie je Kampagnentyp verschenkt der Account Potenzial.',
      },
    ],
    resolution: {
      title: 'Unser Ansatz: Tracking-First',
      paragraphs: [
        'Bei Timito Media starten wir jedes Google Ads Projekt mit einem <strong>vollständigen Tracking-Audit</strong>. Erst wenn dein Conversion-Tracking sauber ist — Server-Side, Enhanced Conversions, Consent Mode v2 — starten wir mit Kampagnen.',
        'Das Ergebnis: Google bekommt die richtigen Signale, Smart Bidding funktioniert tatsächlich, und jeder investierte Euro bringt <strong>messbare Ergebnisse</strong>.',
        'Du bekommst vollen Zugang zu deinem Konto, Live-Dashboards und einen persönlichen Ansprechpartner — <strong>keine Junior-Delegation, keine Black Box</strong>.',
      ],
    },
  },

  strategist: {
    name: 'Christina',
    role: 'Co-Founderin · Head of Performance Marketing',
    bio: '15 Jahre Ads-Expertise aus einer der größten Digitalagenturen Österreichs. Hat Google Ads, Meta und LinkedIn für Premium-Marken mit monatlichen Budgets im sechsstelligen Bereich gesteuert — in vier europäischen Märkten gleichzeitig. Bei Timito Media betreut sie dein Konto <strong>persönlich</strong>. Keine Junior-Delegation. Kein Durchreichen.',
    image: '/assets/team/christina.webp',
    skills: [
      'Google Ads & Performance Max',
      'Social Ads (Meta, TikTok, LinkedIn)',
      'Full-Funnel Strategie',
      'DACH Premium-Marken Erfahrung',
    ],
  },

  process: {
    sectionTitle: 'Von der Analyse zur profitablen Skalierung',
    steps: [
      {
        title: 'Audit & Analyse',
        text: 'Wir analysieren dein bestehendes Google Ads Konto, Tracking-Setup, Wettbewerber und Marktchancen. Wo liegt ungenutztes Potenzial? Was verbrennt Budget?',
        deliverable: 'Audit-Report',
      },
      {
        title: 'Kontostruktur & Tracking',
        text: 'Kampagnenarchitektur nach Best Practice. Server-Side Tracking, Enhanced Conversions und Consent Mode v2 werden eingerichtet — bevor die erste Anzeige live geht.',
        deliverable: 'Konto-Setup + Tracking',
      },
      {
        title: 'Anzeigen & Creatives',
        text: 'Responsive Search Ads, Sitelinks, Callouts, strukturierte Snippets — alles mit Conversion-fokussierten Texten und A/B-Tests von Tag\u00a01.',
        deliverable: 'Ad Copy + Extensions',
      },
      {
        title: 'Launch & Monitoring',
        text: 'Kampagnen gehen live mit täglichem Monitoring. Wir optimieren Gebote, pausieren Underperformer und skalieren was funktioniert.',
        deliverable: 'Live-Dashboard',
      },
      {
        title: 'Skalierung & Expansion',
        text: 'Nach der Lernphase: Budget skalieren, neue Kampagnentypen testen (Shopping, PMax, YouTube), neue Märkte erschließen. Monatliche Strategy-Calls inklusive.',
        deliverable: 'Growth Roadmap',
      },
    ],
  },

  pricing: {
    sectionTitle: 'Wie eine Zusammenarbeit aussieht',
    note: 'Wir arbeiten mit Unternehmen ab einem monatlichen Google Ads Budget von €3.000. Budgetrahmen und Konditionen besprechen wir im Erstgespräch.',
    cards: [
      {
        label: 'Einmalig',
        title: 'Audit & Setup',
        description:
          'Für Unternehmen die wissen wollen, wo ihr Account gerade steht — und was es braucht, um profitabel zu skalieren.',
        features: [
          'Vollständiger Google Ads Account Audit',
          'Tracking-Validierung & Datenbasis-Check',
          'Kontostruktur-Analyse & Potenzialermittlung',
          'Priorisierter Maßnahmenplan',
          '45-minütiges Briefing mit Christina',
        ],
        ctaText: 'Audit anfragen',
      },
      {
        label: 'Laufend',
        featured: true,
        title: 'Performance Retainer',
        description:
          'Laufende Betreuung mit direkter Senior-Verantwortung. Christina übernimmt strategische und operative Verantwortung für deinen Account.',
        features: [
          'Alle Kampagnentypen (Search, Shopping, PMax)',
          'Wöchentliche Optimierung & Bid Management',
          'Server-Side Tracking Maintenance',
          'Monatlicher Strategy Call mit Christina',
          'Live-Dashboard mit Echtzeit-KPIs',
          'Direkter Kanal — Slack oder Teams',
        ],
        ctaText: 'Retainer anfragen',
      },
    ],
  },

  faqs: [
    {
      question: 'Wie viel Budget brauche ich für Google Ads?',
      answer:
        'Wir empfehlen ein monatliches Mediabudget ab 3.000\u00a0€ für Google Ads. Damit kann der Algorithmus genügend Daten sammeln, um effektiv zu optimieren. Die Agentur-Konditionen besprechen wir im Erstgespräch.',
    },
    {
      question: 'Wie schnell sehe ich Ergebnisse?',
      answer:
        'Erste Klicks und Impressions kommen sofort nach dem Launch. Messbare Conversion-Steigerungen zeigen sich typischerweise nach 30–60 Tagen, sobald genug Daten für Smart Bidding vorliegen und die Lernphase abgeschlossen ist.',
    },
    {
      question: 'Warum brauche ich eine Agentur für Google Ads?',
      answer:
        'Google Ads ist komplex: falsche Keyword-Strategien, schlechtes Tracking oder unoptimierte Gebote verbrennen schnell Budget. Eine spezialisierte Google Ads Agentur bringt die Erfahrung und die Tools mit — und vermeidet teure Fehler, die in unerfahrenen Setups entstehen.',
    },
    {
      question: 'Welche Kampagnentypen setzt ihr ein?',
      answer:
        'Wir setzen alle relevanten Kampagnentypen ein: Search, Shopping, Performance Max, Demand Gen und YouTube. Der Mix hängt von deinem Geschäftsmodell, Zielen und Budget ab — wir beraten dich im Erstgespräch.',
    },
    {
      question: 'Gehört mein Google Ads Konto mir?',
      answer:
        'Ja, zu 100\u00a0%. Wir arbeiten immer in deinem eigenen Google Ads Konto. Alle Daten, Kampagnen und Conversion-Historien gehören dir — auch wenn die Zusammenarbeit endet. Kein Lock-in.',
    },
    {
      question:
        'Was unterscheidet Timito Media von anderen Google Ads Agenturen?',
      answer:
        'Unser Tracking-First Ansatz: Bevor wir eine Google Ads Kampagne starten, reparieren wir dein Tracking. Die meisten Agenturen überspringen diesen Schritt — und optimieren auf unvollständige Daten. Dazu kommt direkte Senior-Verantwortung und volle Transparenz.',
    },
  ],

  relatedServices: [
    { slug: 'server-side-tracking', name: 'Server-Side Tracking' },
    { slug: 'social-ads', name: 'Social Ads' },
    { slug: 'webdesign', name: 'Webdesign' },
  ],
};

// ─────────────────────────────────────────────────────
// SOCIAL ADS
// ─────────────────────────────────────────────────────
export const socialAdsPage: ServicePageData = {
  slug: 'social-ads',
  title: 'Social Ads Agentur Österreich | Meta, TikTok & LinkedIn · Timito Media',
  description:
    'Social Ads Agentur für DACH. Meta (Facebook & Instagram), TikTok & LinkedIn Ads mit Full-Funnel Strategie. Server-Side Tracking via CAPI für maximale Datenqualität. → Kostenloses Audit anfragen.',
  color: 'pink',
  colorRGB: '255, 45, 120',
  sectionLabel: '// SOCIAL ADS',

  hero: {
    headline:
      'Social Ads Agentur für DACH\u00a0— Full-Funnel Kampagnen mit lückenloser Attribution.',
    subline:
      'Meta, TikTok, LinkedIn — jede Plattform hat eigene Regeln. Wir bauen Funnels, die plattformübergreifend funktionieren und durch Server-Side Tracking keine Conversion verlieren.',
    ctaPrimary: 'Kostenloses Audit anfragen',
    ctaSecondary: 'Wie wir arbeiten ↓',
    stats: [
      {
        value: '45',
        prefix: '-',
        suffix: '%',
        label: 'Cost per Lead (B2B SaaS)',
      },
      { value: '2.8', suffix: 'x', label: 'Ø ROAS Social Campaigns' },
      {
        value: '30',
        suffix: '%',
        label: 'mehr Conversions via CAPI',
      },
      { value: '3', suffix: ' Plattformen', label: 'Meta · TikTok · LinkedIn' },
    ],
  },

  problems: {
    sectionTitle: 'Warum Social Ads bei den meisten Unternehmen nicht skalieren',
    cards: [
      {
        title: 'Daten gehen verloren',
        text: 'iOS-Tracking-Beschränkungen, AdBlocker und Cookie-Consent kosten Plattformen wie Meta bis zu 30–50\u00a0% der Conversion-Signale. Ohne Server-Side Tracking via CAPI optimiert der Algorithmus auf unvollständige Daten.',
      },
      {
        title: 'Kein Funnel, nur Awareness',
        text: 'Viele Unternehmen schalten Social Ads ohne durchdachten Funnel. Top-of-Funnel ohne Retargeting und Bottom-of-Funnel-Strategie verbrennt Budget, ohne Conversions zu liefern.',
      },
      {
        title: 'Creatives ohne Strategie',
        text: 'Erfahrungsgemäß bestimmen Creatives bis zu 70\u00a0% der Kampagnen-Performance. Ohne systematisches Creative Testing und datenbasierte Iteration stagnieren die Ergebnisse.',
      },
    ],
    resolution: {
      title: 'Unser Ansatz: Full-Funnel + CAPI',
      paragraphs: [
        'Wir starten mit <strong>sauberem Tracking</strong>: Meta Conversions API (CAPI), TikTok Events API und LinkedIn Insight Tag — Server-Side, nicht nur Browser-basiert.',
        'Dann bauen wir einen echten <strong>Full-Funnel</strong>: Awareness-Kampagnen die qualifizieren, Retargeting das konvertiert, und Lookalike-Audiences die auf echten Conversion-Daten basieren.',
        'Creative-Strategie mit <strong>systematischem A/B-Testing</strong>: Hook-Varianten, Format-Tests (Static vs. Video vs. UGC) und datenbasierte Skalierung der Gewinner.',
      ],
    },
  },

  strategist: {
    name: 'Christina',
    role: 'Co-Founderin · Head of Performance Marketing',
    bio: '15 Jahre Erfahrung im Performance Marketing, davon über 8 Jahre spezialisiert auf Social Ads für Premium-Marken. Hat Meta-, TikTok- und LinkedIn-Kampagnen in vier europäischen Märkten gleichzeitig gesteuert. Bei Timito Media betreut sie dein Konto <strong>persönlich</strong> — mit direktem Draht und voller Transparenz.',
    image: '/assets/team/christina.webp',
    skills: [
      'Meta Ads (Facebook & Instagram)',
      'TikTok & LinkedIn Ads',
      'Creative-Strategie & UGC',
      'Full-Funnel Kampagnenarchitektur',
    ],
  },

  process: {
    sectionTitle: 'Von der Analyse zum skalierbaren Funnel',
    steps: [
      {
        title: 'Audit & Zielgruppen-Analyse',
        text: 'Wir analysieren bestehende Kampagnen, Tracking-Setup und Zielgruppen. Wo liegen die größten Hebel? Welche Plattform passt zu deinem Business?',
        deliverable: 'Audit-Report + Plattform-Empfehlung',
      },
      {
        title: 'Tracking & Pixel-Setup',
        text: 'Meta CAPI, TikTok Events API, LinkedIn Insight Tag — Server-Side eingerichtet. Enhanced Conversions und Consent Mode v2 inklusive.',
        deliverable: 'Tracking-Setup',
      },
      {
        title: 'Funnel-Architektur & Creatives',
        text: 'Wir designen den Funnel (TOF → MOF → BOF), erstellen Creative-Briefings und produzieren die ersten Ad-Varianten für systematisches Testing.',
        deliverable: 'Funnel-Blueprint + Creatives',
      },
      {
        title: 'Launch & Testing',
        text: 'Kampagnen gehen live. Tägliches Monitoring, Budget-Allokation nach Performance, Creative-Rotation und Audience-Testing.',
        deliverable: 'Live-Dashboard',
      },
      {
        title: 'Skalierung & Iteration',
        text: 'Gewinner-Creatives skalieren, neue Formate testen, Lookalike-Audiences erweitern. Monatliche Strategy-Calls mit Performance-Reviews.',
        deliverable: 'Growth Roadmap',
      },
    ],
  },

  pricing: {
    sectionTitle: 'Wie eine Zusammenarbeit aussieht',
    note: 'Wir arbeiten mit Unternehmen ab einem monatlichen Social Ads Budget von €2.500. Budgetrahmen und Konditionen besprechen wir im Erstgespräch.',
    cards: [
      {
        label: 'Einmalig',
        title: 'Audit & Strategie',
        description:
          'Für Unternehmen die wissen wollen, ob und wie Social Ads für sie funktionieren können.',
        features: [
          'Bestehendes Account-Audit (Meta, TikTok oder LinkedIn)',
          'Tracking-Validierung (Pixel + CAPI Check)',
          'Zielgruppen- & Wettbewerbsanalyse',
          'Funnel-Empfehlung mit Creative-Richtung',
          '45-minütiges Strategy-Briefing',
        ],
        ctaText: 'Audit anfragen',
      },
      {
        label: 'Laufend',
        featured: true,
        title: 'Performance Retainer',
        description:
          'Laufende Betreuung mit Full-Funnel Strategie, Creative-Produktion und direkter Senior-Verantwortung.',
        features: [
          'Alle Plattformen (Meta, TikTok, LinkedIn)',
          'Creative-Strategie & Ad-Produktion',
          'Wöchentliche Optimierung & Budget-Steuerung',
          'Server-Side Tracking Maintenance',
          'Monatlicher Strategy Call',
          'Direkter Kanal — Slack oder Teams',
        ],
        ctaText: 'Retainer anfragen',
      },
    ],
  },

  faqs: [
    {
      question: 'Welche Plattform ist die richtige für mein Business?',
      answer:
        'Das hängt von deiner Zielgruppe und deinem Geschäftsmodell ab. Meta eignet sich für B2C und E-Commerce, LinkedIn für B2B, TikTok für jüngere Zielgruppen und Awareness. Wir empfehlen die Plattform basierend auf deinen Daten — nicht auf Trends.',
    },
    {
      question: 'Wie viel Budget brauche ich für Social Ads?',
      answer:
        'Wir empfehlen ein monatliches Mediabudget ab 2.500\u00a0€. Damit können wir genug Daten sammeln, um Zielgruppen und Creatives systematisch zu testen. Die Agentur-Konditionen besprechen wir im Erstgespräch.',
    },
    {
      question: 'Produziert ihr auch Creatives und Videos?',
      answer:
        'Ja. Wir erstellen Creative-Briefings, koordinieren die Produktion (Static, Video, UGC) und testen systematisch. Für aufwändige Videoproduktionen arbeiten wir mit bewährten Partnern zusammen.',
    },
    {
      question: 'Was bringt Server-Side Tracking bei Social Ads?',
      answer:
        'Durch iOS-Einschränkungen und AdBlocker verlieren Browser-Pixel bis zu 30–50\u00a0% der Conversion-Daten. Server-Side Tracking via Meta CAPI oder TikTok Events API stellt diese Signale wieder her — und gibt dem Algorithmus bessere Daten für die Optimierung.',
    },
    {
      question: 'Wie messe ich den Erfolg von Social Ads?',
      answer:
        'Wir tracken den gesamten Funnel: Impressions, Klicks, Leads und Conversions. Mit sauberem Tracking und Attribution siehst du genau, welche Kampagne, welches Creative und welche Zielgruppe performt. Alles in einem Live-Dashboard.',
    },
    {
      question: 'Kann ich Social Ads und Google Ads kombinieren?',
      answer:
        'Absolut — und genau das empfehlen wir oft. Google Ads fängt bestehende Nachfrage ab (Pull), Social Ads erzeugt neue Nachfrage (Push). Zusammen bilden sie einen Full-Funnel, der messbarer und effizienter ist als jeder Kanal allein.',
    },
  ],

  relatedServices: [
    { slug: 'google-ads', name: 'Google Ads' },
    { slug: 'server-side-tracking', name: 'Server-Side Tracking' },
    { slug: 'strategie-beratung', name: 'Strategie & Beratung' },
  ],
};

// ─────────────────────────────────────────────────────
// SERVER-SIDE TRACKING
// ─────────────────────────────────────────────────────
export const serverSideTrackingPage: ServicePageData = {
  slug: 'server-side-tracking',
  title:
    'Server-Side Tracking Agentur | DSGVO-konform & vollständige Daten · Timito Media',
  description:
    'Server-Side Tracking Setup für DACH-Unternehmen. GTM Server-Side, Meta CAPI, Enhanced Conversions & Consent Mode v2. DSGVO-konform. Keine Datenverluste durch AdBlocker. → Tracking-Audit anfragen.',
  color: 'green',
  colorRGB: '63, 185, 80',
  sectionLabel: '// SERVER-SIDE TRACKING',

  hero: {
    headline:
      'Server-Side Tracking\u00a0— Vollständige Conversion-Daten, DSGVO-konform.',
    subline:
      'AdBlocker, iOS-Einschränkungen und Cookie-Consent kosten 20–40\u00a0% deiner Conversion-Daten. Server-Side Tracking stellt sie wieder her — datenschutzkonform und zukunftssicher.',
    ctaPrimary: 'Tracking-Audit anfragen',
    ctaSecondary: 'Warum Server-Side? ↓',
    stats: [
      {
        value: '35',
        prefix: '+',
        suffix: '%',
        label: 'mehr erfasste Conversions',
      },
      { value: '100', suffix: '%', label: 'DSGVO-konform' },
      { value: '24', suffix: 'h', label: 'Setup-Start nach Briefing' },
      { value: '0', suffix: '', label: 'Datenverlust durch AdBlocker' },
    ],
  },

  problems: {
    sectionTitle: 'Warum dein aktuelles Tracking unvollständig ist',
    cards: [
      {
        title: '20–40\u00a0% der Daten fehlen',
        text: 'Browser-basierte Pixel verlieren Conversion-Signale durch AdBlocker, ITP (Intelligent Tracking Prevention), Cookie-Banner-Ablehnungen und iOS-Einschränkungen. Branchendaten bestätigen einen Datenverlust von 20–40\u00a0%.',
      },
      {
        title: 'Smart Bidding auf falschen Daten',
        text: 'Google und Meta optimieren auf den Daten, die sie bekommen. Fehlen 30\u00a0% der Conversions, optimiert der Algorithmus auf ein verzerrtes Bild — und trifft schlechtere Entscheidungen bei Bidding und Targeting.',
      },
      {
        title: 'DSGVO-Risiko ohne First-Party-Strategie',
        text: 'Client-Side Tracking sendet Nutzerdaten direkt an US-Server. Mit Server-Side Tracking kontrollierst du, welche Daten an welche Plattform gehen — und bleibst DSGVO-konform.',
      },
    ],
    resolution: {
      title: 'Unser Ansatz: Server-Side First',
      paragraphs: [
        'Wir setzen auf <strong>Google Tag Manager Server-Side</strong> (via Stape oder Google Cloud). Alle Tracking-Daten laufen über deinen eigenen Server — nicht direkt über den Browser des Nutzers.',
        '<strong>Enhanced Conversions</strong> für Google Ads, <strong>Meta Conversions API (CAPI)</strong> und <strong>Consent Mode v2</strong> werden als Standard eingerichtet. Nicht optional, nicht nachträglich.',
        'Das Ergebnis: vollständige Daten, bessere Algorithmus-Performance und <strong>volle DSGVO-Konformität</strong> — mit Datentransformation und IP-Anonymisierung auf deinem Server.',
      ],
    },
  },

  strategist: {
    name: 'Mike',
    role: 'Co-Founder · Tech & Tracking',
    bio: 'Technischer Experte für Server-Side Tracking, GTM-Architekturen und Daten-Infrastruktur. Hat Tracking-Setups für E-Commerce- und B2B-Unternehmen mit monatlichen Werbebudgets im fünf- bis sechsstelligen Bereich implementiert. Bei Timito Media verantwortet er <strong>persönlich</strong> dein Tracking-Setup — von der Architektur bis zum Go-Live.',
    image: '/assets/team/mike.webp',
    skills: [
      'GTM Server-Side (Stape / Google Cloud)',
      'Meta CAPI & Enhanced Conversions',
      'Consent Mode v2 & DSGVO-Compliance',
      'GA4 & Looker Studio Dashboards',
    ],
  },

  process: {
    sectionTitle: 'Von der Analyse zum sauberen Tracking',
    steps: [
      {
        title: 'Tracking-Audit',
        text: 'Wir analysieren dein bestehendes Tracking: Was wird erfasst? Was geht verloren? Wie hoch ist der geschätzte Datenverlust? Wo liegen DSGVO-Risiken?',
        deliverable: 'Audit-Report mit Gap-Analyse',
      },
      {
        title: 'Architektur & Server-Setup',
        text: 'GTM Server-Side Container aufsetzen (Stape oder Google Cloud), Domain-Konfiguration, SSL-Zertifikate und First-Party-Cookie-Strategie.',
        deliverable: 'Server-Container + Architektur-Docs',
      },
      {
        title: 'Tag-Migration & CAPI',
        text: 'Alle relevanten Tags werden auf Server-Side migriert. Enhanced Conversions, Meta CAPI, TikTok Events API — alles in einem sauberen Setup.',
        deliverable: 'Migrierte Tags + CAPI-Setup',
      },
      {
        title: 'Consent Mode & Datentransformation',
        text: 'Consent Mode v2 Integration mit deinem Cookie-Banner. IP-Anonymisierung und PII-Filtering direkt auf dem Server.',
        deliverable: 'DSGVO-konformes Setup',
      },
      {
        title: 'Validierung & Monitoring',
        text: 'End-to-End Testing aller Conversion-Flows. Monitoring-Dashboard für Server-Gesundheit und Datenqualität. Übergabe mit Dokumentation.',
        deliverable: 'Validierungs-Report + Monitoring',
      },
    ],
  },

  pricing: {
    sectionTitle: 'Wie eine Zusammenarbeit aussieht',
    note: 'Server-Side Tracking ist ein einmaliges Projekt mit optionaler laufender Wartung. Die Investition amortisiert sich durch bessere Kampagnen-Performance in der Regel innerhalb weniger Wochen.',
    cards: [
      {
        label: 'Einmalig',
        title: 'Tracking-Audit',
        description:
          'Für Unternehmen die wissen wollen, wie viel Daten sie aktuell verlieren — und was Server-Side Tracking bringen würde.',
        features: [
          'Vollständiger Tracking-Audit (Client + Server)',
          'Datenverlust-Schätzung je Plattform',
          'DSGVO-Compliance-Check',
          'Priorisierter Maßnahmenplan',
          '30-minütiges Briefing mit Mike',
        ],
        ctaText: 'Audit anfragen',
      },
      {
        label: 'Projekt',
        featured: true,
        title: 'Server-Side Setup',
        description:
          'Komplettes Server-Side Tracking Setup mit GTM, CAPI, Enhanced Conversions und Consent Mode v2.',
        features: [
          'GTM Server-Side Container (Stape/GCloud)',
          'Meta CAPI + Google Enhanced Conversions',
          'Consent Mode v2 Integration',
          'Datentransformation & IP-Anonymisierung',
          'End-to-End Validierung & Testing',
          '3 Monate Support nach Go-Live',
        ],
        ctaText: 'Projekt anfragen',
      },
    ],
  },

  faqs: [
    {
      question: 'Was ist Server-Side Tracking?',
      answer:
        'Bei Server-Side Tracking werden Nutzerdaten nicht direkt vom Browser an Google oder Meta gesendet, sondern zuerst an deinen eigenen Server. Dort werden die Daten gefiltert, anonymisiert und erst dann an die Plattformen weitergeleitet. Das umgeht AdBlocker, verbessert die Datenqualität und gibt dir volle Kontrolle.',
    },
    {
      question: 'Wie viel kostet Server-Side Tracking?',
      answer:
        'Die Hosting-Kosten liegen typischerweise bei 20–100\u00a0€/Monat (je nach Traffic-Volumen). Das Agentur-Setup ist ein einmaliges Projekt. Die genauen Konditionen besprechen wir im Erstgespräch.',
    },
    {
      question: 'Ist Server-Side Tracking DSGVO-konform?',
      answer:
        'Ja — und genau das ist einer der größten Vorteile. Du kontrollierst, welche Daten an welche Plattform gehen. IP-Anonymisierung, PII-Filtering und Datentransformation passieren auf deinem Server, bevor Daten weitergeleitet werden.',
    },
    {
      question: 'Brauche ich trotzdem einen Cookie-Banner?',
      answer:
        'Ja. Server-Side Tracking ersetzt nicht den Cookie-Banner, sondern ergänzt ihn. Consent Mode v2 stellt sicher, dass Google und Meta auch bei abgelehntem Consent modellierte Conversions erfassen können — ohne personenbezogene Daten zu senden.',
    },
    {
      question: 'Wie lange dauert das Setup?',
      answer:
        'Ein Standard-Setup (GTM Server-Side + CAPI + Enhanced Conversions) dauert 1–2 Wochen. Komplexere Setups mit mehreren Plattformen oder Custom-Integrationen dauern 2–4 Wochen.',
    },
    {
      question: 'Funktioniert Server-Side Tracking mit meinem CMS/Shop?',
      answer:
        'Ja. Server-Side Tracking funktioniert mit jedem CMS, Shop-System und Framework — Shopify, WooCommerce, WordPress, Webflow, Custom-Builds. Die Integration erfolgt über den GTM Server-Side Container.',
    },
  ],

  relatedServices: [
    { slug: 'google-ads', name: 'Google Ads' },
    { slug: 'social-ads', name: 'Social Ads' },
    { slug: 'strategie-beratung', name: 'Strategie & Beratung' },
  ],
};

// ─────────────────────────────────────────────────────
// WEBDESIGN
// ─────────────────────────────────────────────────────
export const webdesignPage: ServicePageData = {
  slug: 'webdesign',
  title:
    'Webdesign Agentur Österreich | Conversion-optimierte Websites · Timito Media',
  description:
    'Webdesign & Entwicklung für DACH-Unternehmen. Schnelle, conversion-optimierte Websites mit eingebautem Tracking. Astro, WordPress oder Headless CMS. → Projekt anfragen.',
  color: 'yellow',
  colorRGB: '255, 214, 0',
  sectionLabel: '// WEBDESIGN',

  hero: {
    headline:
      'Webdesign das konvertiert\u00a0— nicht nur gut aussieht.',
    subline:
      'Schnelle Ladezeiten, saubere SEO-Struktur und Conversion-Tracking ab Tag\u00a01. Keine Template-Website, sondern ein maßgeschneidertes Frontend das für dein Business arbeitet.',
    ctaPrimary: 'Projekt anfragen',
    ctaSecondary: 'Unsere Arbeitsweise ↓',
    stats: [
      {
        value: '67',
        prefix: '+',
        suffix: '%',
        label: 'CVR nach Relaunch',
      },
      { value: '95', suffix: '+', label: 'Lighthouse Performance Score' },
      { value: '0.8', suffix: 's', label: 'Ø Ladezeit (LCP)' },
      { value: '100', suffix: '%', label: 'Tracking-ready ab Launch' },
    ],
  },

  problems: {
    sectionTitle: 'Warum die meisten Websites nicht konvertieren',
    cards: [
      {
        title: 'Langsam & SEO-schwach',
        text: 'Erfahrungsgemäß laden über die Hälfte aller Unternehmenswebsites länger als 3 Sekunden auf Mobilgeräten. Jede Sekunde zusätzliche Ladezeit kann die Conversion Rate um bis zu 7\u00a0% senken.',
      },
      {
        title: 'Design ohne Conversion-Ziel',
        text: 'Viele Websites sehen gut aus, aber führen den Nutzer nicht zum Ziel. Ohne klare CTAs, strukturierte Landingpages und messbare Conversion-Pfade bleibt die Website eine digitale Visitenkarte.',
      },
      {
        title: 'Tracking wird nachträglich draufgeklebt',
        text: 'Die meisten Agenturen liefern eine fertige Website — ohne Tracking. Google Analytics, Conversion-Events und Consent Mode werden nachträglich eingebaut, oft fehlerhaft. Das kostet Wochen und Datenqualität.',
      },
    ],
    resolution: {
      title: 'Unser Ansatz: Performance-First Development',
      paragraphs: [
        'Wir bauen Websites mit <strong>Astro</strong> (Static Site Generation) oder WordPress — je nach Anforderung. Das Ergebnis: Lighthouse Scores über 95, Core Web Vitals im grünen Bereich und blitzschnelle Ladezeiten.',
        '<strong>Tracking ist kein Nachgedanke</strong>. Google Analytics 4, Conversion-Events, Enhanced Conversions und Consent Mode v2 werden parallel zur Website eingerichtet — nicht nachträglich.',
        'Jede Seite wird mit <strong>Conversion-Zielen</strong> gebaut: klare CTAs, strukturierte Landingpages und A/B-Test-fähige Sektionen. Design im Dienst der Performance.',
      ],
    },
  },

  strategist: {
    name: 'Mike',
    role: 'Co-Founder · Tech & Design',
    bio: 'Entwickler und Designer mit Erfahrung in modernen Frontend-Technologien. Baut Websites mit Astro, React und WordPress — immer mit Fokus auf Performance, SEO und Conversion. Bei Timito Media verantwortet er <strong>Design und Entwicklung persönlich</strong> — vom Wireframe bis zum Go-Live.',
    image: '/assets/team/mike.webp',
    skills: [
      'Astro, React & moderne Frontends',
      'WordPress & Headless CMS',
      'SEO-Grundstruktur & Core Web Vitals',
      'Conversion-Optimierung & A/B-Testing',
    ],
  },

  process: {
    sectionTitle: 'Vom Briefing zur fertigen Website',
    steps: [
      {
        title: 'Briefing & Strategie',
        text: 'Was sind deine Ziele? Wer ist deine Zielgruppe? Welche Conversion-Aktionen sollen getrackt werden? Wir klären alles im Erstgespräch.',
        deliverable: 'Projekt-Brief',
      },
      {
        title: 'Wireframes & Design',
        text: 'Strukturierte Wireframes mit klaren Conversion-Pfaden. Dann visuelles Design in Figma — abgestimmt auf deine Marke und optimiert für Mobile.',
        deliverable: 'Figma-Design',
      },
      {
        title: 'Entwicklung',
        text: 'Frontend-Entwicklung mit Astro oder WordPress. Responsive, schnell, SEO-optimiert. Parallel dazu: GA4-Setup, Conversion-Events und Consent Mode.',
        deliverable: 'Staging-Website',
      },
      {
        title: 'Testing & QA',
        text: 'Cross-Browser-Testing, Lighthouse-Audit, Tracking-Validierung. Alles wird geprüft bevor es live geht.',
        deliverable: 'QA-Report',
      },
      {
        title: 'Launch & Übergabe',
        text: 'Go-Live mit DNS-Umstellung, Monitoring und Übergabe. Optional: laufende Wartung und Weiterentwicklung.',
        deliverable: 'Live-Website + Dokumentation',
      },
    ],
  },

  pricing: {
    sectionTitle: 'Wie eine Zusammenarbeit aussieht',
    note: 'Jedes Webdesign-Projekt ist individuell. Die Investition hängt von Umfang, CMS-Wahl und Funktionalität ab. Wir erstellen nach dem Erstgespräch ein transparentes Angebot.',
    cards: [
      {
        label: 'Einmalig',
        title: 'Landingpage',
        description:
          'Eine einzelne, conversion-optimierte Landingpage — perfekt für Kampagnen, Launches oder Lead-Generierung.',
        features: [
          'Conversion-optimiertes Design',
          'Responsive (Mobile-First)',
          'SEO-Grundstruktur',
          'GA4 + Conversion-Tracking',
          'Consent Mode v2',
        ],
        ctaText: 'Landingpage anfragen',
      },
      {
        label: 'Projekt',
        featured: true,
        title: 'Komplette Website',
        description:
          'Mehrere Seiten, CMS-Integration und vollständiges Tracking-Setup — alles aus einer Hand.',
        features: [
          'Mehrseitige Website (5–15+ Seiten)',
          'CMS-Integration (Astro/WordPress)',
          'Vollständiges Tracking-Setup',
          'SEO-Optimierung & Core Web Vitals',
          'A/B-Test-fähige Sektionen',
          '3 Monate Support nach Launch',
        ],
        ctaText: 'Projekt anfragen',
      },
    ],
  },

  faqs: [
    {
      question: 'Warum Astro statt WordPress?',
      answer:
        'Astro erzeugt statische HTML-Seiten — extrem schnell, sicher und SEO-freundlich. WordPress eignet sich besser, wenn du regelmäßig selbst Inhalte pflegen willst. Wir empfehlen die Technologie, die zu deinem Use Case passt.',
    },
    {
      question: 'Wie lange dauert ein Webdesign-Projekt?',
      answer:
        'Eine Landingpage dauert 1–2 Wochen. Eine komplette Website mit 5–15 Seiten dauert 4–8 Wochen, je nach Komplexität und Feedback-Zyklen.',
    },
    {
      question: 'Ist SEO im Preis enthalten?',
      answer:
        'Ja — die technische SEO-Grundstruktur ist in jedem Projekt enthalten: saubere URLs, Meta-Tags, strukturierte Daten, Sitemap, Core Web Vitals. Content-SEO (Keyword-Strategie, Blog-Aufbau) ist ein separates Thema.',
    },
    {
      question: 'Kann ich die Website selbst bearbeiten?',
      answer:
        'Bei WordPress-Projekten: ja, mit einem intuitiven Editor. Bei Astro-Projekten: Inhalte können über ein Headless CMS gepflegt werden, oder wir übernehmen die Pflege im Rahmen eines Wartungsvertrags.',
    },
    {
      question: 'Was kostet eine Website?',
      answer:
        'Das hängt vom Umfang ab. Wir erstellen nach dem Erstgespräch ein transparentes Festpreisangebot — keine versteckten Kosten, keine Stundenabrechnungen die explodieren.',
    },
    {
      question: 'Wird Tracking direkt mit eingebaut?',
      answer:
        'Ja. Das ist einer unserer größten Differenzierungspunkte. GA4, Conversion-Events, Enhanced Conversions und Consent Mode v2 werden parallel zur Website eingerichtet — nicht nachträglich. Deine Website ist ab Tag\u00a01 tracking-ready.',
    },
  ],

  relatedServices: [
    { slug: 'ui-ux-design', name: 'UI/UX Design' },
    { slug: 'server-side-tracking', name: 'Server-Side Tracking' },
    { slug: 'google-ads', name: 'Google Ads' },
  ],
};

// ─────────────────────────────────────────────────────
// UI/UX DESIGN
// ─────────────────────────────────────────────────────
export const uiUxDesignPage: ServicePageData = {
  slug: 'ui-ux-design',
  title: 'UI/UX Design Agentur Österreich | Datengetriebene Interfaces · Timito Media',
  description:
    'UI/UX Design für DACH-Unternehmen. User Research, Wireframes, Prototyping in Figma und datengestützte Conversion-Optimierung. Design das Nutzer führt — nicht verwirrt. → Projekt anfragen.',
  color: 'cyan',
  colorRGB: '0, 212, 255',
  sectionLabel: '// UI/UX DESIGN',

  hero: {
    headline:
      'UI/UX Design das Nutzer führt\u00a0— nicht verwirrt.',
    subline:
      'Interfaces, die auf echten Nutzerdaten basieren. Nicht auf Annahmen. Wir designen User Journeys die konvertieren — und testen sie mit echten Nutzern, bevor eine Zeile Code geschrieben wird.',
    ctaPrimary: 'Projekt anfragen',
    ctaSecondary: 'Unser Designprozess ↓',
    stats: [
      {
        value: '35',
        prefix: '-',
        suffix: '%',
        label: 'Bounce Rate Reduktion',
      },
      { value: '28', prefix: '+', suffix: '%', label: 'Task Completion Rate' },
      {
        value: '5',
        suffix: ' Tage',
        label: 'bis zum ersten Prototyp',
      },
      { value: '100', suffix: '%', label: 'Figma-basiert' },
    ],
  },

  problems: {
    sectionTitle: 'Warum viele digitale Produkte unter ihrem Potenzial bleiben',
    cards: [
      {
        title: 'Design nach Bauchgefühl',
        text: 'Ohne User Research und Daten-Analyse basieren Designentscheidungen auf Annahmen. Erfahrungsgemäß scheitern viele digitale Produkte nicht an der Technologie, sondern an mangelndem Verständnis der Nutzerbedürfnisse.',
      },
      {
        title: 'Inkonsistente User Experience',
        text: 'Ohne Design-System entstehen inkonsistente Interfaces: unterschiedliche Buttons, Abstände und Farben auf jeder Seite. Das verwirrt Nutzer und erhöht die Absprungrate.',
      },
      {
        title: 'Keine messbaren UX-Ziele',
        text: 'Viele Unternehmen messen Website-Traffic, aber nicht die User Experience. Ohne Metriken wie Task Completion Rate, Time-on-Task oder Conversion-Pfad-Analyse bleibt UX-Optimierung ein Ratespiel.',
      },
    ],
    resolution: {
      title: 'Unser Ansatz: Research-Driven Design',
      paragraphs: [
        'Wir starten jedes UX-Projekt mit <strong>User Research</strong>: Wer sind deine Nutzer? Was sind ihre Ziele? Wo scheitern sie aktuell? Die Antworten bestimmen das Design — nicht Trends oder persönliche Vorlieben.',
        'Wireframes und Prototypen entstehen in <strong>Figma</strong> — testbar, iterierbar und direkt in die Entwicklung überführbar. Kein Pixel wird ohne Begründung gesetzt.',
        'Jedes Design wird mit <strong>messbaren UX-Metriken</strong> verknüpft: Bounce Rate, Conversion Rate, Task Completion. Wir designen nicht hübsch — wir designen <strong>effektiv</strong>.',
      ],
    },
  },

  strategist: {
    name: 'Mike',
    role: 'Co-Founder · Tech & Design',
    bio: 'Designer und Entwickler mit Fokus auf datengetriebenes UI/UX. Hat Interfaces für E-Commerce, SaaS und B2B-Plattformen gestaltet — immer mit messbaren Ergebnissen. Bei Timito Media verantwortet er <strong>Design und Prototyping persönlich</strong> — von der User Research bis zum Handoff an die Entwicklung.',
    image: '/assets/team/mike.webp',
    skills: [
      'User Research & Journey Mapping',
      'Wireframes & Prototyping (Figma)',
      'Design-Systeme & Component Libraries',
      'Datengestützte Conversion-Optimierung',
    ],
  },

  process: {
    sectionTitle: 'Von der Analyse zum getesteten Interface',
    steps: [
      {
        title: 'User Research',
        text: 'Analyse bestehender Nutzerdaten, Heatmaps und Session-Recordings. Wo brechen Nutzer ab? Was funktioniert? Wo liegt das größte Optimierungspotenzial?',
        deliverable: 'Research-Report',
      },
      {
        title: 'User Journeys & Wireframes',
        text: 'Wir skizzieren die optimalen User Journeys und erstellen Low-Fidelity Wireframes. Conversion-Pfade werden definiert, bevor visuelles Design beginnt.',
        deliverable: 'Journey Maps + Wireframes',
      },
      {
        title: 'Visual Design & Prototyp',
        text: 'High-Fidelity Design in Figma mit interaktivem Prototyp. Design-System mit wiederverwendbaren Komponenten. Responsive für alle Breakpoints.',
        deliverable: 'Figma-Design + Prototyp',
      },
      {
        title: 'Usability Testing',
        text: 'Der Prototyp wird mit echten Nutzern getestet. Wir identifizieren Friction Points und iterieren das Design basierend auf den Ergebnissen.',
        deliverable: 'Test-Report + Iteriertes Design',
      },
      {
        title: 'Handoff & Begleitung',
        text: 'Design-Handoff an die Entwicklung mit vollständiger Dokumentation, Spacing-Guides und Component Library. Wir begleiten die Umsetzung und sichern die Design-Qualität.',
        deliverable: 'Developer Handoff + Design System',
      },
    ],
  },

  pricing: {
    sectionTitle: 'Wie eine Zusammenarbeit aussieht',
    note: 'UX-Projekte variieren stark im Umfang. Wir erstellen nach dem Erstgespräch ein individuelles Angebot basierend auf Komplexität und Zielen.',
    cards: [
      {
        label: 'Einmalig',
        title: 'UX-Audit',
        description:
          'Für Unternehmen die wissen wollen, wo ihre User Experience Nutzer verliert — und was die größten Quick-Wins wären.',
        features: [
          'Heuristische Analyse der bestehenden UX',
          'Heatmap- & Session-Recording Auswertung',
          'Conversion-Pfad-Analyse',
          'Priorisierte Empfehlungen',
          '45-minütiges Briefing',
        ],
        ctaText: 'UX-Audit anfragen',
      },
      {
        label: 'Projekt',
        featured: true,
        title: 'UX/UI Redesign',
        description:
          'Komplettes Redesign mit User Research, Wireframes, Visual Design und Usability Testing.',
        features: [
          'User Research & Journey Mapping',
          'Wireframes & Informationsarchitektur',
          'High-Fidelity Design in Figma',
          'Interaktiver Prototyp',
          'Usability Testing mit echten Nutzern',
          'Design-System & Developer Handoff',
        ],
        ctaText: 'Redesign anfragen',
      },
    ],
  },

  faqs: [
    {
      question: 'Was ist der Unterschied zwischen UI und UX Design?',
      answer:
        'UX (User Experience) Design definiert wie ein Produkt funktioniert — Nutzerflows, Informationsarchitektur, Interaktionsmuster. UI (User Interface) Design definiert wie es aussieht — Farben, Typografie, Abstände, visuelle Hierarchie. Beides gehört zusammen.',
    },
    {
      question: 'Brauche ich UX Design oder reicht Webdesign?',
      answer:
        'Webdesign fokussiert sich auf das Erstellen einer Website. UX Design geht tiefer: Nutzerforschung, Journey Mapping, Prototyping und Testing. Wenn du eine neue Website brauchst, bekommst du UX-Thinking inklusive. Wenn du ein bestehendes Produkt optimieren willst, ist ein dediziertes UX-Projekt der richtige Weg.',
    },
    {
      question: 'Wie lange dauert ein UX-Projekt?',
      answer:
        'Ein UX-Audit dauert 1–2 Wochen. Ein komplettes Redesign mit Research, Design und Testing dauert 4–10 Wochen, je nach Komplexität des Produkts.',
    },
    {
      question: 'Arbeitet ihr mit Figma?',
      answer:
        'Ja, ausschließlich. Alle Wireframes, Designs und Prototypen entstehen in Figma. Du bekommst Zugang zum Figma-Projekt und kannst den Fortschritt jederzeit einsehen und kommentieren.',
    },
    {
      question: 'Testet ihr die Designs mit echten Nutzern?',
      answer:
        'Ja, bei jedem UX/UI Redesign-Projekt ist Usability Testing inklusive. Wir testen den Figma-Prototyp mit echten Nutzern, identifizieren Friction Points und iterieren das Design vor der Entwicklung.',
    },
    {
      question: 'Übernehmt ihr auch die Entwicklung?',
      answer:
        'Ja — wir können das Design auch in Code umsetzen (Astro, React, WordPress). Alternativ liefern wir ein sauberes Developer Handoff mit Design-System, Spacing-Guides und Component Library für dein Entwicklungsteam.',
    },
  ],

  relatedServices: [
    { slug: 'webdesign', name: 'Webdesign' },
    { slug: 'strategie-beratung', name: 'Strategie & Beratung' },
    { slug: 'google-ads', name: 'Google Ads' },
  ],
};

// ─────────────────────────────────────────────────────
// STRATEGIE & BERATUNG
// ─────────────────────────────────────────────────────
export const strategieBeratungPage: ServicePageData = {
  slug: 'strategie-beratung',
  title:
    'Marketing Strategie & Beratung | Full-Funnel DACH · Timito Media',
  description:
    'Marketing-Strategie für DACH-Unternehmen. Full-Funnel Planung, Channel-Mix Optimierung & datengetriebene Budget-Allokation. Senior-Beratung ohne Agentur-Overhead. → Strategiegespräch anfragen.',
  color: 'purple',
  colorRGB: '168, 85, 247',
  sectionLabel: '// STRATEGIE & BERATUNG',

  hero: {
    headline:
      'Marketing-Strategie die auf Daten basiert\u00a0— nicht auf Bauchgefühl.',
    subline:
      'Klarheit statt Komplexität. Wir entwickeln eine Full-Funnel Strategie, die jeden Marketing-Euro einem messbaren Ziel zuordnet — und zeigen dir genau, welcher Kanal wie viel beiträgt.',
    ctaPrimary: 'Strategiegespräch anfragen',
    ctaSecondary: 'Unser Ansatz ↓',
    stats: [
      {
        value: '40',
        prefix: '+',
        suffix: '%',
        label: 'ROAS durch Channel-Mix',
      },
      { value: '3', suffix: 'x', label: 'ROI auf Beratungsinvest' },
      {
        value: '90',
        suffix: ' Min',
        label: 'Deep-Dive Erstgespräch',
      },
      { value: '1', suffix: ' Plan', label: 'statt 5 Agenturen' },
    ],
  },

  problems: {
    sectionTitle: 'Warum viele Marketing-Strategien scheitern',
    cards: [
      {
        title: 'Kein Überblick über den Channel-Mix',
        text: 'Viele Unternehmen investieren in mehrere Kanäle, ohne zu wissen welcher wie viel zum Umsatz beiträgt. Ohne Cross-Channel Attribution fließt Budget in die falschen Kanäle.',
      },
      {
        title: 'Taktik statt Strategie',
        text: 'Google Ads hier, Social Ads dort, SEO nebenbei — ohne übergreifende Strategie arbeiten Kanäle gegeneinander statt miteinander. Erfahrungsgemäß leidet ohne klaren Full-Funnel-Plan die Gesamtperformance erheblich.',
      },
      {
        title: 'Zu viele Agenturen, kein roter Faden',
        text: 'Eine Agentur für Ads, eine für SEO, eine für Webdesign — und keine davon kennt die Gesamtstrategie. Das Ergebnis: Silos, Doppelarbeit und widersprüchliche Empfehlungen.',
      },
    ],
    resolution: {
      title: 'Unser Ansatz: Eine Strategie, ein Team',
      paragraphs: [
        'Wir entwickeln eine <strong>ganzheitliche Marketing-Strategie</strong>, die alle Kanäle verbindet — von Awareness (Social Ads) über Consideration (Content, SEO) bis Conversion (Google Ads, Retargeting).',
        'Jeder Kanal bekommt ein <strong>klares Budget, klare KPIs und eine klare Rolle</strong> im Funnel. Keine Bauchgefühl-Entscheidungen, keine Budget-Verteilung nach Gewohnheit.',
        'Du bekommst einen <strong>Quartalsplan mit monatlichen Meilensteinen</strong>, einen Live-Dashboard-Zugang und regelmäßige Strategy-Calls — alles aus einer Hand, ohne Agentur-Silos.',
      ],
    },
  },

  strategist: {
    name: 'Christina',
    role: 'Co-Founderin · Head of Performance Marketing',
    bio: '15 Jahre strategische Marketing-Erfahrung. Hat Channel-Mix-Strategien für Unternehmen mit jährlichen Marketingbudgets im siebenstelligen Bereich entwickelt — über Google Ads, Social Ads, SEO und Offline-Kanäle hinweg. Bei Timito Media berät sie dich <strong>persönlich</strong> — mit dem Blick fürs große Ganze und dem Fokus auf messbare Ergebnisse.',
    image: '/assets/team/christina.webp',
    skills: [
      'Full-Funnel Marketing-Strategie',
      'Channel-Mix & Budget-Allokation',
      'Cross-Channel Attribution',
      'Quartals-Planung & KPI-Frameworks',
    ],
  },

  process: {
    sectionTitle: 'Von der Analyse zur klaren Strategie',
    steps: [
      {
        title: 'Status-Quo Analyse',
        text: 'Wir analysieren deine aktuellen Marketing-Kanäle, Budget-Verteilung, KPIs und Tracking-Setup. Was funktioniert? Was nicht? Wo liegt ungenutztes Potenzial?',
        deliverable: 'Analyse-Report',
      },
      {
        title: 'Zieldefinition & KPI-Framework',
        text: 'Gemeinsam definieren wir Business-Ziele und leiten daraus Marketing-KPIs ab. Umsatzziel → ROAS-Ziel → CPA-Ziel → Budget pro Kanal.',
        deliverable: 'KPI-Framework',
      },
      {
        title: 'Channel-Strategie & Budget-Allokation',
        text: 'Welcher Kanal übernimmt welche Rolle im Funnel? Wie wird das Budget verteilt? Wir erstellen eine datenbasierte Empfehlung mit klaren Prioritäten.',
        deliverable: 'Channel-Strategy-Deck',
      },
      {
        title: 'Quartalsplan & Roadmap',
        text: 'Detaillierter Quartalsplan mit monatlichen Meilensteinen, Kampagnen-Kalender und Budget-Forecasts. Klare Verantwortlichkeiten für jede Maßnahme.',
        deliverable: 'Quartalsplan',
      },
      {
        title: 'Begleitung & Optimierung',
        text: 'Monatliche Strategy-Calls, Performance-Reviews und Anpassungen. Wir begleiten die Umsetzung und stellen sicher, dass der Plan funktioniert.',
        deliverable: 'Monatliche Strategy-Reviews',
      },
    ],
  },

  pricing: {
    sectionTitle: 'Wie eine Zusammenarbeit aussieht',
    note: 'Strategieberatung ist keine Einmal-Sache. Die besten Ergebnisse erzielst du mit laufender Begleitung — aber auch ein einmaliger Strategy Sprint bringt Klarheit.',
    cards: [
      {
        label: 'Einmalig',
        title: 'Strategy Sprint',
        description:
          'Für Unternehmen die einen klaren Plan brauchen — ohne langfristige Bindung.',
        features: [
          'Status-Quo Analyse aller Kanäle',
          'KPI-Framework & Zieldefinition',
          'Channel-Mix Empfehlung',
          'Quartalsplan mit Budget-Allokation',
          '90-minütiger Deep-Dive mit Christina',
        ],
        ctaText: 'Strategy Sprint anfragen',
      },
      {
        label: 'Laufend',
        featured: true,
        title: 'Strategic Advisory',
        description:
          'Laufende strategische Begleitung mit monatlichen Reviews, Anpassungen und direktem Draht.',
        features: [
          'Monatliche Strategy-Calls mit Christina',
          'Quartalsplanung & Budget-Reallokation',
          'Cross-Channel Performance Reviews',
          'Ad-hoc Beratung bei strategischen Fragen',
          'Zugang zum Live-Dashboard',
          'Direkter Kanal — Slack oder Teams',
        ],
        ctaText: 'Advisory anfragen',
      },
    ],
  },

  faqs: [
    {
      question: 'Brauche ich eine Strategie, oder kann ich direkt mit Ads starten?',
      answer:
        'Du kannst direkt starten — aber ohne Strategie fehlt der rote Faden. Eine Strategie sorgt dafür, dass dein Budget dort landet, wo es den größten Impact hat. Gerade bei begrenztem Budget ist das entscheidend.',
    },
    {
      question: 'Was kostet eine Marketing-Strategie?',
      answer:
        'Die Investition hängt vom Umfang ab. Ein Strategy Sprint ist ein einmaliges Projekt mit klarem Ergebnis. Strategic Advisory ist eine laufende Begleitung. Wir besprechen die Konditionen transparent im Erstgespräch.',
    },
    {
      question: 'Setzt ihr die Strategie auch um?',
      answer:
        'Ja — wir können Kampagnen (Google Ads, Social Ads), Tracking und Webdesign auch operativ übernehmen. Der Vorteil: Strategie und Umsetzung kommen aus einer Hand, ohne Informationsverluste.',
    },
    {
      question: 'Wie oft finden Strategy-Calls statt?',
      answer:
        'Bei laufender Beratung: monatlich, mit Quartals-Reviews alle 3 Monate. Bei akutem Bedarf sind Ad-hoc-Calls jederzeit möglich. Alles wird transparent dokumentiert.',
    },
    {
      question: 'Für welche Unternehmensgröße ist das gedacht?',
      answer:
        'Unsere Strategieberatung richtet sich an KMUs und mittelständische Unternehmen im DACH-Raum mit jährlichen Marketing-Budgets ab ca. 50.000\u00a0€. Für kleinere Budgets empfehlen wir unseren Strategy Sprint als Einstieg.',
    },
    {
      question: 'Was ist der Unterschied zu einer klassischen Unternehmensberatung?',
      answer:
        'Wir sind keine Berater die PowerPoints liefern und gehen. Wir entwickeln die Strategie und können sie auch umsetzen — Google Ads, Social Ads, Tracking, Webdesign. Ein Team, ein Plan, ein Dashboard.',
    },
  ],

  relatedServices: [
    { slug: 'google-ads', name: 'Google Ads' },
    { slug: 'social-ads', name: 'Social Ads' },
    { slug: 'server-side-tracking', name: 'Server-Side Tracking' },
  ],
};

// ─────────────────────────────────────────────────────
// SHOP DESIGN
// ─────────────────────────────────────────────────────
export const shopDesignPage: ServicePageData = {
  slug: 'shop-design',
  title: 'Shop Design Agentur | Shopify · Shopware · WooCommerce · Timito Media',
  description:
    'Wir gestalten und entwickeln Online-Shops die verkaufen. Shopify, Shopware & WooCommerce — Conversion-optimiert, schnell und tracking-ready.',
  color: 'orange',
  colorRGB: '255, 160, 50',
  sectionLabel: '// SHOP DESIGN',

  hero: {
    headline: 'Online-Shops die verkaufen — nicht nur gut aussehen.',
    subline:
      'Shopify, Shopware oder WooCommerce — wir bauen deinen Shop Conversion-optimiert, blitzschnell und mit sauberem Tracking ab Tag 1. Damit jeder Euro Adspend messbar wird.',
    ctaPrimary: 'Shop-Projekt anfragen',
    ctaSecondary: 'Unsere Arbeitsweise ↓',
    stats: [
      { value: '42', prefix: '+', suffix: '%', label: 'Ø Umsatzsteigerung nach Relaunch' },
      { value: '1.2', suffix: 's', label: 'Ø Ladezeit (LCP)' },
      { value: '98', suffix: '%', label: 'Lighthouse Performance' },
      { value: '100', suffix: '%', label: 'Tracking-ready ab Launch' },
    ],
  },

  problems: {
    sectionTitle: 'Warum die meisten Online-Shops unter ihrem Potenzial verkaufen',
    cards: [
      {
        title: 'Langsame Ladezeiten, hohe Absprungrate',
        text: 'Aufgeblähte Themes mit dutzenden Apps und Plugins. Jede Sekunde extra kostet dich 7\u00a0% Conversion Rate — und dein Adspend verpufft.',
      },
      {
        title: 'Checkout & UX kosten Umsatz',
        text: 'Komplizierte Navigation, unklare Produktseiten und ein Checkout mit zu vielen Schritten. Kunden brechen ab, bevor sie kaufen.',
      },
      {
        title: 'Tracking ist Blindflug',
        text: 'Kein serverseitiges Tracking, fehlerhafte Conversion-Werte, keine Enhanced Conversions. Du optimierst Kampagnen auf Basis falscher Daten.',
      },
    ],
    resolution: {
      title: 'Unser Ansatz: Performance-First E-Commerce',
      paragraphs: [
        'Wir entwickeln keine Template-Shops. Jeder Shop wird <strong>auf Conversion optimiert</strong> — von der Produktseite bis zum Thank-You-Pixel.',
        'Server-Side Tracking, Enhanced Conversions und saubere Datenströme sind <strong>kein Add-on, sondern Teil des Fundaments</strong>.',
        'Das Ergebnis: ein schneller, schöner Shop mit messbarem ROI ab dem ersten Tag.',
      ],
    },
  },

  strategist: {
    name: 'Mike',
    role: 'Co-Founder · Tech & E-Commerce',
    bio: 'Mike hat über 50 Tracking-Setups und zahlreiche E-Commerce-Projekte auf Shopify, Shopware und WooCommerce umgesetzt. Bei Timito verantwortet er <strong>Shop-Entwicklung und Tracking-Integration persönlich</strong> — kein Junior, kein Handover.',
    image: '/assets/team/mike.webp',
    skills: [
      'Shopify (Liquid, Hydrogen, OS 2.0)',
      'Shopware 6 & Plugins',
      'WooCommerce & WordPress',
      'Server-Side Tracking & GA4 E-Commerce',
      'Checkout-Optimierung & A/B-Testing',
      'Performance & Core Web Vitals',
    ],
  },

  process: {
    sectionTitle: 'Vom Konzept zum verkaufenden Shop',
    steps: [
      {
        title: 'Audit & Strategie',
        text: 'Analyse deines bestehenden Shops (oder Anforderungen für einen Neustart). Plattformwahl, Conversion-Ziele, Tracking-Anforderungen und Wettbewerbsanalyse.',
        deliverable: 'Shop-Strategie & Plattform-Empfehlung',
      },
      {
        title: 'UX & Design',
        text: 'Mobile-First Wireframes und visuelles Design für Startseite, Produktseiten, Kollektion und Checkout. Jede Seite auf Conversion optimiert.',
        deliverable: 'Figma-Design aller Shop-Templates',
      },
      {
        title: 'Entwicklung & Integration',
        text: 'Theme-Entwicklung oder Customization auf der gewählten Plattform. Payment, Versand, ERP und Tracking-Integration — alles aus einer Hand.',
        deliverable: 'Staging-Shop',
      },
      {
        title: 'Tracking & Testing',
        text: 'Server-Side Tracking, Enhanced Conversions, GA4 E-Commerce Events. Dazu: Cross-Browser-Testing, Performance-Optimierung und QA.',
        deliverable: 'QA-Report & Tracking-Dokumentation',
      },
      {
        title: 'Launch & Optimierung',
        text: 'Go-Live mit Monitoring, Speed-Checks und erstem Performance-Review. Danach: laufende CRO und A/B-Testing für kontinuierliches Wachstum.',
        deliverable: 'Live-Shop + CRO-Roadmap',
      },
    ],
  },

  pricing: {
    sectionTitle: 'Wie eine Zusammenarbeit aussieht',
    note: 'Jeder Shop ist anders. Ob Relaunch, Neubau oder Optimierung — wir schneiden das Paket auf dein Projekt zu.',
    cards: [
      {
        label: 'Einmalig',
        title: 'Shop-Optimierung',
        description:
          'Für bestehende Shops die schneller, schöner und besser konvertieren sollen.',
        features: [
          'Performance & Speed-Optimierung',
          'Checkout-Optimierung',
          'Tracking-Setup (Server-Side)',
          'Mobile UX Verbesserungen',
          'Conversion-Audit mit Empfehlungen',
        ],
        ctaText: 'Optimierung anfragen',
      },
      {
        label: 'Projekt',
        featured: true,
        title: 'Shop Neubau / Relaunch',
        description:
          'Kompletter Shop von Grund auf — oder Migration auf eine neue Plattform.',
        features: [
          'Plattformwahl & Migration',
          'Custom Theme-Entwicklung',
          'Produktseiten & Checkout-Optimierung',
          'Payment, Versand & ERP-Anbindung',
          'Server-Side Tracking ab Launch',
          'CRO-Roadmap & A/B-Testing Plan',
        ],
        ctaText: 'Shop-Projekt anfragen',
      },
      {
        label: 'Laufend',
        title: 'Shop-Betreuung',
        description:
          'Laufende Optimierung, CRO und technischer Support für deinen Shop.',
        features: [
          'Monatliche Performance-Reviews',
          'A/B-Testing & Conversion-Optimierung',
          'Theme-Updates & Security-Patches',
          'Neue Features & Integrationen',
          'Direkter Draht via Slack',
        ],
        ctaText: 'Betreuung anfragen',
      },
    ],
  },

  faqs: [
    {
      question: 'Shopify, Shopware oder WooCommerce — welche Plattform ist die richtige?',
      answer:
        'Shopify ist ideal für schnellen Start, internationale Skalierung und geringen Wartungsaufwand. Shopware 6 eignet sich für komplexe B2B/B2C-Szenarien im DACH-Raum. WooCommerce ist die beste Wahl wenn du bereits auf WordPress setzt. Wir beraten plattformneutral — dein Use Case entscheidet.',
    },
    {
      question: 'Könnt ihr meinen bestehenden Shop migrieren?',
      answer:
        'Ja. Wir migrieren Shops zwischen Plattformen inkl. Produkt-, Kunden- und Bestelldaten. SEO-Redirects, URL-Struktur und Tracking werden sauber übernommen — kein Traffic-Verlust.',
    },
    {
      question: 'Wie lange dauert ein Shop-Projekt?',
      answer:
        'Eine Shop-Optimierung dauert 2–4 Wochen. Ein Neubau oder Relaunch typischerweise 6–12 Wochen, abhängig von Umfang, Integrationen und Produktkatalog.',
    },
    {
      question: 'Integriert ihr auch ERP, Warenwirtschaft und Payment?',
      answer:
        'Ja — wir integrieren gängige Systeme wie Klarna, Stripe, PayPal, DHL, DPD, sowie ERP-Systeme wie JTL, Xentral oder Billbee. Alles wird im Staging getestet bevor es live geht.',
    },
    {
      question: 'Was kostet ein Online-Shop?',
      answer:
        'Die Investition hängt von Plattform, Umfang und Integrationen ab. Eine Shop-Optimierung startet bei wenigen Tausend Euro, ein Neubau ist ein individuelles Projekt. Wir besprechen Budget und Umfang transparent im Erstgespräch.',
    },
    {
      question: 'Ist Tracking wirklich ab Launch fertig?',
      answer:
        'Ja. Server-Side Tracking, Enhanced Conversions und GA4 E-Commerce Events sind bei uns Teil der Entwicklung — nicht ein Nachgedanke. Dein Shop ist ab Tag 1 kampagnenfähig.',
    },
  ],

  relatedServices: [
    { slug: 'webdesign', name: 'Webdesign & Entwicklung' },
    { slug: 'server-side-tracking', name: 'Server-Side Tracking' },
    { slug: 'google-ads', name: 'Google Ads' },
  ],
};

// ─────────────────────────────────────────────────────
// COMBINED EXPORT
// ─────────────────────────────────────────────────────
export const servicePages: ServicePageData[] = [
  googleAdsPage,
  socialAdsPage,
  serverSideTrackingPage,
  webdesignPage,
  uiUxDesignPage,
  strategieBeratungPage,
  shopDesignPage,
];

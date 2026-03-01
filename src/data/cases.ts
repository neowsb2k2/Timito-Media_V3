export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseCompare {
  label: string;
  value: string;
}

export interface CaseStudy {
  num: string;
  tags: string[];
  timeline: string;
  title: string;
  heroStat: { value: string; label: string };
  lossEstimate: string | null;
  problem: string;
  quote: string;
  solution: string;
  metrics: CaseMetric[];
  compareBefore: CaseCompare[];
  compareAfter: CaseCompare[];
  lesson: string;
  color: 'green' | 'cyan' | 'orange';
}

export const cases: CaseStudy[] = [
  {
    num: '01',
    tags: ['E-Commerce · WooCommerce', 'Social Ads · Tracking · Server-Side'],
    timeline: 'Ergebnis nach 8 Wochen',
    title: 'Tracking-Sanierung rettet Social Ads Performance',
    heroStat: { value: '+91%', label: 'ROAS' },
    lossEstimate: 'Geschätzter monatlicher Streuverlust: ~€6.000–9.000',
    problem: 'Ein etabliertes Kreativstudio im E-Commerce betrieb seinen WooCommerce-Shop mit über 10 parallelen Tracking-Plugins. 31% der Conversions wurden doppelt gezählt, Product-IDs fehlerhaft übergeben — der Algorithmus trainierte auf falschen Signalen. Social Ads liefen seit Monaten ins Leere, ohne dass es jemand bemerkte.',
    quote: 'Wir haben das Budget erhöht, weil die Zahlen gut aussahen. In Wirklichkeit waren die Zahlen einfach falsch.',
    solution: 'Komplettes Tracking-Relaunch über Google Tag Manager & Stape.io. Server-side Setup auf allen Kanälen, saubere Deduplizierung, korrekte E-Commerce-Datenschicht. Abschluss mit Consent Mode 2 für DSGVO-Konformität.',
    metrics: [
      { value: '+91%', label: 'ROAS' },
      { value: '-59%', label: 'Cost per Acquisition' },
      { value: '+100%', label: 'Datenqualität' },
    ],
    compareBefore: [
      { label: 'ROAS', value: '1.8' },
      { label: 'CPA', value: '€54' },
    ],
    compareAfter: [
      { label: 'ROAS', value: '3.4' },
      { label: 'CPA', value: '€22' },
    ],
    lesson: 'Zehn Plugins ersetzen keine Strategie. Saubere Datenbasis ist die Voraussetzung — kein Nice-to-have.',
    color: 'green',
  },
  {
    num: '02',
    tags: ['Sports E-Commerce', 'Google Ads · Meta Ads · International'],
    timeline: 'Laufende Optimierung · 3 Märkte',
    title: '27% weniger Conversion-Kosten ohne Tracking-Eingriff',
    heroStat: { value: '-28%', label: 'Cost per Conversion' },
    lossEstimate: null,
    problem: "Ein internationaler Hersteller von Sportausrüstung wurde zuvor von einer renommierten Agentur betreut. Das Tracking lief sauber — hier gilt: don't touch a running system. Der Hebel lag in der Kampagnenstruktur: zu breites Targeting, fehlende Funnel-Logik, Creatives ohne Bezug zur Buyer Persona. Märkte: Europa, Nord- und Südamerika.",
    quote: 'Die Agentur davor war gut. Aber irgendwann hört gut einfach nicht mehr auf, besser zu werden.',
    solution: 'Keine Tracking-Eingriffe. Christinas Analyse identifizierte Ineffizienzen in Gebotsstrategien, Zielgruppen-Segmentierung und Creative-Rotation. Komplette Neustrukturierung der Kampagnen mit Funnel-Denken und marktspezifischen Creatives.',
    metrics: [
      { value: '-28%', label: 'Cost per Conversion' },
      { value: '+36%', label: 'CTR' },
      { value: '3x', label: 'Märkte skaliert' },
    ],
    compareBefore: [
      { label: 'CPL', value: '€68' },
      { label: 'CTR', value: '1.4%' },
    ],
    compareAfter: [
      { label: 'CPL', value: '€49' },
      { label: 'CTR', value: '1.9%' },
    ],
    lesson: 'Wenn das Tracking stimmt, entscheidet die Strategie. Erfahrung erkennt Potenzial, das andere übersehen.',
    color: 'cyan',
  },
  {
    num: '03',
    tags: ['Local Business', 'Google Ads · Web Performance'],
    timeline: 'Ergebnis nach 10 Wochen',
    title: 'Selbst gemacht, teuer bezahlt — und der Shop arbeitete dagegen',
    heroStat: { value: '+350%', label: 'Conversion Rate' },
    lossEstimate: 'Geschätzter monatlicher Verlust durch unwirtschaftliche Kampagnen & Shop: ~€3.500',
    problem: 'Ein kleines Unternehmen verwaltete seine Google Ads Kampagnen eigenständig — ohne Struktur, ohne Conversion-Tracking, ohne Strategie. Broad-Match-Keywords fraßen das Budget, Anzeigen liefen rund um die Uhr ohne Dayparting, negative Keywords fehlten völlig. Doch das eigentliche Problem war der Shop selbst: langsame Ladezeiten, unklare Nutzerführung, kein erkennbarer Call-to-Action. Der Traffic kam — und verschwand sofort wieder.',
    quote: 'Ich hab gedacht, mehr Budget löst das Problem. Dabei war das Budget das kleinste Problem.',
    solution: 'Vollständiger Kampagnen-Relaunch mit sauberer Keyword-Struktur, Dayparting und Zielgruppen-Segmentierung. Parallel dazu technische und gestalterische Optimierung des Shops: Ladezeit reduziert, Conversion-Strecke vereinfacht, CTAs klar positioniert. Tracking von Grund auf neu aufgesetzt — erstmals vollständige Datenbasis für Entscheidungen.',
    metrics: [
      { value: '-61%', label: 'Cost per Click' },
      { value: '+350%', label: 'Conversion Rate' },
      { value: '-74%', label: 'Bounce Rate' },
    ],
    compareBefore: [
      { label: 'Conv. Rate', value: '0.4%' },
      { label: 'CPC', value: '€3.20' },
    ],
    compareAfter: [
      { label: 'Conv. Rate', value: '1.8%' },
      { label: 'CPC', value: '€1.25' },
    ],
    lesson: 'Wer Ads schaltet ohne Strategie und mit einem schwachen Shop, kauft sich Besucher, die nicht bleiben. Beides muss stimmen — gleichzeitig.',
    color: 'orange',
  },
];

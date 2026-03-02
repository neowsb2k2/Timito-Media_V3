export interface FAQCategory {
  label: string;
  sectionLabel: string;
  items: { question: string; answer: string }[];
}

export const faqCategories: FAQCategory[] = [
  {
    label: 'Zusammenarbeit & Ablauf',
    sectionLabel: '// Zusammenarbeit',
    items: [
      {
        question: 'Wie läuft eine Zusammenarbeit mit Timito Media ab?',
        answer:
          'Alles startet mit einem kostenlosen Erstgespräch — kein Sales-Pitch, sondern eine ehrliche Analyse deines Setups. Danach erstellen wir einen konkreten Fahrplan mit Prioritäten, Zeitrahmen und klaren Verantwortlichkeiten. Die Umsetzung läuft in agilen Sprints mit regelmäßigen Updates.',
      },
      {
        question: 'Arbeite ich direkt mit den Gründern oder mit einem Account Manager?',
        answer:
          'Direkt mit Christina und Mike — ohne Umwege über Juniors oder Account Manager. Das bedeutet: 15+ Jahre Erfahrung auf jedem Account, schnelle Entscheidungen und keine Informationsverluste zwischen den Ebenen.',
      },
      {
        question: 'Wie schnell sehe ich erste Ergebnisse?',
        answer:
          'Tracking-Verbesserungen wirken sofort — du siehst direkt mehr Conversions in deinen Reports. Performance-Steigerungen in Kampagnen zeigen sich typischerweise nach 4–8 Wochen. Nachhaltige Skalierung planen wir über 3–6 Monate.',
      },
      {
        question: 'Betreut ihr auch Kunden außerhalb Österreichs?',
        answer:
          'Ja, wir arbeiten mit Kunden im gesamten DACH-Raum — Deutschland, Österreich und Schweiz. Kommunikation läuft remote über Video-Calls und Slack. Für Strategie-Workshops kommen wir bei Bedarf auch persönlich vorbei.',
      },
      {
        question: 'Kann ich klein starten und später skalieren?',
        answer:
          'Absolut. Viele unserer besten Kundenbeziehungen haben mit einem Tracking-Audit oder einem einzelnen Kanal begonnen. Wir empfehlen sogar, fokussiert zu starten und dann datenbasiert zu skalieren — statt alles auf einmal zu machen.',
      },
    ],
  },
  {
    label: 'Kosten & Pakete',
    sectionLabel: '// Kosten',
    items: [
      {
        question: 'Was kostet eine Zusammenarbeit mit einer Google Ads Agentur in Österreich?',
        answer:
          'Unsere Zusammenarbeit startet ab ca. €1.500/Monat für spezialisierte Einzelleistungen wie Tracking-Setup. Vollständige Performance-Pakete beginnen bei ~€3.000/Monat. Entscheidend ist nicht der Preis, sondern der ROI: Eine günstige Agentur ohne Tracking-Kompetenz kostet dich bei €5.000 Adspend monatlich ~€1.750 durch Fehlinvestitionen.',
      },
      {
        question: 'Gibt es eine Mindestlaufzeit oder langfristige Verträge?',
        answer:
          'Nein. Wir arbeiten mit monatlicher Kündigungsfrist nach einer initialen Setup-Phase (typisch 1–3 Monate). Wir binden Kunden durch Ergebnisse, nicht durch Verträge. Wenn wir keinen Mehrwert liefern, solltest du jederzeit wechseln können.',
      },
      {
        question: 'Was ist im monatlichen Paket enthalten?',
        answer:
          'Jedes Paket ist individuell, aber typisch enthalten: Kampagnen-Management, laufende Optimierung, Tracking-Monitoring, wöchentliche Performance-Reports, monatliche Strategy Calls und proaktive Empfehlungen. Keine versteckten Kosten für Tools oder Extras.',
      },
      {
        question: 'Brauche ich ein Mindest-Werbebudget?',
        answer:
          'Wir empfehlen ein monatliches Werbebudget ab €3.000 für Google Ads und ab €2.000 für Social Ads, damit genügend Daten für Optimierung entstehen. Darunter fehlt häufig die statistische Basis für datengetriebene Entscheidungen.',
      },
      {
        question: 'Wie unterscheidet sich die Investition von günstigen Agenturen?',
        answer:
          'Günstige Agenturen sparen an Erfahrung und Tracking. Das Ergebnis: dein Werbebudget läuft, aber die Datenqualität stimmt nicht — du optimierst auf Basis falscher Zahlen. Bei uns zahlst du für Senior-Expertise und akkurate Daten. Der Unterschied zeigt sich im ROAS.',
      },
    ],
  },
  {
    label: 'Tracking & Daten',
    sectionLabel: '// Tracking',
    items: [
      {
        question: 'Was ist Server-Side Tracking und warum brauche ich das?',
        answer:
          'Beim Server-Side Tracking werden Conversion-Daten direkt über deinen Server an Google, Meta & Co. gesendet — nicht über den Browser. Dadurch umgehst du AdBlocker und Browser-Einschränkungen, die bis zu 40% deiner Conversions verschlucken. Mehr Daten = bessere Optimierung = höherer ROAS.',
      },
      {
        question: 'Ist Server-Side Tracking DSGVO-konform?',
        answer:
          'Ja — richtig implementiert sogar datenschutzfreundlicher als Client-Side Tracking. Du behältst die volle Kontrolle über die Datenflüsse, kannst PII vor der Weitergabe filtern und Consent Mode v2 sauber integrieren. Wir setzen jedes Setup DSGVO- und ePrivacy-konform um.',
      },
      {
        question: 'Gehören alle Accounts und Daten mir?',
        answer:
          'Ja, zu 100%. Alle Google Ads Accounts, Analytics-Properties, Tag Manager Container, Meta Business Manager und Dashboards gehören dir. Wir arbeiten in deinen Accounts. Wenn wir die Zusammenarbeit beenden, gehst du mit allem — ohne Übergabegebühr.',
      },
      {
        question: 'Wie funktioniert Consent Mode v2 mit eurem Tracking?',
        answer:
          'Consent Mode v2 ist seit März 2024 für alle Google-Dienste Pflicht. Wir integrieren es mit deiner CMP (Cookiebot, Usercentrics o.Ä.) so, dass du bei Consent-Verweigerung trotzdem modellierte Conversions erhältst — ohne Datenverlust und ohne Rechtsrisiko.',
      },
      {
        question: 'Kann ich mein bestehendes Tracking behalten oder muss alles neu?',
        answer:
          'Wir bauen auf dem auf, was funktioniert. In einem Tracking-Audit prüfen wir dein bestehendes Setup, identifizieren Lücken und ergänzen gezielt — statt alles von Null aufzubauen. Migration statt Revolution, außer es ist wirklich nötig.',
      },
    ],
  },
  {
    label: 'Google Ads & Social Ads',
    sectionLabel: '// Ads',
    items: [
      {
        question: 'Wie lange dauert es, bis Google Ads profitabel werden?',
        answer:
          'Mit sauberem Tracking und erfahrener Kampagnenstruktur sehen wir typischerweise nach 4–8 Wochen erste Profitabilität. Die Lernphase des Algorithmus braucht Daten — je besser dein Tracking, desto schneller lernt Google. Nachhaltige Skalierung planen wir über 3–6 Monate.',
      },
      {
        question: 'Welche Kampagnentypen setzt ihr bei Google Ads ein?',
        answer:
          'Das hängt von deinem Business ab. Für E-Commerce: Shopping, Performance Max und Demand Gen. Für Leads: Search mit Smart Bidding, YouTube und Discovery. Wir starten fokussiert mit dem Kampagnentyp, der am schnellsten Ergebnisse liefert, und skalieren dann kanalübergreifend.',
      },
      {
        question: 'Macht ihr auch Meta Ads (Facebook & Instagram)?',
        answer:
          'Ja — Meta Ads sind fester Bestandteil unseres Full-Funnel-Ansatzes. Wir setzen Advantage+ Shopping für E-Commerce ein, Lead-Kampagnen für B2B und Retargeting über die Meta CAPI (Server-Side). Christina bringt 15 Jahre Ads-Erfahrung inkl. Meta mit.',
      },
      {
        question: 'Wie oft bekomme ich Reportings?',
        answer:
          'Wöchentliche Performance-Updates als Dashboard-Link plus monatliche Strategy Calls mit detaillierter Analyse. Du hast jederzeit Zugriff auf Live-Dashboards — kein Warten auf Monats-PDFs. Bei kritischen Veränderungen informieren wir dich sofort.',
      },
      {
        question: 'Verwaltet ihr auch bestehende Kampagnen oder nur neue?',
        answer:
          'Beides. Oft übernehmen wir bestehende Accounts, analysieren die aktuelle Performance und optimieren schrittweise. Das ist häufig effektiver als ein kompletter Neustart, weil wir auf vorhandene Daten und Lerneffekte aufbauen können.',
      },
    ],
  },
  {
    label: 'Technik & Webdesign',
    sectionLabel: '// Technik',
    items: [
      {
        question: 'Mit welchen Plattformen arbeitet ihr bei Webdesign?',
        answer:
          'Primär Webflow für Marketing-Websites und Shopify für E-Commerce. Beide Plattformen bieten die beste Balance aus Design-Freiheit, Performance und Wartbarkeit. Bei bestehenden WordPress- oder Shopware-Setups übernehmen wir auch dort.',
      },
      {
        question: 'Wie wichtig sind Core Web Vitals für mein Ranking?',
        answer:
          'Core Web Vitals sind ein offizieller Google-Rankingfaktor. Langsame Seiten verlieren nicht nur im Ranking, sondern auch bei der Conversion Rate — jede Sekunde Ladezeit kostet ca. 7% Conversions. Wir optimieren jedes Projekt auf grüne CWV-Werte.',
      },
      {
        question: 'Baut ihr auch barrierefreie Websites (WCAG)?',
        answer:
          'Ja, wir entwickeln nach WCAG 2.2 AA-Standard. Ab 2025 gilt der European Accessibility Act (EAA) — Barrierefreiheit wird für viele Unternehmen Pflicht. Wir machen deine Website nicht nur compliant, sondern auch für alle Nutzer besser bedienbar.',
      },
      {
        question: 'Kann ich meine Website nach dem Launch selbst pflegen?',
        answer:
          'Ja — wir setzen auf CMS-Lösungen (Webflow CMS, Shopify Admin), die dein Team ohne Entwicklerkenntnisse bedienen kann. Nach dem Launch gibt es eine Einschulung für Content-Pflege. Für technische Änderungen oder Weiterentwicklung bleiben wir als Partner verfügbar.',
      },
      {
        question: 'Integriert ihr auch CRM, E-Mail-Marketing und andere Tools?',
        answer:
          'Ja — ob HubSpot, Mailchimp, Klaviyo, Zapier oder individuelle API-Anbindungen. Wir denken jedes Projekt vom Tech-Stack her und stellen sicher, dass Website, Tracking, CRM und Marketing-Automation nahtlos zusammenspielen.',
      },
    ],
  },
];

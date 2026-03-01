export interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  image: string;
}

export const team: TeamMember[] = [
  {
    name: 'Christina',
    role: 'Co-Founderin · Performance Marketing',
    description:
      '15 Jahre Ads-Expertise aus Österreichs Top-Agenturen. Premium-Marken, sechsstellige Budgets, 4 Märkte. Jetzt voll auf deinen ROAS fokussiert.',
    skills: ['Google Ads', 'Social Ads', 'Full-Funnel Strategie', 'DACH-Erfahrung'],
    image: '/assets/team/christina.webp',
  },
  {
    name: 'Mike',
    role: 'Co-Founder · Tech & Design',
    description:
      'Server-Side Tracking, Webdesign und technische Marketing-Infrastruktur. Baut Websites die nicht nur gut aussehen — sondern konvertieren.',
    skills: ['Webdesign', 'UI/UX', 'Server-Side Tracking', 'Analytics'],
    image: '/assets/team/mike.webp',
  },
];

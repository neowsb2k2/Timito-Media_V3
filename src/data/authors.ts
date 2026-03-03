export interface Author {
  name: string;
  role: string;
  bio: string;
  initial: string;
}

export const authors: Record<string, Author> = {
  Mike: {
    name: 'Mike',
    role: 'Co-Founder · Tech & Design',
    bio: 'Baut Tracking-Setups, Webdesign und Tech-Infrastruktur für Performance-Marketing-Kampagnen.',
    initial: 'M',
  },
  Christina: {
    name: 'Christina',
    role: 'Co-Founderin · Performance Marketing',
    bio: 'Strategin für Google Ads, Social Ads und datengetriebene Kampagnenoptimierung im DACH-Raum.',
    initial: 'C',
  },
};

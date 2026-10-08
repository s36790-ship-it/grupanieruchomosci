// Dane strukturalne (schema.org) wspólne dla podstron.
const SITE = 'https://xn--grupa-nieruchomoci-mod.pl';
export const ID_FIRMY = `${SITE}/#firma`;

const abs = (sciezka: string) => (sciezka === '/' ? `${SITE}/` : `${SITE}${sciezka}`);

/** Ścieżka okruszków: [['Strona główna', '/'], ['O nas', '/o-nas']] */
export const okruchy = (elementy: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: elementy.map(([name, sciezka], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(sciezka) })),
});

export const usluga = (o: { nazwa: string; opis: string; sciezka: string; obszar?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: o.nazwa,
  serviceType: o.nazwa,
  description: o.opis,
  url: abs(o.sciezka),
  provider: { '@id': ID_FIRMY },
  areaServed: o.obszar
    ? { '@type': 'Place', name: o.obszar }
    : [
        { '@type': 'City', name: 'Białystok' },
        { '@type': 'AdministrativeArea', name: 'województwo podlaskie' },
      ],
});

export const witryna = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Grupa Nieruchomości',
  url: `${SITE}/`,
  inLanguage: 'pl-PL',
  publisher: { '@id': ID_FIRMY },
};

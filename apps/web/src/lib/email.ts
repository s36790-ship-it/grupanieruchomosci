import { domainToASCII } from 'node:url';

/** Adres z polską domeną (np. kontakt@grupa-nieruchomości.pl) w zapisie, który rozumie każdy program pocztowy. */
export const emailAscii = (adres: string) => {
  const [uzytkownik, domena] = adres.split('@');
  return domena ? `${uzytkownik}@${domainToASCII(domena) || domena}` : adres;
};

export const mailto = (adres: string) => `mailto:${emailAscii(adres)}`;

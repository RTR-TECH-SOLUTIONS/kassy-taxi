// Pe demo.mrwebsites.ro site-ul stă într-un subfolder (/tractari-prahova/), pe domeniul clientului stă la rădăcină.
// Toate linkurile interne trec prin u(), ca să primească prefixul corect în ambele cazuri.
const baza = import.meta.env.BASE_URL.replace(/\/$/, '');

export function u(cale: string): string {
  return cale.startsWith('/') ? `${baza}${cale}` : cale;
}

// Calea paginii fără prefix, pentru marcarea linkului activ din meniu.
export function faraBaza(cale: string): string {
  return baza && cale.startsWith(baza) ? cale.slice(baza.length) || '/' : cale;
}

// Link WhatsApp cu mesaj precompletat.
export function wa(numar: string, text: string): string {
  return `https://wa.me/${numar}?text=${encodeURIComponent(text)}`;
}

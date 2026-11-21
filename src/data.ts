// Datele firmei: flyerul și pozele trimise pe WhatsApp (20 nov 2026) + profilul Google „LUDUS KASY TAXI”.
// TODO(real): numele exact (flyer „KASSY”, capotă și formular „KASY”), firma și CUI-ul.
export const firma = {
  nume: 'Kassy Taxi',
  // Operatorul din paginile legale. TODO(real): forma juridică și CUI-ul (clientul n-a vrut factură, nu le avem).
  operator: 'Ady Bosa',
  oras: 'Luduș',
  judet: 'Mureș',
  adresa: 'Strada Turzii 47, Luduș',
  strada: 'Strada Turzii 47',
  codPostal: '545200',
  adresaHarta: 'Strada Turzii 47, 545200 Luduș, Mureș',
  telefon: '0758 464 629',
  telefonHref: '+40758464629',
  telefon2: '0758 865 737',
  telefon2Href: '+40758865737',
  whatsapp: '40758464629',
  facebook: 'https://www.facebook.com/search/top?q=kassy%20taxi%20ludus',
};

export const mesajGeneral = 'Bună ziua! Aș vrea un taxi.';

export const masini = [
  { model: 'Dacia Logan', numar: 'MS 98 KSY', locuri: 4 },
  { model: 'Ford Focus', numar: 'MS 13 KSY', locuri: 4 },
];

// Tarifele clientului (WhatsApp, 20 nov 2026): „4,49 ziua / seara 4.99”, în lei/km.
// Noaptea (22–6) face doar curse lungi sau programate, fără „non-stop” pe site.
// TODO(real): de la ce oră începe tariful de seară (am pus 22, ca intervalul de noapte) și dacă are taxă de pornire.
export const tarifZi = 4.49; // lei/km, folosit și la prețurile orientative din lista de destinații
export const tarifNoapte = 4.99;
export const intervalZi = '6–22';
export const intervalNoapte = '22–6';

export const lei = (n: number) => n.toFixed(2).replace('.', ',');

export type RandTarif = { eticheta: string; valoare: string };
export type CardTarif = { titlu: string; poza: 'zi' | 'noapte-fata' | 'noapte-lateral' | 'usa' | 'a3'; randuri: RandTarif[] };
export type FilaTarif = { id: string; nume: string; icon: 'car' | 'route' | 'plane'; carduri: CardTarif[] };

export const tarife: FilaTarif[] = [
  {
    id: 'oras',
    nume: 'Cursă în oraș',
    icon: 'car',
    carduri: [
      {
        titlu: 'Tarif în Luduș, ziua',
        poza: 'zi',
        randuri: [
          { eticheta: 'Tarif', valoare: `${lei(tarifZi)} lei/km` },
          { eticheta: 'Interval', valoare: intervalZi },
          { eticheta: 'Comandă', valoare: 'telefon sau WhatsApp' },
        ],
      },
      {
        titlu: 'Tarif seara și noaptea',
        poza: 'usa',
        randuri: [
          { eticheta: 'Tarif', valoare: `${lei(tarifNoapte)} lei/km` },
          { eticheta: 'Interval', valoare: intervalNoapte },
          { eticheta: 'Curse', valoare: 'lungi sau programate' },
        ],
      },
    ],
  },
  {
    id: 'extraurban',
    nume: 'În afara orașului',
    icon: 'route',
    carduri: [
      {
        titlu: 'Curse în județ și în țară, ziua',
        poza: 'noapte-lateral',
        randuri: [
          { eticheta: 'Tarif', valoare: `${lei(tarifZi)} lei/km` },
          { eticheta: 'Interval', valoare: intervalZi },
          { eticheta: 'Preț', valoare: 'spus la telefon' },
        ],
      },
      {
        titlu: 'Curse în județ și în țară, noaptea',
        poza: 'a3',
        randuri: [
          { eticheta: 'Tarif', valoare: `${lei(tarifNoapte)} lei/km` },
          { eticheta: 'Interval', valoare: intervalNoapte },
          { eticheta: 'Preț', valoare: 'spus la telefon' },
        ],
      },
    ],
  },
  {
    id: 'aeroport',
    nume: 'Transfer aeroport',
    icon: 'plane',
    carduri: [
      {
        titlu: 'Aeroportul Transilvania, Târgu Mureș',
        poza: 'usa',
        randuri: [
          { eticheta: 'Distanță', valoare: '40 km' },
          { eticheta: 'Durată', valoare: '27 min' },
          { eticheta: 'Preț orientativ', valoare: `${pretOrientativ(40)} lei` },
        ],
      },
      {
        titlu: 'Aeroportul Avram Iancu, Cluj',
        poza: 'zi',
        randuri: [
          { eticheta: 'Distanță', valoare: '74 km' },
          { eticheta: 'Durată', valoare: '54 min' },
          { eticheta: 'Preț orientativ', valoare: `${pretOrientativ(74)} lei` },
        ],
      },
    ],
  },
];

// Distanțe și durate de pe Google Maps, din Strada Turzii 47 (20 nov 2026, fără trafic).
export const destinatii = [
  { nume: 'Iernut', km: 15, timp: '16 min' },
  { nume: 'Câmpia Turzii', km: 27, timp: '23 min' },
  { nume: 'Turda', km: 39, timp: '31 min' },
  { nume: 'Aeroportul Transilvania (Târgu Mureș)', km: 40, timp: '27 min', aeroport: true },
  { nume: 'Sărmașu', km: 41, timp: '43 min' },
  { nume: 'Târgu Mureș', km: 53, timp: '38 min' },
  { nume: 'Cluj-Napoca', km: 68, timp: '54 min' },
  { nume: 'Aeroportul Avram Iancu (Cluj)', km: 74, timp: '54 min', aeroport: true },
  { nume: 'Alba Iulia', km: 91, timp: '57 min' },
  { nume: 'Sighișoara', km: 97, timp: '1 h 23 min' },
];

export function pretOrientativ(km: number): number {
  return Math.ceil((km * tarifZi) / 10) * 10;
}

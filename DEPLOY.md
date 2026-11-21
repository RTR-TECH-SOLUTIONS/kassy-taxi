# Punere online: taxi-ludus.ro

Site static Astro pentru Kassy Taxi (Ady Bosa, Luduș). Găzduit pe serverul nostru Enhance (cp.mrwebsites.ro), **fără
plată de găzduire**: clientul a plătit doar site-ul (500 lei, 20 nov 2026). Nu trece prin ofertele din /admin.

## 0. Domeniul

`taxi-ludus.ro` (cerut de client; `taxiludus.ro` e al concurenței Best Taxi B&D din 13 nov 2026).
**Înregistrat 21 nov 2026** în Openprovider pe contactul RTR TECH SOLUTIONS S.R.L. (MR980230-RO), €6,00, expiră
21 nov 2027, Autorenew „Off (Always)”, cu o notă internă pe domeniu.
Se înregistrează pe un an prin Openprovider, pe nameserverele `ns1.mrwebsites.ro` / `ns2.mrwebsites.ro`,
**cu reînnoirea automată oprită** (cerut de Mario: clientul nu plătește găzduirea). Panoul nostru înregistrează mereu
cu `autorenew: on` (`src/lib/openprovider.ts` din „website nou”), deci se oprește de mână în Openprovider
(domeniul → Autorenew: off). La expirare, domeniul se reînnoiește doar dacă plătește clientul.

## 1. Build

```bash
npm install
npm run build        # implicit: https://taxi-ludus.ro, în rădăcină
```

Rezultatul e în `dist/`: paginile, `.htaccess` (HTTPS + fără www, cache, pagina 404), `robots.txt` și
`sitemap-index.xml`.

## 2. Publicare din GitHub în Enhance

Repo: `RTR-TECH-SOLUTIONS/kassy-taxi`, ramura `main`.

1. Enhance: site-ul `taxi-ludus.ro` stă în organizația noastră **RTR TECH SOLUTIONS SRL** (nu client separat: Enhance cere
   email de owner, iar Ady nu are cont), pe un abonament intern **Start** (Subscription ID 24), website
   `8b158d92-f7a3-49a5-9941-ebb0dbd308f2`. Făcut pe 21 nov 2026.
2. Site → tabul GitHub → **Connect GitHub**; aplicația creată se instalează pe RTR-TECH-SOLUTIONS doar cu acest repo
   („Only select repositories”).
3. Ramura `main`, build `npm ci && npm run build`, director publicat `dist`, „Auto deploy on push” pornit → „Deploy now”.

De aici, orice `git push` pe `main` republică site-ul real și, prin workflow, demo-ul.

## 3. După ce domeniul răspunde

- Certificatul Let's Encrypt (și pentru www) și „Force HTTPS” în Enhance.
- Search Console + sitemap (`https://taxi-ludus.ro/sitemap-index.xml`).
- **Google Business Profile** „LUDUS KASY TAXI” (Strada Turzii 47, 0 recenzii): se adaugă site-ul. Numele, adresa și
  telefonul trebuie scrise **identic** cu cele din `src/data.ts`. Recenziile contează cât site-ul: concurența din
  Luduș are 100-245.

## Demo-ul

`git push` publică în continuare copia de pe https://demo.mrwebsites.ro/kassy-taxi/ (workflow-ul pune `SITE_URL` și
`SITE_BASE=/kassy-taxi`; pe subfolder, paginile primesc noindex și robots.txt blochează tot). Local: `npm run build:demo`.

## Modificări ulterioare

Datele firmei, tarifele și destinațiile sunt în `src/data.ts`. După orice modificare: `npm run build` local ca
verificare, apoi `git push`.

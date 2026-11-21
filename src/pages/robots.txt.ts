import type { APIRoute } from 'astro';

// Pe taxi-ludus.ro: totul permis + sitemap. Pe demo (subfolder): blocat, ca să nu concureze cu domeniul real.
export const GET: APIRoute = ({ site }) => {
  const demo = import.meta.env.BASE_URL !== '/';
  const body = demo
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

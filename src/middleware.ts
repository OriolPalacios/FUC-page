import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async ({ request, locals, url }, next) => {
  const newRequest = new Request(request.url, {
    method: request.method,
    headers: new Headers(request.headers),
    body: request.body,
    redirect: request.redirect,
    signal: request.signal
  });
  newRequest.headers.delete('cache-control');
  newRequest.headers.delete('pragma');
  const response = await next();
  if (url.pathname.includes('_server-islands')) {
    const referer = request.headers.get('Referer');
    if (referer) {
      const refererUrl = new URL(referer);
      const pageParam = refererUrl.searchParams.get('page') || '1';
      response.headers.set('Cache-Control', 'public, max-age=0');
      response.headers.set('Netlify-CDN-Cache-Control', 'public, durable, s-maxage=300, stale-while-revalidate=3500');
      response.headers.set('Netlify-vary', `path=${url.pathname}&page=${pageParam}`);
      response.headers.set('X-Content-Generated', new Date().toISOString());
    }
  }
  return response;
});
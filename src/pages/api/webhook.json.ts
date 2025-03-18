import { purgeCache } from "@netlify/functions";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("X-Contentful-Webhook-Secret") !== import.meta.env.CONTENTFUL_WEBHOOK_SECRET) {
    return new Response(`Unauthorized!`, { status: 401 });
  }
  const body = await request.json();
  console.log(body.data.rows[0].Id);
  let section = body.data.table_name.split('-')[0];
  switch (section) {
    case 'noticias':
      section = 'news';
      break;
    case 'miembros':
      section = 'members';
      break;
    case 'eventos':
      section = 'events';
      break;
    case 'documentos':
      section = 'documents';
      break;
    default:
      return new Response(`Incorrect section name`, {status: 400})
  }
  const id = body.data.rows[0].Id;
  const test_response = `Revalidated entry with for section ${section} and for id ${id}`;
  const type = body.type.split('.').pop();
  try {
    if (type == 'update') {
      await purgeCache({ tags: [`${section}-page-detail-${id}`, `${section}`] });
    } else if (type == 'insert') {
      await purgeCache({ tags: [`${section}`, `${section}-page-detail-${id}`] });
    } else {
      return new Response(`Not update nor insert`, {status: 401})
    }
    return new Response(`Revalidated entry for section ${section} and detail page ${section}-page-detail-${id}`, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({
      message: "This was a POST!",
      body: body,
      test_response: test_response
    }))
  }
}

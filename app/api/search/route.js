import data from '../content.json';
import MiniSearch from 'minisearch';

export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request) {
    const { query } = await request.json();

    let minisearch = new MiniSearch({
        fields: ['page', 'perex', 'title'],
        storeFields: ['page', 'perex', 'title'],
    });

    minisearch.addAll(data);

    const results = minisearch.search(query, { fuzzy: true, prefix: true });

    return Response.json({ results: results })
}

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(req) {
    const userAgent = req.headers.get('user-agent');
    const isMobile = /mobile|Mobile/i.test(userAgent);

    return Response.json({ isMobile });
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    try{
        const res = await fetch(url, { method: 'HEAD' });
        return Response.json({ online: res.ok });
    }catch(error){
        return Response.json({online: false})
    }
}
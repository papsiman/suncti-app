import { execQuery } from '@/app/db/db';

export async function POST(request: Request) {
    try {
        const res = await request.json();
        
        if (!res.Id) {
            return Response.json({ status: 'error', message: 'Missing Id parameter' });
        }

        const response = await execQuery("SELECT * FROM `content` WHERE `Id` = " + Number(res.Id));
        
        if (Array.isArray(response) && response.length > 0) {
            return Response.json({ status: 'ok', data: response[0] });
        }
        
        return Response.json({ status: 'error', message: 'Content not found' });
    }
    catch (err) {
        return Response.json({ status: 'error', message: (err as Error).message });
    }
}

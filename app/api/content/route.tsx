import { IContent } from '@/app/db';
import { execQuery } from '@/app/db/db';

export async function POST(request: Request) {

    const res: IContent = await request.json();

    try{
        const response = await execQuery("SELECT * FROM `content` WHERE `Component` like '"+res.Component+"%' ORDER BY Id");
        return Response.json({ status:'ok', message: '/api/content/post', data: response })
    }
    catch(err){
        return Response.json({ status:'error', message: '/api/content/post', data: err })
    }

}

export async function DELETE(request: Request){
    const res: IContent = await request.json();
    try{
        await execQuery("DELETE FROM `content` WHERE `Id` = "+res.Id);
        return Response.json({ status:'ok', message: '/api/content/delete', data: res })
    }
    catch(err){
        return Response.json({ status:'error', message: '/api/content/delete', data: err })
    }
}
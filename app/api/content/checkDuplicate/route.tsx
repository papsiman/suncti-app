import { IContent } from "@/app/db";
import { execQuery } from "@/app/db/db";


export async function POST(request: Request) {

    const res: IContent = await request.json();

    try{
        const response = await execQuery("SELECT * FROM `content` WHERE `Component` = '"+res.Component+"%'");
        return Response.json({ status:'ok', message: '/api/content/post', data: response })
    }
    catch(err){
        return Response.json({ status:'error', message: '/api/content/post', data: err })
    }

}
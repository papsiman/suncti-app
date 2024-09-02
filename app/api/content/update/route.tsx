import { execQuery } from '@/app/db/db';

export async function POST(request: Request) {

    const res = await request.json();

    console.log('Server');
    console.log(res);

    try{
        if(res.Id == 0 || res.Id == '0'){
            const response = await execQuery("INSERT INTO `content` (Component,Title,Des,Img,Pdf,Link) VALUES ('"+(res?.Component ?? "")+"','"+(res?.Title ?? "")+"', '"+(res?.Des ?? "")+"', '"+(res?.Img ?? "")+"','"+(res?.Pdf ?? "")+"','"+(res?.Link ?? "")+"')");
            return Response.json({ status:'ok', message: '/api/content/update', data: res })
        }
        else{
            const response = await execQuery("UPDATE `content` SET `Title` = '"+(res?.Title ?? "")+"',`Des` = '"+(res?.Des ?? "")+"', `Img` = '"+(res?.Img ?? "")+"', `Pdf` = '"+(res?.Pdf ?? "")+"', `Link` = '"+(res?.Link ?? "")+"' WHERE `Id` = '"+res.Id+"'");
            return Response.json({ status:'ok', message: '/api/content/update', data: res })
        }
    }
    catch(err){
        return Response.json({ status:'error', message: '/api/content/update', data: err })
    }

}
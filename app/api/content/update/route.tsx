import { execQuery } from '@/app/db/db';

export async function POST(request: Request) {

    const res = await request.json();

    try{
        if(res.Id == 0 || res.Id == '0'){
            const response = await execQuery("INSERT INTO `content` (Component,Title,Des,Img,ImgBase64,Pdf,PdfBase64,Link) VALUES ('"+(res?.Component ?? "")+"','"+(res?.Title ?? "")+"', '"+(res?.Des ?? "")+"', '"+(res?.Img ?? "")+"', '"+(res?.ImgBase64 ?? "")+"','"+(res?.Pdf ?? "")+"','"+(res?.PdfBase64 ?? "")+"','"+(res?.Link ?? "")+"')");
            return Response.json({ status:'ok', message: '/api/content/update', data: res })
        }
        else{
            const response = await execQuery("UPDATE `content` SET `Title` = '"+(res?.Title ?? "")+"',`Des` = '"+(res?.Des ?? "")+"', `Img` = '"+(res?.Img ?? "")+"', `ImgBase64` = '"+(res?.ImgBase64 ?? "")+"', `Pdf` = '"+(res?.Pdf ?? "")+"', `PdfBase64` = '"+(res?.PdfBase64 ?? "")+"', `Link` = '"+(res?.Link ?? "")+"' WHERE `Id` = '"+res.Id+"'");
            return Response.json({ status:'ok', message: '/api/content/update', data: res })
        }
    }
    catch(err){
        return Response.json({ status:'error', message: '/api/content/update', data: err })
    }

}
import { execQuery } from '@/app/db/db';

export async function POST(request: Request) {

    const res = await request.json();

    try{
        if(res.Id == 0 || res.Id == '0'){
            const response = await execQuery("INSERT INTO `content` (Component,Title,Des,Img,ImgBase64,Pdf,PdfBase64,Link) VALUES ('"+(res?.Component ?? "")+"','"+(res?.Title ?? "")+"', '"+(res?.Des ?? "")+"', '"+(res?.Img ?? "")+"', '"+(res?.ImgBase64 ?? "")+"','"+(res?.Pdf ?? "")+"','"+(res?.PdfBase64 ?? "")+"','"+(res?.Link ?? "")+"')");
            return Response.json({ status:'ok', message: '/api/content/update', data: res })
        }
        else{
            const updates = [];
            updates.push("`Title` = '"+(res?.Title ?? "")+"'");
            updates.push("`Des` = '"+(res?.Des ?? "")+"'");
            updates.push("`Link` = '"+(res?.Link ?? "")+"'");

            if (res?.Img !== undefined && res?.Img !== "") {
                updates.push("`Img` = '"+res.Img+"'");
            }
            if (res?.ImgBase64 !== undefined && res?.ImgBase64 !== "") {
                updates.push("`ImgBase64` = '"+res.ImgBase64+"'");
            }
            if (res?.Pdf !== undefined && res?.Pdf !== "") {
                updates.push("`Pdf` = '"+res.Pdf+"'");
            }
            if (res?.PdfBase64 !== undefined && res?.PdfBase64 !== "") {
                updates.push("`PdfBase64` = '"+res.PdfBase64+"'");
            }

            const response = await execQuery("UPDATE `content` SET " + updates.join(", ") + " WHERE `Id` = '"+res.Id+"'");
            return Response.json({ status:'ok', message: '/api/content/update', data: res })
        }
    }
    catch(err){
        return Response.json({ status:'error', message: '/api/content/update', data: err })
    }

}
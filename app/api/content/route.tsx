import { IContent } from '@/app/db';
import { execQuery } from '@/app/db/db';

export async function POST(request: Request) {

    const res: IContent = await request.json();

    try{
        const isMs = res.Component && res.Component.startsWith('ms');
        let selectFields = "`Id`, `Component`, `Title`, `Des`, `ImgW`, `ImgH`, `Link`";

        if (isMs) {
            selectFields += `, CASE WHEN \`Img\` LIKE 'data:%' THEN '' ELSE COALESCE(\`Img\`, '') END AS \`Img\`, CASE WHEN \`ImgBase64\` LIKE 'data:%' THEN '' ELSE COALESCE(\`ImgBase64\`, '') END AS \`ImgBase64\`, CASE WHEN \`Img\` LIKE 'data:%' OR \`ImgBase64\` LIKE 'data:%' THEN 1 ELSE 0 END AS \`HasImgBase64\``;
        } else {
            selectFields += `, \`Img\`, \`ImgBase64\``;
        }

        // Always strip out base64 PDFs from the list query
        selectFields += `, CASE WHEN \`Pdf\` LIKE 'data:%' THEN '' ELSE COALESCE(\`Pdf\`, '') END AS \`Pdf\`, CASE WHEN \`PdfBase64\` LIKE 'data:%' THEN '' ELSE COALESCE(\`PdfBase64\`, '') END AS \`PdfBase64\`, CASE WHEN \`Pdf\` LIKE 'data:%' OR \`PdfBase64\` LIKE 'data:%' OR (\`Pdf\` IS NOT NULL AND \`Pdf\` != '') OR (\`PdfBase64\` IS NOT NULL AND \`PdfBase64\` != '') THEN 1 ELSE 0 END AS \`HasPdfBase64\``;

        const response = await execQuery(`SELECT ${selectFields} FROM \`content\` WHERE \`Component\` like '${res.Component}%' ORDER BY Id`);
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
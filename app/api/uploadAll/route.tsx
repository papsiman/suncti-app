import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        let imgResultPath = '';
        let docResultPath = '';

        //Image
        if(formData.get("fileImg") !== 'undefined'){
            // const arrayBufferImg = await fileImg.arrayBuffer();
            // const bufferImg = new Uint8Array(arrayBufferImg);
            // const newFileImgName = (new Date().getTime()).toString() +'.'+ fileImg.name.split('.').pop() ;
            // await fs.writeFile(`./public/uploads/${newFileImgName}`, bufferImg);
            // imgResultPath = `/uploads/${newFileImgName}`;

            //Write file to database
            const file = formData.get("fileImg") as File;
            const arrayBuffer = await file.arrayBuffer();
            const fileBase64 = Buffer.from(arrayBuffer).toString('base64');
            imgResultPath = `data:${file.type};base64,${fileBase64}`;
            

        }
        
        //Doc
        if(formData.get("fileDoc") !== 'undefined'){
            // const fileDoc = formData.get("fileDoc") as File;
            // const arrayBufferDoc = await fileDoc.arrayBuffer();
            // const bufferDoc = new Uint8Array(arrayBufferDoc);
            // const newFileDocName = (new Date().getTime()).toString() +'.'+ fileDoc.name.split('.').pop() ;
            // await fs.writeFile(`./public/uploads/${newFileDocName}`, bufferDoc);
            //docResultPath = `/uploads/${newFileDocName}`

            //Write file to database
            const fileDoc = formData.get("fileDoc") as File;
            const arrayBufferDoc = await fileDoc.arrayBuffer();
            const bufferDoc = Buffer.from(arrayBufferDoc).toString('base64');
            docResultPath = `data:${fileDoc.type};base64,${bufferDoc}`;
            
        }

        revalidatePath("/");

        return NextResponse.json({ status: "ok", data: {
            imgResultPath: imgResultPath,
            docResultPath: docResultPath
        }});
    } 
    catch (e) {
        console.error(e);
        return NextResponse.json({ status: "fail", error: e.message });
    }
}
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        let imgResultPath = '';
        let docResultPath = '';

        //Image
        const fileImg = formData.get("fileImg") as File;
        if(fileImg !== undefined){
            const arrayBufferImg = await fileImg.arrayBuffer();
            const bufferImg = new Uint8Array(arrayBufferImg);
            const newFileImgName = (new Date().getTime()).toString() +'.'+ fileImg.name.split('.').pop() ;
            await fs.writeFile(`./public/uploads/${newFileImgName}`, bufferImg);
            imgResultPath = `/uploads/${newFileImgName}`;
        }

        //Doc
        const fileDoc = formData.get("fileDoc") as File;
        if(fileDoc !== undefined){
            const arrayBufferDoc = await fileDoc.arrayBuffer();
            const bufferDoc = new Uint8Array(arrayBufferDoc);
            const newFileDocName = (new Date().getTime()).toString() +'.'+ fileDoc.name.split('.').pop() ;
            await fs.writeFile(`./public/uploads/${newFileDocName}`, bufferDoc);
            docResultPath = `/uploads/${newFileDocName}`
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
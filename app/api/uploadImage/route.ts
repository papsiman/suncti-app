import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    //Write file to server
    const file = formData.get("file") as File;
    const arrayBuffer = await file.arrayBuffer();
    //const buffer = new Uint8Array(arrayBuffer);
    // const newFileName = (new Date().getTime()).toString() +'.'+ file.name.split('.').pop() ;
    // await fs.writeFile(`./public/uploads/${newFileName}`, buffer);

    //Write file to database
    //const bufferFile = await file.arrayBuffer()
    const fileBase64 = Buffer.from(arrayBuffer).toString('base64');
    const result = `data:${file.type};base64,${fileBase64}`;

    revalidatePath("/");

    return NextResponse.json({ status: "ok", data:  result});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: (e as Error).message });
  }
}
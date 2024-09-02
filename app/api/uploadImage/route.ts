import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const newFileName = (new Date().getTime()).toString() +'.'+ file.name.split('.').pop() ;
    await fs.writeFile(`./public/uploads/${newFileName}`, buffer);

    revalidatePath("/");

    return NextResponse.json({ status: "ok", data:  `/uploads/${newFileName}`});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e.message });
  }
}
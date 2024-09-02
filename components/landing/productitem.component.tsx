"use client";

import { useSession } from "next-auth/react";
import ProductItemDel from "./productitem.del";
import ProductItemEdit from "./productitem.edit";

export default function ProductItemComponent({ content, setRefresh }: any) {

  const { data: session } = useSession();

  if (session?.user?.name) {
    return (
      <div>
        <div className="absolute top-0 right-0 w-full px-2 py-4 bg-violet-200/80 backdrop:'2px'">
          <div className="flex flex-row justify-end gap-2">
            <ProductItemDel content={content} setRefresh={setRefresh}/>
            <ProductItemEdit content={content} setRefresh={setRefresh}/>
          </div>
        </div>
      </div>
    );
  }
}

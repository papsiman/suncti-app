"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { IContent } from "@/app/db";
import { useState } from "react";

export default function ProductItemDel({ content, setRefresh }: any) {
  
  const [openDialog, setOpenDialog] = useState(false);

  const handleSumit = (event: any) => {
    
    event.preventDefault();

    const constentInput: IContent = {
      Id: content.Id,
      Component: content.Component,
    }

    fetch("/api/content", {
      method: "DELETE",
      body: JSON.stringify(constentInput),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((response) => {
      if (response.status === "ok") {
        alert("Delete success.");
        setRefresh(e => ++e);
        setOpenDialog(false);
      } else {
        alert("Fail. " + response.message);
      }
    });

  };

  const { data: session } = useSession();

  if (session?.user?.name) {
    return (
      <div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <a className="text-2xl btn bg-red-500 border-none hover:bg-red-600 text-white">
              <FontAwesomeIcon icon={faXmark} />
            </a>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Delete Product Item</DialogTitle>
              <DialogDescription>
                Are you sure to delete product item.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSumit}>
              <DialogFooter>
                <Button type="submit">Delete</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

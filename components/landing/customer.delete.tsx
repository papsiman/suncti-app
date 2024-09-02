"use client"

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
import { IContent } from "@/app/db";
import {useSession} from "next-auth/react"
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CustomerDelete({content, setRefresh}:any) {

  const fileInput = useRef<HTMLInputElement>(null);
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
        setRefresh((e: number) => ++e);
        setOpenDialog(false);
      } else {
        alert("Fail. " + response.message);
      }
    });

  }

  const { data: session } = useSession()

  if(session?.user?.name){
    return (
      <>
        <div className="flex flex-row gap-2">
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <a className="flex justify-center items-center text-2xl w-10 h-10 rounded-full bg-red-500 border-none hover:bg-red-600 text-white cursor-pointer">
                <FontAwesomeIcon icon={faXmark} />
              </a>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Delete Customer</DialogTitle>
                <DialogDescription>
                  Are your sure to delete customer.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSumit}>
                <DialogFooter>
                  <Button>Delete</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </>
    );
  }
}

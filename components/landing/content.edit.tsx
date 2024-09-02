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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { IContent } from "@/app/db";
import {useSession} from "next-auth/react"
import PulsatingButton from "../ui/pulsating-button";
import { useState } from "react";

export default function ContentEdit({content, setRefresh}:any) {

  const [openDialog, setOpenDialog] = useState(false);

  const handleSumit = (event: any) => {

    event.preventDefault();

    const data: IContent = {
      Id: content.Id,
      Component: content.Component,
      Title: event.target.title.value,
      Des: event.target.des.value,
      Img: '',
    }

    //Create data
    fetch("/api/content/update", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if(response.status === 'ok'){
        alert("Save success.");
        setRefresh(e => ++e);
        setOpenDialog(false);
      }
      else{
        alert("Fail. " + response.message);
      }
    });

  }

  const { data: session } = useSession()

  if(session?.user?.name){
    return (
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
        <PulsatingButton className="">Edit</PulsatingButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Component</DialogTitle>
            <DialogDescription>
              Make changes to your component here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSumit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={content?.Title}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="des" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="des"
                  name="des"
                  defaultValue={content?.Des}
                  className="col-span-3"
                  rows={15}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
 
}

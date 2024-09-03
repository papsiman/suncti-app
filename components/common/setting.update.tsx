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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { ISetting } from "@/app/db";
import { useSession } from "next-auth/react";
import PulsatingButton from "../ui/pulsating-button";
import { useRef, useState } from "react";

export default function SettingUpdate({ setting, setRefresh }: any) {

  const fileInput = useRef<HTMLInputElement>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { data: session } = useSession();

  const handleSumit = (event: any) => {
    event.preventDefault();

    let input: ISetting = {
      Id: setting.Id,
      Logo: setting.Logo,
      Title: event.target.title.value,
      Des: event.target.des.value,
      Tel: event.target.tel.value,
      Fax: event.target.fax.value,
      Email: event.target.email.value,
    };

    const formData = new FormData();
    formData.append("file", fileInput?.current?.files?.[0]!);

    //Upload image
    if (fileInput?.current?.files?.length ?? 0 > 0) {
      fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status === "ok") {
            input = { ...input, LogoBase64: response.data };
            updateContent(input);
          } else {
            alert("Upload Fail. " + response.message);
          }
        });
    } else {
      updateContent(input);
    }

    function updateContent(input: ISetting) {
      //Create data
      fetch("/api/setting/update", {
        method: "POST",
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status === "ok") {
            alert("Save success.");
            window.location.reload();
          } else {
            alert("Fail. " + response.message);
          }
        });
    }
  };

  if (session?.user?.name) {
    return (
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <PulsatingButton className="">Setting</PulsatingButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Setting</DialogTitle>
            <DialogDescription>
              Make changes to your seting here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSumit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="des" className="col-span-1 text-right">
                  Upload Image
                </Label>
                <label className="block col-span-3">
                  <span className="sr-only">Choose photo</span>
                  <div className="flex flex-row justify-start items-center">
                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        "
                      accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .avif, .tiff|image/*"
                      ref={fileInput}
                    />
                  </div>
                </label>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={setting?.Title}
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
                  defaultValue={setting?.Des}
                  className="col-span-3"
                  rows={10}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tel" className="text-right">
                  Tel
                </Label>
                <Input
                  id="tel"
                  name="tel"
                  defaultValue={setting?.Tel}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fax" className="text-right">
                  Fax
                </Label>
                <Input
                  id="fax"
                  name="fax"
                  defaultValue={setting?.Fax}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  defaultValue={setting?.Email}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}

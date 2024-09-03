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
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { IContent } from "@/app/db";
import { useRef, useState } from "react";

const CustomerAdd = ({setRefresh}) => {

  const fileInput = useRef<HTMLInputElement>(null);

  const [openDialog, setOpenDialog] = useState(false);

  const handleSumit = (event: any) => {

    event.preventDefault();

    let constentInput: IContent = {
      Id: 0,
      Component: 'customer-content',
      Img: '',
    }

    const formData = new FormData();
    formData.append("file", fileInput?.current?.files?.[0]!);

    //Upload image
    if(fileInput?.current?.files?.length ?? 0 > 0){
      fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if(response.status === 'ok'){
          constentInput = {...constentInput, ImgBase64: response.data};
          updateContent(constentInput);
        }
        else{
          alert("Upload Fail. " + response.message);
        }
      });
    }
    else{
      updateContent(constentInput);
    }
    

    function updateContent(constentInput: IContent){ 
      //Create data
      fetch("/api/content/update", {
        method: "POST",
        body: JSON.stringify(constentInput),
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.status === "ok") {
          alert("Save success.");
          setRefresh(e => ++e);
          setOpenDialog(false);
        } else {
          alert("Fail. " + response.message);
        }
      });
    }
  }

  const { data: session } = useSession();
  if(session?.user?.name){
    return (
      <div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <div className="w-full h-40 flex flex-row justify-center items-center sm:w-56 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] rounded-xl bg-gray-50 hover:bg-slate-100 hover:scale-105 cursor-pointer border-[5px] border-dotted">
              <div className="text-5xl text-slate-600">
                <div>
                  <FontAwesomeIcon icon={faPlus} /> Add
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add Component</DialogTitle>
              <DialogDescription>
                Make changes to your component here. Click save when you're
                done.
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
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
};

export default CustomerAdd;
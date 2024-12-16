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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { IUser } from "@/app/db";
import { useState } from "react";

export default function UserDel({user, setRefresh }: any) {
  
  const [openDialog, setOpenDialog] = useState(false);

  const handleSumit = (event: any) => {
    
    event.preventDefault();

    const data: IUser = {
        Id: user.Id,
        Username: user.UserName,
        Email: user.Email,
        Password: user.Password,
      }

    fetch("/api/user", {
      method: "DELETE",
      body: JSON.stringify(data),
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

  };

  return (
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
            <span className="pl-2 cursor-pointer text-sm">Delete User</span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Are you sure to delete user.
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

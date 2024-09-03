"use client"

import { IUser } from "@/app/db";
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
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export default function UserCreate({setRefresh}: any) {

  const [openDialog, setOpenDialog] = useState(false);

  const handleSumit = (event: any) => {
    
    event.preventDefault();

    const data: IUser = {
      Id: 0,
      Username: event.target.username.value,
      Email: event.target.email.value,
      Password: event.target.password.value,
    }

    //Validate password
    if(data.Password && (data.Password != event.target.confirmPassword.value)){
      alert('Password not match.');
    }
    else if(!data.Username){
      alert('Username is empty.');
    }
    else{
        //Create data
        fetch("/api/user/create", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((response) => {
          if(response.status === 'ok'){
            alert("Create success.");
            setRefresh((e: number) => ++e);
            setOpenDialog(false);
          }
          else{
            alert("Fail. " + response.message);
          }
        });
    }

  }

  return (
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add User
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
              <DialogDescription>
                Make changes to your account here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSumit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  defaultValue=""
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="confirmPassword" className="text-right">
                  Confirm Password
                </Label>
                <Input
                  id="comfirmPassword"
                  name="confirmPassword"
                  type="password"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

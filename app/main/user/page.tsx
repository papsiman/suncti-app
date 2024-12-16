"use client"

import {
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import UserCreate from "./create/page"
import UserEdit from "./edit/page"
import { IUser } from "@/app/db"
import UserDel from "@/components/landing/user.del"

export default function User() {

  const [refresh, setRefresh] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(''),
      headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(response => {
      console.log(response);
      setUsers(response.data);
    })
  },[refresh])


  return (
    <>  
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
        <UserCreate setRefresh={setRefresh}/>
        </div>
      </div>
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Manage your user and view their detail.
            </CardDescription>
          </CardHeader>
              <CardContent>
                <Table>
                  {/* Table Header */}
                  <TableHeader>
                    <TableRow>
                      <TableHead>Username</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                  {/* Table Body */}
                  {
                  users.length > 0 && users.map((item: IUser)=>{
                    return (
                        <TableRow key={item?.Id}>
                          <TableCell className="font-medium">
                            {item.Username}
                          </TableCell>
                          <TableCell className="font-medium">
                            {item.Email}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <UserEdit user={item} setRefresh={setRefresh} />
                                <UserDel user={item} setRefresh={setRefresh} />
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                    );
                  })}
                  </TableBody>
                </Table>
              </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>{users.length}</strong> users
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs> 
    </>
  );
}

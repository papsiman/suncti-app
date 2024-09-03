"use client"

import Link from "next/link";
import {
  Home,
  LineChart,
  PanelLeft,
  Settings,
  Users2,
  Search,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {



  const pathname = usePathname();

  const activeMenu = "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-purple-600 text-lg font-semibold text-white md:h-8 md:w-8 md:text-base"
  const inActiveMenu = "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"

  return (
    <section>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        {/* Include shared UI here e.g. a header or sidebar */}
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="/"
              className={pathname == "/" ? activeMenu : inActiveMenu}
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Link>
            <Link
              href="/main/dashboard"
              className={pathname == "/main/dashboard" ? activeMenu : inActiveMenu}
            >
              <LineChart className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Link>
            <Link
              href="/main/user"
              className={pathname == "/main/user" ? activeMenu : inActiveMenu}
            >
              <Users2 className="h-5 w-5" />
              <span className="sr-only">Users</span>
            </Link>
            <Link
              href="#"
              className={pathname == "/main/setting" ? activeMenu : inActiveMenu}
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5"></nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    href="/main/dashboard"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/main/user"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="h-5 w-5" />
                    Users
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Settings className="h-5 w-5" />
                    Setting
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {pathname == "/main/dashboard" && ("Dashboard")}
                    {pathname == "/main/user" && ("User")}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-24 rounded-full">
                      <span className="text-2xl sm:text-3xl">S</span>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="p-4 sm:px-6 sm:py-0">{children}</main>
        </div>
      </div>
    </section>
  );
}

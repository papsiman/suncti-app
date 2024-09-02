"use client"

import {useSession, signIn, signOut} from "next-auth/react"

const Setting = () => {
    const { data: session } = useSession()
    if (session?.user?.name) {
    return (
      <>
        <details className="">
            <summary className="mt-[4px] text-base font-medium btn shadow-none border-0 bg-transparent hover:bg-violet-100 visited:bg-violet-100 text-slate-600">
              Admin
            </summary>
            <ul className="p-2 w-40 h-28 z-10">
              <li>
                <a href="/main/user" className="justify-start text-sm font-medium btn shadow-none border-0 bg-transparent hover:bg-violet-100 visited:bg-violet-100 text-slate-600">
                    User
                </a>
              </li>
              <li>
                <a onClick={() => signOut()} className="justify-start text-sm font-medium btn shadow-none border-0 bg-transparent hover:bg-violet-100 visited:bg-violet-100 text-slate-600">
                    Sign out
                </a>
              </li>
            </ul>
          </details>
      </>
    );
    }
}

export default Setting
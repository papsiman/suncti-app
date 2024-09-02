"use client"

import {useSession, signIn, signOut} from "next-auth/react"

export default function Login() {
    const { data: session } = useSession()
    if (session?.user?.name) {
      return (
        <>
          {/* Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <pre>{JSON.stringify(session, null, 2)}</pre> 
          <button onClick={() => signOut()}>Sign out</button>*/}
        </>
      )
    }
    return (
        <a onClick={() => signIn()} className="text-base font-medium btn shadow-none border-0 bg-transparent hover:bg-violet-100 visited:bg-violet-100 text-slate-600">Sign in</a>
    )
  }
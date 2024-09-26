'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const NavBar = () => {
  const { status, data: session } = useSession()
  return (
    <>
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
      {status === 'authenticated' && (
        <div>
          <p>{session.user!.name}</p>
          <Link href="/api/auth/signout">Sign out</Link>
        </div>
      )}
    </>
  )
}

export default NavBar

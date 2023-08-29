'use client'

import './globals.css'
import { NextAuthProvider } from './provider'
import { SessionProvider } from "next-auth/react"
import { store } from './Context/store'
import { Provider } from 'react-redux'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body><NextAuthProvider><Provider store={store}>{children} </Provider></NextAuthProvider></body>
     
      
    </html>
  )
}

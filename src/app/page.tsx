import React from 'react'
import Link from 'next/link'
import ProfileIcon from './Features/Login/ProfileIcon'
export default function page() {
  return (
    <div>
      <div className=' w-20 h-7  bg-slate-400 text-blue-500 '><Link href='/male'>male</Link> </div>
      <div className=' w-20 h-7  bg-red-400 text-blue-500 '><Link href='/female'>female</Link> </div>
      <div className=' w-20 h-7  bg-slate-400 text-blue-500 '><Link href='/allProductss'>allProducts</Link> </div>
      <ProfileIcon/>
      khan
    </div>
  )
}

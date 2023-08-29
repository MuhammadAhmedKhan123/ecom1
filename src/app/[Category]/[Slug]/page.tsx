import React from 'react'
import Link from 'next/dist/client/link';
import SlugPage from './SlugPage';
import { CartLink } from '../../Features/Cart/cartLink';
export default function page({params}:{params:{Slug:string}}) {
  return (
    <div>
        <Link className=' w-10 h-12 bg-slate-300' href="/Features/Cart"> <div><CartLink/></div></Link>
      <SlugPage params={params}/>
    </div>
  )
}

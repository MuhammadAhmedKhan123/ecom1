'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Image as IImage} from 'sanity';

export default function Card({src,  title, description, price,
  category, slug}:{src:string;  title:string; description:string; price:number;
  category:string; slug:string} ) {
    console.log()
  return (
    <div className=" ">
      <Link href={`/${category}/${slug}`}>
    <div className=' block relative h-[23rem] rounded overflow-hidden'><Image src={src}  alt="product" width={400} height={400}/></div>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
    </div>
    </Link>
  </div> 
  )
}

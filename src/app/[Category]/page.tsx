import React from 'react'
import CategoryPage from './categoryPage'


export default function productCategory({params}:{params:{Category:string}}) {

  return (
    <div className=' flex flex-wrap justify-center gap-1  h-screen bg-white'>
     
     <CategoryPage params={params}/>
     
     
     
     
     
    </div>
  )
}












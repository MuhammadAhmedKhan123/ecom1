'use client'
import React from 'react'
import Card from '../Components/Card'
import { useEffect} from 'react';
import {getProducts} from '../Features/Products/allProducts/allProductsFetch';
import { useAppSelector, useAppDispatch } from '@/app/Hooks/hooks';
import { addToCart } from '../Features/Cart/cartSlice';
import { receivedProducts } from '../Features/Products/allProducts/allProductsSlice';
 import { CartLink } from '../Features/Cart/cartLink';
import Link from 'next/link';
import { urlForImage } from '../../../sanity/lib/image';


export default function CategoryPage({params}:{params:{Category:string}}){
   const dispatch = useAppDispatch();
useEffect(() => {
    getProducts().then((products) =>{
    
      // setProducts(products);
      dispatch(receivedProducts(products));
    })
},[]);
const products = useAppSelector((state)=> state.products.products);
const productCat= params.Category=='allProductss'?products: Object.values(products).filter((val)=>val.category.name==params.Category)

return (
<div className=' flex flex-wrap   justify-around gap-8'>
<Link className=' w-10 h-12 bg-slate-300' href="/Features/Cart"> <div><CartLink/></div></Link>
{
 Object.values(productCat).map((product, i)=>(
  <div key={i} className='w-[300px] md:w-[350px] h-[35rem]  p-4 mx-auto shadow-md rounded-xl  relative group'>
      <Card key={i} src={urlForImage(product.image).url()}  title={product.title} 
      description={product.description} price={product.price} category={product.category.name}
      slug={product.slug}/>
           <div className="card-actions justify-end">
   <h2>${product.price}</h2>
   <button onClick={()=>dispatch(addToCart(product._id))} className="btn btn-primary">Add to Cart</button>
 </div>
  </div>
  ))
}

</div>
)
}



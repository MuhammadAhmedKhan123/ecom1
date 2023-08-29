import {Image as IImage} from 'sanity';
import {client} from "../../../../../sanity/lib/client";
import { products } from '../../../../../sanity/product';
import { type } from 'os';

export interface Product {
    _id:string,
price:number,
title:string,
description:string,
image:IImage
category:{
  name:string
},
slug:string
}


export async function getProducts(): Promise<Product[]> {

    const res = await client.fetch(`*[_type=='products']{
        price,
        _id,
        title,
        discription,
        image,
        category -> {
          name
        },
        slug
       }` );
    return res
}

export type CartItems = {[productID:string]:number};
export type CheckoutResponse = { success:boolean; error?: string
};



export async function checkout(items: CartItems): Promise<CheckoutResponse> {
  const modifier = Object.keys(items).length > 0 ? "success" : "error";
  const url = `/checkout-${modifier}.json`;
  await sleep(500);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(items),
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error);
  }
  return data as CheckoutResponse;
}

const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time));


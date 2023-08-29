'use client'
import React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import Check from '@/app/checkout'
import getStripe from '@/app/lib/getStripe';
import classNames from 'classnames';
import { useAppSelector, useAppDispatch } from '@/app/Hooks/hooks';
import { checkoutCart, getTotalPrice, removeFromCart, updateQuantity } from './cartSlice';
import styles from'../Cart/Cart.module.css';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Cart(){
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products.products);
    const items = useAppSelector(state => state.cart.items);
    const totalPrice = useAppSelector(getTotalPrice);
    const checkoutState = useAppSelector(state =>state.cart.checkoutState);
    const errorMessage = useAppSelector(state => state.cart.errorMessage)
    const {data:session,status}=useSession();
    function onQuantityChanged(e:React.FocusEvent<HTMLInputElement >, id:string){
        const quantity = Number(e.target.value) || 0;
        dispatch(updateQuantity({id,quantity}))
    }
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );

    const handleCheckout =  async () =>{
        const stripe = await stripePromise ;

        const response= await fetch('/api/stripe/checkout',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(items),
        });
        
        const checkoutSession = await response.json();
        
       const result:any=await stripe?.redirectToCheckout({
        sessionId:checkoutSession.id,
       });
       if(result.error){
        alert(result?.error.message);
       }

       

    }
    function onCheckout(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        dispatch(checkoutCart())
    }

    //  const handleSubscription= async(e)=>{
        //  e.preventDefault();
        //  const{data}= await axios.post('/api/payment',
        //  {
            //  priceID:{}
        //  })
    //  }

    const tableClasses = classNames({
        [styles.table]:true,
        [styles.table]:checkoutState==="ERROR",
        [styles.table]:checkoutState==="LOADING",
    })
    return(
      <div>
        <h1>Shopping Cart</h1>
        <table className={  tableClasses}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th> Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(items).map(([id, quantity]) =>(
                <tr key={id}>
                    <td>{products[id].title}</td>
                    <td>
                        <input defaultValue={quantity} type='text' onBlur={(e)=>onQuantityChanged(e, id)}></input>
                    </td>
                    <td>${products[id].price}</td>
                    <td>
                        <button aria-label={`Remove ${products[id].title} from Shopping Cart`} onClick={()=>dispatch(removeFromCart(id))}>
                            X
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td>${totalPrice}</td>
                    <td></td>
                </tr>
            </tfoot>
            {/* <form onSubmit={onCheckout}> */}
      {/* {checkoutState ==="ERROR" && errorMessage?<p className={styles.errorBox}>{errorMessage}</p>:null} */}
      {/* <button type='submit' className=' w-48 bg-slate-700'> */}
      {/* Checkout */}
      {/* </button> */}
  {/* </form> */}
        </table>
       
       
       
       
       
       
        {/* {status==="authenticated"?<form onSubmit={onCheckout}> */}
{/*  */}
    {/* <button type='submit' onClick={()=>(handleCheckout())} className=' w-48 bg-slate-700'> */}
    {/* Checkout */}
    {/* </button> */}
{/* </form>:<form > <button  className=' w-48 bg-slate-700'> */}
{/* khan */}
 {/* </button></form>} */}

 <Check/>
      </div>
    )
}
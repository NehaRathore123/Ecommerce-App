import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItem, setCartItem } from '../store/cart';

export default function ProductDetails() {
    const items =useLoaderData()
    const allItems = useSelector(selectCartItem);

    const [isRemove,setIsRemove]= useState(allItems.some(item=>item.id===items.id))

    const dispatch = useDispatch();

    const addtoCart=()=>{
            let itemstore ={
                id:items.id,
                title:items.title,
                price:items.price,
                quantity:1
            }
            dispatch(setCartItem([...allItems,itemstore]))
            setIsRemove(true)
    }

    const removefromcart=(id)=>{
        dispatch(setCartItem(allItems.filter(item=>item.id !== items.id)))
        setIsRemove(false)
    }
  return (
    <>
    <div className='product-details'>
        <div className='product-image'>
            <img src={items.image}></img>
     </div>
     <div className='product-info'>
        <h2>{items.title}</h2>
        <h4 className='description'>{items.description}</h4>
        <div className='add-to-cart'>
           <h4>price : RS.{items.price}</h4>
           <h4>Rating:{items.rating.rate}</h4>
           <button onClick={()=> isRemove ? removefromcart() : addtoCart()}> {isRemove ? "REMOVE FROM CART" :"Add to cart"}</button>
        </div>
     </div>
    </div>
    </>
  )
}

import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {IoCartOutline} from "react-icons/io5"
import Model from './Model'
import { useSelector } from 'react-redux'
import { selectCartItem } from '../store/cart'

export default function MainNavigation() {
  let dialog=useRef()
  const totalItems=useSelector(selectCartItem)
  const calculateCount=()=>{
    let count=0
    totalItems.forEach(item => {
      count+=item.quantity
    });
    return count
  }
  return (
    <>
    <Model ref={dialog}/>
    <header>
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <div className='icon-cart'>
                <IoCartOutline onClick={()=>dialog.current.showModal()}/>
                  {totalItems.length>0 && <div  className='count'>{calculateCount()}</div>}
                </div>
            </ul>

        </nav>
    </header>
    </>
  )
}

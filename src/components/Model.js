import React from 'react'
import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItem, setCartItem } from '../store/cart'
import { IoMdAdd } from 'react-icons/io'
import { IoMdRemove } from 'react-icons/io'


export default forwardRef( function Model(props,ref) {
    const cartItems = useSelector(selectCartItem)
    const dispatch =useDispatch();

    const addItem=(id)=>{
        dispatch(setCartItem(cartItems.map(item=>item.id===id ? {...item,quantity:item.quantity+1}: item)))
      }

      const removeItem=(id)=>{
        let item = cartItems.find(item=>item.id===id)
        let quantity=item.quantity>1?item.quantity-1:1
        dispatch(setCartItem(cartItems.map(item=>item.id===id ? {...item,quantity}: item)))
      }

      const totalPrice=()=>{
        let total=0
        cartItems.forEach(item=>{
          total+=item.price*item.quantity
        })
        return total.toFixed(2)
      }
  return (
<dialog className='modal' ref={ref}>
    <div>
        {
            cartItems.map(item=>(
                <div className='modal-info'>
                    <h5 className='title'>{item.title} ({item.price})</h5>
                    <div className='quantity'>
                  <button className='add-icon' onClick={()=>addItem(item.id)}><IoMdAdd/></button>
                  <h5>{item.quantity}</h5>
                  <button className='remove-icon'  onClick={() => removeItem(item.id)}><IoMdRemove/></button>
                    </div>
                </div>
            ))
        }
    </div>
    <form className='close' method='dialog'>
        <div>Total :Rs.{totalPrice()} </div>
        <button>Close</button>
    </form>
</dialog>

)
})

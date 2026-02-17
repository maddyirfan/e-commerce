import React from 'react'
import { useSelector } from 'react-redux'
import Men from '../assets/Images/Men.jpg'


const Cart = () => {
    const cart =useSelector(state =>state.cart )
  return (
    <div>
        {cart.products.length > 0 ?
        <div> 
            <h3>SHOPPING CART</h3>
            <div>
                <div>
                    <div>
                        <p>PRODUCTS</p>
                        <div>
                            <p>PRICE</p>
                             <p>QUANTITY</p>
                              <p>SUBTOTAL</p>
                               <p>REMOVE</p>
                        </div>
                    </div>
                    <div>
                        {cart.products.map ((product)=>(
                            <div>
                                <div>
                                    <img src={product.image} alt="" />
                                    <div>
                                        <h3>{product.name}</h3>
                                    </div>
                                    <div>
                                        <p>{product.price}</p> 
                                        <div className='flex'> 
                                            <button></button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div></div>
            </div>
        </div>
     : <div className='flex justify-center'>
        <img src="{Men}" alt="h-96"/>
     </div> }
    </div>
  )
}

export default Cart

import React from 'react'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
    const[{basket},dispatch]=useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                <div className='checkout__title'>
                    <h2>Your basket</h2>
                </div>
                
                {basket.map((item,index)=>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout

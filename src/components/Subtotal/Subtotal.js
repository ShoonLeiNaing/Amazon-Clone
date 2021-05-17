import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider'
import { useHistory } from 'react-router'

function Subtotal() {
    const history = useHistory()
    const[{basket},dispatch]=useStateValue()
    
    const sum = basket.reduce((amount,item)=>amount+item.price,0)
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>Subtotal ({basket.length} items) : <strong>{sum}</strong></p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/>
                        <p style={{marginLeft:'5px'}}>This order contains a gift</p>
                    </small>
                    </>
                )}
                decimalScale={2}
                value={sum}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button onClick={(e)=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

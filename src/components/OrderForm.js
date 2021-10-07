
import React from 'react'

function OrderForm() {
    return (
        <div>
            <div className='container'>
            <label htmlFor = 'Product Name' className='form-label' >Product Name</label>
            <input type='text' className='form-control' id='title' placeholder='Enter the product name'/>
            <br/>

            <label htmlFor = 'Quantity' className='form-label' >Quantity</label>
            <input type='text' className='form-control' id='quantity' placeholder='Enter the quantity'/>
            <br/>

            <label htmlFor = 'Card #' className='form-label' >Card #</label>
            <input type='text' className='form-control' id='card' placeholder='Enter your card number'/>
            <br/>

            <label htmlFor = 'Security' className='form-label' >Security Code</label>
            <input type='text' className='form-control' id='card' placeholder='Enter your security code'/>
            <br/>

            <label htmlFor = 'Date' className='form-label' >Expiration Date</label>
            <input type='date' className='form-control' id='card' />
            <br/>

            <label htmlFor = 'Zip' className='form-label' >Zip Code</label>
            <input type='text' className='form-control' id='card' placeholder='Enter your zip code'/>
            <br/>

            <button className='btn btn-success' onClick=''>Order</button>

        </div>
        </div>
    )
}

export default OrderForm

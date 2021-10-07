
import React, {useState} from 'react';
import APIService from '../APIService';

function OrderForm() {

    const  [name, setName] = useState('')
    const cost = 1.00
    const  [quantity, setQuantity] = useState('')
    const  [card_number, setCardNumber] = useState('')
    const  [code, setCode] = useState('')
    const  [date, setDate] = useState('')
    const  [zip, setZip] = useState('')

    let total = quantity * cost;

    const insertOrder = () => {
        
        APIService.InsertOrder({name,total,card_number,code,date,zip})
        .then(resp => console.log(resp))
        alert('Grab your soda')
    }

    return (
        <div>
            <div className='container'>
            <label htmlFor = 'Product Name' className='form-label' >Product Name</label>
            <input type='text' className='form-control' id='title' placeholder='Enter the product name' onChange={ (e) => setName(e.target.value)}/>

            <label htmlFor = 'Quantity' className='form-label' >Quantity</label>
            <input type='text' className='form-control' id='quantity' placeholder='Enter the quantity'  onChange={ (e) => setQuantity(e.target.value)}/>

            <label htmlFor = 'Card #' className='form-label' >Card #</label>
            <input type='text' className='form-control' id='card' placeholder='Enter your card number' onChange={ (e) => setCardNumber(e.target.value)}/>

            <label htmlFor = 'Security' className='form-label' >Security Code</label>
            <input type='text' className='form-control' id='card' placeholder='Enter your security code' onChange={ (e) => setCode(e.target.value)}/>

            <label htmlFor = 'Date' className='form-label' >Expiration Date</label>
            <input type='date' className='form-control' id='card' onChange={(e) => setDate(e.target.value)}/>

            <label htmlFor = 'Zip' className='form-label' >Zip Code</label>
            <input type='text' className='form-control' id='card' placeholder='Enter your zip code' onChange={ (e) => setZip(e.target.value)}/>
            <br/>

            <button className='btn btn-success' onClick={insertOrder}>Order</button>


        </div>
        </div>
    )
}

export default OrderForm

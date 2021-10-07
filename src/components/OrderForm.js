
import React, {useState} from 'react';
import APIService from '../APIService';

function OrderForm() {

    const  [product_name, setName] = useState('')
    const cost = 1.00
    const  [quantity, setQuantity] = useState('')
    const  [card_number, setCardNumber] = useState('')
    const  [security_code, setCode] = useState('')
    const  [expiration_date, setDate] = useState('')
    const  [zip_code, setZip] = useState('')

    // let total = quantity * cost;

    const insertOrder = () => {
        if (quantity > 1) {
            alert("You can't have more than one drink")
        } else {
            APIService.InsertOrder({product_name,cost,quantity,card_number,security_code,expiration_date,zip_code})
            .then(resp => console.log(resp))
            .catch(error => console.log(error))

            alert('Grab your soda')
            setName('')
            setQuantity('')
            setCardNumber('')
            setCode('')
            setDate('')
            setZip('')
        }
    }



    return (
        <div>
            <div className='container'>
            <label htmlFor = 'Product Name' className='form-label' >Product Name</label>
            <input type='text' className='form-control' id='title' placeholder='Enter the product name' value={product_name} onChange={ (e) => setName(e.target.value)}/>

            <label htmlFor = 'Quantity' className='form-label' >Quantity</label>
            <input type='text' className='form-control' id='quantity' placeholder='Enter the quantity' value={quantity} onChange={ (e) => setQuantity(e.target.value)}/>

            <label htmlFor = 'Card #' className='form-label' >Card #</label>
            <input type='text' className='form-control' id='card' placeholder='Enter your card number' value={card_number} onChange={ (e) => setCardNumber(e.target.value)}/>

            <label htmlFor = 'Security' className='form-label' >Security Code</label>
            <input type='text' className='form-control' id='card' placeholder='Enter your security code' value={security_code} onChange={ (e) => setCode(e.target.value)}/>

            <label htmlFor = 'Date' className='form-label' >Expiration Date</label>
            <input type='date' className='form-control' id='card' value={expiration_date} onChange={(e) => setDate(e.target.value)}/>

            <label htmlFor = 'Zip' className='form-label' >Zip Code</label>
            <input type='text' className='form-control' id='card' placeholder='Enter your zip code'  value={zip_code} onChange={ (e) => setZip(e.target.value)}/>
            <br/>

            <button className='btn btn-success' onClick={insertOrder}>Order</button>


        </div>
        </div>
    )
}

export default OrderForm

import React from 'react'
import CartData from './CartData';
import { useState } from 'react';
function ListProduct({cartData,setEdit,edit}) {
  
    return (

        <div className='h-[600px] bg-[#212124] my-10 rounded-lg'>
            <ul className='flex justify-between border-b border-gray-400   '>
                <li className='text-[#5c6f17] p-3 bg-[#0b0b0c] rounded-md m-3'>Name</li>
                <li className='text-[#5c6f17] p-3  bg-[#0b0b0c] rounded-md m-3'>Cateogary</li>
                <li className='text-[#5c6f17] p-3  bg-[#0b0b0c] rounded-md m-3'>Price</li>
                <li className='text-[#5c6f17] p-3  bg-[#0b0b0c] rounded-md m-3'>Quantity</li>
                <li className='text-[#5c6f17] p-3  bg-[#0b0b0c] rounded-md m-3'>Value</li>
                <li className='text-[#5c6f17] p-3  bg-[#0b0b0c] rounded-md m-3'>Actions</li>
            </ul>
            {
                cartData.map((item) => <CartData data={item} setEdit={setEdit} edit={edit}></CartData>)
            }
        </div>
    )
}

export default ListProduct
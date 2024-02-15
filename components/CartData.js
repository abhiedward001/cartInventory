import React from 'react'
import { useState } from 'react';



function CartData({data,setEdit,edit}) {
    // console.log(data);
    const editHandler=()=>{
      setEdit(!edit);
      // console.log("hua")
    }
  return (
    <>
    <div>
        <ul className='flex h-20 border-b border-gray-400 '>
            <li className='text-white mr-32 w-36 my-3 pl-4 '>{data.name}</li>
            <li className='text-white mr-52 w-20 my-3'>{data.category}</li>
            <li className='text-white mr-56 w-10 my-3'>{data.price}</li>
            <li className='text-white mr-60 w-10 my-3'>{data.quantity}</li>
            <li className='text-white my-3 w-6 mr-52'>{data.value}</li>

            <div className='flex'>
            <button className='text-white my-3 px-2' onClick={editHandler}><i class="fa-solid fa-pen"></i></button>
            <button className='text-white my-3 px-2'><i class="fa-regular fa-eye"></i></button>
            <button className='text-white my-3 px-2'><i class="fa-solid fa-trash"></i></button>
            </div>
        </ul>
      
           
   
    </div>
    </>
  )
}

export default CartData;
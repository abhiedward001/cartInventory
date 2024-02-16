import React from 'react'
import { useState } from 'react';
import Edit from './Edit';
import { UseSelector, useDispatch } from 'react-redux';
import { removeItem } from '../utils/cartSlice';

function CartData({ data, userAccess }) {

  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    setEdit(!edit);
  }

  const deleHandler = () => {
    console.log(data);
    dispatch(removeItem(data));
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

            {!userAccess ? (
              <button className='text-white my-3 px-2' onClick={editHandler}>
                <i className="fa-solid fa-pen bg-green-500 rounded-2xl p-2"></i>
              </button>
            ) : (
              <button className='text-white my-3 px-2 disabled' disabled>
                <i className="fa-solid fa-pen  "></i>
              </button>
            )}

            {!userAccess ? (
              <button className='text-white my-3 px-2'>
                <i class="fa-regular fa-eye"></i>
              </button>
            ) : (
              <button className='text-white my-3 px-2'>
                <i class="fa-regular fa-eye"></i>
                </button>
            )}

            {!userAccess ? (
               <button className='text-white my-3 px-2' onClick={deleHandler}>
                <i class="fa-solid fa-trash bg-red-500 p-2 rounded-2xl"></i>
                </button>
            ) : (
              <button className='text-white my-3 px-2 disabled' disabled >
                <i class="fa-solid fa-trash "></i>
                </button>
            )}

          </div>
        </ul>

        {edit && <Edit data={data} setEdit={setEdit} edit={edit} ></Edit>}

      </div>

    </>
  )
}

export default CartData;
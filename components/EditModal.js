import React from 'react'

function EditModal({data,cateogary,price,value,quantity,catHandler,priceHandler,valHandler,qtyHandler}) {
  return (
    <div>
        <div className='m-4 p-4'>
                <h2 className='text-white text-4xl p-2'>Edit Product</h2>
                <h3 className='text-white text-xl p-2'>{data.name}</h3>
            </div>
            <div className='flex flex-wrap justify-between'>
                <ul className='m-2 p-2'>
                    <label className='text-white  p-2'>cateogary</label><br></br>
                    <input className='rounded-md p-1' placeholder={data.category} type="text" value={cateogary} onChange={catHandler}></input>
                </ul>
                <ul className='m-2 p-2'>
                    <label className='text-white  p-2'>Price</label><br></br>
                    <input className='rounded-md p-1' placeholder={data.price} type='text' value={price} onChange={priceHandler}></input>
                </ul>
                <ul className='m-2 p-2'>
                    <label className='text-white  p-2'>Quantity</label><br></br>
                    <input className='rounded-md p-1' placeholder={data.quantity} type='text' value={quantity} onChange={qtyHandler}></input>
                </ul>
                <ul className='m-2 p-2'>
                    <label className='text-white  p-2'>Value</label><br></br>
                    <input className='rounded-md p-1' placeholder={data.value} type='text' value={value} onChange={valHandler}></input>
                </ul>
            </div>
    </div>
  )
}

export default EditModal
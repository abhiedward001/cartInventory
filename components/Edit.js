import React from 'react'

function Edit({setEdit,edit}) {

    const editHandler=()=>{
        setEdit(!edit);
      }
    return (
        <div className='h-[480px] bg-[#292b27] w-[680px] rounded-lg absolute top-[55%] left-[30%]'>
            <div className='m-4 p-4'>
                <h2 className='text-white text-4xl p-2'>Edit Product</h2>
                <h3 className='text-white text-xl p-2'>Title</h3>
            </div>
            <div className='flex flex-wrap justify-between'>
                <ul className='m-2 p-2'>
                    <label className='text-white  p-2'>cateogary</label><br></br>
                    <input className='rounded-md p-1' placeholder='phone'></input>
                </ul>
                <ul className='m-2 p-2'>
                    <label className='text-white  p-2'>Price</label><br></br>
                    <input className='rounded-md p-1' placeholder='50'></input>
                </ul>
                <ul className='m-2 p-2'>
                    <label className='text-white  p-2'>Quantity</label><br></br>
                    <input className='rounded-md p-1' placeholder='0'></input>
                </ul>
                <ul className='m-2 p-2'>
                    <label className='text-white  p-2'>Value</label><br></br>
                    <input className='rounded-md p-1' placeholder='0'></input>
                </ul>
            </div>
            <div>
                <button className='bg-black p-2 w-30 rounded-md text-[#5c6f17] m-3' onClick={editHandler}>Cancel</button>
                <button className='bg-black p-2 w-30 rounded-md text-[#5c6f17] m-2'>Save</button>
            </div>
        </div>
    )
}

export default Edit
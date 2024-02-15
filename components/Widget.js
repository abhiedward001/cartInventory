import React from 'react'

function Widget({cartData,totalValue,outOfStock,cateogarySize}) {
    return (
        <div className='flex flex-wrap justify-between my-10'>
            <div className='bg-[#203424] p-5 rounded-md h-40 w-72'>
                <h1 className='text-white text-2xl'>Total Products</h1>
                <h3 className='text-white text-4xl mt-4'>{cartData.length}</h3>
            </div>
            <div className='bg-[#203424] p-5 rounded-md  h-40 w-72'>
                <h1 className='text-white text-2xl'>Total Store Value</h1>
                <h3 className='text-white text-4xl mt-4'>{totalValue}</h3>
            </div>
            <div className='bg-[#203424] p-5 rounded-md  h-40 w-72'>
                <h1 className='text-white text-2xl'>Out Of Stocks</h1>
                <h3 className='text-white text-4xl mt-4'>{outOfStock}</h3>
            </div>
            <div className='bg-[#203424] p-5 rounded-md  h-40 w-72'>
                <h1 className='text-white text-2xl'>No Of Cateogary</h1>
                <h3 className='text-white text-4xl mt-4'>{cateogarySize}</h3>
            </div>
        </div>
    )
}

export default Widget
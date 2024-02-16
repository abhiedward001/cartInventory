import React from 'react'

function Widget({ cartData, totalValue, outOfStock, cateogarySize }) {
    return (
        <div className='flex flex-wrap justify-between my-10'>
            <div className='bg-[#203424] p-5 rounded-md h-52 w-72'>
                <div className='flex flex-wrap justify-between'>
                    <i class="fa-solid fa-cart-shopping text-3xl text-white"></i>
                    <h1 className='text-white text-2xl '>Total Products</h1>
                </div>

                <h3 className='text-white text-4xl mt-4'>{cartData.length}</h3>
            </div>
            <div className='bg-[#203424] p-5 rounded-md  h-52 w-72'>
                <div className='flex flex-wrap justify-between'>
                    <i class="fa-solid fa-dollar-sign text-3xl text-white p-2"></i>
                    <h1 className='text-white text-2xl'>Total Store Value</h1>
                </div>

                <h3 className='text-white text-4xl mt-4'>{totalValue}</h3>
            </div>
            <div className='bg-[#203424] p-5 rounded-md  h-52 w-72'>
                <div className='flex flex-wrap justify-between'>
                    <i class="fa-brands fa-opencart text-3xl text-white p-2"></i>
                    <h1 className='text-white text-2xl'>Out Of Stocks</h1>
                </div>

                <h3 className='text-white text-4xl mt-4'>{outOfStock}</h3>
            </div>
            <div className='bg-[#203424] p-5 rounded-md  h-52 w-72'>
                <div className='flex flex-wrap justify-between'>
                    <i class="fa-solid fa-shapes text-3xl text-white "></i>
                    <h1 className='text-white text-2xl'>No Of Cateogary</h1>
                </div>

                <h3 className='text-white text-4xl mt-4'>{cateogarySize}</h3>
            </div>
        </div>
    )
}

export default Widget
import React from 'react'
import { useState, useEffect } from 'react';
import Switch from './Switch';
import Widget from './Widget';
import ListProduct from './ListProduct';

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function Cart() {
 
    const [userAccess,setUserAccess]=useState(false);
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const Api = "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";
        try {
            const data = await fetch(Api);
            const jsonData = await data.json();
            jsonData.map((item)=>{item.id=parseInt(Math.random() * 13283*1294)});
            dispatch(addItem(jsonData));
        } catch (error) {
            console.log(error);
            console.log("I guess Rate Limit is enabled on this api thats why we are getting this issue");
            alert(`${error}. Rate Limit is enabled,Refresh After Sometime`);
        }
    }
      if(cartItems.length===0){
        return <div>
        <h1 className='text-5xl text-gray-500 absolute top-[50%] left-[45%]'>Loading....</h1>
        </div>
      }
      console.log(cartItems);
    let outOfStock = 0;
    let category = {};
    let totalValue = cartItems.reduce((accumulator, currentValue) => accumulator + ((currentValue.value[0]==='$') ? (+currentValue.value.slice(1)) : (+currentValue.value)),
        0)
        cartItems.map(item => {
        if (item.quantity === 0) outOfStock++;
        category[item.category] = 1;
    })
    var cateogarySize = Object.keys(category).length;

    return (
        <>
                <Switch userAccess={userAccess} setUserAccess={setUserAccess}></Switch>
                <div className='containerCart my-24 mx-10'>
                    <h1 className='text-gray-400 text-4xl '> Inventory Stats</h1>
                    <Widget cartData={cartItems} totalValue={totalValue} outOfStock={outOfStock} cateogarySize={cateogarySize} ></Widget>
                    <ListProduct userAccess={userAccess} ></ListProduct>   
                </div>
        

        </>

    )
}

export default Cart
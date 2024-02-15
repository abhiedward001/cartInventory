import React from 'react'
import { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import Switch from './Switch';
import Widget from './Widget';
import ListProduct from './ListProduct';
import Edit from './Edit';
import AppStore from '../utils/AppStore';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function Cart() {


    const [cartData, setCartData] = useState([]);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const Api = "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";
        try {
            const data = await fetch(Api);
            const jsonData = await data.json();
            setCartData(jsonData);
            dispatch(addItem())
        } catch (error) {
            console.log(error);
            console.log("I guess Rate Limit is enabled on this api thats why we are getting this issue");
        }
    }

    let outOfStock = 0;
    let category = {};
    let totalValue = cartData.reduce((accumulator, currentValue) => accumulator + ((currentValue.value.length >= 1) ? (+currentValue.value.slice(1)) : (+currentValue.value)),
        0)
    cartData.map(item => {
        if (item.quantity === 0) outOfStock++;
        category[item.category] = 1;
    })
    var cateogarySize = Object.keys(category).length;

    return (
        <>
            <Provider store={AppStore}>
                <Switch></Switch>
                <div className='containerCart my-24 mx-10'>
                    <h1 className='text-gray-400 text-4xl '> Inventory Stats</h1>
                    <Widget cartData={cartData} totalValue={totalValue} outOfStock={outOfStock} cateogarySize={cateogarySize} ></Widget>
                    <ListProduct cartData={cartData} setEdit={setEdit} edit={edit} ></ListProduct>
                    {edit && <Edit setEdit={setEdit} edit={edit} ></Edit>}
                </div>
            </Provider>

        </>

    )
}

export default Cart
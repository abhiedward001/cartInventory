import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateItem } from '../utils/cartSlice';
import EditModal from './EditModal';
function Edit({ data, setEdit, edit }) {

    const dispatch = useDispatch();

    const editHandler = () => {
        setEdit(!edit);
    }

    const [cateogary, setCateogary] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [value, setValue] = useState("");

    const catHandler = (e) => {
        setCateogary(e.target.value);
    }
    const priceHandler = (e) => {
        setPrice(e.target.value);
    }
    const qtyHandler = (e) => {
        setQuantity(e.target.value);
    }
    const valHandler = (e) => {
        setValue(e.target.value);
    }


    const saveHandler = () => {
        const updObj = {};
        updObj.id = data.id;
        updObj.cat = cateogary;
        updObj.price = price;
        updObj.quantity = quantity;
        updObj.value = value;

        dispatch(updateItem(updObj));
        setEdit(!edit);

    }

    return (
        <div className='h-[480px] bg-[#292b27] w-[680px] rounded-lg absolute top-[55%] left-[30%]'>
            <EditModal data={data} cateogary={cateogary} price={price} value={value} quantity={quantity} catHandler={catHandler} priceHandler={priceHandler} qtyHandler={qtyHandler} valHandler={valHandler} >

            </EditModal>
            <div>
                <button className='bg-black p-2 w-30 rounded-md text-[#5c6f17] m-3' onClick={editHandler}>Cancel</button>
                <button className='bg-black p-2 w-30 rounded-md text-[#5c6f17] m-2' onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}

export default Edit
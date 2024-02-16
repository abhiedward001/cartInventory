import { createSlice } from "@reduxjs/toolkit";
import { original } from 'immer'

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            action.payload.map(item=>state.items.push(item));
        },
        updateItem:(state,action)=>{
             const Data=JSON.stringify(state);
             let nData=JSON.parse(Data);
            const { id, cat,price,quantity,value } = action.payload;
            console.log(id);
            let update=nData.items.map(item =>
               (item.id===id)?
               ({...item,category:cat,price:price,value:value,quantity:quantity}):item
              )
              state.items=update;
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearItem:(state,action)=>{
           
        }
    }
});

export const { addItem, removeItem,updateItem, clearItem } = cartSlice.actions

export default cartSlice.reducer;
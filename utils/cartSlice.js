import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        updateItem:(state,action)=>{
            
        },
        removeItem:(state,action)=>{
           
        },
        clearItem:(state,action)=>{
           
        }
    }
});

export const { addItem, removeItem,updateItem, clearItem } = cartSlice.actions

export default cartSlice.reducer;
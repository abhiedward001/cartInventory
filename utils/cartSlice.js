import { createSlice } from "@reduxjs/toolkit";
import { original } from 'immer'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            action.payload.map(item => state.items.push(item));
        },

        updateItem: (state, action) => {
            const { id, cat, price, quantity, value } = action.payload;
            state.items = state.items.map(item =>
                (item.id === id) ? { ...item, category: cat, price, value, quantity } : item
            );
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },

        clearItem: (state, action) => {

        }
    }
});

export const { addItem, removeItem, updateItem, clearItem } = cartSlice.actions

export default cartSlice.reducer;
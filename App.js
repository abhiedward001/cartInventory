
import React from 'react'
import reactDOM from "react-dom/client";
import Cart from './components/Cart';
import { useState } from 'react';

const App = () => {
    
    return (
        <div>
        <Cart></Cart> 
        </div>
    )
}
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

import React from 'react'
import reactDOM from "react-dom/client";
import Cart from './components/Cart';
import { useState } from 'react';
import AppStore from './utils/AppStore';
import { Provider } from "react-redux";

const App = () => {
    
    return (
        <div>
             <Provider store={AppStore}>
             <Cart></Cart>
             </Provider>
      
        </div>
    )
}
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
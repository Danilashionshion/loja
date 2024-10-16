import { createContext, useState } from "react";

export const CartContext = createContext([])

export default function ContextProvider({children}){
    const[products,setproducts] = useState([])

    return(
        <CartContext.Provider value={[products, setproducts]}>{children}</CartContext.Provider>
    )
}

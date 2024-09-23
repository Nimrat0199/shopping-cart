import {createContext, useContext} from "react"

export const CartContext = createContext({
    carts: [
        {
        }
    ],
    addCart: (cart) => {},
    updateCart: (id, cart) => {},
    deleteCart: (id) => {},
})


export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = CartContext.Provider
import React, { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import Card2 from "./Card2";

function Cart(){
    const {carts,addCart,updateCart,deleteCart}= useCart();


    return(
        <div className=" md:w-full lg:mx-auto md:flex gap-4 flex-wrap justify-center mx-3 mt-9 lg:p-5 min-h-[600px]">
            {carts && carts.map((cart)=><Card2 key={cart.id} link={cart}/>)}
        </div>
    )
}

export default Cart;
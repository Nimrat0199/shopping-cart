import React from "react";
import {NavLink} from "react-router-dom";
import { useCart } from "../Context/Cartcontext";

function Header(){

    const {carts} = useCart();


    return(
        <div className="w-full h-14 items-center flex justify-between pl-2 lg:pl-4 pr-3 bg-[#050517] ">
            <div className="text-[#CF5C36] lg:text-3xl text-xl font-bold font-serif ">
                <u>E-Shop</u>
            </div>
            <div className="flex lg:gap-10 gap-3 lg:text-xl text-sm">
            <NavLink
            to="/"
            className={({isActive}) =>
                ` ${isActive ? "text-[#CF5C36]" : "text-white"}  hover:text-[#CF5C36] `
             }
            >
                Home
            </NavLink>
            <NavLink className="text-white hover:text-[#CF5C36]">
                About
            </NavLink>
            </div>
            <div>
            <NavLink
            to="cart"
            className={({isActive}) =>
                ` ${isActive ? "text-[#CF5C36]" : "text-white"}  hover:text-[#CF5C36]`
             }
            >
                <i className="fa-solid fa-cart-shopping  fa-lg"></i>
            </NavLink>
            <span className="  min-w-14 text-[#CF5C36] lg:text-sm text-xs text-center">({carts.length})</span>
            </div>
            
        </div>
    )
}

export default Header;
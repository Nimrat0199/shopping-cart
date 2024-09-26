import React, { useRef, useState } from "react";
import { useCart } from "../Context/Cartcontext";



function Card2({link}){
    const [price,setPrice] = useState(link.price*link.qty)
    const {updateCart,deleteCart}= useCart();
    const delref=useRef(null);

    const chngqty=(e)=>{
        updateCart(link.id,{...link , qty:e.target.value})
        setPrice(e.target.value*100)
    }
    const del=()=>{
        delref.current.classList.add("hidden")
        deleteCart(link.id)
    }

    return(
        <div ref={delref} className="p-2 md:w-[45%] md:flex lg:mb-0 mb-5 justify-between lg:justify-around items-center border-2 border-gray-700 text-white">
        <div className="">
            <img src={link.image} className="h-40 w-40 lg:h-60 lg:w-52 mx-auto  lg:mx-0" />
        </div>
        <div className="text-center lg:text-left md:w-[45%]  ">
            <span className="text-xl">{link.title}</span>
            <div className="flex items-center justify-center lg:justify-start lg:mt-5 lg:mb-3">
                <h1 className="text-sm lg:text-lg  mr-3">QTY :</h1>
                <input 
                    id="qty" 
                    defaultValue={link.qty} 
                    onChange={chngqty} 
                    type="number" 
                    className="w-8 lg:w-10 text-black text-sm lg:text-lg lg:font-bold border border-gray-300 rounded" 
                />
            </div>
            <h1 className="text-lg lg:text-3xl font-bold lg:mb-3">${price}</h1>
            <button className="bg-red-500 text-sm lg:text-lg px-3 py-1 rounded hover:bg-red-600" onClick={del}>
                Remove from cart
            </button>
        </div>
    </div>
    

    )
}

export default Card2
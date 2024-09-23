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
        <div ref={delref} className="p-2  md:w-[40%] md:flex md:mb-0 mx-auto mb-5 md:mx-0 justify-between    md:justify-around items-center text-white  ">
            <div className="w-full">
            <img src={link.image} className="lg:h-60 lg:w-52 lg:mx-0 h-40 mx-[20%]  w-40 mr-2"></img>
            </div>
            <div className="text-center">
                <h1 className="lg:text-xl text-lg lg:w-60 font-medium lg:font-bold">{link.title}</h1>
                <h1 className="lg:font-bold lg:text-lg text-sm inline-block mr-3 lg:mt-5 lg:mb-3">QTY : </h1>
                <input id="qty" defaultValue={link.qty} onChange={chngqty} type="number" className="lg:w-10 w-5 text-black lg:text-lg text-sm lg:font-bold"></input>
                <h1 className="lg:text-3xl text-lg font-bold lg:mb-3">${price}</h1>  
                <button className="bg-red-500 lg:text-lg text-sm px-3" onClick={del}>Remove from cart</button>
            </div>
        </div>
    )
}

export default Card2
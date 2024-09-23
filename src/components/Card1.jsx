import React, { useEffect, useState } from "react";
import { useCart } from "../Context/Cartcontext";

function Card1({link}){
    const [click , setClick] = useState(false)
    const {carts,addCart}= useCart();

    const add=()=>{
        addCart({id:link.id, qty:1, image:link.image, title:link.title, price:link.price})
        setClick(true)
    }

    useEffect(()=>{
        carts.forEach((obj)=>{
            if(obj.id===link.id) setClick(true)
        })
    },[])

    return(
        <div className=" lg:w-60   text-center bg-[#050517] text-white  p-2">
            <img src={link.image} className="lg:h-60 lg:mx-0 mx-auto lg:w-56 w-32 h-40 "/>
            <h1 className="lg:text-xl lg:w-56 w-44 font-semibold text-lg lg:min-h-28 min-h-14">{link.title}</h1>
            <div className="w-full flex justify-between lg:pl-1 pt-2" >
                <h1 className=" lg:text-xl text-lg"><u>Price: ${link.price}</u></h1>
                <button className={`${click ? 'bg-[#577590]' : 'bg-[#CF5C36]'} lg:p-1 hover:bg-[#577590]`} onClick={add}>
                {click ? "Added!" : "Add to cart"}
                </button>
            </div>
        </div>
    )
}

export default Card1;
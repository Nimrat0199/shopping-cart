import React from "react";


const Fetchproducts=async()=>{
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const json =await response.json();
        console.log(json);
        return json;
    }
    catch(error){
        console.log("sorry there is an error")
    }
}


export default Fetchproducts
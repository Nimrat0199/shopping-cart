import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
import Fetchproducts from "../hooks/Fetch";

function Home(){
    const [prod,setProd] = useState([])
    

    const load = async()=>{
        const data = await Fetchproducts();
        setProd(data);
    }

    useEffect(()=>{
        load();
    },[])

    return(
        <>
        <div className="flex gap-x-4 w-[85%] gap-y-10 mx-auto min-h-[600px] flex-wrap mt-16 justify-center">
        {prod.map((item)=><Card1 key={item.id} link={item}/>)}
        </div>
        </>
    )
}


export default Home;
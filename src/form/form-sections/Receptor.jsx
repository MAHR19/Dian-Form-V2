import React from "react";
import { useState, useEffect } from "react";

const Receptor = ({onChange}) =>{
    const[data, setData] = useState("")
    const[data2, setData2] = useState("")
    useEffect(()=>{
       onChange({
          data,
          data2
       });
    },[data, data2]);


    return(
        <div>
            <input type="text" name="fname" value={data} 
            onChange={(e) => setData(e.target.value)} />
            <input type="text" name="Lname" value={data2} 
            onChange={(e) => setData2(e.target.value)} />
        </div>
    );
}

export default Receptor;
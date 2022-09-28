import React from "react";
import { useState } from "react";
import Receptor from "./form-sections/Receptor";


const Fullform = () =>{

    const[data, setData] = useState({});

    const onClick = () =>{
        console.log(data)
    }

    return(
        <div>
            <form action="">
             <Receptor onChange={setData} />
             <button type="button" onClick={onClick}>
                Save
            </button>     
            </form>
        </div>
    );
} 

export default Fullform;
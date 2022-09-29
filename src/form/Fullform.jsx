import React from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import Receptor from "./form-sections/Receptor";


const Fullform = () =>{

    const[receptor, setReceptor] = useState({});
    const[documento, setDocumento] = useState({});

    const onClick = () =>{
        //setData([...data,{info:""}])
        console.log(receptor)
        console.log(documento)
    }

    return(
        <div>

            <form action="">
             <Grid container spacing={2}>
                
                <Grid item md={6}>
                <h1>receptor</h1>
                    <Receptor onChange={setReceptor} />
                </Grid>
             </Grid>
             
             
             <button type="button" onClick={onClick}>
                Save
            </button>     
            </form>
        </div>
    );
} 

export default Fullform;
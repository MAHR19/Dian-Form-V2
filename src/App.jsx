import React from "react";
import FullformFE from "./form/FullformFE";
import Login from "./login/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Paper } from "@mui/material";

const darkmode = createTheme({
    palette:{
        mode : 'dark'
    },
});

const App = () =>{
    return(
        <div>
            <FullformFE />
        </div>
    );
}
export default App;
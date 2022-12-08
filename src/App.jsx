import React from "react";
import Fullform from "./form/Fullform";
import Login from "./login/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkmode = createTheme({
    palette:{
        mode : 'dark'
    },
});

const App = () =>{
    return(
        <div>
            <ThemeProvider theme={darkmode}>
                <CssBaseline />
            <Fullform />

            </ThemeProvider>
            
        </div>
    );
}
export default App;
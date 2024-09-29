import React from "react";
import "./style.css";
import { AppBar, Container, Toolbar } from "@mui/material";


const Header = () => {
    return <AppBar position="static" sx={{"background-color":"#f4f4f4"}}>
                <Container>
                    <Toolbar disableGutters >

                    </Toolbar>
                </Container>
            </AppBar>


}

export default Header;

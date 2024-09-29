import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./index.css";
const Layout = ({children}) => {

    return <>
        <Header/>
        <main className="content-holder">{children}</main>
        <Footer/>
    </>
}

export default Layout;
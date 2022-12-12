import React from "react";
import Header from "./header"
import BottomNav from "./bottomNav";
import Footer from "./footer"

const Layout = props =>{
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
            <BottomNav/>
        </div>
    )
}
export default Layout

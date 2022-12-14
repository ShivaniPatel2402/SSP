import React from "react";
import { Link } from "gatsby";
import * as bottomStyles from "../components/bottomNav.module.css"

const BottomNav = () => {
    return (
        <div className= {bottomStyles.navWrapper}>
            <div className={bottomStyles.mainNav}>
            <Link to= "/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to= "/gallery">Gallery Page</Link>
            </div>
        </div>
    )
}
export default BottomNav

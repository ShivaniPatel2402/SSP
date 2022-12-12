import React from 'react'
import * as footerStyles from "./footer.modules.css"


const footer =() => {
    const year = new Date ().getFullYear();

    return <p className={ footerStyles.footer}>{'Copyright Shivani Patel ${year}'}</p>;
};
 
export default footer;



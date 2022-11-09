import { navigate } from 'gatsby'

import * as heroStyles from "./hero.modules.css"
import React from 'react'

const header = ()=> {
    return (
        <header className={heroStyles.heroStyles}>
            <div>

            </div>
            <div className={heroStyles.heroContainer}>
             <div className={heroStyles.heroInfo}> 
                <h1> Shivani S. Patel</h1>
                <p> Cybersecurity and Information Design</p>
                <button className='heroButton' onClick={()=>{navigate("about")}}>How We Can Help</button>

            </div>
            </div>
            
        </header> 
    )  
} 
export default header

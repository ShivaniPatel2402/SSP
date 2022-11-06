import * as React from "react"
import { Link } from "gatsby"
import "..components/index.css"



const Index = () => {
   return (
      <header> className='hero'
      <div> className='heroContainer'
            <div> className='heroInfo'
            <h1>Shivani S. Patel</h1>
            <p>Cybersecurity and Information</p>
         <Link to="/about">About Page</Link>
         <h1>My Landing Page</h1>
         <p>This is my landing page</p>
         </div>
      </div>
      </header>
   );
  }
  export default Index

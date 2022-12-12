import * as React from "react";
import Layout from "../components/layout"
import Card from "../components/card"
import "..components/index.css"
import { Link } from "gatsby";


const Index = () => {
   return(
      <Layout>
         <div className= "Cards">
         <h2> How can we help</h2>
         <div className="cardGroup">
            <div className= "cardOne">
               <Link to= "/services">
            <Card 
         title="Web Design"
         text="Sub Title"
         /> 
         </Link>
         </div>
         <div className= "cardTwo">
         <Link to="/services"> 
         <Card 
         title="Custom photography"
         text="Location or Studio"
         /> 
         </Link>
         </div>
         <div className= "cardThree">
            <Link to= "/services">
         <Card 
         title="Ideas and Recommendation"
         text="Let us build up your web presence "
         /> 
         </Link>
         </div>
         </div>
         </div> 
      </Layout>
   )
   }
  export default Index

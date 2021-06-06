import React, { useState } from "react"
import './Navbar.css';
import {navData} from './Data'

 function Navbar(){
    const [showLinks,setShowLinks] = useState(false);

    const dropdown = () =>{
        setShowLinks(!showLinks)
    }

    return (
        <>
           <div className="Navbar">
               <div className="logo">
                   <a href={""}><img src={navData.brand}/></a>
               </div>
               <div className="Navlinks">
                   <div className={showLinks ? 'NavlinksContent' : null}>
                       <div className="dropdown">
                           <img src={showLinks ? navData.cancel : navData.menu} onClick={dropdown}/>
                       </div>
                       <div className="links" id={showLinks ? "hidden" : ""}>
                           <a href={""}>{navData.route1}</a>
                           <a href={""}>{navData.route2}</a>
                           <a href={""}>{navData.route3}</a>
                           <a className="contact" href={""}>{navData.route4}</a>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
 }

 export default Navbar;
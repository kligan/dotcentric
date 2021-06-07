import React, { useState } from "react"
import './Navbar.css';
import {navData} from './Data';
import { Link } from "react-router-dom";

 function Navbar(){
    const [showLinks,setShowLinks] = useState(false);

    const dropdown = () =>{
        setShowLinks(!showLinks)
    }

    return (
        <>
           <div className="Navbar">
               <div className="logo">
                   <Link to="/"><img alt="brand" src={navData.brand}/></Link>
               </div>
               <div className="Navlinks">
                   <div className={showLinks ? 'NavlinksContent' : null}>
                       <div className="dropdown">
                           <img alt="navbar" src={showLinks ? navData.cancel : navData.menu} onClick={dropdown}/>
                       </div>
                       <div className="links" id={showLinks ? "hidden" : ""}>
                           <Link to="/">{navData.route1}</Link>
                           <Link to="/">{navData.route2}</Link>
                           <Link to="/">{navData.route3}</Link>
                           <Link to="/"><span className="contact">{navData.route4}</span></Link>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
 }

 export default Navbar;
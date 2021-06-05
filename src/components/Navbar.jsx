import React, { useState } from "react"
import './Navbar.css';

 function Navbar(){
    const [showLinks,setShowLinks] = useState(false);

    const dropdown = () =>{
        setShowLinks(!showLinks)
    }

    return (
        <>
           <div className="Navbar">
               <div className="logo">
                   <button type="button">LOGO</button>
               </div>
               <div className="Navlinks">
                   <div className="links" id={showLinks ? "hidden" : ""}>
                       <a href={""}>About Us</a>
                       <a href={""}>About You</a>
                       <a href={""}>Portfolio</a>
                       <a href={""}>Contact</a>
                   </div>
                   <div className="dropdown">
                       <button onClick={dropdown}>Dropdown</button>
                   </div>
               </div>
           </div>
        </>
    )
 }

 export default Navbar;
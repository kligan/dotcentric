import React, { useState } from "react"
import './navbar/Navbar.css';
import {navData} from './Data';
import Brand from './navbar/Brand';
import Links from './navbar/Links';

 function Navbar(){
     const {brand, cancel, menu, route1, route2, route3, route4} = navData;
    const [showLinks,setShowLinks] = useState(false);

    const dropdown = () =>{
        setShowLinks(!showLinks)
    }

    return (
        <>
           <div className="Navbar">
               <Brand {...{brand}} />
               <Links {...{showLinks, cancel,menu,dropdown, route1, route2, route3, route4}} />
           </div>
        </>
    )
 }

 export default Navbar;
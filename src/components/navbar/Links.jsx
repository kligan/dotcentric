import {Link} from "react-router-dom";
import React from "react";

function Links(props){
    const {showLinks, cancel,menu,dropdown, route1, route2, route3, route4} = props;
    return(
        <>
            <div className="Navlinks">
                <div className={showLinks ? 'NavlinksContent' : null}>
                    <div className="dropdown">
                        <img alt="navbar" src={showLinks ? cancel : menu} onClick={dropdown}/>
                    </div>
                    <div className="links" id={showLinks ? "hidden" : ""}>
                        <Link to="/aboutUs">{route1}</Link>
                        <Link to="/aboutYou">{route2}</Link>
                        <Link to="/portfolio">{route3}</Link>
                        <Link to="/contact"><span className="contact">{route4}</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Links;
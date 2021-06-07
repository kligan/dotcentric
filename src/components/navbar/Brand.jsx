import {Link} from "react-router-dom";
import React from "react";

function Brand(props) {
    return(
        <>
            <div className="logo">
                <Link to="/"><img alt="brand" src={props.brand}/></Link>
            </div>
        </>
    )
}

export default Brand;
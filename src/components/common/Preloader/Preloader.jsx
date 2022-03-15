import loading from "../../../assets/images/loading.gif";
import React from "react";

function Preloader() {
    return(
        <div>
            <img src={loading} alt="loading"/>
        </div>
    )
}

export default Preloader
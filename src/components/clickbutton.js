import React from "react";

function Clickbutton ({buttontitle, onclickfunction}) {

    return (
        <div>
            <button onClick={onclickfunction}>{buttontitle}</button>
        </div>
    );
}

export default Clickbutton; 
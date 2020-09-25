import React from 'react';

import './Infobar.css';

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

const Infobar = ({ room }) => ( // we're using () here because we are only returning the div below


    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online image" />
            {/* <h3>roomName</h3> */}
            <h3>{room}</h3>
        </div>

        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close image"/></a>
        </div>
    </div>
)

export default Infobar;
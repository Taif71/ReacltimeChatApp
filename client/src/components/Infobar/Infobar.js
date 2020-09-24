import React from 'react';

import './Infobar.css';

import closeIcon from "../../icons/closeIcon";
import onlineIcon from "../../icons/onlineIcon";

const Infobar = ({ room }) => {


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
}

export default Infobar;
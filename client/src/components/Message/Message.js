import React from 'react';

//import ReactEmoji from 'react-emoji';

import './message.css';

const Message = ({ message: { text, user }, name }) => {

        let isSentByCurrentUser = false;

        const trimmedName= name.trim().toLowerCase();
        
        // check whether user === tr
        if(user === trimmedName) {
            isSentByCurrentUser = true;
        }

        return (
            //If message sent by current User
            isSentByCurrentUser ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{text}</p>
                    </div>
                </div>
            ) : (
            //If message not sent by current User
                <div className="messageContainer justifyStart">
                    
                    <div className="messageBox backgroundLight">
                         <p className="messageText colorDark">{text}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            )
        )
}



export default Message;
import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message/Message';

import './messages.css';

const Messages = ({ messages, name }) => (
    <ScrollToBottom>
        {messages.map((messages, i) => <div key={i}><Message message={messages} name={name} /></div>)}
    </ScrollToBottom>
);

export default Messages;


// react-scroll-to-bottom
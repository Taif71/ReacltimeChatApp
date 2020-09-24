import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
    // since we only have return () inside here we do not need the {}. We can just use ();


    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
        
        
    </Router>
);

export default App;
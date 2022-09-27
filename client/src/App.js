import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Join from './Components/Join/Join.js';
import Chat from './Components/Chat/Chat.js';
const App = () => {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Join/>} exact />
        <Route path="/Chat" element={<Chat/>} />
      </Routes>
    </Router>
  )
};

export default App;

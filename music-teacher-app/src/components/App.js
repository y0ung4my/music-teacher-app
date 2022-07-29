import React from "react";
import Header from "./Header";
import MainControl from "./MainControl/MainControl";
import GoogleCalendar from "./Schedule/GoogleCalendar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/main" element={<MainControl/>} />   
        <Route path="/calendar" element={<GoogleCalendar/>} />
      </Routes>
    </Router>
  );
}

export default App;
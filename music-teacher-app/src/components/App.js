import React from "react";
import Header from "./Header";
import Home from "./Home/Home";
import StudentControl from "./Student/StudentControl";
import TransactionControl from "./Transaction/TransactionControl";
import GoogleCalendar from "./Schedule/GoogleCalendar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />   
        <Route path="/calendar" element={<GoogleCalendar />} />
        <Route path="/students" element={<StudentControl />} />
        <Route path="/billing" element={<TransactionControl/>} />
      </Routes>
    </Router>
  );
}

export default App;
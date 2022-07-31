import React from "react";
import Header from "./Header";
import Home from "./Home/Home";
import StudentControl from "./Student/StudentControl";
import TransactionControl from "./Transaction/TransactionControl";
import Schedule from "./Schedule/Schedule";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />   
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/students" element={<StudentControl />} />
        <Route path="/billing" element={<TransactionControl />} />
      </Routes>
    </Router>
  );
}

export default App;
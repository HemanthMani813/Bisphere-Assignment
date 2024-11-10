// src/App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import HemanthFooter from "./components/HemanthFooter";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="services" element={<Services/>}/>
        <Route path="testimonials" element={<Testimonials/>}/>
      </Routes>
      {/* <Footer/> */}
      <HemanthFooter/>
    </Router>
  );
}

export default App;

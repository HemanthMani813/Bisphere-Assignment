// src/pages/HomePage.js
import "./index.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/Banner";
import Testimonials from "../../components/Testimonials";
import Services from "../../components/Services";
// import Service from "../../components/Service";

function HomePage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    adults: 1,
    children: 0,
    checkIn: "",
    checkOut: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBooking = () => {
    navigate("/booking", { state: { userData } });
  };

  return (
    <div>
      <Banner />
      <div className="book_container shadow-xl">
        <h2 className="">Book Your Stay</h2>
        <form onSubmit={handleBooking}>
        <div className="form_container">
            <div className="check_in_container">
                <div >
                    <label>Name:
                    <input className="input input-bordered w-full max-w-xs" required type="text" name="name" value={userData.name} onChange={handleChange} />
                    </label>
                    
                </div>
                
                <div>
                    <label>Phone:</label>
                    <input className="input input-bordered w-full max-w-xs" required type="tel" name="phone" value={userData.phone} onChange={handleChange} />
                </div>
            </div>
            
            
            
            <div className="check_in_container">
                <div>
                    <label>Adults:</label>
                    <input className="input input-bordered w-full max-w-xs" required type="number" name="adults" min="1" value={userData.adults} onChange={handleChange} />
                </div>
                
                <div>
                    <label>Children:</label>
                    <input className="input input-bordered w-full max-w-xs" type="number" name="children" min="0" value={userData.children} onChange={handleChange} />
                </div>
            </div>
            
            
            <div className="check_in_container">
                <div>
                    <label>Check-in:</label>
                    <input className="input input-bordered w-full max-w-xs" required type="date" name="checkIn" value={userData.checkIn} onChange={handleChange} />
                </div>
                
                <div>
                    <label>Check-out:</label>
                    <input className="input input-bordered w-full max-w-xs" required type="date" name="checkOut" value={userData.checkOut} onChange={handleChange} />
                </div>
            </div>
            
            
            
            <button type="submit" >Book</button>
        </div>
        </form>
      </div>
      <Services/>
      <Testimonials />
      {/* <Service/> */}
    </div>
  );
}

export default HomePage;

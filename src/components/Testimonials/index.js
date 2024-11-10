// src/components/Testimonials.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(response => setTestimonials(response.data.slice(0, 8)))
      .catch(error => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <div className="testimonial_page">
      <h3 >Testimonials</h3>
      <div className=" testimonial_container">
      
        {testimonials.map((testimonial) => (
          <div className="testimonial_card" key={testimonial.id}>
            <h4 className="card-title">{testimonial.name}</h4>
            <p>{testimonial.body}</p>
            
          </div>
        ))}
    </div>
    </div>
    
  );
}

export default Testimonials;

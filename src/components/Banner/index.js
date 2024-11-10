// src/components/Banner.js
import React from "react";
import "./index.css"

function Banner() {
  return (
    <div className="banner_container" >
      <div>
        <h1>Work from Ladakh</h1>
        <p>India’s first true digital tourism ecosystem</p>
      </div>
      <div className="banner_img_container">
        <img className="img" src="https://img.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg?uid=R171591814&ga=GA1.1.1141958265.1690787755&semt=ais_hybrid" alt="travel-image"/>
      </div>
    </div>
  );
}

export default Banner;

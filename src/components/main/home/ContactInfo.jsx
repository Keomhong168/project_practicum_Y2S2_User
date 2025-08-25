import React from "react";
import "./contactInfo.css";
import facebook from "../../../assets/images/ImgPlatform/facebook.jpg";
import instagram from "../../../assets/images/ImgPlatform/instagram.jpg";
import telegram from "../../../assets/images/ImgPlatform/telegram.jpg";
import pandas from "../../../assets/images/ImgPlatform/pandas.jpg"

const ContectInfo = () => {
  return (
    <div className="container-fluit contact-block bg-red text-white p-4">
      <div className="logo-control mb-2">
        <img src={pandas} alt="" />
      </div>
      <div className="info-container">
        <h6>Address:</h6>
        <p> 123 Main St, City, Country</p>
        <h6>Contact:</h6>
        <p>+123 456 7890</p>
      </div>
      <div className="info-container">
        <h6 className="contectInfo-title">Email:</h6>
        <p className="contectInfo-fs">latuspanda@gmail.com</p>
        <h6>Follow us:</h6>
        <p>
          <a href="https://www.facebook.com" className="text-white me-2">
            <img className="icon-contact" src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com" className="text-white me-2">
            <img className="icon-contact" src={instagram} alt="" />
          </a>
          <a href="https://www.twitter.com" className="text-white">
            <img className="icon-contact" src={telegram} alt="" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContectInfo;

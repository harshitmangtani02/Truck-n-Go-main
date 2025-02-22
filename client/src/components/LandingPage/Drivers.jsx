import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './LandingPage.css';
import {useNavigate} from 'react-router-dom';
function Drivers() {
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const handleLend = () => {
      navigate("/DriverLending")
  }
  const handleBook = () => {
      navigate("/BookDriver")
  }
    return (
    <div>
      <section class="trucks" id="drivers">
        <div class="content">
          <span data-aos="fade-up" data-aos-delay="150">DRIVERS</span>
          <h3 data-aos="fade-up" data-aos-delay="300">
            Explore Endless Possibilities with TruckNGo!
          </h3>
        </div>
        <div class="bablu">
          <button class="btn1" id="truckbtn" onClick={handleLend}>APPLY NOW > </button>
          <button class="btn1" onClick={handleBook}>HIRE NOW > </button>
        </div>
      </section>
      {/* <section class="trucks" id="drivers">
        <div class="content">
          <span data-aos="fade-up" data-aos-delay="150">DRIVERS</span>
          <h3 data-aos="fade-up" data-aos-delay="300">
            Explore Endless Possibilities with TruckNGo!
          </h3>
        </div>
        <div class="bablu">
          <button class="btn1" id="driverbtn">APPLY NOW > </button>
          <button class="btn1">HIRE NOW > </button>
        </div>
      </section> */}
    </div>
  )
}
export default Drivers

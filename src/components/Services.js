import React from "react";
import Service from "./Service";
import "../style/Services.css";
const Services = () => {
  return (
    <div className="OurServices" >
      <div className="head" id='services'>
        <h1 className='Services__head' >OUR SERVICES</h1>
      </div>
      <div className="content">
        <div className="firstRow">
          <Service icon="MdFreeBreakfast" title="Breakfast" />
          <Service icon="GiGrass" title="Garden" />
          <Service icon="FaSwimmingPool" title="Pool" />
        </div>
        <div className="secondRow">
          <Service icon="AiOutlineWifi" title="Free WIFI" />
          <Service icon="GrUserManager" title="Daily Housekeeping" />
          <Service
            icon="BiFoodMenu"
            title="In-Room Dining Service"
          />
        </div>
      </div>

      
      
          
          
        
        
      
    </div>
  );
};

export default Services;

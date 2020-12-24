import React from "react";
import { MdFreeBreakfast } from 'react-icons/md';
import { FaSwimmingPool } from 'react-icons/fa';
import { AiOutlineWifi } from 'react-icons/ai';
import { GiGrass } from 'react-icons/gi';
import { BiFoodMenu } from 'react-icons/bi';
import { GrUserManager } from 'react-icons/gr';
import "../style/Service.css";
const Service = ({ title, icon }) => {
  return (
    <div className="services2">
      {icon==='MdFreeBreakfast'&&
      <MdFreeBreakfast />
      }
      {
        icon==='GrUserManager' &&
        <GrUserManager />
      }
      {
        icon==='BiFoodMenu' &&
        <BiFoodMenu />
      }
      {
        icon==='AiOutlineWifi' &&
        <AiOutlineWifi />
      }
      {
        icon==='GiGrass' &&
        <GiGrass />
      }
      {
        icon==='FaSwimmingPool' &&
        <FaSwimmingPool />
      }
      <p>{title}</p>
      <p className="para">
        I'm a paragraph. Click here to add your own text and edit me.
      </p>
    </div>
  );
};

export default Service;

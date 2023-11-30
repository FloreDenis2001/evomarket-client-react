import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Logo = () => {
  let nav=useNavigate();
  
  function goHome(){
     nav("/");
  }

  return (
    <div onClick={goHome} className="logo">

        <img src="https://svgshare.com/i/yod.svg" alt="" />
    </div>
  );
};

export default Logo;

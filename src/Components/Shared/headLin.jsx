import React from "react";
import logo from "../../assets/more/logo1.png";

const HeadLin = () => {
  return (
    <div>
      <div className="h-bg flex items-center justify-center gap-3">
        <img src={logo} width={"80px"} alt="" />
        <h1 className="heading">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default HeadLin;

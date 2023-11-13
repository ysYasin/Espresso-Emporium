import React from "react";
import HeadLin from "../../Shared/headLin";

const CoverImg = () => {
  return (
    <div>
      <HeadLin></HeadLin>
      <div className="CoverImg flex items-center">
        <div className="w-11/12"></div>
        <div className="text-white text-start">
          <h1 className="heading" style={{ color: "#FFF" }}>
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="pe-28 my-6">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="c-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CoverImg;

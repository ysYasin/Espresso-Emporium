import React from "react";
import f1 from "../../../assets/icons/1.png";
import f2 from "../../../assets/icons/2.png";
import f3 from "../../../assets/icons/3.png";
import f4 from "../../../assets/icons/4.png";

const features = [
  {
    headLin: "Awesome Aroma",
    dtl: "You will definitely be a fan of the design & aroma of your coffee",
    img: f1,
  },
  {
    headLin: "High Quality",
    dtl: "We served the coffee to you maintaining the best quality",
    img: f2,
  },
  {
    headLin: "Pure Grades",
    dtl: "The coffee is made of the green coffee beans which you will love",
    img: f3,
  },
  {
    headLin: "Proper Roasting",
    dtl: "Your coffee is brewed by first roasting the green coffee beans",
    img: f4,
  },
];

const Fetures = () => {
  return (
    <div className="bg-[#ECEAE3] py-9">
      <div className="w-[75%] flex gap-5 items-center justify-between mx-auto">
        {features.map((feature) => (
          <div key={feature.headLin}>
            <img src={feature.img} alt="" />
            <h3 className="heading my-2 text-2xl">{feature.headLin}</h3>
            <p>{feature.dtl}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetures;

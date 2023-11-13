import React from "react";
import HeadLin from "../Shared/headLin";
import Footer from "../Footer/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeadLin></HeadLin>
      <div className="w-[70%] my-9 mx-auto">
        <button
          style={{ color: "black", padding: "10px 5px" }}
          className="heading items-center flex gap-2 hover:bg-[#7d5e48] hover:border-[#7d5e48] bg-transparent text-2xl"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowLeft /> Go To Home{" "}
        </button>
      </div>
      <div className="mx-auto text-center">
        <img src="/404/404.gif" className="mx-auto" alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;

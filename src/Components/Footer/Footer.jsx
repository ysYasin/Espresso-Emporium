import React from "react";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import fi from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div className="flex md:p-10 w-[90%] mx-auto p-3 lg:p-16 flex-col md:flex-row gap-3 items-center md:justify-between">
          <div className="flex md:w-[50%] flex-col gap-5">
            <img src={fi} width={"80px"} alt="" />
            <h3 className="heading text-2xl font-semibold">
              Espresso Emporium
            </h3>
            <p className="md:w-[70%]">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-3">
              <a href="#">
                <FaFacebook size={45} color="#7d5e48" />
              </a>
              <a href="#">
                <FaTwitter size={45} color="#7d5e48" />
              </a>
              <a href="#">
                <FaInstagram size={45} color="#7d5e48" />
              </a>
              <a href="https://www.linkedin.com/in/ysyasinarafat/">
                <FaLinkedin size={45} color="#7d5e48" />
              </a>
            </div>
            <h3 className="text-2xl heading">Get in Touch</h3>
            <div>
              <p className="flex gap-4 items-center">
                {" "}
                <FaPhoneAlt color="#7d5e48" /> <span>+88 01345 555 555</span>{" "}
              </p>
              <p className="flex gap-4 items-center">
                {" "}
                <FaEnvelope color="#7d5e48" /> <span>info@mymail.com</span>{" "}
              </p>
              <p className="flex gap-4 items-center">
                {" "}
                <FaLocationArrow color="#7d5e48" />{" "}
                <span>6/3 kamarawla bongdin eujop</span>{" "}
              </p>
            </div>
          </div>
          <div>
            <h3 className="heading text-4xl">contact with us</h3>
            <form className="flex mt-5 items-center flex-col gap-2 justify-center">
              <input
                type="text"
                placeholder="name"
                className="cInput text-2xl px-2 py-2 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="email"
                className="cInput text-2xl px-2 py-2 rounded-md w-full"
              />

              <textarea
                rows="3"
                cols="30"
                name="message"
                id=""
                placeholder="Message..."
                className="cInput resize-none text-2xl px-2 py-2 rounded-md w-full"
              ></textarea>
              <button className="sm-btn" type="submit">
                Send massage
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="fotter-foot">
        <p
          className="bg-[#000000a3] py-4 text-white w-full text-center"
          style={{ fontFamily: "var(--Head--Font)" }}
        >
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

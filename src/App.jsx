import { useEffect, useState } from "react";
import "./App.css";
import { FaMugHot } from "react-icons/fa";
import CofeeCart from "./Components/Home/CofeeCart";
import noCoffee from "./assets/3.png";
import { Link } from "react-router-dom";
import PhotoCollups from "./Components/Home/PhotoCollups/PhotoCollups";
import Footer from "./Components/Footer/Footer";
import CoverImg from "./Components/Home/CoverImg/CoverImg";
import Fetures from "./Components/Home/Features/Fetures";

function App() {
  const [coffees, setCoffee] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5300/coffee`)
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, []);

  return (
    <main>
      <CoverImg></CoverImg>
      <Fetures></Fetures>
      <div className="bg-coffeeCart mt-12">
        <p className="text-center">--- Sip & Savor ---</p>
        <h1 className="heading mb-3 text-center">Our Popular Products</h1>
        <div className="w-full text-center mt-5">
          <Link to="add-coffee">
            {" "}
            <button className="btn hover:text-[#7d5e48] text-white bg-[#D2B48C] hover:bg-transparent bg border-1 hover:border-[#7d5e48] border-[#7d5e48]">
              Add coffee <FaMugHot color="#7d5e48" />{" "}
            </button>
          </Link>
        </div>
        {coffees.length > 0 ? (
          <div className="w-[80%] my-6 mx-auto lg:columns-2">
            {coffees.map((coffee) => (
              <CofeeCart
                key={coffee._id}
                setCoffee={setCoffee}
                coffees={coffees}
                coffee={coffee}
              ></CofeeCart>
            ))}
          </div>
        ) : (
          <div className="w-[80%] mt-10 mx-auto">
            <div className=" opacity-10">
              <div className="flex items-center justify-center">
                <img src={noCoffee} />
              </div>
              <h1 className="text-center text-4xl font-bold py-10">
                No Coffee Found!
              </h1>
            </div>
            <div className=" flex items-center justify-center mx-auto borderd-3">
              <Link to="add-coffee">
                <button className="btn btn-neutral">Add coffee</button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <PhotoCollups></PhotoCollups>
      <Footer></Footer>
    </main>
  );
}

export default App;

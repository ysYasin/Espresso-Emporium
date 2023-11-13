import react from "react";
import { FaTrashAlt, FaEye, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CofeeCart = ({ coffee, coffees, setCoffee }) => {
  const { _id, name, supplier, category, chef, test, details, photo } = coffee;

  const handleDeletCoffeeCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5300/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainData = coffees.filter((cof) => cof._id !== id);
              setCoffee([...remainData]);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side mb-4 bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            width={"45%"}
            style={{ height: "192px" }}
            alt={name}
          />
        </figure>
        <div className="items-center w-full justify-between flex">
          <div className=" ps-6">
            <h2 className="card-title font-medium">Name : {name}</h2>
            <p>Supplier : {supplier}</p>
            <p>Category : {category}</p>
            <p>Chef : {chef}</p>
            <p>Test : {test}</p>
          </div>
          <div className=" justify-end">
            <div className="btn-group gap-3 btn-group-vertical pe-4">
              <button className=" rounded-md hover:text-black bg-[#D2B48C]">
                <FaEye className="text-white hover:text-black text-2xl" />
              </button>
              <Link to={`/update-coffee/${_id}`}>
                <button className=" rounded-md bg-[#3C393B]">
                  <FaPen className="text-white hover:text-black text-2xl" />
                </button>
              </Link>
              <button
                onClick={() => handleDeletCoffeeCart(_id)}
                className=" rounded-md bg-[#EA4744]"
              >
                {" "}
                <FaTrashAlt className="text-white hover:text-black text-2xl" />{" "}
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CofeeCart;

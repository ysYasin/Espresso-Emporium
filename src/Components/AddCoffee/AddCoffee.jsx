import React from "react";
import Swal from "sweetalert2";
import HeadLin from "../Shared/headLin";
import Footer from "../Footer/Footer";

const AddCoffee = () => {
  const handleSubmutCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const test = form.test.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, supplier, category, chef, test, details, photo };

    fetch(`http://localhost:5300/coffee`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully added on server",
            icon: "success",
            confirmButtonText: "Perfact",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="w-full">
      <HeadLin></HeadLin>
      <form
        onSubmit={handleSubmutCoffee}
        className="lg:w-8/12 input-bordered bg-[#f6f6f6] my-12 mx-auto px-6 pt-2 pb-11 rounded-lg"
      >
        <div className="w-[79%] mx-auto my-11">
          <h3
            className="text-3xl font-bold text-center py-4"
            style={{ fontFamily: "var(--Head--Font)", color: "#634832" }}
          >
            Add New Coffee
          </h3>
          <p className="text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="flex md:justify-evenly justify-center flex-col md:flex-row items-center">
          <div>
            <label htmlFor="name" className="block font-medium text-lg  mb-1">
              Name
            </label>
            <input
              placeholder="Enter Coffee Name"
              type="text"
              name="name"
              className="input input-bordered mb-1 lg:w-80 rounded-md px-2 py-2 text-lg"
            ></input>
            <label htmlFor="name" className="block font-medium text-lg  mb-1">
              Supplier
            </label>
            <input
              placeholder="Enter Coffee Supplier"
              type="text"
              name="supplier"
              className="input input-bordered mb-1 lg:w-80 rounded-md px-2 py-2 text-lg"
            ></input>
            <label htmlFor="name" className="block font-medium text-lg  mb-1">
              Category
            </label>
            <input
              placeholder="Enter Coffee Category"
              type="text"
              name="category"
              className="input input-bordered mb-1 lg:w-80 rounded-md px-2 py-2 text-lg"
            ></input>
          </div>

          <div>
            <label htmlFor="name" className="block  font-medium text-lg mb-1">
              Chef
            </label>
            <input
              placeholder="Enter Coffee Chef"
              type="text"
              name="chef"
              className="input input-bordered mb-1 lg:w-80 rounded-md px-2 py-2 text-lg"
            ></input>
            <label htmlFor="name" className="block  font-medium text-lg mb-1">
              Test
            </label>
            <input
              placeholder="Enter Coffee Test"
              type="text"
              name="test"
              className="input input-bordered mb-1 lg:w-80 rounded-md px-2 py-2 text-lg"
            ></input>
            <label htmlFor="name" className="block  font-medium text-lg mb-1">
              Details
            </label>
            <input
              placeholder="Enter Coffee Details"
              type="text"
              name="details"
              className="input input-bordered mb-1 lg:w-80 rounded-md px-2 py-2 text-lg"
            ></input>
          </div>
        </div>
        <div className="mx-auto w-[58%] md:w-[79%]">
          <label htmlFor="name" className="block font-medium text-lg  mb-1">
            Photo
          </label>

          <input
            placeholder="Enter Coffee Image Url"
            type="text"
            name="photo"
            className="w-full input input-bordered mb-1 rounded-md px-2 py-2 text-lg"
          ></input>
          <input
            type="submit"
            value="Add Coffee"
            style={{ fontFamily: "var(--Head--Font)", background: "#634832" }}
            className="text-center w-full py-2 text-lg text-white rounded-md font-medium cursor-pointer my-5"
          />
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default AddCoffee;

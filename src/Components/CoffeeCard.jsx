import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee, coffees, setCoffess }) => {
  const handleRemove = (_id) => {
    console.log("delete", _id);

    fetch(
      `https://coffee-store-server-8a2olim4d-mdhossain07.vercel.app/coffee/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
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
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = coffees.filter((item) => item._id !== _id);
              setCoffess(remaining);
            }
          });
        }
      });
  };

  console.log(coffee);
  const { _id, name, chef, price, photo } = coffee;
  return (
    <div>
      <div className="card w-10/12 bg-[#F5F4F1] shadow-xl">
        <div className="flex justify-around items-center">
          <div>
            <figure>
              <img src={photo} alt={name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {name}</h2>
              <p>Chef: {chef}</p>
              <p>Price: {price}</p>
            </div>
          </div>
          <div className="btn-group btn-group-vertical">
            <Link to={`coffee/${_id}`}>
              <button className="btn bg-purple-600 text-white w-full">
                View
              </button>
            </Link>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn bg-green-500 w-full">Edit</button>
            </Link>
            <button
              onClick={() => handleRemove(_id)}
              className="btn bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

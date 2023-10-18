import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, category, chef, taste, supplier, price, photo } = coffee;
  console.log(coffee);
  return (
    <div className="bg-[#F4F3F0]">
      <div className="flex justify-center gap-10 items-center">
        <div>
          <img src={photo} alt="" />
        </div>
        <div>
          <h2>Name: {name}</h2>
          <h2>Category: {category}</h2>
          <h2>Chef: {chef}</h2>
          <h2>Taste: {taste}</h2>
          <h2>Supplier: {supplier}</h2>
          <h2>Price: {price}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

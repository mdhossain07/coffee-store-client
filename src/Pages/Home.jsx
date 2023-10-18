import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CoffeeCard from "../Components/CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);

  return (
    <div>
      <Banner />
      {/* Show Products */}

      <div className="container mx-auto px-8 md:px-16 lg:px-24 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Users from "../Pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://coffee-store-server-8a2olim4d-mdhossain07.vercel.app/coffee"
          ),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-8a2olim4d-mdhossain07.vercel.app/coffee/${params.id}`
          ),
      },

      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-8a2olim4d-mdhossain07.vercel.app/coffee/${params.id}`
          ),
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "/users",
        element: <Users />,
        loader: () =>
          fetch(
            "https://coffee-store-server-8a2olim4d-mdhossain07.vercel.app/users"
          ),
      },
    ],
  },
]);

export default router;

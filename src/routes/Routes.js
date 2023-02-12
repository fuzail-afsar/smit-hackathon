import { Outlet, useRoutes } from "react-router-dom";
import Cart from "../components/pages/Cart";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import Layout from "../components/pattern/UI/templates/Layout";
import RequireAuth from "./RequireAuth";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/signin",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <SignIn /> }],
    },
    {
      path: "/signup",
      element: <Layout children={<Outlet />} />,
      children: [{ index: true, element: <SignUp /> }],
    },
    {
      path: "/cart",
      element: <Layout children={<Outlet />} />,
      children: [
        {
          index: true,
          element: <Cart />,
        },
      ],
    },
  ];
  return useRoutes(routes);
};

export default Routes;

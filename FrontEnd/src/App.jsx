import React from "react";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import Fooditem from "./Components/Fooditem/Fooditem";
import Reservation from "./Components/Reservation/Reservation";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Fooditem />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

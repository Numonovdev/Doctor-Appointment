import { useState } from "react";
import MyLayout from "./MyLayout/MyLayout";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MyLayout>
            <Home></Home>
          </MyLayout>
        }
      ></Route>
      <Route
        path="/service"
        element={
          <MyLayout>
            <Service />
          </MyLayout>
        }
      ></Route>
      <Route
        path="/contact"
        element={
          <MyLayout>
            <ContactUs />
          </MyLayout>
        }
      ></Route>
    </Routes>
  );
}

export default App;

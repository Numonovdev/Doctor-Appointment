import React from "react";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyLayout({ children }) {
  return (
    <div>
      <Header/>
      <div className="pt-20">{children}</div>
      <Footer/>  
    </div>
  );
}

export default MyLayout;

import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FiAlignLeft, FiX } from "react-icons/fi";
function Header() {
const [openMenu, setOpenMenu] = useState(false)
function handleMenuOpen(){
    setOpenMenu(true)
}
function handleMenuClose(){
    setOpenMenu(false)
}

  return (
    <div className="w-full fixed bg-white top-1">
    <div className="container py-3 mt-1 flex items-center justify-between  font-LexendTera tracking-tight">
      {/* menu */}
      <div className="flex flex-col lg:hidden relative">
        <FiAlignLeft onClick={handleMenuOpen} />
      </div>

      {/* menu pages */}
      { openMenu && (
        
      <div className="absolute top-0 left-0 w-2/3 min-h-screen bg-black/80 z-50 p-5">
            <div className="w-full flex justify-end text-white text-xl">
            <FiX onClick={handleMenuClose} className="cursor-pointer" />
            </div>
            <div className="flex flex-col text-white">
              <Link className="py-2" to="/">Home</Link>
              <Link className="py-2" to="/service">Service</Link>
              <Link className="py-2" to="/contact">Contact Us</Link>
              <Link className="py-2" to="/help">Help</Link>
              <Link className="py-2" to="/blog">Blog</Link>
            </div>
            
          </div>

)

}
      {/* logo */}
      <div className="flex items-center">
        <img
          src={logo}
          className="w-[25px] md:[w-45px] lg:w-[50px] xl:w-[55px]"
          loading="lazy"
          alt="Logo"
        />
        <h1 className="font-semibold text-sm md:text-base lg:text-xl xl:text-[26px] text-BlueTeal">
          Health<span className="text-Yashil">care</span>
        </h1>
      </div>

      {/* navbar qismi pages */}
      <nav className="hidden lg:flex gap-1  lg:gap-1 items-center  lg:text-sm xl:text-xl leading-4     xl:leading-[25px]">
        <Link className="px-1  " to="/">
          Home
        </Link>
        <Link className="px-1" to="/service">
          Service
        </Link>
        <Link className="px-1" to="/contact">
          Contact Us
        </Link>
        <Link className="px-1" to="/help">
          Help
        </Link>
        <Link className="px-1" to="/blog">
          Blog
        </Link>
      </nav>

      {/* login register */}
      <div className="flex gap-1 lg:gap-3 items-center  leading-[25px]">
        <button className="text-BlueTeal text-[8px] lg:text-sm xl:text-xl">
          Sign Up
        </button>
        <button className="bg-BlueTeal px-2 md:px-3  text-white md:py-2 rounded-md text-[5px] lg:text-sm xl:text-xl">
          Login in
        </button>
      </div>
    </div>
</div>
  );
}

export default Header;

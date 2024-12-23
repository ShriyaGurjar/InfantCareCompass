import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md flex justify-center items-center">
      <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500  text-4xl font-medium border-b-2 border-blue-500" // Active styles
              : "text-gray-700 text-4xl hover:text-blue-500 font-medium" // Default styles
          }
        >
          <IoMdHome />
        </NavLink>
      <div className="container mx-auto flex justify-center items-center space-x-4 h-7 ">
        
        <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-blue-500 font-medium border-b-2 border-blue-500" // Active styles
      : "text-gray-700 hover:text-blue-500 font-medium" // Default styles
  }
>
  About
</NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-medium border-b-2 border-blue-500" // Active styles
              : "text-gray-700 hover:text-blue-500 font-medium" // Default styles
          }
        
        >
          Blog
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
    isActive
      ? "text-blue-500 font-medium border-b-2 border-blue-500" // Active styles
      : "text-gray-700 hover:text-blue-500 font-medium" // Default styles
  }
        >
          ContactUs
        </NavLink>
        <NavLink
          to="/news"
         className={({ isActive }) =>
    isActive
      ? "text-blue-500 font-medium border-b-2 border-blue-500" // Active styles
      : "text-gray-700 hover:text-blue-500 font-medium" // Default styles
  }
        >
          News
        </NavLink>
        <NavLink
          to="/consultation"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-medium border-b-2 border-blue-500" // Active styles
              : "text-gray-700 hover:text-blue-500 font-medium" // Default styles
          }
        >
          Consultation
        </NavLink>
      </div>
    </nav>
  );
}

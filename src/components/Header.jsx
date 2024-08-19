import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-4 px-4 md:px-20 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-between relative h-16 md:h-20">
      <div className="flex items-center">
        <h1 className="text-white text-xl md:text-2xl font-bold">
          News Naufal
        </h1>
      </div>

      <button
        className="md:hidden flex items-center text-white z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XIcon className="h-8 w-8 transition-transform transform rotate-90" />
        ) : (
          <MenuIcon className="h-8 w-8 transition-transform transform rotate-0" />
        )}
      </button>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:block absolute md:relative top-6 right-0 w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 md:bg-none shadow-md md:shadow-none transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:flex md:items-center`}
      >
        <ul className="flex flex-col md:flex-row gap-5 text-white p-5 md:p-0 items-center">
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-yellow-600"
                  : "hover:text-yellow-500"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/internasional"
              className={
                location.pathname === "/internasional"
                  ? "text-yellow-600"
                  : "hover:text-yellow-500"
              }
            >
              Internasional
            </Link>
          </li>
          <li>
            <Link
              to="/olahraga"
              className={
                location.pathname === "/olahraga"
                  ? "text-yellow-600"
                  : "hover:text-yellow-500"
              }
            >
              Sport
            </Link>
          </li>
          <li>
            <Link
              to="/teknologi"
              className={
                location.pathname === "/teknologi"
                  ? "text-yellow-600"
                  : "hover:text-yellow-500"
              }
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              to="/hiburan"
              className={
                location.pathname === "/hiburan"
                  ? "text-yellow-600"
                  : "hover:text-yellow-500"
              }
            >
              Entertainment
            </Link>
          </li>
          <li>
            <Link
              to="/gaya-hidup"
              className={
                location.pathname === "/gaya-hidup"
                  ? "text-yellow-600"
                  : "hover:text-yellow-500"
              }
            >
              Lifestyle
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

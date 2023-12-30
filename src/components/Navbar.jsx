import React from "react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import Switch from "./Switch";
import { Link } from "react-scroll";

const Navbar = () => {
  const navitems = [
    { navitem: "Home", href: "home" },
    { navitem: "About", href: "about" },
    { navitem: "Services", href: "services" },
    { navitem: "Work", href: "work" },
    { navitem: "Blog", href: "blog" },
    { navitem: "Contact", href: "contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:relative">
      <div
        className={`z-10 fixed dark:bg-black top-0 w-full shadow-lg bg-${
          isScrolled ? "white" : "black"
        } text-${isScrolled ? "blue-400" : "white"}`}
      >
        <div className="">
          <div
            className={`lg:mx-12 lg:px-12 mt-6 dark:bg-black flex justify-between py-2 px-6  ${
              isScrolled && "bg-white text-blue-400"
            }`}
          >
            <div className="inline-flex  lg:space-x-2">
              <span className=" text-2xl font-bold">Kartavya Gupta.</span>
              <Switch />
            </div>
            <div className="hidden lg:block">
              <ul className="inline-flex space-x-10">
                {navitems.map((item) => (
                  <li className="cursor-pointer" key={item.navitem}>
                    <Link
                      activeClass="active"
                      className="test1"
                      to={item.href}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >{item.navitem}</Link>
                    

                    
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:hidden">
              <Menu onClick={toggleMenu} className="lg:h-6 lg:w-6 cursor-pointer" />
            </div>
            {isMenuOpen && (
              <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center ">
                      <div className="inline-flex items-center justify-evenly space-x-2 pr-2">
                        <span className="">Kartavya Gupta.</span>
                      </div>
                      <div className="">
                        <button
                          type="button"
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <span className="sr-only">Close menu</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-4">
                        {navitems.map((item) => (
                          <a
                            key={item.navitem}
                            onClick={() => scrollToSection(item.ref)}
                            className="lg:-m-3 flex items-center rounded-md p-2 text-sm font-semibold hover:bg-gray-50"
                          >
                            <span className="lg:ml-3 text-base font-medium text-gray-900">
                              {item.navitem}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

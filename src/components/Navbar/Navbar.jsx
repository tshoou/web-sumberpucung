import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../img/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation().hash;
  const toggleHamburger = (el) => {
    el.classList.toggle("bi-list");
    el.classList.toggle("bi-x");
    setOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`${
          isOpen
            ? "header sticky py-3 z-[100] transition-all bg-Primary"
            : "header sticky py-3 z-[100] transition-all rounded-b-2xl"
        } font-semibold`}
        id="header"
      >
        <div className="">
          <nav className="p-0 flex justify-between items-center px-4" id="nav-menu">
            <div className="justify-start flex items-center">
            <img src={Logo} className="w-16 hidden md:flex"/>
              <h1 className="text-black text-2xl mx-2">Desa Sumberpucung</h1>
            </div>
            <div className="flex items-end mx-10 md:hidden justify-end">
              <Link
        
                to="/"
                className="text-2xl text-black font-normal md:hidden block"
              >
                <img src={Logo} className="w-20"/>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                fill="currentColor"
                className="bi bi-list text-7xl text-black cursor-pointer md:hidden block z-50 "
                viewBox="0 0 16 16"
                onClick={(e) => toggleHamburger(e.target)}
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>

            <div className="">
              <ul className="hidden md:flex flex-col md:flex-row justify-between items-center">
                <li>
                  <NavLink
                    to="/"
                    className={`${
                      location === ""
                        ? "text-black text-sm"
                        : "text-black text-sm"
                    }  mx-4`}
                  >
                   Beranda
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={`${
                      location === ""
                        ? "text-black text-sm"
                        : "text-black text-sm"
                    } mx-4`}
                  >
                    Sekilas
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={`${
                      location === ""
                        ? "text-black text-sm"
                        : "text-black text-sm"
                    } mx-4`}
                  >
                    Visi dan Misi
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/Informasi"
                    className={`${
                      location === ""
                        ? "text-black text-sm"
                        : "text-black text-sm"
                    } mx-4`}
                  >
                    Informasi
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/umkm"
                    className={`${
                      location === ""
                        ? "text-black text-sm"
                        : "text-black text-sm"
                    } mx-4`}
                  >
                    UMKM
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/wisata"
                    className={`${
                      location === ""
                        ? "text-black text-sm"
                        : "text-black text-sm"
                    } mx-4`}
                  >
                    Wisata
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={`${
                      location === ""
                        ? "text-sm border-2 border-primary text-primary hover:bg-primary py-2 px-6 hover:text-white rounded-md"
                        : "text-sm border-2 border-primary text-primary hover:bg-primary py-2 px-6 hover:text-white rounded-md"
                    } mx-4`}
                  >
                    Masuk
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {isOpen && (
          <div className="flex  mt-3 px-2 gap-y-3 md:hidden text-lg bg-Primary">
            <ul className="list-none flex flex-col items-center justify-center mx-auto">
              
              <li className="my-6">
                <NavLink
                  to="/"
                  className={`${
                    location === ""
                      ? "text-black text-sm font-light border-teal-50"
                      : "text-black text-sm font-light"
                  }  font-semibold`}
                >
                  HOME
                </NavLink>
              </li>
              <li className="my-6">
                <NavLink
                  to="/About"
                  className={`${
                    location === ""
                      ? "text-black text-sm font-light border-teal-50"
                      : "text-black text-sm font-light"
                  }  font-semibold`}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="my-6">
                <NavLink
                  to="/Product"
                  className={`${
                    location === ""
                      ? "text-black text-sm font-light border-teal-50"
                      : "text-black text-sm font-light"
                  }  font-semibold`}
                >
                  PRODUCT
                </NavLink>
              </li>
              {/* <li>
                <img src={Logo} className="w-20 animate-spin-slow"/>
              </li> */}
            </ul>
          </div>
        )}
      </div>
      {/* 
    <nav className="bg-white py-2 px-4 justify-between flex">
        <div className="justify-start flex items-center">
            <img src="" alt="missing img"/>
            <h1 className="text-black text-2xl mx-2">Desa Sumberpucung</h1>
        </div>
        <div className="flex items-start ml-72">
            <Link to="/" className="mx-4 text-black">Beranda</Link>
            <Link to="/" className="mx-4 text-black">Sekilas</Link>
            <Link to="/" className="mx-4 text-black">Visi Misi</Link>
            <Link to="/" className="mx-4 text-black">Informasi</Link>
            <Link to="/" className="mx-4 text-black">UMKM</Link>
            <Link to="/" className="mx-4 text-black">Wisata</Link>
            <Link to="/" className="mx-4 text-black">Masuk</Link>
        </div>
    </nav> */}
    </>
  );
};

export default Navbar;

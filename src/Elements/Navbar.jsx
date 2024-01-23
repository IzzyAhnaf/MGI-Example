import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  const [NavIndex, setNavIndex] = useState(0);
  const [showNavLine, setShowNavLine] = useState(false);

  const navLinks = [
    { path: "/MGI/", label: "HOME" },
    { path: "/MGI/", label: "ABOUT" },
    { path: "/MGI/", label: "SERVICES" },
    { path: "/MGI/", label: "PUBLICATIONS" },
    { path: "/MGI/", label: "NEWS & EVENT" },
    { path: "/MGI/", label: "CAREER" },
    { path: "/MGI/", label: "CONTACT" },
    { path: "/MGI/", label: "INDOGAP" },
  ];

  return (
    <>
      <nav className="flex justify-between bg-white dark:bg-[#212121] p-2 px-24 items-center">
        <div>
          <img src="Logo_-_MGI_ver1.png" style={{width: "13rem", maxHeight: "13rem"}} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex space-x-8 text-xl font-light">
            {navLinks.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className={`text-black dark:text-white font-inter text-lg`}
                onClick={() => setNavIndex(index)}
                onMouseEnter={() => setShowNavLine(true)}
                onMouseLeave={() => setShowNavLine(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="">
            <hr
              style={{
                width: "2.5%",
                border: "1px solid #C4942F",
                marginTop: "5px",
                transform: `translateX(${NavIndex === 1 ? 6.5 : NavIndex === 2 ? 13.25 : NavIndex === 3 ? 22
                : NavIndex === 4 ? 32.15 : NavIndex === 5 ? 40.75 : NavIndex === 6 ? 47.525 : NavIndex === 7 ? 54.60
                : 1}rem)`,
                transition: "transform 0.25s ease-in-out",
                display: showNavLine ? "block" : "none",
            }}
            />
          </div>
        </div>
        <div className="flex space-x-2 h-10 items-center">
          <img src="flagamerican.png" className="h-5" />
          <img src="flagindonesian.png" className="h-5 pr-2" alt="" />
          <input type="text" className="rounded-lg dark:bg-[#3D3D48] h-10 ps-5 pe-5 dark:text-white text-black focus:outline-none" placeholder="Search"/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

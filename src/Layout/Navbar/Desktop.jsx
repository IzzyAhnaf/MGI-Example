import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../Navbar.css";

const DekstopNavbar = () => {
    const [NavIndex, setNavIndex] = useState(JSON.parse(sessionStorage.getItem("navIndex")) || 0);
    const [showNavLine, setShowNavLine] = useState(false);
    const [onHoverNavIndex, setOnHoverNavIndex] = useState(8);
    const navigate = useNavigate();
  
    const navLinks = [
      { path: "/MGI-Example/", label: "HOME" },
      { path: "/MGI-Example/", label: "ABOUT" },
      { path: "/MGI-Example/", label: "SERVICES" },
      { path: "/MGI-Example/", label: "PUBLICATIONS" },
      { path: "/MGI-Example/", label: "NEWS & EVENT" },
      { path: "/MGI-Example/", label: "CAREER" },
      { path: "/MGI-Example/", label: "CONTACT" },
      { path: "/MGI-Example/", label: "INDOGAP" },
    ];
  
    const handleNavIndex = (index) => {
      setNavIndex(index);
      sessionStorage.setItem("navIndex", index);
    }

    return (
        <>
          <nav className="flex justify-between bg-white dark:bg-[#212121] p-2 px-24 items-center">
            <div>
              <img src="Logo_-_MGI_ver1.png" style={{width: "13rem", maxHeight: "13rem"}} className="cursor-pointer" onClick={() => navigate("/MGI-Example/")}/>
            </div>
            <div className="flex flex-col">
              <div className="flex space-x-8 text-xl font-light h-[40px]"
              onMouseEnter={() => setShowNavLine(true)}
              onMouseLeave={() => setShowNavLine(false)}>
                {navLinks.map((link, index) => (
                  <NavLink
                    to={link.path}
                    key={index}
                    className={`text-black dark:text-white font-inter text-lg my-auto`}
                    onClick={() => handleNavIndex(index)}
                    onMouseEnter={() => setOnHoverNavIndex(index)}
                    onMouseLeave={() => setOnHoverNavIndex(8)}
                    style={{
                      marginBottom: onHoverNavIndex === index ? "0.2rem" : "0",
                      textShadow: onHoverNavIndex === index ? "0 0 4px white" : "none",
                    }}
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
                    transform: `translate(${NavIndex === 1 ? 6.5 : NavIndex === 2 ? 13.25 : NavIndex === 3 ? 22
                      : NavIndex === 4 ? 32.15 : NavIndex === 5 ? 40.75 : NavIndex === 6 ? 47.525 : NavIndex === 7 ? 54.60
                      : 1}rem, ${showNavLine ? 0 : 0.5}rem)`,
                    transition: "transform 0.25s ease-in-out, opacity 0.25s ease-in-out, visibility 0.25s ease-in",
                    visibility: showNavLine ? "visible" : "hidden",
                    opacity: showNavLine ? '1' : '0',
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
}

export default DekstopNavbar
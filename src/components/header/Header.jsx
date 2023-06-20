

import React, { useState, useEffect } from "react";

import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { useNavigate, useLocation } from "react-router-dom";

import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";

import logo from "../../assets/movix-logo.svg";



const searchQueryHandler = (e) => {
  if (e.key === "Enter" && query.length > 0) {
    navigate(`/search/${query}`);
    setTimeout(() => {
      setShowSearch(false)
    }, 1000);
  }
};

const data = [
  { id: 1, name: "Movies", url: "/explore/movie" },
  { id: 2, name: "TV shows", url: "/explore/tv" },
];

const Header = () => {

  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();


  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full bg-black bg-opacity-50 z-20 fixed  top-0 transition-transform duration-300 ${show}`}
    >
      <div className="container h-[50px] md:h-[80px] flex items-center justify-between">
        <img src={logo} alt="logo" className=" cursor-pointer" onClick={() => {
          navigate('/')
        }} />
        <>
          <div className="h-[60px] flex justify-between items-center gap-5">

            <Menu
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
              data={data}
            />

            {mobileMenu && (
              <MenuMobile
                showCatMenu={showCatMenu}
                setShowCatMenu={setShowCatMenu}
                setMobileMenu={setMobileMenu}
                data={data}
              />
            )}

            <div className="flex items-center gap-2 text-white">
              {/* Mobile icon start */}
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                {mobileMenu ? (
                  <VscChromeClose
                    className="text-[16px]"
                    onClick={() => setMobileMenu(false)}
                  />
                ) : (
                  <SlMenu
                    className="text-[15px]"
                    onClick={() => setMobileMenu(true)}
                  />
                )}
              </div>

              {/* Mobile icon end */}
            </div>
          </div>
        </>
     
      </div>
    </header>
  );
};

export default Header;

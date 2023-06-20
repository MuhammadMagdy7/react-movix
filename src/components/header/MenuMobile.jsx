import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MenuMobile = ({ setMobileMenu, data }) => {
  const navigate = useNavigate();
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-auto bg-black bg-opacity-80 border-t text-white">
      {data.map((item) => {
        return (
            <li className="py-4 px-5 border-b">
            <button
              onClick={() => {
                navigate(item?.url);
                setMobileMenu(false);
              }}
            >
              {item.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuMobile;

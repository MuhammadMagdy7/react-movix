import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";



const Menu = ({ showCatMenu, setShowCatMenu, data }) => {
  return (
    <ul className="hidden md:flex  gap-8 font-medium text-white">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && <></>}
              </li>
            ) : (
              <li className="cursor-pointer">
                <a href={item?.url}>{item.name}</a>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;

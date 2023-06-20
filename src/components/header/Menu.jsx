import React from "react";
import { useNavigate } from "react-router-dom";


const Menu = ({ data }) => {
  const navigate = useNavigate();

  return (
    <ul className="hidden md:flex  gap-8 font-medium text-white">
      {data.map((item) => (
        <li className="cursor-pointer">
          <button href={item?.url} onClick={()=>{
            navigate(item?.url)
          }} >{item.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

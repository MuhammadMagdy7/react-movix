import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres flex">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre bg-pink text-xs m-0.5 p-0.5 whitespace-nowrap rounded-md">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;

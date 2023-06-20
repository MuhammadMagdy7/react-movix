import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Spinner from "../../../components/spinner/Spinner";

const HeroBanner = () => {
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className=" relative ">
      {/* {!loading && (
      
          <Img className={"bg-opacity-50"} src={backGround} />
      )} */}

      {!loading ? (
        <>
          <Img className={"bg-opacity-50"} src={backGround} />
          <div className="absolute inset-0 bg-transparent bg-gradient-to-t from-[#04152d]/100"></div>

          <ContentWrapper>
            <div className="flex items-center justify-center">
              <div className=" text-center w-full right-0 space-y-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-4xl font-bold">Welcome.</h2>
                <p className="text-gray-50">
                  Millions of movies, TV shows and people to discover. Explore
                  now.
                </p>
                <div className="mb-3">
                  <div className="relative mx-10 flex flex-wrap items-stretch">
                    <input
                      type="search"
                      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-full border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out "
                      placeholder="Search for a movie or tv show..."
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyUp={searchQueryHandler}
                      value={query}
                    />


                  </div>
                </div>
              </div>
            </div>
          </ContentWrapper>
        </>
      ) : (
        <Spinner />


      )}
    </div>
  );
};

export default HeroBanner;

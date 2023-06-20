import React, { useState } from "react";
import "./style.scss";

const SwithTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="switchingTabs h-[34px] bg-white rounded-3xl p-0.5">
      <div className="tabItems flex items-center h-[30px] relative">
        {data.map((tab, index) => (
          <span
            onClick={() => activeTab(tab, index)}
            key={index}
            className={`tabItem h-full flex items-center w-[100px] justify-center relative text-[14px] z-[1] cursor-pointer	 ${selectedTab === index ? "active" : ""}`}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg h-[30px] w-[100px] rounded-2xl left-0 absolute bg-gradient-to-r from-orange to-pink" style={{ left }} />
      </div>
    </div>
  );
};

export default SwithTabs;

"use client";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import state from "@/store/index";

const Tab = ({ tab, isFilterTabs, isActiveTabs, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTabs && isActiveTabs
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTabs ? "glassmorphism rounded-full" : "rounded-6"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon.src}
        alt={tab.name}
        className={`${
          isFilterTabs ? "w-2/3 h-2/3" : "w-3/4 h-3/4  object-contain"
        }`}
      />
    </div>
  );
};

export default Tab;

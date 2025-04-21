import React from "react";
import "./taskbar.css";
import { useLayout } from "@/LayoutContext.jsx";

export const Taskbar = ({ text, style, onClick, icon }) => {
  const { sharedLayout } = useLayout();

  const className = sharedLayout === "mobile" ? "button-mobile" : "button";

  return (
    <button className={`${className} ${style}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

// components/Taskbar.jsx
import React from "react";
import "../App.css";

export const Stylebox = ({ content }) => {
  return (
    <div className="stylebox">
      <div className="styleflex">
        <div className="corner-tl" />
        <div className="middle middle-top" />
        <div className="corner-tr" />
        <div className="side side-left" />

        {content}
        <div className="side side-right" />

        <div className="corner-bl" />
        <div className="middle middle-bottom" />
        <div className="corner-br" />
      </div>
    </div>
  );
};

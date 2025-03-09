// components/Taskbar.jsx
import React from "react";
import "../App.css";

export const Stylebox = ({ content }) => {
  return (
    <div className="stylebox">
      <div className="inline">
        <div className="corner-tl" />
        <div className="middle middle-top" />
        <div className="corner-tr" />
      </div>

      <div className="inline v-fill">
        <div className="side" />
        <div className="w-fill">{content}</div>
        <div className="side" />
      </div>

      <div className="inline">
        <div className="corner-bl" />
        <div className="middle middle-bottom" />
        <div className="corner-br" />
      </div>
    </div>
  );
};

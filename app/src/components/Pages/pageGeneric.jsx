import React, { useState, useEffect } from "react";
import { useLayout } from "@/LayoutContext.jsx";
import "./page.css";

export const PageGeneric = ({ title, content }) => {
  const [loading, setLoading] = useState(true);
  const { sharedLayout } = useLayout();

  useEffect(() => {
    if (content) {
      setLoading(false);
    }
  }, [content]);
  let style = "";
  if (sharedLayout === "mobile") {
    style = "pt-10";
  }
  return (
    <div className={"page-wrapper" + " " + style}>
      <div className="page-title">{title}</div>
      <div className="page-content">
        {loading ? <div className="loading-circle"></div> : content}
      </div>
    </div>
  );
  // } else {
  //   return (
  //     <div className="page-wrapper">
  //       <div className="page-title">{title}</div>
  //       <div className="page-content">
  //         {loading ? <div className="loading-circle"></div> : content}
  //       </div>
  //     </div>
  //   );
  // }
};

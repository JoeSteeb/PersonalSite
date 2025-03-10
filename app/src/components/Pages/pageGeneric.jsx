import React, { useState, useEffect } from "react";
import "./page.css";

export const PageGeneric = ({ title, content }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (content) {
      setLoading(false);
    }
  }, [content]);

  return (
    <div className="page-wrapper">
      <div className="page-title">{title}</div>
      <div className="page-content">
        {loading ? <div className="loading-circle"></div> : content}
      </div>
    </div>
  );
};

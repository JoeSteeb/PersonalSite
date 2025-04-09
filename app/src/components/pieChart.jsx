import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const PieChart = ({ data }) => {
  const ref = useRef(null);
  const [labelPositions, setLabelPositions] = useState([]);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const size = 1000;
    const radius = size / 2;
    const innerRadius = radius / 3;

    const g = svg
      .attr("viewBox", `0 0 ${size} ${size}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("width", "100%")
      .style("height", "auto")
      .style("background", "transparent")
      .append("g")
      .attr("transform", `translate(${radius}, ${radius})`);

    const pie = d3
      .pie()
      .value((d) => d.percent)
      .padAngle(0.047)
      .sort(null);

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .cornerRadius(8);

    const pieData = pie(data);

    g.selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => d.data.color)
      .attr("stroke", "transparent");

    const labelPoints = pieData.map((d) => {
      const [x, y] = arc.centroid(d);
      return { label: d.data.label, x: x + radius, y: y + radius };
    });

    setLabelPositions(labelPoints);
  }, [data]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: 1,
        background: "transparent",
      }}
    >
      <svg
        ref={ref}
        style={{ display: "block", background: "transparent" }}
      ></svg>
      {labelPositions.map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${d.y / 10}%`,
            left: `${d.x / 10}%`,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            fontSize: "1rem",
            pointerEvents: "none",
            color: "#000",
          }}
        >
          {data[i].icon && (
            <img
              src={data[i].icon}
              alt={data[i].label}
              style={{ width: "3rem", height: "3rem" }}
            />
          )}
          <span>{data[i].label}</span>
        </div>
      ))}
    </div>
  );
};

export default PieChart;

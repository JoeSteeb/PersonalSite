import React, { useState } from "react";

export const Carousel = ({ children }) => {
  const [index, setIndex] = useState(0);
  const count = React.Children.count(children);

  const prev = () => setIndex((index - 1 + count) % count);
  const next = () => setIndex((index + 1) % count);
  const childCount = React.Children.count(children);

  const left =
    index > 0
      ? React.Children.toArray(children)
          .slice(0, index)
          .map((element, i) => {
            return (
              <div
                style={{
                  transform: `translateX(-${(i + 1) * 5}%)`,
                  zIndex: childCount - i,
                }}
                className="absolute top-1/16 left-1/10  w-4/5 h-7/8 "
                key={i}
              >
                {element}
              </div>
            );
          })
      : null;
  console.log(
    "left: ",
    left?.map((el) => el.key)
  );
  const right =
    index < childCount
      ? React.Children.toArray(children)
          .slice(index + 1)
          .map((element, i) => {
            return (
              <div
                style={{
                  transform: `translateX(${(i + 1) * 5}%)`,
                  zIndex: childCount - i,
                }}
                className="absolute top-1/16 left-1/10  w-4/5 h-7/8 "
                key={i + index}
              >
                {element}
              </div>
            );
          })
      : null;
  console.log("right: " + right?.map((el) => el.key));

  return (
    <div className="flex relative w-150 h-170 align-baseline bg-white">
      <div className="w-full h-full overflow-hidden">
        {left}
        <div
          key={index}
          className="absolute top-1/16 left-1/10  w-4/5 h-7/8 "
          style={{ zIndex: childCount + 1 }}
        >
          {React.Children.toArray(children)[index]}
        </div>
        {right}
      </div>

      <button
        onClick={prev}
        style={{ zIndex: childCount + 1 }}
        className="button w-2! absolute left-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded shadow"
      >
        ‹
      </button>
      <button
        onClick={next}
        style={{ zIndex: childCount + 2 }}
        className="button w-2! absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 px-2 py-1 rounded shadow"
      >
        ›
      </button>
    </div>
  );
};

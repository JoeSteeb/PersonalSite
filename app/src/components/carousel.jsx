import React, { useState } from "react";

export const Carousel = ({ children }) => {
  const [index, setIndex] = useState(0);
  const count = React.Children.count(children);

  const prev = () => setIndex((index - 1 + count) % count);
  const next = () => setIndex((index + 1) % count);

  return (
    <div className="flex relative w-150 h-170 align-baseline">
      <div className="w-full h-full overflow-hidden">
        {React.Children.toArray(children)
          .slice(0, index)
          .map((element, i) => {
            return (
              <div
                style={{ transform: `translateX(-${index * 2}%)`, zIndex: -i }}
                className="absolute top-0 left-0"
                key={index}
              >
                {element}
              </div>
            );
          })}
        <div key={index} className="absolute top-0 left-0">
          {React.Children.toArray(children)[index]}
        </div>
        {React.Children.toArray(children)
          .slice(index, React.Children.count(children))
          .map((element, i) => {
            return (
              <div
                style={{ transform: `translateX(-${index * 2}%)`, zIndex: -i }}
                className="absolute top-0 left-0"
                key={index}
              >
                {element}
              </div>
            );
          })}
      </div>

      <button
        onClick={prev}
        className="button w-2! absolute left-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded shadow"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="button w-2! absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 px-2 py-1 rounded shadow"
      >
        ›
      </button>
    </div>
  );
};

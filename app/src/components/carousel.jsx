import React, { useState, useRef, useEffect } from "react";

export const Carousel = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const count = React.Children.count(children);

  const prev = () => {
    if (index > 0) {
      setPrevIndex(index);
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index < count - 1) {
      setPrevIndex(index);
      setIndex(index + 1);
    }
  };

  const childCount = React.Children.count(children);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);

  const left =
    index > 0
      ? React.Children.toArray(children)
          .slice(0, index)
          .reverse()
          .map((element, i) => {
            return (
              <div
                ref={(el) => {
                  if (el) leftRefs.current[i] = el;
                }}
                className="absolute top-1/16 left-1/10 w-4/5 h-7/8"
                key={`left-${index}-${i}`}
              >
                {element}
              </div>
            );
          })
      : null;

  const right =
    index < childCount
      ? React.Children.toArray(children)
          .slice(index + 1)
          .map((element, i) => {
            return (
              <div
                ref={(el) => {
                  if (el) rightRefs.current[i] = el;
                }}
                className="absolute top-1/16 left-1/10 w-4/5 h-7/8"
                key={`right-${index}-${i}`}
              >
                {element}
              </div>
            );
          })
      : null;

  // Handle the transition effect for the left and right stack.
  useEffect(() => {
    const leftArr = leftRefs.current;
    const rightArr = rightRefs.current;

    if (leftArr) {
      leftArr.forEach((el, i) => {
        if (!el) return;

        if (index > prevIndex) {
          // Moving left → do instant jump 5% past final, then ease back
          el.style.transition = "none";
          el.style.transform = `translateX(-${i * 5}%)`;
          void el.offsetWidth;
          el.style.transition = "transform 0.5s ease-out";
          el.style.transform = `translateX(-${(i + 1) * 5}%)`;
          void el.offsetWidth;
          el.style.zIndex = count - i;
        } else {
          el.style.transition = "none";
          el.style.transform = `translateX(-${(i + 2) * 5}%)`;
          void el.offsetWidth;
          el.style.transition = "transform 0.5s ease-out";
          el.style.transform = `translateX(-${(i + 1) * 5}%)`;
          void el.offsetWidth;
          el.style.zIndex = count - i;
        }
      });
    }

    if (rightArr) {
      rightArr.forEach((el, i) => {
        if (!el) return;
        if (index > prevIndex) {
          // Moving right → do instant jump 5% past final, then ease back
          el.style.transition = "none";
          el.style.transform = `translateX(${(i + 2) * 5}%)`;
          void el.offsetWidth;
          el.style.transition = "transform 0.5s ease-out";
          el.style.transform = `translateX(${(i + 1) * 5}%)`;
          void el.offsetWidth;
          el.style.zIndex = count - i;
        } else {
          // Moving left → instant jump to i * 5%, then ease to (i + 1) * 5%
          el.style.transition = "none";
          el.style.transform = `translateX(${i * 5}%)`;
          void el.offsetWidth;
          el.style.transition = "transform 0.5s ease-out";
          el.style.transform = `translateX(${(i + 1) * 5}%)`;
          void el.offsetWidth;
          el.style.zIndex = count - i;
        }
      });
    }
  }, [index, prevIndex]);

  return (
    <div className="flex relative w-150 h-170 align-baseline bg-white rounded-md shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] overflow-hidden">
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
        style={{ zIndex: childCount + 2 }}
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

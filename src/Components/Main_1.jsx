import React, { useEffect, useState } from "react";

import "../App.css";
function Main_1(props) {
  const [padding, setPadding] = useState(0);
  const [state, setstate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state === 0) {
        setPadding(-600);
        setstate(1);
      } else if (state === 1) {
        setPadding(-900);
        setstate(2);
      } else if (state === 2) {
        setPadding(-1360);
        setstate(3);
      } else {
        setPadding(0);
        setstate(0);
      }
    }, 1200);
    return () => {
      clearInterval(interval);
    };
  }, [padding, state]);

  return (
    <div className="main_1">
      <div className="main_1_sub lo">
        <h2>Fine Art Student at Fashion Institute of Technology.</h2>
        <h5> ~ Art is Everywhere, Life is Art</h5>
      </div>
      <div className="main_1_sub">
        <div className="slide_show">
          <div className="slide_show_container">
            <div className="slides show_1">
              <div></div>
              <p>Old Master's Grid</p>
            </div>
            <div style={{ display: "flex" }}>
              <div className="slides show_2">
                <div></div>
                <p>Study of Still-life</p>
              </div>
              <div className="slides show_3">
                <div></div>
                <p>Portrait of a Woman</p>
              </div>
            </div>
            <div className="slides show_4">
              <div></div>
              <p>Study of Watercolor</p>
            </div>
            <div className="slides show_5">
              <div></div>
              <p>Self Portrait - Collage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_1;

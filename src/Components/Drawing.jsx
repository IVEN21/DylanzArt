import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
function Drawing({ drawing, setSortName, id }) {
  const [info, setInfo] = useState(false);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
 
  useEffect(() => {
    const img = new Image();
    img.src = drawing.url;

    img.onload = () => {
      if (img.width > img.height) {
        const scale = img.width / img.height;
        setHeight(400 / scale);
        setWidth(400);
      } else {
        const scale = img.height / img.width;
        setHeight(400);
        setWidth(400 / scale);
      }
    };
  });

  const info_animation = useTransition(info, null, {
    from: { transform: `translate3d(0,200px,0)`, opacity: 0 },
    enter: { transform: `translate3d(0,0,0)`, opacity: 1 },
    leave: { transform: `translate3d(0,200px,0)`, opacity: 0 },
    config: {
      friction: 20,
      tension: 200,
    },
  });

  return (
    <div
      key={id}
      className="drawing"
      style={{
        backgroundImage: `url(${drawing.url})`,
        height: height,
        width: width,
      }}
      onMouseEnter={() => setInfo(true)}
      onMouseLeave={() => setInfo(false)}

    >
      {info_animation.map(
        ({ item, props ,key}) =>
          item && (
            <animated.div className="info" style={props} key={key}>
              {drawing.tags.map((tags) => (
                <span
                  onClick={() => {
                    setSortName(tags.tag);
                  }}
                  key={tags._id}
                >
                  {tags.tag}
                </span>
              ))}
            </animated.div>
          )
      )}
    </div>
  );
}

export default Drawing;

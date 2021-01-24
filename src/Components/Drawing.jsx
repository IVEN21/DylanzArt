// import React, { useEffect, useState } from "react";
// import { animated, useTransition } from "react-spring";
// function Drawing({ drawing, setSortName, id }) {
//   const [info, setInfo] = useState(false);
//   const [height, setHeight] = useState(null);
//   const [width, setWidth] = useState(null);

//   const info_animation = useTransition(info, null, {
//     from: { transform: `translate3d(0,200px,0)`, opacity: 0 },
//     enter: { transform: `translate3d(0,0,0)`, opacity: 1 },
//     leave: { transform: `translate3d(0,200px,0)`, opacity: 0 },
//     config: {
//       friction: 500,
//       tension: 3200,
//     },
//   });

//   return (
//     <div
//       key={id}
//       className="drawing"
//       style={{
//         backgroundImage: `url(${drawing.url})`,
//         height: height,
//         width: width,
//       }}
//       onMouseEnter={() => setInfo(true)}
//       onMouseLeave={() => setInfo(false)}
//     >
//       {info_animation.map(
//         ({ item, props, key }) =>
//           item && (
//             <animated.div className="info" style={props} key={key}>
//               {drawing.tags.map((tags) => (
//                 <span
//                   onClick={() => {
//                     setSortName(tags.tag);
//                   }}
//                   key={tags._id}
//                 >
//                   {tags.tag}
//                 </span>
//               ))}
//             </animated.div>
//           )
//       )}
//     </div>
//   );
// }

// export default Drawing;
import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

function Drawing({ drawing, setSortName, id }) {
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(300);

  function changeSize() {
    const img = new Image();
    img.src = drawing.url;

    img.onload = () => {
      if (img.height > img.width) {
        setHeight((img.height / img.width) * 300);
      } else {
        setWidth((img.width / img.height) * 300);
      }
    };
  }

  return (
    <div className="drawings_container">
      <a
        className="drawings"
        style={{ height, width, backgroundImage: `url(${drawing.url})` }}
        onMouseEnter={changeSize}
        onMouseLeave={() => {
          setHeight(300);
          setWidth(300);
        }}
        onClick={() => {}}
        href={drawing.url}
        target="_blank"
      >
        <div className="info">
          {drawing.tags.map((tags) => (
            <span key={tags._id}>{tags.tag}</span>
          ))}
        </div>
      </a>
    </div>
  );
}

export default Drawing;

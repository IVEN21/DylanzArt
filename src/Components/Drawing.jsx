import React from "react";
import { animated } from "react-spring";
function Drawing({drawing, style, key}) {
  // const info_render = () => (
  //     <animated.div className="clip_info" style={info_animation}>
  //       <div className="clip_info_bottom">
  //         {clip.attrs.map((attrs) => (
  //           <span
  //             className="clip_attr"
  //             key={attrs._id}
  //             onClick={() =>
  //               (window.location = `/porns/${attrs.attr.toLowerCase()}/1`)
  //             }
  //           >
  //             {attrs.attr}
  //           </span>
  //         ))}
  //       </div>
  //       <a
  //         href={link_access()}
  //         alt="#"
  //         className="clip_link"
  //         target={getCurrrentUser() && getCurrrentUser().approved && "_blank"}
  //       >
  //         Link here
  //         <FontAwesomeIcon
  //           icon={faTired}
  //           style={{ color: "antiquewhite", paddingLeft: "3px" }}
  //         />
  //       </a>
  //     </animated.div>
  //   );
  return (
    <animated.div
      className="drawing"
      style={{ ...style, backgroundImage: `url(${drawing.img})` }}
      key={key}
    >
      <div></div>
    </animated.div>
  );
}

export default Drawing;

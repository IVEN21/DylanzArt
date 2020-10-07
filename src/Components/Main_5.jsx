import React, { useState, useRef } from "react";
import {
  animated,
  useTrail,
  useSpring,
  useChain,
  useTransition,
  config,
} from "react-spring";
import Drawing from "./Drawing";
function Main_5(props) {
  const drawings = [
    {
      id: 0,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106335/pic/slide3_zs8npt.jpg",
    },
    {
      id: 1,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106335/pic/slide3_zs8npt.jpg",
    },
    {
      id: 2,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312592/pic/p5_aycwp4.jpg",
    },
    {
      id: 3,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106222/pic/wall_j2oon6.png",
    },
    {
      id: 4,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312583/pic/p3_frezdp.jpg",
    },
    {
      id: 5,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106335/pic/slide3_zs8npt.jpg",
    },
    {
      id: 6,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106335/pic/slide3_zs8npt.jpg",
    },
    {
      id: 7,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601332837/pic/73c8ffd108af42e353e714b1211fe4a_ynaipe.jpg",
    },
    {
      id: 8,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312592/pic/p5_aycwp4.jpg",
    },
    {
      id: 9,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312589/pic/p2_qvdxwn.jpg",
    },
    {
      id: 10,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106335/pic/slide3_zs8npt.jpg",
    },
    {
      id: 11,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106335/pic/slide3_zs8npt.jpg",
    },
    {
      id: 12,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312592/pic/p5_aycwp4.jpg",
    },
    {
      id: 13,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106222/pic/wall_j2oon6.png",
    },
    {
      id: 14,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312583/pic/p3_frezdp.jpg",
    },
    {
      id: 15,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106335/pic/slide3_zs8npt.jpg",
    },
    {
      id: 16,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1602106335/pic/slide3_zs8npt.jpg",
    },
    {
      id: 17,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601332837/pic/73c8ffd108af42e353e714b1211fe4a_ynaipe.jpg",
    },
    {
      id: 18,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312592/pic/p5_aycwp4.jpg",
    },
    {
      id: 19,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312589/pic/p2_qvdxwn.jpg",
    },
  ];
  const [gallery_open, setOpen] = useState(false);
  const [info_on, info_toggle] = useState(false);
  const springRef = useRef();
  const { size } = useSpring({
    from: { size: "20%", backgroundColor: "pink" },
    to: { size: gallery_open ? "100%" : "20%" },
    ref: springRef,
    config: { friction: 20 },
  });

  const transitionRef = useRef();

  const animation = useTransition(
    gallery_open ? drawings : [],
    (drawings) => drawings.id,
    {
      ref: transitionRef,
      from: { opacity: 0, transform: "scale(0)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0)" },
      trail: 400 / drawings.length,
      config: config.gentle,
    }
  );
  useChain(
    gallery_open ? [springRef, transitionRef] : [transitionRef, springRef]
  );
  return (
    <div className="Main_5">
      <animated.div
        className="Gallery"
        onClick={() => setOpen(!gallery_open)}
        style={{ width: size, height: size }}
      >
        {animation.map(({ item, key, props }) => (
          <Drawing drawing={item} style={props} key={key} />
        ))}
      </animated.div>
    </div>
  );
}

export default Main_5;

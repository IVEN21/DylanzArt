import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTransition, animated, config } from "react-spring";

import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Main_3(props) {
  const [main_index, setMain_index] = useState(2);
  const [direction, setDirection] = useState(null);
  const main_corousel = [
    {
      id: 0,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312586/pic/p1_q3n3co.jpg",
      line: "Still-life of colors",
    },
    {
      id: 1,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601332837/pic/73c8ffd108af42e353e714b1211fe4a_ynaipe.jpg",
      line: "Blooming Summer",
    },
    {
      id: 2,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312592/pic/p5_aycwp4.jpg",
      line: "Survive In Dark ",
    },
    {
      id: 3,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312589/pic/p2_qvdxwn.jpg",
      line: "Still-life In Warmth",
    },
    {
      id: 4,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312583/pic/p3_frezdp.jpg",
      line: "Study of Shapes ",
    },
    {
      id: 5,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312580/Woman%20and%20Still-life.jpg",
      line: "Woman and Still-life",
    },
    {
      id: 6,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312586/pic/p1_q3n3co.jpg",
      line: "Still-life of colors ",
    },
    {
      id: 7,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601332837/pic/73c8ffd108af42e353e714b1211fe4a_ynaipe.jpg",
      line: "Blooming Summer",
    },
    {
      id: 8,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312592/pic/p5_aycwp4.jpg",
      line: "Survive In Dark",
    },
    {
      id: 9,
      img:
        "https://res.cloudinary.com/du7vltati/image/upload/v1601312589/pic/p2_qvdxwn.jpg",
      line: "Still-life In Warmth",
    },
  ];
  const description_animation_1 = useTransition(
    main_corousel[main_index - 1],
    (item) => item.id,
    {
      from: { opacity: 0, transform: "translateY(30px)", position: "absolute" },
      delay: "400ms",
      enter: { opacity: 1, transform: "translateY(0px)" },
      leave: { opacity: 0 },

      config: config.gentle,
    }
  );
  const description_animation_main = useTransition(
    main_corousel[main_index],
    (item) => item.id,
    {
      from: {
        opacity: 0,
        transform: "translateY(30px)",
        position: "absolute",
        margin: "0 50px ",
      },
      delay: "400ms",
      enter: { opacity: 1, transform: "translateY(0px)" },
      leave: { opacity: 0 },

      config: config.gentle,
    }
  );
  const description_animation_3 = useTransition(
    main_corousel[main_index + 1],
    (item) => item.id,
    {
      from: { opacity: 0, transform: "translateY(30px)", position: "absolute" },
      delay: "400ms",
      enter: { opacity: 1, transform: "translateY(0px)" },
      leave: { opacity: 0 },

      config: config.gentle,
    }
  );
  const sup_1_animation = useTransition(
    main_corousel[main_index - 1],
    (item) => item.id,
    {
      from: direction
        ? { opacity: 0, transform: "translateX(150px)" }
        : { opacity: 0, transform: "translateX(-150px)" },
      enter: { opacity: 1, transform: "translateX(0px)" },
      leave: direction
        ? { opacity: 0, transform: "translateX(-150px)" }
        : { opacity: 0, transform: "translateX(150px)" },
      config: config.molasses,
    }
  );
  const main_animation = useTransition(
    main_corousel[main_index],
    (item) => item.id,
    {
      from: direction
        ? { opacity: 0, transform: "translateX(150px)" }
        : { opacity: 0, transform: "translateX(-150px)" },
      enter: { opacity: 1, transform: "translateX(0px)" },
      leave: direction
        ? { opacity: 0, transform: "translateX(-150px)" }
        : { opacity: 0, transform: "translateX(150px)" },
      config: config.molasses,
    }
  );

  const sup_2_animation = useTransition(
    main_corousel[main_index + 1],
    (item) => item.id,
    {
      from: direction
        ? { opacity: 0, transform: "translateX(150px)" }
        : { opacity: 0, transform: "translateX(-150px)" },
      enter: { opacity: 1, transform: "translateX(0px)" },
      leave: direction
        ? { opacity: 0, transform: "translateX(-150px)" }
        : { opacity: 0, transform: "translateX(150px)" },
      config: config.molasses,
    }
  );

  const index_indicator = () => {
    function index() {
      if (main_index === 8) return 1;
      if (main_index === 1) return 6;
      else return main_index - 1;
    }
    return (
      <span className="index_span">
        {" "}
        0{index()}
        <span style={{ color: "#868686" }}> / 06</span>
      </span>
    );
  };

  return (
    <div className="main_3">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              position: "relative",
              width: "330px",
              height: "280px",
              overflow: "hidden",
              boxShadow: "1rem 1rem 1rem #4a3d3d",
            }}
          >
            {sup_1_animation.map(({ item, props, key }) => {
              return (
                <animated.div
                  key={key}
                  className="corousel_1"
                  style={{
                    ...props,
                    backgroundImage: `url(${item.img})`,
                  }}
                />
              );
            })}
          </div>
          {description_animation_1.map(({ item, props, key }) => {
            return (
              <div style={{ position: "relative" }} key={key}>
                <animated.p style={props}>{item.line}</animated.p>
              </div>
            );
          })}
        </div>
        <div>
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              width: "450px",
              height: "370px",
              margin: "0 50px 30px 50px",
              boxShadow: "1rem 1rem 1rem #4a3d3d",
            }}
          >
            {main_animation.map(({ item, props, key }) => {
              return (
                <animated.div
                  key={key}
                  className="corousel_main"
                  style={{
                    ...props,
                    backgroundImage: `url(${item.img})`,
                  }}
                />
              );
            })}
          </div>
          {description_animation_main.map(({ item, props, key }) => {
            return (
              <div style={{ position: "relative" }} key={key}>
                <animated.p style={props}>{item.line}</animated.p>
              </div>
            );
          })}
        </div>

        <div>
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              width: "330px",
              height: "280px",
              boxShadow: "1rem 1rem 1rem #4a3d3d",
            }}
          >
            {sup_2_animation.map(({ item, props, key }) => {
              return (
                <animated.div
                  key={key}
                  className="corousel_1"
                  style={{
                    ...props,
                    backgroundImage: `url(${item.img})`,
                  }}
                />
              );
            })}
          </div>
          {description_animation_3.map(({ item, props, key }) => {
            return (
              <div style={{ position: "relative" }} key={key}>
                <animated.p style={props}>{item.line}</animated.p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="arrows">
        <div
          className="svgHolder"
          onClick={() => {
            setDirection(false);
            if (main_index === 1) setMain_index(6);
            else setMain_index(main_index - 1);
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        {index_indicator()}
        <div
          className="svgHolder"
          onClick={() => {
            setDirection(true);
            if (main_index === 8) setMain_index(3);
            else setMain_index(main_index + 1);
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
}

export default Main_3;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "react-spring";
import {
  faAngleUp,
  faGrinBeamSweat,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import { Link, NavLink} from "react-router-dom";
import { getCurrrentUser, logout } from "./BackendService/authService";

function Navbar(props) {
  const user = getCurrrentUser();
  const [author, setauthor] = useState(false);
  const [product, setproduct] = useState(false);
  const [contact, setcontact] = useState(false);
  const [login_open, set_login] = useState(false);

  const animation_a = useSpring({
    from: { transform: "translate3d(-280px,-30px,0)", opacity: 0 },
    transform: author
      ? "translate3d(-280px,0px,0)"
      : "translate3d(-280px,-50px,0)",
    opacity: author ? 1 : 0,
  });
  const animation_p = useSpring({
    from: { transform: "translate3d(0px,-30px,0)", opacity: 0 },
    transform: product ? "translate3d(0px,0px,0)" : "translate3d(0px,-50px,0)",
    opacity: product ? 1 : 0,
  });
  const animation_c = useSpring({
    from: { transform: "translate3d(240px,-30px,0)", opacity: 0 },
    transform: contact
      ? "translate3d(240px,0px,0)"
      : "translate3d(240px,-50px,0)",
    opacity: contact ? 1 : 0,
  });
  const Author_content = () => (
    <animated.div className="sub_content auth" style={animation_a}>
      <div className="author" />{" "}
      <p
        style={{
          width: "230px",
          fontSize: "21px",
          color: "#47403f",
          padding: "20px",
          lineHeight: "30px",
        }}
      >
        Daxian Zhao(Dylan) Fine Art student at Fashion Institute of Technology.
        Currently live in Brooklyn, NYC. Commission artist of Build Brooklyn
        Street Art. Mainly focuses on watercolor and oil paintings{" "}
        <FontAwesomeIcon icon={faSmileBeam} style={{ color: "#736664" }} />.
      </p>
    </animated.div>
  );
  const Product_content = () => (
    <animated.div className="sub_content prod" style={animation_p}>
      <p
        style={{
          width: "200px",
          fontSize: "23px",
          color: "#47403f",
        }}
      >
        Currently No Sales Available <FontAwesomeIcon icon={faGrinBeamSweat} />
      </p>
    </animated.div>
  );
  const Contact_content = () => (
    <animated.div className="sub_content cont" style={animation_c}>
      <div>
        <span>Email: daxianzhao00@gmail.com</span>
        <span>Phone: 646-662-8120</span>
        <span>
          Instagrm:{" "}
          <label
            className="arrow"
            onClick={() =>
              (window.location = "https://www.instagram.com/dylannn_zhao/")
            }
          >
            {" "}
            Here
          </label>
        </span>
      </div>
    </animated.div>
  );

  return (
    <div className="navbar">
      <span>
        <Link to="/"> DylanzArt</Link>
      </span>
      <div className="navbar_center">
        <a
          onMouseEnter={() => setauthor(true)}
          onMouseLeave={() => setauthor(false)}
          
        >
          About Author
          <FontAwesomeIcon
            icon={faAngleUp}
            style={
              author
                ? {
                    transform: "translateX(5px)  rotate(180deg)",
                    color: "#dbb2b2",
                  }
                : { transform: "translateX(5px)" }
            }
          />
          {author && Author_content()}
        </a>
        <a
          onMouseEnter={() => setproduct(true)}
          onMouseLeave={() => setproduct(false)}
        >
          Product
          <FontAwesomeIcon
            icon={faAngleUp}
            style={
              product
                ? {
                    transform: "translateX(5px)  rotate(180deg)",
                    color: "#dbb2b2",
                  }
                : { transform: "translateX(5px)" }
            }
          />
          {product && Product_content()}
        </a>
        <a
          onMouseEnter={() => setcontact(true)}
          onMouseLeave={() => setcontact(false)}
        >
          Contact
          <FontAwesomeIcon
            icon={faAngleUp}
            style={
              contact
                ? {
                    transform: "translateX(5px)  rotate(180deg)",
                    color: "#dbb2b2",
                  }
                : { transform: "translateX(5px)" }
            }
          />
          {contact && Contact_content()}
        </a>
        <NavLink to="/upload" className="nav_upload">
          Upload
        </NavLink>
      </div>
      {<Login login_open={login_open} set_login={set_login} />}
      {
        
        (!user)?
        <span onClick={() => set_login(true)} style={{backgroundColor:"#bae6b5"}}>Log In </span>
        :   <span onClick={()=> {logout();  window.location = "/"; }}style={{backgroundColor:"#cc9399"}} >Log Out</span>}
    </div>
  );
}

export default Navbar;

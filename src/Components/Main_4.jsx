import React from "react";
import { ToastContainer, toast } from "react-toastify";

function Main_4(props) {
  return (
    <div className="Main_4">
      <ToastContainer style={{ textAlign: "center", color: "#423842" }} />
      <div className="Main_4_left">
        <img src={require("../img/guitar.jpg")} alt="guitar" width="500px" height="600px" />
        <p>Study of Light and Composition</p>
      </div>
      <div className="Main_4_right">
        <h1>Still-life</h1>
        <p>
          When we paint or create art, we are considering many elements. The compositions of the painting is what make the painting interesting, the colors that we use through out painting gives the impression to the viewers. The objects in the painting matters, the surface and the texture on the canvas pushed the painting to go further.
Making art is about thinking.    </p>
        <h3 onClick={() => toast("Contact Author")}>Sponsor Me</h3>
      </div>
    </div>
  );
}

export default Main_4;

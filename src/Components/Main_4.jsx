import React from "react";

function Main_4(props) {
  return (
    <div className="Main_4">
      <div className="Main_4_left">
        <img src={require("../img/guitar.jpg")} width="500px" height="600px" />
        <p>Study of Light and Composition</p>
      </div>
      <div className="Main_4_right">
        <h1>Blogging Tools</h1>
        <p>
          Take advantage of our powerful blogging tools to share your story,
          post company news, or announce a product release. Categorize, share,
          and schedule your posts to make your content work for you.
        </p>
        <h3>Sponsor Me</h3>
      </div>
    </div>
  );
}

export default Main_4;

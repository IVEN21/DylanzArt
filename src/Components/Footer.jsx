import React from 'react';

function Footer(props) {

        return (
            <div className="pro_footer">
              <label>Terms</label>
              <label>Condition</label>
              <label>About</label>
              <label
                style={{ color: "pink", cursor: "pointer" }}
                onClick={() =>
                  (window.location = "https://www.instagram.com/_yesloiven__/")
                }
              >
               Web Developer
              </label>
              <span className="fuk">©Fuck2020. Inc</span>
            </div>
          );

}

export default Footer;
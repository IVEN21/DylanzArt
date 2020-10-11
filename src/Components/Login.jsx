import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {login} from "./BackendService/authService"
class Login extends Component {
  state = {
    Author: "",
    Password: "",
    loading: false,
  };

  //update state
  onchange = (e, credential) => {
    this.setState({ [credential]: e.currentTarget.value });
  };

    //submit login
    onLogin = async () => {
      const { Author, Password } = this.state;
      this.setState({ loading: true });
      await login(Author, Password);
      this.setState({ loading: false });
    };

  //input field
  input = (credential) => {
    return (
      <React.Fragment>
        <h1>{credential}</h1>
        <input
          type={credential === "Password" ? "password" : ""}
          className="input_control"
          onChange={(e) => {
            this.onchange(e, credential);
          }}
          onKeyPress={
            !this.validation()
              ? (e) => {
                  if (e.key === "Enter") this.onLogin();
                }
              : null
          }
        ></input>
      </React.Fragment>
    );
  };
  //check credentials empty
  validation = () => {
    const { Author, Password } = this.state;
    if (Author.length > 0 && Password.length > 0) return false;
    else return true;
  };
  render() {
    const { login_open, set_login } = this.props;

    return (
      <Spring
        from={{
          transform: "translate3d(-50%,0,0) scale(0.9)",

          opacity: 0,
          pointerEvents: "none",
        }}
        to={{
          transform: login_open
            ? "translate3d(-50%,0px,0) scale(1)"
            : "translate3d(-50%,0px,0) scale(0.9)",
          opacity: login_open ? 1 : 0,
          pointerEvents: login_open ? "all" : "none",
        }}
        config={{
          friction: 30,
        }}
      >
        {(props) => (
          <div className="login" style={props}>
            <div className="login_times" onClick={() => set_login(false)}>
              <FontAwesomeIcon icon={faTimes} style={{ fontWeight: 100 }} />
            </div>{" "}
            <div className="login_innerContain">
              {this.input("Author")}
              {this.input("Password")}
              <button disabled={this.validation()} onClick={this.onLogin}>
                Login
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Login;

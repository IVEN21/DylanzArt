import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinHearts } from "@fortawesome/free-solid-svg-icons";
import Drawing from "./Drawing";
import { getDrawings } from "./BackendService/dbService";
import { toast } from "react-toastify";

class Main_5 extends Component {
  state = {
    sortName: "all",
    drawings: [],
  }
  async componentDidMount() {
    try {
      const data = await getDrawings();
      this.setState({ drawings: data })
    } catch (error) {
      toast.error("Something Wrong With Api Fetching")
    }
  }

  filter_drawings = () => {
    const { drawings, sortName } = this.state
    if (sortName === "all") {
      return drawings;
    } else {
      var temp_drawings = [];
      for (var i = 0; i < drawings.length; i++) {
        for (var j = 0; j < drawings[i].tags.length; j++) {
          if (drawings[i].tags[j].tag.toLowerCase() === sortName.toLowerCase()) temp_drawings.push(drawings[i]);
        }
      }
      return temp_drawings;
    }

  };
  setSortName = (item) => {
    this.setState({ sortName: item })
  }
  render() {

    const categories = () => { 
      const cate = ["all", "ugly", "abstract"];

      if(!cate.includes(this.state.sortName.toLowerCase())) cate.push(this.state.sortName)
      return cate
    
  }

    return (
      <div className="Main_5">
        <div className="sort">
          <div style={{ width: "100%", textAlign: "center", color: "#f2e7da" }}>
            <div style={{ fontSize: "50px", marginBottom: "50px" }}>
              Welcome To My Gallery
                <FontAwesomeIcon icon={faGrinHearts} style={{ color: "#edbec0",marginLeft:"19px" }} />
            </div>
          </div>
          <br />
          <br />
            Categories:
            {categories().map((item) => (
            <label
              key={item}
              onClick={() => this.setState({
                sortName: item
              })}
              className={item === this.state.sortName.toLowerCase() ? "active" : ""}
            >
              {item}
            </label>
          ))}
        </div>
        <div className="Gallery" >
          <div className="main_5_container">
            {this.filter_drawings().length > 0 ? this.filter_drawings().reverse().map((item) =>
              <Drawing drawing={item} setSortName={this.setSortName} id={item._id} key={item._id} />
            ) : <h1 style={{ color: "#ff9cac" }}>No Relevant Result found</h1>}
          </div>
        </div>
      </div>

    );
  }
}

export default Main_5;


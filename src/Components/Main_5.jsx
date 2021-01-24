import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinHearts } from "@fortawesome/free-solid-svg-icons";
import Drawing from "./Drawing";
import { getDrawings } from "./BackendService/dbService";
import { toast } from "react-toastify";
import SearchBox from "./SearchBox";
class Main_5 extends Component {
  state = {
    sortName: "All",
    drawings: [],
    query: "",
  };
  async componentDidMount() {
    try {
      const data = await getDrawings();
      this.setState({ drawings: data });
    } catch (error) {
      toast.error("Something Wrong With Api Fetching");
    }
  }

  filter_drawings = () => {
    const { drawings, sortName, query } = this.state;
    if (query !== "") {
      var temp_drawings = [];

      for (var i = 0; i < drawings.length; i++) {
        loop: for (var j = 0; j < drawings[i].tags.length; j++) {
          if (
            drawings[i].tags[j].tag.toLowerCase().includes(query.toLowerCase())
          ) {
            temp_drawings.push(drawings[i]);
            break loop;
          }
        }
      }
      return temp_drawings;
    } else if (sortName === "All") {
      return drawings;
    } else {
      var temp_drawings = [];
      for (var i = 0; i < drawings.length; i++) {
        loop: for (var j = 0; j < drawings[i].tags.length; j++) {
          if (
            drawings[i].tags[j].tag
              .toLowerCase()
              .includes(sortName.toLowerCase())
          ) {
            temp_drawings.push(drawings[i]);
            break loop;
          }
        }
      }
      return temp_drawings;
    }
  };
  setSortName = (item) => {
    this.setState({ sortName: item, query: "" });
  };
  render() {
    const categories = () => {
      const cate = [
        "All",
        "Water Color",
        "Figure",
        "Oil Painting",
        "Abstract",
        "Still-life",
      ];
      const tempcate = cate.find((item) => item.toLowerCase());
      if (this.state.query.length > 0 && !tempcate.includes(this.state.query)) {
        cate.push(this.state.query);
        return cate;
      }
      if (!cate.includes(this.state.sortName)) cate.push(this.state.sortName);
      return cate;
    };
    //Searchbar Functionality

    const onSearch = ({ currentTarget }) => {
      this.setState({ query: currentTarget.value, sortName: "" });
    };

    const search_bar = (
      <SearchBox onchange={onSearch} value={this.state.query} />
    );

    return (
      <div className="Main_5">
        <div className="sort">
          <div style={{ width: "100%", textAlign: "center", color: "#f2e7da" }}>
            <div style={{ fontSize: "50px", marginBottom: "50px" }}>
              Gallery
              {search_bar}
            </div>
          </div>
          <br />
          <br />
          <div className="cate_div">
            Categories:
            {categories().map((item) => (
              <label
                key={item}
                onClick={() =>
                  this.setState({
                    sortName: item,
                    query: "",
                  })
                }
                className={
                  item === this.state.sortName || item === this.state.query
                    ? "active"
                    : ""
                }
              >
                {item}
              </label>
            ))}
          </div>
        </div>
        <div className="Gallery">
          <div className="main_5_container">
            {this.filter_drawings().length > 0 ? (
              this.filter_drawings()
                .reverse()
                .map((item) => (
                  <Drawing
                    drawing={item}
                    setSortName={this.setSortName}
                    id={item._id}
                    key={item._id}
                  />
                ))
            ) : (
              <h1 style={{ color: "#ff9cac" }}>No Relevant Result found</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main_5;

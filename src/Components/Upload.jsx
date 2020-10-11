import React, { Component } from "react";
import UploadImg from "./UploadImg";
import Attr from "./Attr";
import { ToastContainer, toast } from "react-toastify";
import UploadBtn from "./UploadBtn";
import http from "./BackendService/http";
import { apiEndpoint } from "./BackendService/config.json";
class Upload extends Component {
  state = {
    img: null,
    tags: [],
    loading: {
      load: false,
      text: "",
    },
  };

  img_submit = (info) => {
    this.setState({ img: info });
  };
  attr_submit = (info) => {
    this.setState({ tags: info });
  };

  //if data filled => locked
  lock = () => {
    const { tags, img } = this.state;
    if (tags && tags.length > 0 && img) return true;
    return false;
  };

  //upload to cloundary
  images_upload = async () => {
  var img_url = null;
      try {
        this.setState({
          loading: { load: true, text: "Uploading Images to Cloud" },
        });
        const promise = await http.post(apiEndpoint + "/gallery/drawing_upload", {
          data: this.state.img,
        });
       img_url = promise.data
      } catch (err) {
        toast.error("Images May Not be Uploaded Due to Api Problem");
        return;
      
    }
    this.clips_info_upload(img_url);
  };

  //upload to database
  clips_info_upload = async (img_url) => {
    try {
      this.setState({ loading: { load: true, text: "Uploading to API" } });
     await http.post(apiEndpoint + "/gallery", {
        tags:this.state.tags,
        url: img_url,
      });
      this.setState({ loading: { load: false, text: "DONE!" } });
    } catch (error) {
      toast.error("Data Could Not be Uploaded Due to Api Problem");
      return;
    }
    toast.success("Upload Success. Edit to Upload More!");
  };

  render() {
  
    return (
      <div className="upload main">
        <ToastContainer />
        <div className="upload_grid_area">
          <UploadImg img_submit={this.img_submit} />
          <Attr attr_submit={this.attr_submit} />
          <UploadBtn
            loading={this.state.loading}
            data_upload={this.images_upload}
            locked={this.lock()}
            admin={this.props.user && this.props.user.admin}
          />
        </div>
      </div>
    );
  }
}

export default Upload;

import React, { Component } from "react";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDelete = async id => {
   // await apiGoogleDrive.delete(
    //  `https://www.googleapis.com/drive/v3/files/${id}`
   // );
    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  render() {
    return (
  

        <Dropzone onDropAccepted={this.handleUpload}/>
          

    );
  }
}
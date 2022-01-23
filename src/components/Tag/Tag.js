import React, { Component } from "react";
class Tag extends Component {
  //ALL STATES
  constructor(props) {
    super(props);

    this.state = {
      //   isExpand: false,
      tag: "",
      tags: [],
      //   isShow: true,
    };
  }

  render() {
    const { tag } = this.props;

    return <div className="tag">{tag}</div>; //end return
  }
}

export default Tag;

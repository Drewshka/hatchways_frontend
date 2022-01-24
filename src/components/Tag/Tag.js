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

    return <li className="tag">{tag}</li>; //end return
  }
}

export default Tag;

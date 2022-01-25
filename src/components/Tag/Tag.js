import React, { Component } from "react";
class Tag extends Component {
  //ALL STATES
  constructor(props) {
    super(props);
    this.state = {
      tag: "",
      tags: [],
    };
  }

  render() {
    const { tag } = this.props;

    return <li className="tag">{tag}</li>; //end return
  }
}

export default Tag;

// import React from "react";
// // import styles from "./Tag.module.css";

// const Tag = ({ tag }) => {
//   return <div className="tag">{tag}</div>;
// };

// export default Tag;

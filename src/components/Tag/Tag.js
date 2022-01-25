import React from "react";

const Tag = ({ tag }) => {
  return <li className="tag">{tag}</li>;
};

export default Tag;

// import React, { Component } from "react";
// class Tag extends Component {
//   //ALL STATES
//   constructor(props) {
//     super(props);
//     this.state = {
//       tag: "",
//       tags: [],
//     };
//   }

//   render() {
//     const { tag } = this.props;

//     return <li className="tag">{tag}</li>; //end return
//   }
// }

// export default Tag;

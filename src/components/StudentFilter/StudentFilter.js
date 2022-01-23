// import React, { useState } from "react";
import React, { Component } from "react";
import OnEvent from "react-onevent";

import Open from "../../assets/icons/open.svg";
import Close from "../../assets/icons/close.svg";
import "./StudentFilter.scss";

// import OpenIcon from "../Icons/OpenIcon";
// import CloseIcon from "../Icons/CloseIcon";
// import Tag from "../Tag/Tag";
// import TagInput from "../TagInput/TagInput";
// import TagForm from "../TagForm/TagForm";

//   const selectedTags = (tags) => console.log(tags);
//   const [showGrades, setShowGrades] = useState(false);
export default class StudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      showPlusButton: true,
      showMinusButton: false,
      tagsInput: "",
      tags: [],
    };
  }
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       on: false,
  //       showPlusButton: true,
  //       showMinusButton: false,
  //       tag: "",
  //       tags: [],
  //     };
  //   }

  toggle = () => {
    this.setState({
      on: !this.state.on,
      showPlusButton: !this.state.showPlusButton,
      showMinusButton: !this.state.showMinusButton,
    });
  };

  updateTagValue = (value) => {
    if (value === " ") {
      return;
    }
    this.setState({
      tagsInput: value,
    });
  };

  addTag = (tag) => {
    let newTags = [...this.state.tags, tag];

    // newTags = newTags.join("  ||  ");
    newTags = newTags.join("  ,  ");

    this.setState({
      tags: newTags,
    });

    //send tags to parent component
    this.props.getTags(this.props.id, newTags);

    //check if tag already exists

    if (!(this.state.tags.indexOf(tag) > -1)) {
      let tags = this.state.tags.concat([tag]);
      this.updateTags(tags);
    }
    this.updateTagValue("");
  };

  updateTags = (tags) => {
    this.setState({
      tags,
    });
  };

  // *new code
  //Change input states
  //   handleChange = (event) => {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  //   //On press Enter
  //   keyPress = (e) => {
  //     if (e.keyCode === 13) {
  //       this.props.handler(this.state.tag, this.props.student.id);

  //       this.setState((prevState) => ({
  //         tags: [...prevState.tags, this.state.tag],
  //       }));
  //       this.setState({
  //         tag: "",
  //       });
  //     }
  //   };

  render() {
    // console.log(this.props.tags);
    return (
      <div className="students">
        <div className="students_container-card" key={this.props.index}>
          <article id="first_half">
            <img
              src={this.props.img}
              alt="avatar"
              className="students_container-card-avatar"
            />
          </article>
          <article id="second_half">
            <h3 className="students_container-card-header">
              {this.props.firstName} {this.props.lastName}
            </h3>
            <div className="students_container-card-para">
              <p className="students_container-card-para-email">
                Email: {this.props.email}
              </p>
              <p className="students_container-card-para-company">
                Company: {this.props.company}
              </p>
              <p className="students_container-card-para-skill">
                Skill: {this.props.skill}
              </p>
              <p className="students_container-card-para-avg">
                Average: {this.props.averageGrade}
              </p>

              {this.state.on && (
                <div>
                  <ul>
                    {this.props.grades.map(function (name, index) {
                      return (
                        <li key={index}>
                          Test {index + 1}: {name}%
                        </li>
                      );
                    })}
                  </ul>

                  <ul>
                    {this.props.tags &&
                      this.props.tags.map((x, index) => (
                        <li key={index} className="tags">
                          {x}
                        </li>
                      ))}
                  </ul>

                  <OnEvent enter={(e) => this.addTag(e.target.value)}>
                    <input
                      value={this.state.tagsInput}
                      onChange={(e) => {
                        this.updateTagValue(e.target.value);
                      }}
                      type="text"
                      placeholder="Enter tag..."
                    />
                  </OnEvent>
                </div>
              )}
              <div className="buttons">
                {this.state.showPlusButton && (
                  <button onClick={this.toggle}>
                    <img alt="open" src={Open} />
                  </button>
                )}

                {this.state.showMinusButton && (
                  <button onClick={this.toggle}>
                    <img alt="close" src={Close} />
                  </button>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import OnEvent from "react-onevent";
import Open from "../../assets/icons/open.svg";
import Close from "../../assets/icons/close.svg";
import "./StudentFilter.scss";
import Tag from "../Tag/Tag";

export default class StudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      showPlusButton: true,
      showMinusButton: false,
      tagInput: "",
      tags: [],
    };
  }

  setToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
      showPlusButton: !this.state.showPlusButton,
      showMinusButton: !this.state.showMinusButton,
    });
  };

  updateTagValue = (value) => {
    if (value === " ") {
      return;
    }
    this.setState({
      tagInput: value,
    });
  };

  updateTags = (tags) => {
    this.setState({
      tags,
    });
  };

  addTag = (tag) => {
    let newTags = [...this.state.tags, tag];

    //*send tags to parent component
    this.props.getTags(this.props.id, newTags);

    //*check if tag already exists
    if (!(this.state.tags.indexOf(tag) > -1)) {
      let tags = this.state.tags.concat([tag]);
      this.updateTags(tags);
    }
    this.updateTagValue("");
  };

  render() {
    let showAllTags = this.props.tags ? (
      this.props.tags.map((tag) => <Tag key={tag} tag={tag} />)
    ) : (
      <div></div>
    );

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
            <div className="students_container-flex">
              <div className="test1">
                <div className="test2">
                  <h3 className="students_container-card-header">
                    {this.props.firstName} {this.props.lastName}
                  </h3>
                  <div className="buttons">
                    {this.state.showPlusButton && (
                      <button onClick={this.setToggle} className="openButton">
                        <img alt="open" src={Open} />
                      </button>
                    )}

                    {this.state.showMinusButton && (
                      <button onClick={this.setToggle} className="closeButton">
                        <img alt="close" src={Close} />
                      </button>
                    )}
                  </div>
                </div>
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
                </div>
              </div>

              {this.state.toggle && (
                <div>
                  <ul className="gradesList">
                    {this.props.grades.map(function (name, index) {
                      return (
                        <li key={index}>
                          Test {index + 1}: {name}%
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              <ul className="tagsList">
                {this.props.tags ? (
                  <div className="tagsDiv">{showAllTags}</div>
                ) : (
                  <div></div>
                )}
              </ul>

              <OnEvent enter={(e) => this.addTag(e.target.value)}>
                <input
                  value={this.state.tagInput}
                  onChange={(e) => {
                    this.updateTagValue(e.target.value);
                  }}
                  type="text"
                  placeholder="Add a tag"
                  className="tagsInput"
                />
              </OnEvent>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

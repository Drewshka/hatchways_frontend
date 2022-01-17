// import React, { useState } from "react";
import React, { Component } from "react";
import OnEvent from "react-onevent";

// import OpenIcon from "../Icons/OpenIcon";
// import CloseIcon from "../Icons/CloseIcon";
// import Tag from "../Tag/Tag";
// import TagInput from "../TagInput/TagInput";
// import TagForm from "../TagForm/TagForm";

// const StudentFilter = ({
//   index,
//   img,
//   firstName,
//   lastName,
//   email,
//   company,
//   skill,
//   averageGrade,
//   grades,
//   tags,
//   addTag,
//   tagsInput,
//   updateTagValue,
// }) => {
//   // console.log(students);
//   const [showGrades, setShowGrades] = useState(false);

//   const selectedTags = (tags) => console.log(tags);

export default class StudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      showPlusButton: true,
      showMinusButton: false,
      //   tagsInput: "",
      //   tags: [],
    };
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
      showPlusButton: !this.state.showPlusButton,
      showMinusButton: !this.state.showMinusButton,
    });
  };

  //   updateTagValue = (value) => {
  //     if (value === " ") {
  //       return;
  //     }
  //     this.setState({
  //       tagsInput: value,
  //     });
  //   };

  //   addTag = (tag) => {
  //     tag = tag.trim();
  //     if (!(this.state.tags.indexOf(tag) > -1)) {
  //       let tags = this.state.tags.concat([tag]);
  //       this.updateTags(tags);
  //     }
  //     this.updateTagValue("");
  //   };

  //   updateTags = (tags) => {
  //     this.setState({
  //       tags,
  //     });
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
                          Test {index}: {name}%
                        </li>
                      );
                    })}
                  </ul>

                  {this.props.tags &&
                    this.props.tags.map((x) => (
                      <ul className="tags">
                        <li>{x}</li>
                      </ul>
                    ))}

                  <OnEvent space={(e) => this.props.addTag(e.target.value)}>
                    <form>
                      <input
                        value={this.props.tagsInput}
                        onChange={(e) => {
                          this.props.updateTagValue(e.target.value);
                        }}
                        type="text"
                        placeholder="Enter tag and hit space"
                      />
                    </form>
                  </OnEvent>
                </div>
              )}
              {/* {showGrades && (
                  <div className="students_container-card-para-grades">
                    {grades.map((grade, index) => {
                      return (
                        <div key={index.toString()}>
                          {`test ${index + 1}:\xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}
                        </div>
                      );
                    })}
                    {tags &&
                      tags.map((x) => (
                        <ul className="tags">
                          <li>{x}</li>
                        </ul>
                      ))}
                    <TagForm selectedTags={selectedTags} />
                  </div>
                )} */}

              {/* <TagForm selectedTags={selectedTags} /> */}

              {/* {showGrades ? (
                  <CloseIcon
                    className="close"
                    setShowGrades={setShowGrades}
                    showGrades={showGrades}
                  />
                ) : (
                  <OpenIcon
                    className="open"
                    setShowGrades={setShowGrades}
                    showGrades={showGrades}
                  />
                )} */}
              <div className="buttons col-md-6 ">
                {this.state.showPlusButton && (
                  <button onClick={this.toggle}>+</button>
                )}

                {this.state.showMinusButton && (
                  <button onClick={this.toggle}>-</button>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
  //   return (
  //     <div className="students">
  //       <div className="students_container-card" key={index}>
  //         <article id="first_half">
  //           <img
  //             src={img}
  //             alt="avatar"
  //             className="students_container-card-avatar"
  //           />
  //         </article>
  //         <article id="second_half">
  //           <h3 className="students_container-card-header">
  //             {firstName} {lastName}
  //           </h3>
  //           <div className="students_container-card-para">
  //             <p className="students_container-card-para-email">Email: {email}</p>
  //             <p className="students_container-card-para-company">
  //               Company: {company}
  //             </p>
  //             <p className="students_container-card-para-skill">Skill: {skill}</p>
  //             <p className="students_container-card-para-avg">
  //               Average: {averageGrade}
  //             </p>
  //             {showGrades && (
  //               <div className="students_container-card-para-grades">
  //                 {grades.map((grade, index) => {
  //                   return (
  //                     <div key={index.toString()}>
  //                       {`test ${index + 1}:\xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}
  //                     </div>
  //                   );
  //                 })}
  //                 {tags &&
  //                   tags.map((x) => (
  //                     <ul className="tags">
  //                       <li>{x}</li>
  //                     </ul>
  //                   ))}
  //                 <TagForm selectedTags={selectedTags} />
  //               </div>
  //             )}

  //             <TagForm selectedTags={selectedTags} />

  //             {showGrades ? (
  //               <CloseIcon
  //                 className="close"
  //                 setShowGrades={setShowGrades}
  //                 showGrades={showGrades}
  //               />
  //             ) : (
  //               <OpenIcon
  //                 className="open"
  //                 setShowGrades={setShowGrades}
  //                 showGrades={showGrades}
  //               />
  //             )}
  //           </div>
  //         </article>
  //       </div>
  //     </div>
  //   );
}
// export default StudentFilter;

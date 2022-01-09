import React, { useState } from "react";
import OpenIcon from "../Icons/OpenIcon";
import CloseIcon from "../Icons/CloseIcon";
import Tag from "../Tag/Tag";
import TagInput from "../TagInput/TagInput";
import TagForm from "../TagForm/TagForm";

const StudentFilter = ({
  index,
  img,
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
  grades,
  tags,
  addTag,
}) => {
  // console.log(students);
  const [showGrades, setShowGrades] = useState(false);

  const selectedTags = (tags) => console.log(tags);

  return (
    <div className="students">
      {/* {students.map((student) => {
        function findAverage(array) {
          let sum = 0;
          for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
          }
          let average = sum / array.length;
          return average;
        }

        const averageGrade = findAverage(student.grades); */}
      {/* return ( */}
      <div className="students_container-card" key={index}>
        <article id="first_half">
          <img
            src={img}
            alt="avatar"
            className="students_container-card-avatar"
          />
        </article>
        <article id="second_half">
          <h3 className="students_container-card-header">
            {firstName} {lastName}
          </h3>
          <div className="students_container-card-para">
            <p className="students_container-card-para-email">Email: {email}</p>
            <p className="students_container-card-para-company">
              Company: {company}
            </p>
            <p className="students_container-card-para-skill">Skill: {skill}</p>
            <p className="students_container-card-para-avg">
              Average: {averageGrade}
            </p>
            {showGrades && (
              <div className="students_container-card-para-grades">
                {grades.map((grade, index) => {
                  return (
                    <div key={index.toString()}>
                      {`test ${index + 1}:\xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}
                    </div>
                  );
                })}
                {/* {tags.length > 0
                  ? tags.map((tag, index) => {
                      return <Tag key={index.toString()} tag={tag} />;
                    })
                  : null}
                <TagInput index={index} addTag={addTag} /> */}
              </div>
            )}
            <TagForm selectedTags={selectedTags} />

            {showGrades ? (
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
            )}
          </div>
        </article>
      </div>
    </div>
  );
};
export default StudentFilter;

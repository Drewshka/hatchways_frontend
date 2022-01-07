import React from "react";

const StudentFilter = ({ students }) => {
  // console.log(students);
  return (
    <div className="students">
      {students.map((student) => {
        function findAverage(array) {
          let sum = 0;
          for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
          }
          let average = sum / array.length;
          return average;
        }

        const averageGrade = findAverage(student.grades);

        return (
          <div className="app_container-card" key={student.id}>
            <article id="first_half">
              <img
                src={student.pic}
                alt="avatar"
                className="app_container-card-avatar"
              />
            </article>
            <article id="second_half">
              <h3 className="app_container-card-header">
                {student.firstName} {student.lastName}
              </h3>
              <div className="app_container-card-para">
                <p className="app_container-card-para-email">
                  Email: {student.email}
                </p>
                <p className="app_container-card-para-company">
                  Company: {student.company}
                </p>
                <p className="app_container-card-para-skill">
                  Skill: {student.skill}
                </p>
                <p className="app_container-card-para-avg">
                  Average: {averageGrade}
                </p>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};
export default StudentFilter;

// import React, { useState } from "react";
// import OpenIcon from "../Icons/OpenIcon";
// import CloseIcon from "../Icons/CloseIcon";

// const StudentFilter = ({ students }) => {
//   // console.log(students);
//   const [showGrades, setShowGrades] = useState(false);

//   return (
//     <div className="students">
//       {students.map((student, index) => {
//         function findAverage(array) {
//           let sum = 0;
//           for (let i = 0; i < array.length; i++) {
//             sum += parseInt(array[i]);
//           }
//           let average = sum / array.length;
//           return average;
//         }

//         const averageGrade = findAverage(student.grades);

//         return (
//           // TODO change class names
//           <div className="app_container-card" key={index}>
//             <article id="first_half">
//               <img
//                 src={student.pic}
//                 alt="avatar"
//                 className="app_container-card-avatar"
//               />
//             </article>
//             <article id="second_half">
//               <h3 className="app_container-card-header">
//                 {student.firstName} {student.lastName}
//               </h3>
//               <div className="app_container-card-para">
//                 <p className="app_container-card-para-email">
//                   Email: {student.email}
//                 </p>
//                 <p className="app_container-card-para-company">
//                   Company: {student.company}
//                 </p>
//                 <p className="app_container-card-para-skill">
//                   Skill: {student.skill}
//                 </p>
//                 <p className="app_container-card-para-avg">
//                   Average: {averageGrade}
//                 </p>
//                 {showGrades && (
//                   <div className="app_container-card-para-grades">
//                     {student.grades.map((grade, index) => {
//                       return (
//                         <div key={index.toString()}>
//                           {`test ${
//                             index + 1
//                           }:\xa0\xa0\xa0\xa0\xa0\xa0${grade}%`}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//                 {showGrades ? (
//                   <CloseIcon
//                     className="close"
//                     setShowGrades={setShowGrades}
//                     showGrades={showGrades}
//                   />
//                 ) : (
//                   <OpenIcon
//                     className="open"
//                     setShowGrades={setShowGrades}
//                     showGrades={showGrades}
//                   />
//                 )}
//               </div>
//             </article>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default StudentFilter;

import React, { useState } from "react";
import OpenIcon from "../Icons/OpenIcon";
import CloseIcon from "../Icons/CloseIcon";

const StudentFilter = ({
  //   students,
  index,
  img,
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
  grades,
}) => {
  // console.log(students);
  const [showGrades, setShowGrades] = useState(false);

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
              </div>
            )}
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
      {/* ); */}
      {/* })} */}
    </div>
  );
};
export default StudentFilter;

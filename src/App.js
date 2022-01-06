import React from "react";
import "./App.scss";
import axios from "axios";
class App extends React.Component {
  state = {
    students: [],
    DataisLoaded: false,
  };

  componentDidMount() {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((response) => {
        console.log("Students: ", response);
        this.setState({ students: response.data.students });
      });
  }

  render() {
    console.log(this.state.students);

    return (
      <div className="app">
        <section className="app_container">
          {this.state.students.map((student) => {
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
                  <img src={student.pic} alt="avatar" className="app_container-card-avatar" />
                </article>
                <article id="second_half">
                  <h3 className="app_container-card-header">
                    {student.firstName} {student.lastName}
                  </h3>
                  <div className="app_container-card-para">
                    <p className="app_container-card-email">Email: {student.email}</p>
                    <p className="app_container-card-company">Company: {student.company}</p>
                    <p className="app_container-card-skill">Skill: {student.skill}</p>
                    <p className="app_container-card-avg">Average: {averageGrade}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.scss";
import axios from "axios";
import StudentFilter from "./components/StudentFilter/StudentFilter";
class App extends React.Component {
  state = {
    students: [],
    filteredSearch: "",
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

  handleSearch = (e) => {
    this.setState({
      filteredSearch: e.target.value,
    });
  };

  //* filter functions for sorting content
  filteredStudents = () => {
    return this.state.students.filter((student) => {
      return `${student.firstName} ${student.lastName}`
        .toLowerCase()
        .includes(this.state.filteredSearch.toLowerCase());
    });
  };

  render() {
    // console.log(this.state.students);

    return (
      <div className="app">
        <section className="app_container">
          <input
            className="app_input"
            label="Filter Students: "
            placeholder="Search by name"
            onChange={this.handleSearch}
          />
          <StudentFilter students={this.filteredStudents()} />

          {/* {this.state.students.map((student) => {
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
                    <p className="app_container-card-para-email">Email: {student.email}</p>
                    <p className="app_container-card-para-company">Company: {student.company}</p>
                    <p className="app_container-card-para-skill">Skill: {student.skill}</p>
                    <p className="app_container-card-para-avg">Average: {averageGrade}</p>
                  </div>
                </article>
              </div>
            );
          })} */}
        </section>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.scss";
import axios from "axios";
import StudentFilter from "./components/StudentFilter/StudentFilter";
// import SearchFilter from "./components/SearchFilter/SearchFilter";
class App extends React.Component {
  state = {
    studentTags: [],
    students: [],
    filteredSearch: "",
    DataisLoaded: false,
  };

  componentDidMount() {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((response) => {
        console.log("Students: ", response);
        this.setState({
          students: response.data.students,
          studentSuggestion: response.data.students,
        });
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

  addTag = (str, index) => {
    const tagForStudents = this.state.students;
    tagForStudents[index].tags.push(str);
    // setStudentData(tagForStudents);
    this.setState({
      studentTags: tagForStudents,
    });
  };

  render() {
    console.log(this.state.students);
    console.log(this.state.filteredSearch);
    console.log(this.filteredStudents());
    // console.log(this.state.studentSuggestion);

    return (
      <div className="app">
        <section className="app_container">
          {/* <SearchFilter filterFunction={this.filteredStudents} type={`name`} /> */}
          <input
            className="app_input"
            label="Filter Students: "
            placeholder="Search by name"
            onChange={this.handleSearch}
          />
          <input
            className="app_input"
            label="Filter Tags: "
            placeholder="Search by tag"
            onChange={this.handleSearch}
          />

          {/* <StudentFilter students={this.filteredStudents()} /> */}

          {/* {this.state.students.map((student, index) => { */}
          {this.filteredStudents().map((student, index) => {
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
                <StudentFilter
                  key={index.toString()}
                  index={index}
                  img={student.pic}
                  firstName={student.firstName}
                  lastName={student.lastName}
                  email={student.email}
                  company={student.company}
                  skill={student.skill}
                  grades={student.grades}
                  averageGrade={averageGrade}
                  tags={student.tags}
                  addTag={this.addTag}
                />
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;

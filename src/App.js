import React from "react";
import "./App.scss";
import axios from "axios";
import StudentFilter from "./components/StudentFilter/StudentFilter";
class App extends React.Component {
  state = {
    // nameFilter: [],
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

  // filteredStudents = () => {
  //   let names = this.state.students.filter((student) => {
  //     return `${student.firstName} ${student.lastName}`
  //       .toLowerCase()
  //       .includes(this.state.filteredSearch.toLowerCase());
  //   });
  //   this.setState({
  //     nameFilter: names,
  //   });
  // };

  // nameFilterFunction = () => {
  //   let newNameFilter = this.state.students.map((student) => {
  //     return `${student.firstName} ${student.lastName}`
  //       .toLowerCase()
  //       .includes(this.state.filteredSearch.toLowerCase());
  //   });
  //   this.setState({
  //     nameFilter: newNameFilter,
  //   });
  // };

  // nameFilterFunction = str => {
  //   let newNameFilter = [];
  //   this.state.students.map(student => {
  //     const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
  //     if (fullName.includes(str)) {
  //       newNameFilter.push(student);
  //     }
  //   });
  //   let contentFilter = [];
  //   tagFilter.map(student => {
  //     const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
  //     if (fullName.includes(str)) {
  //       contentFilter.push(student);
  //     }
  //   });
  //   setFilterContent(contentFilter);
  //   setNameFilter(newNameFilter);
  // };

  render() {
    console.log(this.state.students);
    console.log(this.state.nameFilter);
    console.log(this.state.filteredSearch);

    return (
      <div className="app">
        <section className="app_container">
          <input
            className="app_input"
            label="Filter Students: "
            placeholder="Search by name"
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
                  // students={this.filteredStudents()}
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

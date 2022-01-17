import React from "react";
import "./App.scss";
import axios from "axios";
import StudentFilter from "./components/StudentFilter/StudentFilter";
// import SearchFilter from "./components/SearchFilter/SearchFilter";
class App extends React.Component {
  state = {
    // studentTags: [],
    students: [],
    tagsInput: "",
    tags: [],
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

  //   filterByTag(arr) {
  //     return arr.filter((student) => {
  //         let isTagged = false;
  //         let lowerCasedTag;
  //         student.tags.forEach((tag) => {
  //             lowerCasedTag = tag.toLowerCase().trim();
  //             if (lowerCasedTag.includes(tagSearchInput)) {
  //                 isTagged = true;
  //             }
  //         });
  //         return isTagged;
  //     });
  // }

  updateTagValue = (value) => {
    if (value === " ") {
      return;
    }
    this.setState({
      tagsInput: value,
    });
  };

  addTag = (tag) => {
    tag = tag.trim();
    if (!(this.state.tags.indexOf(tag) > -1)) {
      let tags = this.state.tags.concat([tag]);
      this.updateTags(tags);
    }
    this.updateTagValue("");
  };

  // addTag = (student, newTag) => {
  //   student.tags.push(newTag);

  //   const indexOfStudent = this.state.students.findIndex(
  //     (s) => s.id === student.id
  //   );
  //   let studentDataWithChanges = [
  //     ...this.state.students.slice(0, indexOfStudent),
  //     student,
  //     ...this.state.students.slice(indexOfStudent + 1),
  //   ];
  //   // setStudentData(studentDataWithChanges);
  //   this.setState({
  //     tags: studentDataWithChanges,
  //   });
  // };

  updateTags = (tags) => {
    this.setState({
      tags,
    });
  };

  // saveInput = (e) => {
  //   this.setState({ tagsInput: e.target.value });
  // };

  // addNewItem = () => {
  //   this.setState((prevState) => ({
  //     students: [...prevState.students, prevState.tagsInput],
  //   }));
  // };

  // addTag = (str, index) => {
  //   const tagForStudents = [...this.state.students];
  //   tagForStudents[index].tags.push(str);
  //   this.setState({
  //     students: tagForStudents,
  //   });
  // };

  render() {
    console.log(...this.state.students);
    console.log(this.state.filteredSearch);
    console.log(this.filteredStudents());

    console.log(this.state.tags);
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
            onChange={this.updateTagValue}
          />
          {/* <input type="text" onChange={this.saveInput} />
          <button onClick={this.addNewItem}> Add Item </button> */}

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
                  addTag={this.addTag}
                  tagsInput={this.state.tagsInput}
                  updateTagValue={this.updateTagValue}
                  tags={this.state.tags}
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

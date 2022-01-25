import React from "react";
import "./App.scss";
import axios from "axios";
import StudentFilter from "./components/StudentFilter/StudentFilter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      studentsWithTags: [],
      keyWord: "",
      tagKeyWord: "",
      showStudentNames: true,
      showStudentTags: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((response) => {
        console.log("Students: ", response);
        this.setState({
          students: response.data.students,
        });
      });
  }

  searchByNameHandler = (e) => {
    e.preventDefault();
    this.setState({
      keyWord: e.target.value,
      showStudentNames: true,
      showStudentTags: false,
    });
  };

  searchByTagHandler = (e) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      this.setState({
        tagKeyWord: e.target.value,
        showStudentNames: true,
        showStudentTags: false,
      });
    } else {
      this.setState({
        tagKeyWord: e.target.value,
        showStudentNames: false,
        showStudentTags: true,
      });
    }
  };

  searchStudentByName = (keyWord) => {
    return (name) => {
      return (
        name.firstName.toLowerCase().includes(keyWord.toLowerCase()) ||
        name.lastName.toLowerCase().includes(keyWord.toLowerCase()) ||
        !keyWord
      );
    };
  };

  searchStudentByTag = (tagKeyWord) => {
    return (tag) => {
      return tag.tags.some((t) => {
        return t.includes(tagKeyWord);
      });
    };
  };

  handleTags = (id, tags) => {
    //call function that gets student by ID and add tags
    this.getStudent(id, tags);
  };

  getStudent = (id, tags) => {
    //get student with the given ID
    let student = this.state.students.filter((student) => student.id === id);

    //create tag property and add tag
    student[0].tags = tags;
    let newStudentWithTags = [...this.state.studentsWithTags, student[0]];

    //remove duplicates from Array
    let uniqueStudents = Array.from(new Set(newStudentWithTags));

    this.setState({
      studentsWithTags: uniqueStudents,
    });
  };

  render() {
    console.log(this.state.students);
    console.log(this.state.studentsWithTags);

    return (
      <div className="app">
        <section className="app_container">
          <form>
            <input
              type="text"
              onChange={this.searchByNameHandler}
              placeholder="Search by name..."
              value={this.state.keyWord}
              className="app_input"
            />
          </form>

          <form>
            <input
              type="text"
              className="app_input"
              placeholder="Search by tags..."
              onChange={this.searchByTagHandler}
              value={this.state.tagKeyWord}
            />
          </form>

          {this.state.showStudentNames &&
            this.state.students
              .filter(this.searchStudentByName(this.state.keyWord))
              .map((student, i) => {
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
                  <div className="app_container-card" key={i}>
                    <StudentFilter
                      key={student.id}
                      id={student.id}
                      img={student.pic}
                      firstName={student.firstName}
                      lastName={student.lastName}
                      email={student.email}
                      company={student.company}
                      skill={student.skill}
                      grades={student.grades}
                      averageGrade={averageGrade}
                      tags={student.tags}
                      getTags={this.handleTags}
                    />
                  </div>
                );
              })}

          {this.state.showStudentTags &&
            this.state.studentsWithTags
              .filter(this.searchStudentByTag(this.state.tagKeyWord))
              .map((student, i) => {
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
                  <div className="app_container-card" key={i}>
                    <StudentFilter
                      key={student.id}
                      id={student.id}
                      img={student.pic}
                      firstName={student.firstName}
                      lastName={student.lastName}
                      email={student.email}
                      company={student.company}
                      skill={student.skill}
                      grades={student.grades}
                      averageGrade={averageGrade}
                      tags={student.tags}
                      getTags={this.handleTags}
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

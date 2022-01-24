import React from "react";
import "./App.scss";
import axios from "axios";
import StudentFilter from "./components/StudentFilter/StudentFilter";
// const ReactTags = require("react-tag-autocomplete");
// import SearchFilter from "./components/SearchFilter/SearchFilter";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      key_word: "",
      tag_key_word: "",
      studentsWithTags: [],
      showStudentNames: true,
      showStudentTags: false,
    };
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     students: [],
  //     tags: [],
  //     key_word: "",
  //     tag_key_word: "",
  //     studentsWithTags: [],
  //     showStudentNames: true,
  //     showStudentTags: false,
  //     searchName: "",
  //     searchTag: "",
  //   };
  // }

  // Populate Tags state from Student Component
  handler = (tag, id) => {
    this.setState((prevState) => ({
      tags: [...prevState.tags, { id: id, tag: tag }],
    }));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((response) => {
        console.log("Students: ", response);
        this.setState({
          students: response.data.students,
          // studentSuggestion: response.data.students,
        });
      });
  }

  // //* filter functions for sorting content
  // filteredStudents = () => {
  //   return this.state.students.filter((student) => {
  //     return `${student.firstName} ${student.lastName}`
  //       .toLowerCase()
  //       .includes(this.state.filteredSearch.toLowerCase());
  //   });
  // };

  searchByNameHandler = (e) => {
    e.preventDefault();
    this.setState({
      key_word: e.target.value,
      showStudentNames: true,
      showStudentTags: false,
    });
  };

  searchByTagHandler = (e) => {
    e.preventDefault();
    this.setState({
      tag_key_word: e.target.value,
      showStudentNames: false,
      showStudentTags: true,
    });
  };

  searchStudentByName = (keyWord) => {
    return (x) => {
      return (
        x.firstName.toLowerCase().includes(keyWord.toLowerCase()) ||
        x.lastName.toLowerCase().includes(keyWord.toLowerCase()) ||
        !keyWord
      );
    };
  };

  searchStudentByTag = (tag_keyWord) => {
    return (x) => {
      for (let i = 0; i < x.tags.length; i++) {
        return x.tags[i].includes(tag_keyWord) || !tag_keyWord;
      }
    };
  };

  // filteredStudents = () => {
  //   return this.state.students.filter((student) => {
  //     return `${student.firstName} ${student.lastName}`
  //       .toLowerCase()
  //       .includes(this.state.filteredSearch.toLowerCase());
  //   });
  // };

  handleTags = (id, tags) => {
    //call function that retrieves student by ID and add tags
    this.retrieveStudent(id, tags);
  };

  retrieveStudent = (id, tags) => {
    //get student with the given ID
    let student = this.state.students.filter((student) => student.id === id);

    //push tag onto array
    let tagArray = [];
    tagArray.push(tags);

    //create tag property and add tag
    student[0].tags = tagArray;
    let newStudentWithTags = [...this.state.studentsWithTags, student[0]];

    //remove duplicates from Array
    let uniqueStudents = Array.from(new Set(newStudentWithTags));

    this.setState({
      studentsWithTags: uniqueStudents,
    });
  };

  // clearInput = () => {
  //   this.setState({
  //     tag_key_word: "",
  //     studentsWithTags: [],
  //   });
  // };

  render() {
    //   let filteredTags = this.state.tags ? (
    //     this.state.tags.filter(
    //         tag => tag.tag.startsWith(this.state.searchTag)
    //     )
    // ) : (
    //     <h3>Loading</h3>
    // )

    console.log(...this.state.students);
    console.log(this.state.tag_key_word);
    console.log(...this.state.studentsWithTags);
    // console.log(this.filteredStudents());
    // console.log(this.state.tags);

    return (
      <div className="app">
        <section className="app_container">
          {/* <SearchFilter filterFunction={this.filteredStudents} type={`name`} /> */}
          {/* <input
            className="app_input"
            label="Filter Students: "
            placeholder="Search by name"
            onChange={this.handleSearch}
          />
          <input
            type="text"
            onChange={this.handleTagSearch}
            placeholder="Search by tags"
            value={this.state.filteredTag}
          /> */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // addTag(newTag, index);
              // setNewTag("");
            }}>
            <input
              type="text"
              onChange={this.searchByNameHandler}
              placeholder="Search by name..."
              value={this.state.key_word}
              className="app_input"
            />
          </form>

          <form
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   // addTag(newTag, index);
          //   // setNewTag("");
          //   // this.clearInput();
          // }}
          >
            <input
              type="text"
              className="app_input"
              placeholder="Search by tags..."
              onChange={this.searchByTagHandler}
              value={this.state.tag_key_word}
            />
          </form>

          {this.state.showStudentNames &&
            this.state.students
              .filter(this.searchStudentByName(this.state.key_word))
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
              .filter(this.searchStudentByTag(this.state.tag_key_word))
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

          {/* {this.filteredStudents().map((student, index) => {
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
                  getTags={this.handleTags}
                />
              </div>
            );
          })} */}
        </section>
      </div>
    );
  }
}

export default App;

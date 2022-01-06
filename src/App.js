import React from "react";
import './App.css';
import axios from 'axios';
class App extends React.Component {
        state = {
            students: [],
            DataisLoaded: false
        };
   
        componentDidMount() {
          axios.get("https://api.hatchways.io/assessment/students").then((response) => {
            console.log("Students: ", response);
            this.setState({ students: response.data.students });
          });
        }

    render() { 
      console.log(this.state.students);
  
   return (
    <div className="app">
        <h2>Students</h2>
        <article>
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
              <div key={student.id}>
              <img src={student.pic} alt="avatar" />
              <h3>{student.firstName} {student.lastName}</h3>
              <p>Email: {student.email}</p>
              <p>Company: {student.company}</p>
              <p>Skill: {student.skill}</p>
              <p>Average: {averageGrade}</p>
                                                        
            </div>
            )
          })}
        </article>
      </div>
    );
  }
}
   
export default App;
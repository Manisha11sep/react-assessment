import React, { Component } from 'react';
import ToDo from './components/To-Do'
import List from './components/List'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks:'',
      title:'',
    }
  }
  componentDidMount(){
    axios.get('https://practiceapi.devmountain.com/api/tasks').then(taskArray => {
        console.log(taskArray.data)
        this.setState({
            tasks: taskArray.data,
            title:''
        })
    })
  }

  taskTitleChangeHandler = (title) => {
    this.setState({
      title: title
    })
  }

  addNewTask = (taskTitle) => {
    console.log(this.state.title)
    if(this.state.title){
      axios.post('https://practiceapi.devmountain.com/api/tasks', {title: this.state.title}).then(newTaskArray => {
        this.setState({
          tasks: newTaskArray.data,
          title: ''
        })
        console.log(this.state.title)
      })
    }
  }

  completeTask = (id) => {
    axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(newTaskArray => {
      this.setState({
        tasks: newTaskArray.data
      })
    })
  }

  deleteTask = (id) => {
    axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(newTaskArray => {
      this.setState({
        tasks: newTaskArray.data
      })
    })
  }

  render(){
  return (
      <div className="App">
        <ToDo newTitle={this.taskTitleChangeHandler} titleValue={this.state.title} submitNewTask={this.addNewTask}/>
        <List tasks={this.state.tasks} deleteTask={this.deleteTask} complete={this.completeTask}/>
      </div>
    );
  }
}

export default App;

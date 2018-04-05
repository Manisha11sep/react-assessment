import React, { Component } from 'react';
import ToDo from './To-Do'
import List from './List'
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchTasks } from '../redux/reducer';
import '../App.css';

class ToDoContainer extends Component {
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
        this.props.fetchTasks(taskArray.data)
        this.setState({
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
        this.props.fetchTasks(newTaskArray.data)
        this.setState({
          title: ''
        })
        console.log(this.state.title)
      })
    }
  }

  completeTask = (id) => {
    axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(newTaskArray => {
      this.props.fetchTasks(newTaskArray.data)
    })
  }

  deleteTask = (id) => {
    axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(newTaskArray => {
      this.props.fetchTasks(newTaskArray.data)
    })
  }

  render(){
  return (
      <div className="App">
        <ToDo newTitle={this.taskTitleChangeHandler} titleValue={this.state.title} submitNewTask={this.addNewTask}/>
        <List tasks={this.props.tasks} deleteTask={this.deleteTask} complete={this.completeTask}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      tasks: state.tasks
  }
}

const mapDispatchToProps = {
 
  fetchTasks: fetchTasks

}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer)

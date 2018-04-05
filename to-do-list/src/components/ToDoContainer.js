import React, { Component } from 'react';
import ToDo from './To-Do'
import List from './List'
import axios from 'axios';
import { connect } from 'react-redux';
import { getTasks, addTask, completeTask, deleteTask } from '../redux/reducer';
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
    this.props.getTasks();
  }

  taskTitleChangeHandler = (title) => {
    this.setState({
      title: title
    })
  }

  clearTitle = () => {
    this.setState({
      title: ''
    })
  }

  render(){
    console.log(this.props.tasks)
  return (
      <div className="App">
        <ToDo newTitle={this.taskTitleChangeHandler} titleValue={this.state.title} clearTitle={this.clearTitle} submitNewTask={this.props.addTask}/>
        <List tasks={this.props.tasks} deleteTask={this.props.deleteTask} complete={this.props.completeTask}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      tasks: state
  }
}

const mapDispatchToProps = {
 
  getTasks: getTasks,
  addTask: addTask,
  completeTask: completeTask,
  deleteTask: deleteTask

}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer)

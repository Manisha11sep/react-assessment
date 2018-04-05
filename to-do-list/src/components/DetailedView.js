import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getTasks, completeTask, deleteTask, updateTask, getSingleTasks } from '../redux/reducer';
import '../App.css';

class DetailedView extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            description:''
        }
    }

    componentDidMount(){

        this.props.getSingleTasks(this.props.match.params.id).then(response => {
            const currentTask = response.value[0]
            this.setState({
                title: currentTask.title,
                description: currentTask.description
            })
        })
        

        // console.log(this.props.tasks)
        // const currentTask = this.props.tasks ? this.props.tasks.filter((e) => e.id == this.props.match.params.id) : 'loading'
        
        // if(this.props.tasks[0]){
        
        // }
    }

    taskTitleChangeHandler = (title) => {
        this.setState({
          title: title
        })
      }
    
      taskDescriptionChangeHandler = (description) => {
        this.setState({
            description: description
        })
      }

      cancel = () => {
        const currentTask = this.props.tasks.filter((e) => e.id == this.props.match.params.id);

        this.setState({
            title: currentTask[0].title,
            description: currentTask[0].description
        })
      }

    render() {

        const currentTask = this.props.tasks.filter((e) => e.id == this.props.match.params.id);
        
        return (
            <div className='detailed-view-container'>
                <div>
                    <div>
                        <Link to='/'>{'< Back To Tasks'}</Link>
                    </div>
                    <div className='task-name'>
                        <div>
                            <span>Task</span>
                            <input onChange={(e) => this.taskTitleChangeHandler(e.target.value)} value={this.state.title}/>
                        </div>
                        <Link to='/'><button onClick={()=> this.props.completeTask(currentTask[0].id)}>Complete</button></Link>
                    </div>
                    <div className='description'>
                        <div>
                            <span>Description</span>
                            <input onChange={(e) => this.taskDescriptionChangeHandler(e.target.value)}  value={this.state.description}/>
                        </div>
                    </div>
                    <div className='details-buttons'>
                        <Link to='/'><button onClick={()=>this.props.updateTask(currentTask[0].id, this.state.title, this.state.description)}>Save</button></Link>
                        <button onClick={() => this.cancel()}>Cancel</button>
                        <Link to='/'><button onClick={()=> this.props.deleteTask(currentTask[0].id)}>Delete</button></Link>
                    </div>
                </div>
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
   
    getTasks: getTasks,
    completeTask: completeTask,
    deleteTask: deleteTask,
    updateTask: updateTask,
    getSingleTasks: getSingleTasks

}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedView)
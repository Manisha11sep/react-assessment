import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchTasks } from '../redux/reducer';
import '../App.css';

class DetailedView extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        axios.get('https://practiceapi.devmountain.com/api/tasks').then(taskArray => {
            this.props.fetchTasks(taskArray.data)
        })
    }

    
    completeTask = () => {
        axios.put(`https://practiceapi.devmountain.com/api/tasks/${this.props.match.params.id}`).then(newTaskArray => {
          this.props.fetchTasks(newTaskArray.data)
        })
    }

    deleteTask = () => {
        axios.delete(`https://practiceapi.devmountain.com/api/tasks/${this.props.match.params.id}`).then(newTaskArray => {
          this.props.fetchTasks(newTaskArray.data)
        })
    }

    render() {
        
        const currentTask = this.props.tasks.filter((e) => e.id == this.props.match.params.id);
        console.log(currentTask[0].title)
        
        return (
            <div className='detailed-view-container'>
                <div>
                    <div>
                        <Link to='/'>{'< Back To Tasks'}</Link>
                    </div>
                    <div className='task-name'>
                        <div>
                            <span>Task</span>
                            <input value={currentTask[0].title}/>
                        </div>
                        <Link to='/'><button onClick={()=> this.completeTask()}>Complete</button></Link>
                    </div>
                    <div className='description'>
                        <div>
                            <span>Description</span>
                            <input  value={currentTask[0].description}/>
                        </div>
                    </div>
                    <div className='details-buttons'>
                        <button>Save</button>
                        <button>Cancel</button>
                        <Link to='/'><button onClick={()=> this.deleteTask()}>Delete</button></Link>
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
   
    fetchTasks: fetchTasks

}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedView)
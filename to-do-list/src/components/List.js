import React, { Component } from 'react';
import ListItem from './ListItem';


export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render() {

        const taskList = this.props.tasks ? this.props.tasks.map((e) => {
            return(
                <ListItem key={e.id} taskId={e.id} title={e.title} deleteTask={this.props.deleteTask} complete={this.props.complete} completed={e.completed}/>
            )
        }) : 'loading tasks';

        return (
            <div className='list-container'>
                {taskList}
            </div>
        );
    }
}
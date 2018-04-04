import React, { Component } from 'react';

export default class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='to-do-container'>
                <h1>TO-DO:</h1>
                <div>
                    <input onChange={(e) => this.props.newTitle(e.target.value)} value={this.props.titleValue} />
                    <button onClick={() => this.props.submitNewTask()}>Add new To-do</button>
                </div>
            </div>
        );
    }
}
import React from 'react';

const ListItem = (props) => {
    const disabled = props.completed ? 'disabled' : ''
    return (
        <div className='list-item-container'>
            <span className={disabled}>{props.title}</span>
            <div>
                <button onClick={() => props.complete(props.taskId)} disabled={props.completed}>Complete</button>
                <span onClick={() => props.deleteTask(props.taskId)}>X</span>
            </div>
        </div>
    );
};

export default ListItem;
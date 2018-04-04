import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = (props) => {
    const disabled = props.completed ? 'disabled' : ''
    return (
        <div className='list-item-container'>
            <Link to={`/details/${props.taskId}`}><span className={disabled}>{props.title}</span></Link>
            <div>
                <button onClick={() => props.complete(props.taskId)} disabled={props.completed}>Complete</button>
                <span onClick={() => props.deleteTask(props.taskId)}>X</span>
            </div>
        </div>
    );
};

export default ListItem;
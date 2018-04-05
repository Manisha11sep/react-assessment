import axios from 'axios';
var initialState = {
    tasks: []
}

const GET_TASKS = "GET_TASKS";
const ADD_TASK = "ADD_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const GET_SINGLE_TASKS = "GET_SINGLE_TASKS"

export default function(state=initialState, action){
  switch(action.type) {

    case `${GET_TASKS}_FULFILLED`:
            console.log(action.payload)
            return {...state , tasks: action.payload }
    case `${ADD_TASK}_FULFILLED`:
            return {...state, tasks: action.payload }
    case `${COMPLETE_TASK}_FULFILLED`:
            return {...state, tasks: action.payload }
    case `${DELETE_TASK}_FULFILLED`:
            return {...state, tasks: action.payload }
    case `${UPDATE_TASK}_FULFILLED`:
            return {...state, tasks: action.payload }
    case `${GET_SINGLE_TASKS}_FULFILLED`:
            console.log(action.payload[0])
            return {...state, tasks: action.payload }

    default: return state;
  }
}

export function getTasks(test){
    const tasks = axios.get('https://practiceapi.devmountain.com/api/tasks').then(response => {
        return response.data
    })
      console.log(test)
    return {
        type: GET_TASKS,
        payload: tasks
    } 
};

export function addTask(title){
    const tasks = axios.post('https://practiceapi.devmountain.com/api/tasks', {title: title}).then(response =>{
        return response.data
    })   
    return {
        type: ADD_TASK,
        payload: tasks
    } 
};

export function completeTask(id){
    const tasks = axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(response =>{
        return response.data
    })   
    return {
        type: COMPLETE_TASK,
        payload: tasks
    } 
};

export function deleteTask(id){
    const tasks = axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(response =>{
        return response.data
    })   
    return {
        type: DELETE_TASK,
        payload: tasks
    } 
};

export function updateTask(id, title, description){
    const tasks = axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {title: title, description: description}).then(response =>{
        return response.data
    })   
    return {
        type: UPDATE_TASK,
        payload: tasks
    } 
};

export function getSingleTasks(id){
    const tasks = axios.get('https://practiceapi.devmountain.com/api/tasks').then(response => {
        return response.data.filter((e) => e.id == id)
    })
    
      console.log(tasks[0])
    return {
        type: GET_SINGLE_TASKS,
        payload: tasks
    } 
};












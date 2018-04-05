var initialState = {
    tasks: ''
}

const FETCH_TASK = 'FETCH_TASK'


export default function(state=initialState, action){
    switch(action.type){
        case FETCH_TASK:
    
            return {...state, tasks: action.payload};
            
        default:

            return state;
    }
}

//function to populate user account with user data
export function fetchTasks(tasks){
    return {
        type: FETCH_TASK,
        payload: tasks
    }
}








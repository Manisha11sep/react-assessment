import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ToDoContainer from './components/ToDoContainer';
import DetailedView from './components/DetailedView'

export default (
    
    <Switch>
        <Route exact path='/' component={ToDoContainer}/>
        <Route path='/details/:id' component={DetailedView}/>
    </Switch>

)
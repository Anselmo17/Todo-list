// COMBINA TODOS OS REDUCERS 
import { combineReducers } from 'redux';

import todos from './todo';


//COMBINANDO TODOS OS REDUCERS 
export default combineReducers({
todos,
});
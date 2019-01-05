// COMBINA TODOS OS REDUCERS 
import { combineReducers } from 'redux';
import { ADD_UM } from '../actions/types';

//armazena o estado inicial e o modificado 
const valorReducer = (state = { valor: 0 }, action) => {
  switch (action.type) {
    case ADD_UM:
      return { ...state, valor: state.valor + 1 };
    default:
      return state;
  }
}

//COMBINANDO TODOS OS REDUCERS 
const rootReducer = combineReducers({
  valores: valorReducer,
});

export default rootReducer;

//CRIA O CREATE STORE  E PASSA UMA LISTA DE REDUCERS\
import { createStore } from 'redux';

import reducers from './reducers'

const store = createStore(reducers);

//EXPORTANDO O STORE(ARMAZENA O ESTADO DOS DADOS )
export default store;
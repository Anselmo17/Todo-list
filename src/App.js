import React, { Component } from 'react';

//IMPORTA O STORE E PASSA ELE PARA O PROVIDER
import store from './store';

//COMPONENT RESPONSAVEL POR ATUALIZAR ESTADO DA NOSSA APLICAÇÃO QUANDO MUDADO
import { Provider } from 'react-redux';

import TodoList from './Todo-list';
import Counter from './counter';


// APLICAÇÃO QUE SERÁ RENDERIZADA NA TELA 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList/>
          <Counter/>
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';

//IMPORTA O STORE E PASSA ELE PARA O PROVIDER
import store from './store';

//COMPONENT RESPONSAVEL POR ATUALIZAR ESTADO DA NOSSA APLICAÇÃO QUANDO MUDADO
import { Provider } from 'react-redux';

import TodoList from './Todo-list';
import Counter from './counter';
<<<<<<< HEAD
=======

>>>>>>> feature/created-redux

// APLICAÇÃO QUE SERÁ RENDERIZADA NA TELA 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
<<<<<<< HEAD
        <TodoList/>
        <Counter/>
=======
        <div>
          <TodoList/>
          <Counter/>
        </div>
>>>>>>> feature/created-redux
      </Provider>
    );
  }
}

export default App;

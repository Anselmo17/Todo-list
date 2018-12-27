import React, { Component } from 'react';

//IMPORTA O STORE E PASSA ELE PARA O PROVIDER
import store from './store';

//COMPONENT RESPONSAVEL POR ATUALIZAR ESTADO DA NOSSA APLICAÇÃO QUANDO MUDADO
import { Provider } from 'react-redux';

import TodoList from './Todo-list';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList/>
      </Provider>
    );
  }
}

export default App;

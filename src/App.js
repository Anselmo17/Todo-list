import React, { Component } from 'react';

//CONECTA A APLICACAO COM O STORE
import { Provider } from 'react-redux';

//IMPORTANDO APLICACAO
import Aplicacao from './componentes/aplicacao'

// APLICAÇÃO QUE SERÁ RENDERIZADA NA TELA 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList/>
        <Counter/>
      </Provider>
    );
  }
}

export default App;
import React, { Component } from 'react';

//CONECTA A APLICACAO COM O STORE
import { Provider } from 'react-redux';

//IMPORTANDO APLICACAO
import Aplicacao from './componentes/aplicacao'

//IMPORTANDO OS DADOS DA STORE
import store from './store'

// iniciando a aplicacao 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Aplicacao />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
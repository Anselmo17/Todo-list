import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Teste extends Component {

  render() {
    return (
      <div>
        <h1>Pagina teste 1 </h1>
         <p> <Link to='/'>Voltar a pagina anterior</Link></p> 
      </div>
    );
  }
}

export default Teste;



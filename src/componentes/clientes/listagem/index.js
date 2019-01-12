import React from 'react';

//IMPORTANDO AS VIEWS 
import Formulario from '../formulario/index';
import Ordenacao from '../listagem/ordernacao';
import Pesquisa from '../listagem/pesquisa';
import ListaClientes from '../listagem/lista';

const Opcoes = () => (
  <div className="Opcoes">
    <div>
      <Ordenacao />
    </div>
    <div>
      <Pesquisa />
    </div>
  </div>
)

class Listagem extends React.Component {

  render() {
    return (
      <div className="Listagem">
        <div className="Header">
          <h2>
            Lista de Clientes
             </h2>
        </div>
        <hr />
        <Formulario />
        <br />
        <Opcoes />
        <br />
        <ListaClientes />
      </div>
    )
  }
}

export default Listagem;


import React from 'react';

//faz a conexão da aplicação
import { connect } from 'react-redux';

//importa todas as actions 
import * as actions from '../actions/action';

const mapStateToProps = state => ({
  valor: state.valores.valor
})

class Aplicacao extends React.Component {

  //aplicacao sendo renderiza
  render() {
    const { valor, addUm } = this.props;
    return (
      <div className="Aplicacao">
      <h1>Fazendo contagem </h1>
        <p>{valor}</p>
        <br />
        <button
          onClick={() => addUm()}
        >+</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(Aplicacao);
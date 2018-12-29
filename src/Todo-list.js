import React, { Component } from 'react';

//CONNECTA APLICACAO COM O ESTADO DO REDUX
import { connect } from 'react-redux';

//FAZ JUNCAO DAS ACOES CRIADAS 
import { bindActionCreators } from 'redux';

//IMPORTAR TODAS MINHAS AÇÕES 
import * as todoActions from './actions/todos';

class TodoList extends Component {

  //CRIA OS ESTADOS 
  state = {
    newTodoText: ''
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: '' });
  }

  render() {
    return (
      <div>

        {/* Devolve a lista de dados  */}
        <h1>Lista de Tarefas</h1>
        <ul>
          {
            this.props.todos.map(todo => {
              return <li key={todo.id} >{todo.text}</li>
            })
          }
        </ul>

        {/* Envia os dados do input */}
        <input type='text'
          value={this.state.newTodoText}
          onChange={(e) => this.setState({ newTodoText: e.target.value })}
        />
        <button onClick={this.addNewTodo}>Novo todo</button>
      </div>
    )
  }
}

//MAPEIA OS ESTADOS DAS PROPRIEDADES 
const mapStateToProps = state => ({
  todos: state.todos,
});

//DISPARA AS AÇÕEA 
const mapDispathToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);


//VARIAVEL CONNECT RECEBE DOIS PARAMETROS E MANDA A LISTA DE DADOS 
export default connect(mapStateToProps, mapDispathToProps)(TodoList); 
import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => (
  <h2>Voce tem {props.todos.length} todos.</h2>

)

//MAPEIA O ESTADO DO COMPONENTE
const mapStateToprops = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToprops)(Counter);
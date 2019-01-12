import React from 'react';


const Cliente = (cliente) => (
  <tr>
    <td>{cliente.nome}</td>
    <td>{cliente.telefone}</td>
    <td>{cliente.email}</td>
    <td>{cliente.cpf}</td>
  </tr>
)

class ListaClientes extends React.Component {

  render() {
    const { data } = this.props

    // TABELA DE CLIENTES 
    return (
      <div className="ListaClientes">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((cliente, index) => {
                return <Cliente cliente={cliente} key={index} />
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListaClientes;
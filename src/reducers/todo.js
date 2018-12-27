export default function todos(state = [], action) {


  //EXECUTANDO A AÇÃO QUE ESTÁ SENDO ENVIADA
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Math.random(),
        text: action.text
      }]
    case 'REMOVE_TODO':
    default:
      return state;
  }

}

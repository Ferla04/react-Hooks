import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del Alma',
    done: false
  },
  {
    id: new Date().getTime() - 1,
    description: 'Recolectar la piedra del Poder',
    done: false
  }
]

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, initialState )

  const handleNewTodo = ( todo ) => {

    const action = {
      type: 'AddTodo',
      payload: todo
    }

    dispatch( action )
  }

  return (
    <>
      <h1>TodoApp 10  <small className='fs-4 ms-5'> pendientes: 2 </small></h1>
      <hr />

      <div className='row'>

        <div className='col-7'>
          <TodoList todos={ todos }/>
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>

      </div>

    </>
  )
}

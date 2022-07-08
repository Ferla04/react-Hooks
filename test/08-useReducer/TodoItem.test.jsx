import { render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/toDo-App/TodoItem"

describe('Pruebas en <TodoItem />', () => {

  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach( () => jest.clearAllMocks() )

  test('Debe de mostrar el Todo pendiente a completar', () => {

    render( 
      <TodoItem 
        todo={ todo } 
        onDeleteTodo={ onDeleteTodoMock } 
        onToggleTodo={ onToggleTodoMock }
      /> 
    )

    const liElement = screen.getByRole('listitem')
    expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' )

    const spanElement = screen.getByLabelText('span')
    expect( spanElement.className ).toContain('align-self-center')

    // screen.debug()

  })
})
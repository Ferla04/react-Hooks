import { fireEvent, render, screen } from "@testing-library/react"
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
    expect( spanElement.className ).not.toContain('text-decoration-line-through')

    // screen.debug()

  })

  test('Debe de mostrar el Todo completado', () => {

    todo.done = true

    render( 
      <TodoItem 
        todo={ todo } 
        onDeleteTodo={ onDeleteTodoMock } 
        onToggleTodo={ onToggleTodoMock }
      /> 
    )

    const spanElement = screen.getByLabelText('span')
    expect( spanElement.className ).toContain('text-decoration-line-through')
    // screen.debug()

  })

  test('Span debe llamar el ToggleTodo al hacerle click', () => {

    render( 
      <TodoItem 
        todo={ todo } 
        onDeleteTodo={ onDeleteTodoMock } 
        onToggleTodo={ onToggleTodoMock }
      /> 
    )
    
    const spanElement = screen.getByLabelText('span')
    fireEvent.click( spanElement )

    expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )

  })

  test('Button debe llamar el DeleteTodo al hacerle click', () => {

    render( 
      <TodoItem 
        todo={ todo } 
        onDeleteTodo={ onDeleteTodoMock } 
        onToggleTodo={ onToggleTodoMock }
      /> 
    )

    
    const buttonElement = screen.getByText('Borrar')
    fireEvent.click( buttonElement )

    expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )

  })

})
import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('Pruebas en <LoginPage />', () => {

  test('Debe de mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{ user: null }} >
        <LoginPage /> 
      </UserContext.Provider>
    )

    const pretag = screen.getByLabelText('pre')
    expect( pretag.textContent ).toBe( 'null' )

  })


  test('Debe llamar el setUser al hacer click en el button', () => {

    const setUser = jest.fn()

    render(
      <UserContext.Provider value={{ user: null, setUser }} >
        <LoginPage /> 
      </UserContext.Provider>
    )

    const loginButton = screen.getByRole('button') 
    fireEvent.click( loginButton )
    expect( setUser ).toHaveBeenCalledWith({ id: 123, name: 'Fernanda Velásquez', email: 'Fer@google.com' })

  })

})

import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examplesFetch/MultipleCustomHooks'
import { useCounter } from '../../src/hooks/useCounter'
import { useFetch } from '../../src/hooks/useFetch'

jest.mock('../../src/hooks/useFetch') 
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {

  const mockIncrement = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach( () => {
    jest.clearAllMocks()
  })


  test('Debe de mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      hasError: null
    })

    render( <MultipleCustomHooks/> )

    /*
      Sreen
      Tiene la informacion renderizada en este momento
      screen.debug()
    */

    expect( screen.getByText('BreakingBad Quotes') )
    expect( screen.getByText('Loading...') ) 

    const nextButton = screen.getByRole('button', { name: 'next quote' })
    expect( nextButton.disabled ).toBeTruthy()
    // screen.debug()
  })


  test('Debe de mostrar un Quote', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Fernanda', quote: 'Hola Mundo' }],
      loading: false,
      hasError: null
    })

    render( <MultipleCustomHooks/> )
    //screen.debug() 

    expect( screen.getByText('Hola Mundo') ).toBeTruthy()
    expect( screen.getByText('Fernanda') ).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'next quote' })
    expect( nextButton.disabled ).toBeFalsy()

  })


  test('Debe llamar la funcion de incrementar', () => {


    useFetch.mockReturnValue({
      data: [{ author: 'Fernanda', quote: 'Hola Mundo' }],
      loading: false,
      hasError: null
    })


    render( <MultipleCustomHooks/> )

    const nextButton = screen.getByRole('button', { name: 'next quote' })
    fireEvent.click( nextButton )

    expect( mockIncrement ).toHaveBeenCalled()

  })
})
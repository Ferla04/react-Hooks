import { render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examplesFetch/MultipleCustomHooks'

describe('Pruebas en <MultipleCustomHooks />', () => {

  test('Debe de mostrar el componente por defecto', () => {

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
})
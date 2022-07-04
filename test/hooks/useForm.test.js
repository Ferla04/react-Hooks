import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en el useForm', () => {

  const initalForm = {
    name: 'Fernanda',
    email: 'Fernanda@google.com'
  }

  test('Debe de regresar los valores por defecto', () => {

    const { result } = renderHook( () => useForm( initalForm ) )

    expect( result.current ).toEqual({
      name: initalForm.name,
      email: initalForm.email,
      formState: initalForm,
      onInputChange: expect.any( Function ),
      onResetForm: expect.any( Function )
    })

  })

  test('Debe cambiar el nombre del formulario', () => {

    const newName = 'Fer'
    const { result } = renderHook( () => useForm( initalForm ) )
    const { onInputChange } = result.current

    act(() => {
      onInputChange({
        target: { name: 'name', value: newName }
      })
    })

    expect( result.current.name ).toBe( newName )
    expect( result.current.formState.name ).toBe( newName )


  })

  test('Debe realizar el reset del formulario', () => {

    const newName = 'Fer'
    const { result } = renderHook( () => useForm( initalForm ) )
    const { onInputChange, onResetForm } = result.current

    act(() => {
      onInputChange({
        target: { name: 'name', value: newName }
      })
      onResetForm()
    })

    expect( result.current.name ).toBe( initalForm.name )
    expect( result.current.formState.name ).toBe( initalForm.name )


  })

})
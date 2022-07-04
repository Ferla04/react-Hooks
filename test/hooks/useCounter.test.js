import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en el useCounter', () => {

  test('Debe retornar los valores por defecto', () => {

    const { result } = renderHook( () => useCounter() )
    const { counter, decrement, increment, reset } = result.current

    expect( counter ).toBe(10)
    expect( decrement ).toEqual( expect.any(Function) )
    expect( increment ).toEqual( expect.any(Function) )
    expect( reset ).toEqual( expect.any(Function) )

  })

  test('Debe de generar el counter con el valor de 100', () => {

    const { result } = renderHook( () => useCounter(100) )
    expect( result.current.counter ).toBe(100)

  })

  test('Debe incrementar el contador', () => {
    const { result } = renderHook( () => useCounter() )
    const { counter, increment } = result.current

    /* OJO
    Cuando se hace las pruebas de un codigo que actualiza
    los estados de React debe estar dentro de un act(() => {})
    increment()
    */
    act(() => {
      increment()
      increment() 
    })

    /* OJO 2
    Al momento de expectear valores primitivos esos valores
    no se actualizan al momento de colocarlos en una variable/constante

    Falso negativo:
    expect( counter ).toBe(11)

    bien:
    */
    expect( result.current.counter ).toBe(12)

  })

  test('Debe decrementar el contador', () => {
    const { result } = renderHook( () => useCounter() )
    const { decrement } = result.current

    act(() => {
      decrement()
      decrement() 
    })

    expect( result.current.counter ).toBe(8)

  })

  test('Debe decrementar el contador', () => {
    const { result } = renderHook( () => useCounter() )
    const { decrement, reset } = result.current

    act(() => {
      decrement()
      reset() 
    })

    expect( result.current.counter ).toBe(10)

  })

})
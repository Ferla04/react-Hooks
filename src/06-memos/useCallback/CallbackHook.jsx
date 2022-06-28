import { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

  const [counter, setCounter] = useState( 10 )

  const incrementFather = useCallback((value = 1) => {
    setCounter( c => c + value )
  },[])

  useEffect(() => {
    // incrementFather()
  }, [incrementFather])
  
  /*
  El useCallback se usa usualmente cuando se le envia
  una funcion del componente padre al hijo y también
  cuando la funcion esta en las dependencias de un useEffect
  */

  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ incrementFather }/>
    </>
  )
}

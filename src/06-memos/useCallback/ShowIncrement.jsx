import React from 'react'

/*NOTA: Aunque memoricemos el componente, la funcion enviada en las props
siempre que se genera apunta a un espacio de memoria diferente
y como siempre cambia no se memoriza, por esa razon se tiene que usar el useCalback */

export const ShowIncrement = React.memo(({ increment }) => {

  console.log('El boton se vuelve a generar :(')

  return (
    <button 
      className='btn btn-primary'
      onClick={ () => increment( 5 ) }
    >
      Incrementar
    </button>
  )
})

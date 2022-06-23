import { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y })
    }
    
    window.addEventListener('mousemove', onMouseMove)
  
    //Limpieza
    return () => {
      console.log('se quitó el listener')
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  

  return (
    <>
      <h3 className='mt-5'>Coordenadas de tu mouse</h3>

      { JSON.stringify( coords ) }
    </>
  )
}

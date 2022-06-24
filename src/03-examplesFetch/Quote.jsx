import { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ quote, author }) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {

    const { width, height } = pRef.current.getBoundingClientRect() 
    setBoxSize({ width, height })

  }, [ quote ])

  return (
    <>
      <blockquote 
        className='blockquote'
        style={{ display: 'flex', justifyContent:'flex-end' }}
      >
        <p ref={ pRef } className='my-3'>{ quote }</p>
        <footer className='blockquote-footer'>{ author }</footer>
      </blockquote>

      <code className='d-block mb-2' >{ JSON.stringify(boxSize) }</code>
    </>
  )
}

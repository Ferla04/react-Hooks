import React from 'react'
// import { memo } from 'react'

export const SmallCounter = React.memo(({ value }) => {

  //Es recomensable memorizar cuando el
  //proceso que se ejecuta al momento de que el padre
  //componente se renderice sin ser necesario que cambie el hijo,
  //sea un proceso pesado o largo

  //solo cuando cambian las props este se vuelve a ejecutar

  console.log('Me volví a crear :(')

  return (
    <small>{ value }</small>
  )
})

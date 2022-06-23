import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'coordenada',
    email: 'Fernanda@google.com'
  })

  const { username, email } = formState

  const onInputChange = ( event ) => {

    const { name, value } = event.target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  //Para cambios independientes es mejor crear los
  //use effect necesarios y todo en uno
  useEffect(() => {
    // console.log('FormState cambio!')
  }, [ formState ])

  useEffect(() => {
    // console.log('El email cambio!')
  }, [ email ])
  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input 
        type='text'
        className='form-control' 
        placeholder='Username'
        name='username'
        value={ username }
        onChange={ onInputChange }
      />

      <input 
        type='text'
        className='form-control mt-2' 
        placeholder='Email'
        name='email'
        value={ email }
        onChange={ onInputChange }
      />

      {
        ( username === 'coordenadas' ) && <Message />
      }
      
    </>
  )
}

import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {


  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input 
        type='text'
        className='form-control' 
        placeholder='Username'
        name='username'
        value={ username }
        onChange={ onInputChange }
        autoComplete='off'
      />

      <input 
        type='email'
        className='form-control mt-2' 
        placeholder='Email'
        name='email'
        value={ email }
        onChange={ onInputChange }
        autoComplete='off'

      />

      <input 
        type='password'
        className='form-control mt-2' 
        placeholder='Contraseña'
        name='password'
        value={ password }
        onChange={ onInputChange }
        autoComplete='off'
      />

      <button onClick={ onResetForm } className='btn btn-primary mt-3'>Borrar</button>
      
    </>
  )
}

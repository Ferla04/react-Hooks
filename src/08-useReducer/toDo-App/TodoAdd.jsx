import { useForm } from '../../hooks/useForm'


export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = (event) => {
    event.preventDefault()
    if(description.length <= 1) return 

    onNewTodo({
      id: new Date().getTime(),
      description,
      done: false
    })
    onResetForm()
  }

  return (
    <form onSubmit={ onFormSubmit }>

      <input 
        type='text'
        placeholder='¿Que hay que hacer?' 
        className='form-control'
        value={ description }
        name='description'
        onChange={ onInputChange }
        autoComplete='off'
      />

      <button 
        className='btn btn-outline-primary mt-2 w-100' 
        type='submit'
      >
        Agregar
      </button>

    </form>
  )
}

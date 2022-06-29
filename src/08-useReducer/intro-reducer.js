console.log('Este archivo solo se ve en consola')

const initialState = [{
  id: 1,
  toDo: 'Recolectar la piedra del Alma',
  done: false
}]

const toDoReducer = ( state = initialState, action = {} ) => {

  if(action.type === 'add'){
    return [...state, action.payload]
  }
  
  console.log(state)

  return state
}

//-----------------------------------------
let toDos = toDoReducer()

const newToDo = {
  id: 2,
  toDo: 'Recolectar la piedra del poder',
  done: false
}

const addToDoAction = {
  type: 'add',
  payload: newToDo
}

toDos = toDoReducer( toDos, addToDoAction )

console.log({ state: toDos})

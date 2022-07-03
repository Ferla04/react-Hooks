
export const todoReducer = ( initialState = [], action = {} ) => {

  switch ( action.type ) {
    case 'AddTodo': 
      return [ ...initialState, action.payload ]
  
    default:
      return initialState
  }
}
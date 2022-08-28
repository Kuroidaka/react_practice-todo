import { SET_TO_DO, ADD_TO_DO, DELETE_TO_DO } from "./constants"


const initState = {
    todoInput: '',
    todos: []

}

const reducer = (state, action) => {

    let newState = {};
    switch(action.type){
    case SET_TO_DO: 
        newState = {
            ...state,
            todoInput: action.payLoad
        }
        break
    case ADD_TO_DO:
        newState = { 
            ...state,
            todos: [...state.todos, action.payLoad]
        }
        break
    case DELETE_TO_DO: 
        const newJobs = [...state.todos]
        newJobs.splice(action.payLoad, 1)

        newState = {
            ...state,
            todos: [...newJobs]
        }
        break
    default:
        throw new Error('Invalid action') 
       
    }
    return newState
}

export default reducer
export { initState } 
import { SET_TO_DO, ADD_TO_DO, DELETE_TO_DO } from "./constants"
export const setTodoInput = (payLoad) => {

    return {
        type: SET_TO_DO,
        payLoad
    }

}

export const addTodoInput = payLoad => {

    return {
        type: ADD_TO_DO,
        payLoad
    }
}

export const deleteTodo = payLoad => {

    return {
        type: DELETE_TO_DO,
        payLoad
    }
}

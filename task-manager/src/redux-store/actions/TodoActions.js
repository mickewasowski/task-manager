import TodoItems from '../action-items/TodoActionItems';

export const createTodo = (todoData) => {
    return{
        type: TodoItems.CREATE_TODO,
        payload: todoData
    }
}

export const setInProgress = (todoId) => {
    return {
        type: TodoItems.SET_IN_PROGRESS,
        payload: todoId
    }
}

export const setComplete = (todoId) => {
    return{
        type: TodoItems.SET_COMPLETE,
        payload: todoId
    }
}
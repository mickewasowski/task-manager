import TodoItems from "../action-items/TodoActionItems";

const todoReducer = (state = [], action) => {

    switch (action.type) {
        case TodoItems.CREATE_TODO:
            return [
                ...state,
                action.payload
            ]
        case TodoItems.SET_IN_PROGRESS:            
            let setInProgress = state.find(x => x.id === action.payload);
            setInProgress.status = 'in progress';
            
            return [...state];

        case TodoItems.SET_COMPLETE:
            let setComplete = state.find(x => x.id === action.payload);
            setComplete.status = 'done';

            return [...state];
        default:
            return state;
    }
}

export default todoReducer;
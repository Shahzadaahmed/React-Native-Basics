// Note: All cases are defined here...!

import {
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM
}
    from "../constant/action-types";

const INIT_STATE = {
    todoArr: []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let todoArrClone = state.todoArr.slice(0);
            todoArrClone.push(action.payload)

            return {
                ...state,
                todoArr: todoArrClone
            }

        case DELETE_ITEM:
            let todoArrClone1 = state.todoArr.slice(0);
            todoArrClone1.splice(action.payload, 1);

            return {
                ...state,
                todoArr: todoArrClone1
            }

        case EDIT_ITEM:
            let todoArrClone2 = state.todoArr.slice(0);
            todoArrClone2.splice(action.payload.key, 1, action.payload.value);

            return {
                ...state,
                todoArr: todoArrClone2
            }

        default:
            return state;
    }
}
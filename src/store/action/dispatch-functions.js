// Note: All dispatch functions are defined here...!

import {
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM
}
    from "../constant/action-types";

// Note: Function to add item...!
export const addToDoItem = (value) => {
    return (dispatch) => {
        dispatch({
            type: ADD_ITEM,
            payload: value
        });
    }
}

// Note: Function to delete item...!
export const deleteToDoItem = (index) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_ITEM,
            payload: index
        });
    }
}

// Note: Function to edit item...!
export const editToDoItem = (obj) => {
    return (dispatch) => {
        // console.log(obj);
        dispatch({
            type: EDIT_ITEM,
            payload: obj
        });
    }
}
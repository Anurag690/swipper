// import {  } from "../constants/types";

const INITIAL_STATE = {
    posts: []
}
export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case "LOAD_POSTS":
            return {...state, posts: action.payload};
        default:
            return state;
    }
}
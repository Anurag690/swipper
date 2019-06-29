import { TOGGLE_MODAL, TOGGLE_REFRESH, TOGGLE_INFO_BAR } from '../constants/types';
import { postServices } from '../../service/api';

export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL
    }
}
export const toggleRefresh = (refreshing) => {
    return {
        type: TOGGLE_REFRESH,
        payload: refreshing
    }
}
export const toggleInfoBar = (message) => {
    return {
        type: TOGGLE_INFO_BAR,
        payload: message
    }
}
export const loadPosts = () => {
    return (dispatch) => {
        
        postServices.getPosts().then(result=>{
            dispatch({
                type: "LOAD_POSTS",
                payload: result
            })
        }).catch(err=>{
            console.log(err);
        })
    }
}

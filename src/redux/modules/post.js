import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import api from "../../api/api";


// actions
const GET_POST = "GET_POST";


// action creator
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));


const initialState = {
    list: [],
}


// middleware actions
const getLikePostDB = () => {
    return async function (dispatch, getState) {
        await api.get('/')
            .then((response) => {
                console.log(response);
                // dispatch(getPost(response.data.sortbyLike));
            }).catch((err) => {
                console.log(err);
            })
    }
}


// reducer
export default handleActions({
    [GET_POST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post_list;
    }),
}, initialState)


// action creator export
const actionCreators = {
    getPost,
    getLikePostDB,
};

export { actionCreators };
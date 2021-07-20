const UPDATE_TEXT = 'UPDATE_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    post: [{ message: 'New post!', like: 2, id: 0 },
         { message: "I'm learn Java!", like: 5, id: 1},
         { message: "I'm learn Python!", like: 33, id: 2},
         { message: 'I want programmes!', like: 15, id: 3}],
    newPostText: ''
}

export const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return({
                ...state,
                post: [...state.post, {
                    message: state.newPostText,
                    like: 0,
                    id: state.post[state.post.length-1].id+1
                }],
                newPostText: '',
            })
        }
        case UPDATE_TEXT:{
            return({
                ...state,
                newPostText: action.newText,
            })
        }
        default:
            return state;
    }
}

export let actionUpdate = (text) => {
    return { type: UPDATE_TEXT, newText: text };
 }
 export let actionAddPost = () => {
    return { type: ADD_POST };
 }
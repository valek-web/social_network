const UPDATE_TEXT = 'UPDATE_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    post: [{ message: 'New post!', like: 'like: 2' },
         { message: "I'm learn Java!", like: 'like: 5' },
         { message: "I'm learn Python!", like: 'like: 33' },
         { message: 'I want programmes!', like: 'like: 42' }],
    newPostText: ''
}

export const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newTextPosts = state.newPostText;
            let newPosting = { message: newTextPosts, like: 'Like: 0' };
            state.post.push(newPosting);
            state.newPostText = '';
            return state;
        case UPDATE_TEXT:
            state.newPostText = action.newText;
            return state;
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
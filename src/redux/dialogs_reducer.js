const UPDATE_MESSAGES_TEXT = 'UPDATE_MESSAGES_TEXT';
const ADD_MESSAGES = 'ADD_MESSAGES';

let initialState = {
    userNameMessage: [
        { name: 'Jonson', id: '0' },
        { name: 'Li', id: '1' },
        { name: 'Max', id: '2' },
        { name: 'Linda', id: '3' },
        { name: 'Ron', id: '4' },],
    messageText: ['New messages', 'Message',],
    textMessage: '',
}

export const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGES_TEXT :
            state.textMessage = action.newText;
            return state;
        case ADD_MESSAGES :
            let text = state.textMessage;
            state.messageText.push(text);
            state.textMessage = '';
            return state;
        default:
            return state;
    }
}

export let actionNewMessagesClick = {
    type: ADD_MESSAGES,
 }
 
 export let actionUpdateMessage = (text) => {
    return {
       type: UPDATE_MESSAGES_TEXT,
       newText: text,
    }
 }
const ADD_MESSAGES = 'ADD_MESSAGES'

let initialState = {
    userNameMessage: [
        { name: 'Jonson', id: '0' },
        { name: 'Li', id: '1' },
        { name: 'Max', id: '2' },
        { name: 'Linda', id: '3' },
        { name: 'Ron', id: '4' },
    ],
    messageText: [
        { textMessage: 'New messages', id: 0 },
        { textMessage: 'Message', id: 1 },
        { textMessage: 'ns', id: 2 },
    ],
}

export const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGES:
            return {
                ...state,
                messageText: [
                    ...state.messageText,
                    {
                        textMessage: action.text,
                        id: {
                            ...(state.messageText[state.messageText.length - 1]
                                .id + 1),
                        },
                    },
                ],
            }
        default:
            return state
    }
}

export let actionNewMessagesClick = text => {
    return {
        type: ADD_MESSAGES,
        text,
    }
}

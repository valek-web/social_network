import { createSelector } from 'reselect'

const getMessageTextSelector = state => {
    return state.messagesPage.messageText
}

export const getMessageText = createSelector(
    getMessageTextSelector,
    messageText => messageText
)

export const getTextNewMessage = state => {
    return state.messagesPage.textNewMessage
}

export const getLogin = state => {
    return state.differentPage.login
}

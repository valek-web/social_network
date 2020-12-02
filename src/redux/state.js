const UPDATE_TEXT = 'UPDATE_TEXT';
const ADD_POST = 'ADD_POST';
const UPDATE_MESSAGES_TEXT = 'UPDATE_MESSAGES_TEXT';
const ADD_MESSAGES = 'ADD_MESSAGES';

let stone = {
   _state: {
      profilePage: {
         post: [{ message: 'New post!', like: 'like: 2' },
         { message: "I'm learn Java!", like: 'like: 5' },
         { message: "I'm learn Python!", like: 'like: 33' },
         { message: 'I want programmes!', like: 'like: 42' }],
         newPostText: ''
      },
      messagesPage: {
         userNameMessage: [
            { name: 'Jonson', id: '0' },
            { name: 'Li', id: '1' },
            { name: 'Max', id: '2' },
            { name: 'Linda', id: '3' },
            { name: 'Ron', id: '4' },],
         messageText: ['New messages', 'Message',],
         textMessage: '',
      },
   },

   _renderNewChange(sts) { },

   _newPostClick() {
      let newTextPosts = this._state.profilePage.newPostText;
      let newPosting = { message: newTextPosts, like: 'Like: 0' };
      this._state.profilePage.post.push(newPosting);
      this._state.profilePage.newPostText = '';
      this._renderNewChange(this._state);
   },

   _updatePostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._renderNewChange(this._state);
   },

   _updateMessagesText(newTextMessages) {
      this._state.messagesPage.textMessage = newTextMessages;
      this._renderNewChange();
   },

   _addMessage() {
      let text = this._state.messagesPage.textMessage;
      this._state.messagesPage.messageText.push(text);
      this._state.messagesPage.textMessage = '';
      this._renderNewChange();
   },

   getState() {
      return this._state;
   },

   dispatch(action) {
      if (action.type === ADD_POST) {
         this._newPostClick()
      } else if (action.type === UPDATE_TEXT) {
         this._updatePostText(action.newText)
      } else if (action.type === UPDATE_MESSAGES_TEXT) {
         this._updateMessagesText(action.newText)
      } else if (action.type === ADD_MESSAGES) {
         this._addMessage()
      }
   },

   renderNew(rend) { this._renderNewChange = rend; },
}

export let actionUpdate = (text) => {
   return { type: UPDATE_TEXT, newText: text };
}
export let actionAddPost = () => {
   return { type: ADD_POST };
}
/***************************** */

export let actionNewMessagesClick = {
   type: ADD_MESSAGES,
}

export let actionUpdateMessage = (text) => {
   return {
      type: UPDATE_MESSAGES_TEXT,
      newText: text,
   }
}

export default stone;
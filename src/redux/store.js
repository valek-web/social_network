// import { dialogs_reducer } from "./dialogs_reducer";
// import { profile_reducer } from "./profile_reducer";

// let store = {
//    _state: {
//       profilePage: {
//          post: [{ message: 'New post!', like: 'like: 2' },
//          { message: "I'm learn Java!", like: 'like: 5' },
//          { message: "I'm learn Python!", like: 'like: 33' },
//          { message: 'I want programmes!', like: 'like: 42' }],
//          newPostText: ''
//       },
//       messagesPage: {
//          userNameMessage: [
//             { name: 'Jonson', id: '0' },
//             { name: 'Li', id: '1' },
//             { name: 'Max', id: '2' },
//             { name: 'Linda', id: '3' },
//             { name: 'Ron', id: '4' },],
//          messageText: ['New messages', 'Message',],
//          textMessage: '',
//       },
//    },

//    _renderNewChange(sts) { },

//    getState() {
//       return this._state;
//    },

//    dispatch(action) {
//       this._state.profilePage = profile_reducer(this._state.profilePage, action);
//       this._state.messagesPage = dialogs_reducer(this._state.messagesPage, action);
//       this._renderNewChange();
//    },

//    subscribe(rend) { this._renderNewChange = rend; },
// }

// export default store;
let stone = {
   _state: {
      profilePage:{
          post:[{ messag: 'New post!', like: 'like: 2' },
                { messag: "I'm learn Java!", like: 'like: 5' },
                { messag: "I'm learn Python!", like: 'like: 33'},
                { messag: 'I want programmes!', like: 'like: 42' }],
          newPostText: 'New pos11t!'
       },
      messagesPage: [
               {name:'Jonson', id:'0'},
               {name:'Li', id:'1'},
               {name:'Max', id:'2'},
               {name:'Linda', id:'3'},
               {name:'Ron', id:'4'},]},

   getState() {
      return this._state;
   },

   newPostClick() {
      let newTextPosts = this._state.profilePage.newPostText;
      let newPosting = {messag: newTextPosts, like: 'Like: 0'};
      this._state.profilePage.post.push(newPosting);
      this._state.profilePage.newPostText = '';
      this.renderNewChange(this._state);},

   updatePostText(newText) {
      debugger
      this._state.profilePage.newPostText = newText;
      debugger
      this.renderNewChange(this._state);},

   renderNewChange(sts) {},

   renderNew(rend) {this.renderNewChange = rend;},
}

 export default stone;
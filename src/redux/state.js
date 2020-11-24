let renderNewChange = () => {}
 window.ren = renderNewChange;
let state = {
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
              {name:'Ron', id:'4'},]
 }

 window.state = state;

export let newPostClick = () => {
   let newTextPosts = state.profilePage.newPostText;
   debugger
   let newPosting = {messag: newTextPosts, like: 'Like: 0'};
   state.profilePage.post.push(newPosting);
   state.profilePage.newPostText = '';
   renderNewChange(state);
}

export let updatePostText = (newText) => {
   debugger
   state.profilePage.newPostText = newText;
   renderNewChange(state);
}

// updatePostText("123")
// newPostClick()
// updatePostText("Только вручную")
// newPostClick()
// updatePostText("Только вручную2")

export let renderNew = (rend) => {
   rend = renderNewChange;
}

 export default state;
import {addPostAC, profile_reducer} from './profile_reducer'

it('new post', () => {
    //
    const action = addPostAC()
    let State = {
        post: [
            {message: 'New post!', like: 2, id: 0},
            {message: 'I\'m learn Java!', like: 5, id: 1},
            {message: 'I\'m learn Python!', like: 33, id: 2},
            {message: 'I want programmes!', like: 15, id: 3},
        ],
    }

    //
    let newState = profile_reducer(State, action)
    //
    expect(newState.post.length).toBe(5)
})

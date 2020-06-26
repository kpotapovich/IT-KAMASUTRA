const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state:{
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 0},
                {id: 2, message: 'It\'s my first post', likes: 25},
                {id: 2, message: 'i girl ', likes: 25},
                {id: 2, message: 'It\'s my first post', likes: 25},
            ],
            newPostText: 'hello',
        },
        dialogsPage: {
            messages:[
                {id: 1, message: 'Hi'},
                {id: 2, message: 'nature'},
                {id: 3, message: 'hello'},
                {id: 4, message: 'cute'},
                {id: 5, message: 'friend'},
            ],
            dialogs: [
                {id: 1, name: 'Kris'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Dimyc'},
                {id: 5, name: 'Sasha'},
                {id: 6, name: 'Valera'},
            ],

        },
        sidebar:{}
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
        // observer - наблюдалель это патерна поход на publisher-subscriber
    },

    _callSubscriber () {
        console.log('state');
    },

    dispatch(action) {  // {type: 'ADD_POST'}
            if (action.type === ADD_POST) {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likes: 0,
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);

            }
        },

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type:{type: UPDATE_NEW_POST_TEXT, newText: text} })


export default store;
window.state = store;
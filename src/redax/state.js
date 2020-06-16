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
   _callSubscriber () {
        console.log('state');
    },
     addPost ()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0,
        };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText='';
         this._callSubscriber (this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber ( this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
        // observer - наблюдалель это патерна поход на publisher-subscriber
    },
};

export default store;
window.state = store;
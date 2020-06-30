import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
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
            messages: [
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
            newMessageBody: "",

        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
        // observer - наблюдалель это патерна поход на publisher-subscriber
    },

    _callSubscriber() {
        console.log('state');
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action); // {type: 'ADD_POST'}

            this._callSubscriber(this._state);
    }


}




export default store;
window.state = store;
// store - OOP
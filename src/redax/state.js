let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likes: 0},
            {id: 2, message: 'It\'s my first post', likes: 25},
            {id: 2, message: 'i girl ', likes: 25},
            {id: 2, message: 'It\'s my first post', likes: 25},
        ],

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
    sitebar:{}
}
};

 export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0,
    };
   state.profilePage.posts.push(newPost);

};


export default state;
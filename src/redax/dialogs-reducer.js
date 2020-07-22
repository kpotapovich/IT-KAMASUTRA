const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
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


};

const dialogsReducer = (state = initialState , action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
    default:
        return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
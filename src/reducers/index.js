import { INCREMENT, DECREMENT, RESET, ADD_EVENT,DELETE_EVENT,ALLDELETE_EVENT } from '../actions/index';

const reducer = (state = [], action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case RESET:
            return { ...state, count: state.count = 0 };
       /* case SANBAI:
            return { ...state, count: state.count * 3 };
        case SANBAITAS:
            return { ...state, count: state.count % 3 }; */  
        case ADD_EVENT:
            const event = { title: action.title, body: action.body, comment: action.comment}
            let id = state.length + 1
            return [ ...state, {id, ...event } ];
        case ALLDELETE_EVENT
            :return []
            case DELETE_EVENT:
                const idone = state.filter(id =>{
                    return id === action.id
                })
                console.log(idone)
            return state;
            default:
                return state;
    }
};

export default reducer;
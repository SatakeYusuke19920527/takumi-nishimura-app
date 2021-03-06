const reducer = (state = [], action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'RESET':
            return { ...state, count: state.count = 0 };
        case 'SANBAI':
            return { ...state, count: state.count * 3 };
        case 'SANBAITAS':
            return { ...state, count: state.count % 3 };         
            default:
                return state;
    }
};

export default reducer;
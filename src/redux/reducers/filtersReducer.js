
const initialState = {
    category: null,
    sortBy: 'rating',
    ascOrder: false
};

const filtersReducer = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
        };
    } 
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload,
        };
    } 
    if (action.type === 'TOGGLE_ORDER') {
        return {
            ...state,
            ascOrder: action.payload,
        };
    } 
    return state;
}

export default filtersReducer;

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = arr = arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_CART":
        const currentPizzasItems = !state.items[action.payload.id].items
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload];


            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzasItems,
                    totalPrice: getTotalPrice(currentPizzasItems),
                }
            };

            const allPizzas = [].concat.apply([], Object.values(newItems));
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,  
                totalPrice,  
            };
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload,
            };

        default:
            return state;
    }
}


export default cartReducer;
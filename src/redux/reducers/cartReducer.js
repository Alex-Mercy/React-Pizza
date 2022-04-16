
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const getAllPizzas = obj => [].concat.apply([], Object.values(obj).map(obj => obj.items))
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);
const getOverolPrice = obj => Object.values(obj).reduce((sum, obj) => obj.totalPrice + sum, 0);

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_CART": {
            const currentPizzasItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzasItems,
                    totalPrice: getTotalPrice(currentPizzasItems),
                }
            };
            const allPizzas = getAllPizzas(newItems);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: getTotalPrice(allPizzas)
            };
        }

        case 'PLUS_CART_ITEM': {
            const newObjItems = [...state.items[action.payload].items,
            state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                }
            };

            return {
                ...state,
                items: newItems,
                totalPrice: getOverolPrice(newItems),
                totalCount: getAllPizzas(newItems).length,
            };
        }

        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
            oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                }
            };

            return {
                ...state,
                items: newItems,
                totalPrice: getOverolPrice(newItems),
                totalCount: getAllPizzas(newItems).length,
            };
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            };

        default:
            return state;
    }
}


export default cartReducer;
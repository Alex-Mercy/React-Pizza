export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
});

export const setTotalCount = (totalCount) => ({
    type: 'SET_TOTAL_COUNT',
    payload: totalCount,
});


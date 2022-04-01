import React, { useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';


import { Categories, SortPopup, PizzaBlock, PizzaLoader } from '../components';

import { setCategory, setSortBy, toggleOrder } from '../redux/actions/filtersAC';
import { fetchPizzas } from '../redux/actions/pizzasAC';
import { addPizzaToCart } from '../redux/actions/cartAC';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'asc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
]


function Home() {
    const dispatch = useDispatch();
    const pizzas = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy, ascOrder } = useSelector(({ filters }) => filters);

    useEffect(() => {
        // if(!pizzas.length) {}
        dispatch(fetchPizzas(sortBy, category, ascOrder));

    }, [dispatch, sortBy, category, ascOrder]);


    const onSlectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [dispatch]);

    const onSlectSortType = React.useCallback((sortBy) => {
        dispatch(setSortBy(sortBy));
    }, [dispatch]);

    const changeSortOrder = React.useCallback((ascOrder) => {
        dispatch(toggleOrder(ascOrder));
    }, [dispatch]);

    const onClickAddPizza = (obj) => {
        dispatch(addPizzaToCart(obj))
    }


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    onClickCategory={onSlectCategory}
                    activeCategory={category}
                />
                <SortPopup
                    items={sortItems}
                    activeSortType={sortBy}
                    onClickSortType={onSlectSortType}
                    ascOrder={ascOrder}
                    changeSortOrder={changeSortOrder}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? pizzas.map(pizza =>

                        <PizzaBlock
                            onClickAddPizza={onClickAddPizza}
                            key={pizza.id}
                            addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}
                            {...pizza}
                        />)
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <PizzaLoader key={index} />)
                }

            </div>
        </div>
    )
}

export default Home
import React from 'react';
import PropTypes from 'prop-types';


const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {

    return (
        <div className="categories">
            <ul>
                <li 
                className={activeCategory === null ? 'active': ''}
                onClick={() => onClickCategory(null)}
                >
                    Все
                    </li>
                {items && 
                items.map((item, index) =>
                    <li 
                    key={`${item}_${index}`} 
                    onClick={() => onClickCategory(index)}
                    className={activeCategory === index ? 'active': ''}
                    >
                        {item}
                    </li>)}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    activeCategory: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
    activeCategory: null,
    items: []
};

export default Categories;
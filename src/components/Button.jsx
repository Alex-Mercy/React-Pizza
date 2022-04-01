import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const Button = ({onClick, className, outline, children}) => {
    return (
        <button 
        onClick={onClick}
        className={cn('button', className, {
            'button--outline': outline
        })}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: propTypes.func,
}

export default Button;
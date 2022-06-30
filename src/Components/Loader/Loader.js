import React from 'react';
import PropTypes from 'prop-types';
import * as StyledLoader from './Loader.styled';

const Loader = ({ className, id, imgSrc, isActive }) => {
    return (
        <>
            { isActive &&
                <StyledLoader.Container className={ className } id={ id } data-testid='loader'>
                    <StyledLoader.Img src={ imgSrc } alt='Loader image' />
                </StyledLoader.Container>
            }
        </>
    );
};

Loader.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    imgSrc: PropTypes.string,
    isActive: PropTypes.bool
};

Loader.defaultProps = {
    isActive: false,
    imgSrc: './loader.png'
};

export default Loader;

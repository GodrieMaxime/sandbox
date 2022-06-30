import React from 'react';
import PropTypes from 'prop-types';
import * as StyledCard from './Card.styled';

const Card = ({ className, id, children, imgSrc, imgAlt }) => {
    return (
        <StyledCard.Container className={ className } id={ id } data-testid='card'>
            <StyledCard.Img src={ imgSrc } alt={ imgAlt } />
        </StyledCard.Container>
    );
};

Card.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    children: PropTypes.oneOfType(
        [
            PropTypes.node,
            PropTypes.array,
        ],
    ),
};

export default Card;

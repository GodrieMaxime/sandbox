import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Components/Card/Card';
import * as StyledImageGrid from './ImageGrid.styled';

const ImageGrid = ({ className, id, list }) => {
    return (
        <StyledImageGrid.Container className={ className } id={ id } data-testid='imagegrid'>
            {list.map(item => (
                <Card imgSrc={ item.url } imgAlt={ item.alt_description } key={ item.id }></Card>
            ))}
        </StyledImageGrid.Container>
    );
};

ImageGrid.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        alt_description: PropTypes.string
    })).isRequired,
};

export default ImageGrid;

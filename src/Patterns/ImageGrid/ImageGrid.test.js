
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageGrid from './ImageGrid';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '../../Utils/Tests/Config';

describe('Loader', () => {

    expect.extend(toHaveNoViolations);

    const props = {
        list: [
            {
                'id': 'sR24zAyFgJE',
                'alt_description': 'test alt tag',
                'url': 'https://thumbs.dreamstime.com/z/cute-small-cat-5592051.jpg'
            },
            {
                'id': 'sR2423232zAyFgJE',
                'alt_description': 'test alt tag',
                'url': 'https://thumbs.dreamstime.com/z/cute-small-cat-5592051.jpg'
            },
            {
                'id': 'sR24zAyFgJ45435E',
                'alt_description': 'test alt tag',
                'url': 'https://thumbs.dreamstime.com/z/cute-small-cat-5592051.jpg'
            },
        ],
        className: 'className',
        id: 'id',
    };

    it('should not have any accessibility violations', async () => {
        const { baseElement } = render(<ImageGrid { ...props } />);
        const results = await axe(baseElement);

        expect(results).toHaveNoViolations();
    });

    it('should render identifying attributes when provided', async () => {
        render(<ImageGrid { ...props } />);
        const loader = screen.getByTestId('imagegrid-testid');
        expect(loader).toContainHTML('class', 'className');
        expect(loader).toContainHTML('id', 'id');
    });

    it('should render images when list array has items', async () => {
        render(<ImageGrid { ...props } />);
        const image = screen.getAllByRole('img');
        expect(image).toHaveLength(3);
    });

});

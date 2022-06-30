import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '../../Utils/Tests/Config';

describe('Card', () => {

    expect.extend(toHaveNoViolations);

    const props = {
        imgSrc: 'https://images.unsplash.com/profile-1486092899496-359010a96a9c?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
        imgAlt: 'imageAlt',
        className: 'className',
        id: 'id',
    };

    it('should not have any accessibility violations', async () => {
        const { baseElement } = render(<Card { ...props } />);
        const results = await axe(baseElement);

        expect(results).toHaveNoViolations();
    });

    it('should render identifying attributes when provided', async () => {
        render(<Card { ...props } />);
        const card = screen.getByTestId('card');
        expect(card).toContainHTML('class', 'className');
        expect(card).toContainHTML('id', 'id');
    });

    it('should render with an image if provided', async () => {
        render(<Card { ...props } />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });

});

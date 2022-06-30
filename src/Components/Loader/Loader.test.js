import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from './Loader';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from '../../Utils/Tests/Config';

describe('Loader', () => {

    expect.extend(toHaveNoViolations);

    const props = {
        imgSrc: 'https://images.unsplash.com/profile-1486092899496-359010a96a9c?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
        isActive: true,
        className: 'className',
        id: 'id',
    };

    it('should not have any accessibility violations', async () => {
        const { baseElement } = render(<Loader { ...props } />);
        const results = await axe(baseElement);

        expect(results).toHaveNoViolations();
    });

    it('should render identifying attributes when provided', async () => {
        render(<Loader { ...props } />);
        const loader = screen.getByTestId('loader-testid');
        expect(loader).toContainHTML('class', 'className');
        expect(loader).toContainHTML('id', 'id');
    });

    it('should render on the screen when active', async () => {
        render(<Loader { ...props } />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });

    it('should not render on the screen when inactive', async () => {
        render(<Loader { ...props } isActive={ false } />);
        const image = screen.queryByAltText('Loader image');
        expect(image).not.toBeInTheDocument();
    });

});

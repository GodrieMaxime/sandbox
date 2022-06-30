import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from './Utils/Tests/Config';
import App from './App';

describe('App page', () => {
    expect.extend(toHaveNoViolations);

    it('should not have any accessibility violations', async () => {
        const { baseElement } = render(<App/> );
        const results = await axe(baseElement);

        expect(results).toHaveNoViolations();
    });

    it('renders template of the page', () => {
        render(<App />);
        const footer = screen.getByText('Maxime Godrie - Test 2022');
        expect(footer).toBeInTheDocument();
    });

    it('should render the name when entered and submitted on the following screen', async () => {
        render(<App />);
        const input = screen.getByTestId('name-input');
        fireEvent.change(input, { target: { value: 'Maxime' } });
        expect(input).toHaveValue('Maxime');
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        const text = screen.getByText('Hello, Maxime !');
        expect(text).toBeInTheDocument();
    });

    it('should render a grid of images when a search has been submitted', async () => {
        render(<App />);
        const input = screen.getByTestId('name-input');
        fireEvent.change(input, { target: { value: 'Maxime' } });
        const button = screen.getByRole('button');
        fireEvent.click(button);
        const searchInput = screen.getByTestId('search-input');
        fireEvent.change(searchInput, { target: { value: 'Cats' } });
        // to continue
    });

});
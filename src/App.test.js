import { render, screen } from '@testing-library/react';
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

    test('renders template of the page', () => {
        render(<App />);
        const footer = screen.getByText('Maxime Godrie - Test 2022');
        expect(footer).toBeInTheDocument();
    });

});
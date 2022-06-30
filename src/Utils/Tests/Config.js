import { configureAxe } from 'jest-axe';

// configuration for automated accessibility testing
export const axe = configureAxe({
    impactLevels: ['critical'],
    rules: {
        'color-contrast': { enabled: false },
        'image-alt': { enabled: true }
    }
});

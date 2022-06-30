import { configureAxe } from 'jest-axe';

export const axe = configureAxe({
    impactLevels: ['critical'],
    rules: {
        'color-contrast': { enabled: false },
        'image-alt': { enabled: true }
    }
});

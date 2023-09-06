import { createStitches } from '@stitches/react';

export const {
    config,
    createTheme,
    styled,
    css,
    globalCss,
    getCssText,
    theme, 
    keyframes,
}= createStitches({
    theme: {
        colors: {
            transparent: '#0000000',

            white: '#fff',
            black: '#121214',

            second: '#12e2e3',
            rocketseat: '#8257e6',
        },

        fonts: {
            roboto: 'var(--font-roboto)',
        }
    }
});
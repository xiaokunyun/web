import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import plugin from 'windicss/plugin'
export default defineConfig({
    darkMode: 'class',
    safelist: 'p-3 p-4 p-5',
    theme: {
        extend: {
            colors: {
                teal: {
                    100: '#096',
                },
            },
            fontSize: {
                'xs': '.25rem',
                'sm': '.35rem',
                'tiny': '.875rem',
                'base': '0.52rem',
                'lg': '0.55rem',
                'xl': '0.65rem',
                // 'xs': '.75rem',
                // 'sm': '.875rem',
                // 'tiny': '.875rem',
                // 'base': '1rem',
                // 'lg': '1.125rem',
                // 'xl': '1.25rem',
                // '2xl': '1.5rem',
                // '3xl': '1.875rem',
                // '4xl': '2.25rem',
                // '5xl': '3rem',
                // '6xl': '4rem',
                // '7xl': '5rem',
            },
            boxShadow: {
                'l-white': '-10px 0 10px white',
                'l-zinc': '-10px 0 10px #18181b'
            },
        },
    },
    plugins: [formsPlugin],
})
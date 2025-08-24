import {createSystem, defaultConfig, defineConfig} from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        semanticTokens: {
            colors: {
                mainBg: { value: { _light: '#f0fdfa4d', _dark: '#072a38' }},

            },
            shadows: {
                section: {
                    value: {
                        _light: '1px 1px 3px 0 rgba(12, 93, 86, .3)',
                        _dark: '1px 1px 3px 0 rgba(94, 234, 212, .3)',
                    }
                }
            },
        },
    },
    globalCss: {
        'body': {
            background: 'mainBg',
        }
    }
})

export const system = createSystem(defaultConfig, config);
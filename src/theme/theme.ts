import {createSystem, defaultConfig, defineConfig} from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        semanticTokens: {
            colors: {
                bg: { value: { _light: '#fafafa', _dark: '#27272a' }},
            },
        },
    },
    globalCss: {
        'body': {
            background: 'bg',
        }
    }
})

export const system = createSystem(defaultConfig, config);
/* eslint eqeqeq: "off", curly: "error" */
import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

    colors: {
        primary: string,
        secundary: string,

        background: string,
        textPrimary: string,
        textActive: string,
        textSecundary: string,
        accent: string,
        border: string,
        formBg: string
    }
    }
}

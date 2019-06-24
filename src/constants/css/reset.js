import { css } from 'styled-components'

const reset = css`
    html {
        box-sizing: border-box;
        /* Nicer looking fonts for OS X and iOS */
        -webkit-font-smoothing: antialiased;
    }

    * {
        box-sizing: inherit;
    }

    *:before,
    *:after {
        box-sizing: inherit;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
    }

    base,
    basefont,
    datalist,
    head,
    meta,
    script,
    style,
    title,
    noembed,
    param,
    template {
        display: none;
    }

    em,
    i {
        font-style: normal;
    }

    a:focus,
    button:focus {
        outline: 0;
    }

    button {
        appearance: none;
        background-color: transparent;
        border: 0;
        padding: 0;
    }

    input,
    fieldset {
        border: 0;
        padding: 0;
        margin: 0;
        min-width: 0;
        font-size: 1rem;
        font-family: inherit;
    }

    input::-ms-clear {
        display: none;
    }

    input:focus {
        outline: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        appearance: none;
    }

    svg {
        display: block;
    }

    img {
        max-width: 100%;
        display: block;
    }

    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }

    body {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    
    button {
        font-family: 'Open Sans', sans-serif;
    }
`

export default reset

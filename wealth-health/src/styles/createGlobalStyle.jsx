import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    body {
        margin: 0;
        display: flex;
        flex-direction column;
        width: 100%;
        min-height: 100vh;
    }
    `

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle

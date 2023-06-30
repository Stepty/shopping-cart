import styled from 'styled-components'

export const StyledHeader = styled.header`
    padding: 30px 40px;
    background-color: black;
    display: flex;
    .cart button {
        background-color: transparent;
        border: none;
        padding: 0 0 0 20px;
        fill: white;
    }
    .cart button:hover {
        cursor: pointer;
    }
    h1 {
        margin-right: auto;
    }
    .nav-links {
        display: flex;
        gap: 20px;
    }
    a {
        text-decoration: none;
        color: white;
    }

    .nav-links a:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 5px;
    }
`
import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: grey;
    padding: 10px;
    .footer-padding {
        padding: 40px;
    }
    .footer-links, .footer-below, .footer-terms {
        display: flex;
        gap: 10px;
    }
    .footer-top {
        padding-bottom: 20px;
    }
    .footer-links{
        display: flex;
        justify-content: space-around;
    }
    .footer-links h3 {
        color: white;
        padding-bottom: 10px;
    }
    .footer-link {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .social-links {
        display: flex;
        gap: 10px;
    }
    .footer-copyright {
        margin-right: auto;
    }
    .github {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-right: auto;
    }
    .github svg:hover {
        fill: darkgrey;
    }
`
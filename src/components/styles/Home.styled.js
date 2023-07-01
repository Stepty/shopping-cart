import styled from 'styled-components'
import img6 from '../../imgs/img6.webp'

const StyledHome = styled.main`
    height: 100vh;
    .hero {
        background-color: white;
        background-image: url('${img6}');
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;
        height: 100%;
        
    }
    .hero a {
        text-decoration: none;
    }
    .hero-header {
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        color: white;
        padding: 10px;
        letter-spacing: 2px;
    }
    .info-bar {
        background-color: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: fit-content;
        margin-top: 500px;
        margin-left: auto;
        margin-right: auto;
        padding: 40px;
        color: white;
        border-radius: 20px;
        text-decoration: none;
    }
`

export default StyledHome
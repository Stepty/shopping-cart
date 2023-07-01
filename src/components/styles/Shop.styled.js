import styled from 'styled-components'

const StyledShop = styled.main`
    height: 200vh;
    .shop-padding { 
        padding: 50px;
        height: 100%;
    }
    .banner {
        padding: 10px;
        display: flex;
        background-color: rgba(0,0,0,0.5);
        color: white;
    }
    .banner p {
        margin: 0 auto;
    }
    .shop-container {
        height: 95%;
    }
    .shop-content {
        display: flex;
        height: 100%;
    }
    .filter {
        width: 200px;
        padding: 0 10px;
    }
    .products-container {
        background-color: lightgrey;
        width: 100%;
        height: 100%;
        display: grid;
        padding: 10px;
        justify-items: center;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 30px;
    }
    .product-container {
        background-color: darkgrey;
        height: 300px;
        width: 250px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .product-img {
        height: 75%;
    }
    .product-img img {
        height: 100%;
    }
    .product-bottom {
        padding: 5px;
    }
`

export default StyledShop
import React from 'react';
import styled from 'styled-components'

const StyledImage = styled.div`
    height: calc(100vh - 100px);
    background: url(${props => props.src ? props.src : "https://source.unsplash.com/random"}) 65% 50% no-repeat;
    background-size: cover;
    display: block;
    padding: none;
    filter: grayscale(1);
    ${'' /* grid-row: 2/3; */}
    max-height: 50vh;
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
        grid-column: 2 / 3;
        max-height: 100vh;
    }
    @media (min-width: 1200px) {
    }
`

function Img({ src }) {
    return (
        <StyledImage
            src={src}
        >
            {/* <img
                src={src}
                style={{width: "100%", height: "100%"}}
            /> */}
        </StyledImage>
    );
}

export default Img;
import React from 'react';
import styled from 'styled-components'

const StyledImage = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background: url(https://source.unsplash.com/random) center no-repeat;
    background-size: cover;
    display: block;
    padding: none;
    ${'' /* position: relative;
    top: 1px;
    left: -1px; */}
    ${'' /* box-shadow: -5px 5px 15px 0 rgba(0,0,0,0.3); */}
`

function Img({ style }) {
    return (
        <StyledImage
            style={style}
        >
            
        </StyledImage>
    );
}

export default Img;
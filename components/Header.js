import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion'


const StyledHeader = styled(motion.h1)`
    font-size: 4em;
    margin: 0;
    transition: 0.2s ease;
    &:hover {
        transform: scale(${props => props.scaleOnHover});
    }
`

function Header({ children, style, onMouseOver, scaleOnHover }) {
    return (
        <StyledHeader 
            style={style}
            onMouseOver={onMouseOver}
            scaleOnHover={scaleOnHover}
        >
            {children}
        </StyledHeader>
    );
}

export default Header;
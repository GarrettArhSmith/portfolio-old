import React from 'react';
import Navbar from '../components/Navbar'
import Container from '../components/Container'

import Img from '../components/Img'

function about(props) {
    return (        
        <Container style ={{gridTemplateColumns: "3fr 2fr"}}>
            <Navbar />
            <Img style={{gridColumn: "2/3"}} />
        </Container>
    );
}

export default about;
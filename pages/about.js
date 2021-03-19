import React from 'react';
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import { motion } from 'framer-motion'

import Img from '../components/Img'
import styled from 'styled-components'

const Contents = styled.div`
    display: grid;
    place-items: center;
    padding: 2rem;
    @media (min-width: 480px) {
        padding: 3rem;
    }
    @media (min-width: 768px) {
        padding: 5rem;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
    }
`

function about(props) {

    return (        
        <Container>
            <Navbar />
            <Container 
                noMargin
                page={"about"}
            >
                <Contents
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div style={{maxWidth: 550}}>
                        <h1>ABOUT ME</h1>
                        <p>I'm an aspiring Full-Stack Web Developer, and passionate about developing applications that better the lives of others. I'm currently enrolled in V-School, a FullStack Web Development bootcamp, and I'm constantly learning new skills and improving current ones to make that possible. I also love teaching others about my craft. We are all teachers. We are all students.</p>
                    </div>
                </Contents>
                <Img src="/headshot.jpg"
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            </Container>
        </Container>
    );
}

export default about;
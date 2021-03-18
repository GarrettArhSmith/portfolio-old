import React from 'react';
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import { motion } from 'framer-motion'

import Img from '../components/Img'
import styled from 'styled-components'

const Contents = styled.div`
    display: grid;
    place-items: center;
    padding: 0 5rem 0 5rem;
`

function about(props) {

    return (        
        <Container>
            <Navbar />
            <Container 
                noMargin
                style={{gridTemplateColumns: "3fr 2fr"}}
            >
                <Contents
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div style={{maxWidth: 500}}>
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
import React from 'react';
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import { motion } from 'framer-motion'
import Head from 'next/head'

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
        <>   
        <Head>
            <title>Garrett Smith</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>   
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
                        <p>My name is Garrett. I love to make things and learn things. The internet and I grew up together, so I got to know it a bit. I'm a full-stack web developer with a specialty in React. I'm passionate about my craft but enjoy dabbling in so many others. Learning is the best investment you can make, and I believe we all have to work together to make it a reality for everyone. We are all teachers. We are all students.</p>
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
        </>
    );
}

export default about;
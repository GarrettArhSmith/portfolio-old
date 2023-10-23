import { useContext } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ColorContext } from '../context/ColorProvider'
import styled from 'styled-components'


import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Header from '../components/Header'

const NameContainer = styled.div`
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    padding: 10%;
    font-size: 0.5em;
    max-width: 100vw;
    white-space: nowrap;
    @media (min-width: 480px) {
        font-size: 0.7em;
    }
    @media (min-width: 768px) {
        font-size: 0.9em;
    }
    @media (min-width: 1024px) {
        font-size: 1.1em;
    }
    @media (min-width: 1200px) {
        font-size: 1.3em;
    }
`

export default function Home() {
    const { colors, changeColor } = useContext(ColorContext)
    
    const colorfulName = {
        // justifySelf: "flex-end", 
        // width: 0, 
        color: colors.logo, 
        marginLeft: 20,
        cursor: "pointer",
        textAlign: "right"
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Garrett Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container placeItems="center">
        <Navbar />
        <NameContainer>
            <Header>HI, I'M </Header>
            <Header 
                style={colorfulName}
                scaleOnHover={1.2}
                onMouseOver={() => changeColor({target: {name: "logo"}})}
            > GARRETT SMITH</Header>
        </NameContainer>
        <p>This portfolio site is not up-to-date with my current experience, and the projects on the work page may not be deployed anymore. 
            I am building a new one. One that I'm more proud of, and that reflects me and my current experience better. For now, you can explore this one, and take a look at my resume 
            (from my linkedIn, not from the contact page) to see my most recent experience. Thanks!</p>
      </Container>
    </div>
  )
}

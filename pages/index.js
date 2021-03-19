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
      </Container>
    </div>
  )
}

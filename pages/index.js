import { useContext } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ColorContext } from '../context/ColorProvider'
import styled from 'styled-components'


import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Header from '../components/Header'

const NameContainer = styled.div`
    display: grid;
    width: 600px;
    position: relative;
    top: -100px;
`

export default function Home() {
    const { colors, changeColor } = useContext(ColorContext)
    
    const colorfulName = {
        justifySelf: "flex-end", 
        // width: 0, 
        color: colors.logo, 
        marginLeft: 20,
        cursor: "pointer",
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Garrett Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Container placeItems="center">

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

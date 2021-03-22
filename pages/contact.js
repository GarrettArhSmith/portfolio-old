import React, { useContext } from 'react';
import Link from 'next/link'
import { ColorContext } from '../context/ColorProvider'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import styled from 'styled-components'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { VscFilePdf } from 'react-icons/vsc'

const LinksContainer = styled.div`
    padding-left: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: ${props => props.color};
`

const LinkIcon = styled.li`
    height: 64px;
    font-size: 4em;
    transition: 0.2s ease;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`

function contact(props) {
    const { colors, changeColor } = useContext(ColorContext)

    function handleHover() {
        changeColor({target: {name: "logo"}})
    }

    return (
        <Container>
            <Navbar />
            <LinksContainer color={colors.logo}>
                <Link href="https://github.com/garrettarhsmith" passHref={true}>
                    <LinkIcon onMouseEnter={handleHover}><AiFillGithub /></LinkIcon>
                </Link>
                <Link href="https://www.linkedin.com/in/garrettarhsmith/" passHref={true}>
                    <LinkIcon onMouseEnter={handleHover}><AiFillLinkedin /></LinkIcon>
                </Link>
                <Link href="https://twitter.com/GarrettArhSmith" passHref={true}>
                    <LinkIcon onMouseEnter={handleHover}><AiOutlineTwitter /></LinkIcon>
                </Link>
                <Link href="https://docs.google.com/document/d/1aaSKbGb2L1aJ3M7EtbDZ3dmd2KUc008LjbcxF0Wak7I/export?format=pdf&attachment=false" passHref={true}>
                    <LinkIcon onMouseEnter={handleHover}><VscFilePdf /></LinkIcon>
                </Link>
            </LinksContainer>
        </Container>
    );
}

export default contact;
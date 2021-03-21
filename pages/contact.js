import React, { useContext } from 'react';
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
                <LinkIcon onMouseEnter={handleHover}><AiFillGithub /></LinkIcon>
                <LinkIcon onMouseEnter={handleHover}><AiFillLinkedin /></LinkIcon>
                <LinkIcon onMouseEnter={handleHover}><AiOutlineTwitter /></LinkIcon>
                <LinkIcon onMouseEnter={handleHover}><VscFilePdf /></LinkIcon>
            </LinksContainer>
        </Container>
    );
}

export default contact;
import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { ColorContext } from '../context/ColorProvider'

const Nav = styled.nav`
    height: 40vh;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    justify-content: space-evenly;
    background-color: #fefefe;
    z-index: 10;
    top: 0;
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
        grid-template-rows: 1fr;
        grid-template-columns: 1.6fr repeat(3, 2fr);
        height: 100px;
        position: fixed;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
    }
`
const NavLink = styled.a`
    letter-spacing: 3px;
    font-family: Montserrat;
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100%;
    border-bottom: 1px solid #eee;
    &:hover {
        ${'' /* background-color: #f9f9f9; */}
    }
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
        width: auto;
        height: 100%;
        ${'' /* border: none; */}
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
    }
`

const Logo = styled.a`
    letter-spacing: 3px;
    font-size: 3em;
    font-weight: bold;
    font-family: Montserrat, san-serif;
    width: 100vw;
    height: 100%;
    display: grid;
    place-items: center;
    border-bottom: 1px solid #eee;
    &:hover {
        ${'' /* background-color: #f9f9f9; */}
    }
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
        width: auto;
        height: 100%;
        padding-left: 30px;
        padding-right: 30px;
        word-spacing: 500px;
        ${'' /* border: none; */}
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
    }
`

const routes = [
    {name: "work"},
    {name: "about"},
    {name: "contact"},
]

function Navbar(props) {
    const { pathname } = useRouter()
    const { colors, changeColor } = useContext(ColorContext)
    
    const navLinkHover = {
        fontSize: '25px',
        fontWeight: 700,
    }
    const navLinkActive = {
        fontSize: '25px',
        fontWeight: 700,
        // backgroundColor: "#f9f9f9",
        textDecoration: "underline"
    }

    useEffect(() => {
        [{name: "logo"}, ...routes].map(item => changeColor({target: item}))
    }, [])

    return (
        <Nav>
            <Link href='/' passHref>
                <Logo 
                    style={{color: colors.logo}}
                    as={motion.a}
                    name="logo"
                    onMouseOver={changeColor}
                    whileHover={{fontSize: '65px'}}
                >
                    GS
                </Logo>
            </Link>
            {routes.map(route => (
                <Link href={`/${route.name}`} key={route.name} passHref>
                    <NavLink
                        as={motion.a}
                        name={route.name}
                        style={{color: "#2f2f2f"}}
                        initial={`/${route.name}` === pathname && navLinkActive}
                        onMouseEnter={changeColor}
                        whileHover={navLinkHover}
                    >
                        {route.name.toUpperCase()}
                    </NavLink>
                </Link>
            ))}
        </Nav>
    );
}

export default Navbar;
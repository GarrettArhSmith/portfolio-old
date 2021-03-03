import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ColorContext } from '../context/ColorProvider'

const ProjectCard = styled.li`
    height: 40rem;
    cursor: pointer;
    transition: 0.4s ease;
    display: grid;
    grid-template-rows: 5fr 1fr;
    place-items: center;
    color: #fefefe;
    position: realtive;
    &:hover {
        ${'' /* border-radius: 5px; */}
        ${'' /* box-shadow: 0 0 5px 3px rgba(0,0,0,0.1); */}
        filter: contrast(1.3);
        transform: scale(0.9);
        z-index: 9;
    }
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
        height: 30rem;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
    }
`

const BackgroundImg = styled.div`
    background: url(https://source.unsplash.com/random) center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    filter: grayscale(100%);
    display: grid;
    place-items: center;
`


function Project({i}) {
    const { colors, changeColor } = useContext(ColorContext)

    useEffect(() => {
        changeColor({target: {name: i}}, 0.3)
    }, [])

    return (
        <ProjectCard
            as={motion.li}
            name={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // whileHover={{scale: 1.03}}
            // whileTap={{ scale: 1 }}
            onMouseEnter={() => changeColor({target: {name: i}}, 0.3)}
            style={{
                backgroundColor: colors[i]}}
            // `linear-gradient(${hexToRGB(colors[i],0.3)}, ${hexToRGB(colors[i],0.3)}) 
        >
            <BackgroundImg />
            <h1>Placeholder Project</h1>
        </ProjectCard>
    );
}

export default Project;
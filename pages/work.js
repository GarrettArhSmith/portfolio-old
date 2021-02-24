import { motion } from 'framer-motion'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Container from '../components/Container'

const ProjectList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
    }
`

function work(props) {
    const variants = {
        closed: {},
        open: {
            transition: { when: "beforeChildren", staggerChildren: 5, delayChildren: 0.2 }
        }
    };

    const projects = [0,1,2,3]
    return (
        <Container>
            <Navbar />
            <ProjectList
                as={motion.ul}
                variants={variants} 
                initial={"closed"} 
                animate={"open"}
            >
                {projects.map(i => (
                    <Project i={i} key={i} />
                ))}
            </ProjectList>
        </Container>
    )
}

export default work;
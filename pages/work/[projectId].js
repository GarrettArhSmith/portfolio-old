
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../../context/ColorProvider'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import Container from '../../components/Container'
import Navbar from '../../components/Navbar'


const HeaderImg = styled.img`
    width: 100vw;
    height: 40vh;
    object-fit: cover;
    ${'' /* opacity: 0.5; */}
    ${'' /* filter: grayscale(10%); */}
`

const Tech = styled.p`
    color: ${props => props.color};
`

const Content = styled.div`
    padding: 2rem 2rem;
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
        padding: 2rem 3rem;
    }
    @media (min-width: 1024px) {
        padding: 2rem 4rem;
    }
    @media (min-width: 1200px) {
        padding: 2rem 5rem;
    }
`


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

function ProjectPage(props) {
    const { colors } = useContext(ColorContext)

    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.projectId && `/api/work/${query.projectId}`,
        fetcher
    )

    return (
        <Container>
            <Navbar />
            {error && <p>{error.message}</p>}
            {!data && <p>Loading...</p>}
            <div>
                <HeaderImg src={data?.thumbnail ? data.thumbnail : 'https://source.unsplash.com/random'} />
                <Content>
                    <h1>{data && data.name}</h1>
                    <Tech color={colors.logo}>{data?.tech.join(', ')}</Tech>
                    {data?.description?.map((p, i) => (
                        <p 
                            key={`${i} ${Math.random()}`}
                            style={i === 0 ? {marginTop: '3rem'} : {}}
                        >{p}</p>
                    ))}
                </Content>
            </div>
        </Container>
    );
}

export default ProjectPage;

import React, { useContext } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../../context/ColorProvider'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import BackBtn from '../../components/BackBtn'


const HeaderImg = styled.img`
    width: 100vw;
    height: 40vh;
    object-fit: cover;
    z-index: -10;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    ${'' /* opacity: 0.5; */}
    ${'' /* filter: grayscale(10%); */}
`

const Tech = styled.p`
    color: gray;
`

const Head = styled.div`
    display: flex;
    place-items: center;
    gap: 2rem;
`

const Title = styled.h1`
`

const DemoBtn = styled.a`
    background: ${props => props.color};
    color: white;
    height: 25px;
    border: none;
    border-radius: 3px;
    filter: opacity(75%);
    transition: 0.2s ease;
    padding: 0 6px;
    display: grid;
    place-items: center;
    font-size: 0.9em;
    &:hover {
        filter: opacity(100%);
        cursor: pointer;
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
`

const Content = styled.div`
    padding: 2rem;
    margin-top: -10rem;
    z-index: 100;
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
                    <BackBtn />
                        <Title>{data && data.name}</Title>
                    <Head>
                        <Tech color={colors.logo}>{data?.tech.join(', ')}</Tech>
                        {data?.link?.url && <DemoBtn color={colors.logo} href={data?.link?.url} target="_blank">
                            {data?.link?.type === 'demo'? 'View Demo' : 'GitHub Repo'}
                        </DemoBtn>}
                    </Head>
                    {data?.description?.map((p, i) => (
                        <p 
                            key={`${i} ${Math.random()}`}
                            style={i === 0 ? {marginTop: '3rem'} : {}}
                        >{p}</p>
                    ))}
                    {/* <div style={{position:'relative', paddingBottom: '53.59375000000001%', height: 0}}><iframe src="https://www.loom.com/embed/a8648ef4d9c84c768c8c508816b8e448" frameBorder="0" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}></iframe></div> */}
                </Content>
            </div>
        </Container>
    );
}

export default ProjectPage;
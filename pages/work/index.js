import { useRouter } from 'next/router'
import useSWR from 'swr'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import Project from '../../components/Project'
import Container from '../../components/Container'

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

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

function work(props) {
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => `/api/work`,
        fetcher
    )

    // const projects = [0,1,2,3]
    return (
        <Container>
            <Navbar />
            {error && <p>{error.message}</p>}
            {!data && <p>Loading...</p>}
            <ProjectList>
                {data?.map(project => (
                    <Project key={project.id} data={{...project}} />
                ))}
            </ProjectList>
        </Container>
    )
}

export default work;
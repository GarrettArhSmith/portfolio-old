import { useRouter } from 'next/router'
import useSWR from 'swr'

import Container from '../../components/Container'
import Navbar from '../../components/Navbar'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

function ProjectPage(props) {
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.projectId && `/api/work/${query.projectId}`,
        fetcher
    )

    return (
        <Container placeItems="center">
            <Navbar />
            {error && <p>{error.message}</p>}
            {!data && <p>Loading...</p>}
            <h1>{data ? data.name : "No Project Found"}</h1>
        </Container>
    );
}

export default ProjectPage;
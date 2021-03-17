import styled from 'styled-components'

const Container = styled.div`
    margin-top: 100px;
    display: grid;
    place-items: ${props => props.placeItems};
    min-height: calc(100vh - 100px);
`

export default Container
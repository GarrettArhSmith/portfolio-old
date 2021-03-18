import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    place-items: ${props => props.placeItems};
    min-height: calc(100vh - 100px);
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
        margin-top: ${props => props.noMargin ? 0 : "100px"};
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
    }
`

export default Container
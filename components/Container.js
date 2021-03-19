import styled from 'styled-components'

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: ${props => props.page === "about" && "1fr"};
    place-items: ${props => props.placeItems};
    min-height: calc(100vh - 100px);
    ${'' /* padding-top: ${props => props.page === "about" && "5rem"};
    grid-gap: ${props => props.page === "about" && "5rem"}; */}
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
        margin-top: ${props => props.noMargin ? 0 : "100px"};
        ${'' /* grid-template-columns: ${props => props.page === "about" && "1fr 1fr"}; */}
    }
    @media (min-width: 1024px) {
        grid-template-columns: ${props => props.page === "about" && "3fr 2fr"};
        grid-template-rows: auto;
    }
    @media (min-width: 1200px) {
    }
`

function Container(props) {
    return (
        <StyledContainer 
            page={props.page}
            noMargin={props.noMargin}
        >
            {props.children}
        </StyledContainer>
    )
}

export default Container
import styled from 'styled-components';

const StyledContainer = styled.div`
    position:absolute;
    height: 5rem;
    padding:2rem;
    background-color:white;
    width:80%;
    margin-top:18rem;
    border-radius:0.6rem;
    display:flex;
    justify-content: space-between;
    gap:2rem;
`
const StyledInfoBlock = styled.div`
    border-right-width:2px;
    border-color:gray;
    flex:auto;
    border-right: ${props => props.border} gray 2px;
`
const Info = () => {
    return (
        <>
            <StyledContainer>
                <StyledInfoBlock border={`solid`}>
                    <p>g</p>
                </StyledInfoBlock>
                <StyledInfoBlock border={`solid`}>
                <p>g</p>
                </StyledInfoBlock>
                <StyledInfoBlock border={`solid`}>
                <p>g</p>
                </StyledInfoBlock>
                <StyledInfoBlock>
                <p>g</p>
                </StyledInfoBlock>
            </StyledContainer>
        </>
    )

}

export default Info
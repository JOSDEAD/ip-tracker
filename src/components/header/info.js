import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { useSelector } from 'react-redux';

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
    z-index:1;
`
const StyledInfoBlock = styled.div`
    border-right-width:2px;
    border-color:gray;
    flex:auto;
    border-right: ${props => props.border} gray 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
const StyledP = styled.p`
    font-color: ${props => props.color};
    margin-top:0;
`
const StyledSpan = styled.span`
    font-size: 
`
const Info = () => {
    const ipInfo = useSelector(state => state.ip);
    const location = `${ipInfo?.location?.city}, ${ipInfo?.location?.region} ${ipInfo?.location?.postalCode }`
    return (
        <>
            <StyledContainer>
                <StyledInfoBlock border={`solid`}>
                    <StyledP color={COLORS.DarkGray}>IP ADDRESS</StyledP>
                    <h2>{ipInfo?.ip}</h2>
                </StyledInfoBlock>
                <StyledInfoBlock border={`solid`}>
                    <StyledP color={COLORS.DarkGray}>LOCATION</StyledP>
                    <h2>{location}</h2>
                </StyledInfoBlock>
                <StyledInfoBlock border={`solid`}>
                    <StyledP color={COLORS.DarkGray}>TIMEZONE</StyledP>
                    <h2>{ipInfo?.location?.timezone}</h2>
                </StyledInfoBlock>
                <StyledInfoBlock>
                    <StyledP color={COLORS.DarkGray}>IPS</StyledP>
                    <h2>{ipInfo?.isp}</h2>
                </StyledInfoBlock>
            </StyledContainer>
        </>
    )

}

export default Info
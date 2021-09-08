import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { useSelector } from "react-redux";

const StyledContainer = styled.div`
  position: absolute;
  top: 10.5rem;
  left: 0px;
  right: 0px;
  margin-inline: auto;
  padding: 1.5rem;
  text-align: center;
  width: calc(100% - 6rem);
  max-width: 69.4rem;
  background-color: white;
  border-radius: 0.6rem;
  display: flex;
  gap: 1.25rem;
  z-index: 1;
  flex-direction: column;

  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  @media (min-width: 768px) {
    flex-direction: row;
    top: 12.5rem;
    padding: 2rem;
    gap: 2rem;
    text-align: left;
  }
`;
const StyledInfoBlock = styled.div`
  flex: 1 1 0%;
  @media (min-width: 768px) {
    padding-right: 2rem;
    border-right-width: 2px;
    border-right: ${(props) => props.border} gray;
    --tw-border-opacity: 1;
    border-color: rgba(229,231,235,var(--tw-border-opacity));
  }
`;
const StyledP = styled.p`
  color: gray;
  font-weight: 700;
  text-transform: uppercase;
  margin:0;
  margin-bottom: 0.5rem;
  font-size: 0.625rem;
  line-height: 0.75rem;
  letter-spacing: 0.1em;
  @media (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;
const StyledSpan = styled.span`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
const Info = () => {
  const ipInfo = useSelector((state) => state.ip);
  const location = `${ipInfo?.location?.city}, ${ipInfo?.location?.region} ${ipInfo?.location?.postalCode}`;
  return (
    <>
      <StyledContainer>
        <StyledInfoBlock border={`solid`}>
          <StyledP color={COLORS.DarkGray}>IP ADDRESS</StyledP>
          <StyledSpan>{ipInfo?.ip}</StyledSpan>
        </StyledInfoBlock>
        <StyledInfoBlock border={`solid`}>
          <StyledP color={COLORS.DarkGray}>LOCATION</StyledP>
          <StyledSpan>{location}</StyledSpan>
        </StyledInfoBlock>
        <StyledInfoBlock border={`solid`}>
          <StyledP color={COLORS.DarkGray}>TIMEZONE</StyledP>
          <StyledSpan>{ipInfo?.location?.timezone}</StyledSpan>
        </StyledInfoBlock>
        <StyledInfoBlock>
          <StyledP color={COLORS.DarkGray}>IPS</StyledP>
          <StyledSpan>{ipInfo?.isp}</StyledSpan>
        </StyledInfoBlock>
      </StyledContainer>
    </>
  );
};

export default Info;

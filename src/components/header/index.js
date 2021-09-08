import styled from "styled-components";
import Form from "./form";
import Info from "./info";

const Background = styled.header`
  background-image: url("${(props) => props.image}");
  background-size: cover;
  padding-top: 1.5rem;
  height: 18rem;
  position:relative;  
  text-align:center;
  @media (min-width: 768px) {
    padding-top: 2rem;
    height: 17rem;
  }
`;
const Tittle = styled.h1`
  color: white;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  margin:0;
  margin-bottom:1.75rem;
  @media (min-width: 768px) {
    font-size: 1.875rem;
        line-height: 2.25rem;
  }
`;

const Header = () => {
  return (
    <Background image={"../images/pattern-bg.png"}>
      <Tittle>IP Address Tracker</Tittle>
      <Form />
      <Info />
    </Background>
  );
};

export default Header;

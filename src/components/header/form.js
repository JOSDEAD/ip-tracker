import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { setCustomIp } from '../../state/actions/ipInfoActions'
const StyledForm = styled.form`
  width: calc(100% - 3rem);
  max-width:36rem;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  margin-bottom:13rem;
`;

const StyledInput = styled.input`
  flex: auto;
  border: none;
  padding-block: 0.875rem;
  padding-inline:1.5rem;
  font-size: 1.5rem;
  border-radius: 0.6rem 0 0 0.6rem;
  outline: none;
`;
const StyledButton = styled.button`
  width: 10%;
  border: none;
  color: white;
  font-size: 1.5rem;
  border-radius: 0 0.6rem 0.6rem 0;
  background-color: black;
  padding: 1rem;

  :hover{
    background-color: ${(props) => props.color};
  }
`;

const Form = () => {
  const [ip, setIp] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setCustomIp(ip));
  };


  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Search for any IP address or domain"
          value={ip}
          onChange={(event) => setIp(event.currentTarget.value)}
        />
        <StyledButton color={COLORS.VeryDarkGray}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default Form;

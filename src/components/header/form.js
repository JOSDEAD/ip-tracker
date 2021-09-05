import styled from "styled-components"

const StyledForm = styled.form`
    width: 40%;
    display:flex;
    justify-content:center;
    margin-bottom:5rem;
    margin-top:0.5rem;
`

const StyledInput = styled.input`
    flex: auto;
    border:none;
    padding: 1rem 1rem 1rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 0.6rem 0 0 0.6rem;
    outline: none;
`
const StyledButton = styled.button`
    width:10%;
    border:none;
    color:white;
    font-size: 1.5rem;
    border-radius:  0 0.6rem 0.6rem 0;
    background-color: black;
    padding: 1rem;
`


const Form = () => {

    return (
        <>
            <StyledForm>
                <StyledInput 
                    type="text"
                    placeholder="Search for any IP address or domain"
                />
                <StyledButton>
                    >
                </StyledButton>
            </StyledForm>
        </>
    )
}

export default Form;
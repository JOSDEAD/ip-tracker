import styled from 'styled-components';
import Form from './form';
import Info from './info';

const Background = styled.header`
background-image: url("${props => props.image}");
background-size: cover;
background-position:center;
padding-top: 1.5rem;
height: 18rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Tittle = styled.h1`
color:white;
`

const Header = () => {
    return (
        <Background image={'../images/pattern-bg.png'}>
            <Tittle>IP Address Tracker</Tittle>
            <Form/>
            <Info/>
        </Background>
    )
}

export default Header

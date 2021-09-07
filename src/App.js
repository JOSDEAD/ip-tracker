import styled from 'styled-components';
import Header from './components/header';
import Map from './components/map'
import { useUserIP } from './hooks/useUserIp';
function App() {
  // Get current user IP
  useUserIP();
  const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    height: 100vh;
  ` 
  return (
    <StyledDiv>
      <Header/>
      <Map/>
    </StyledDiv>
  );
}

export default App;

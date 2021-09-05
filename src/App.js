import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from './components/header';
import { useUserIP } from './hooks/useUserIp';
function App() {
  // Get current user IP
  useUserIP();
  const ip = useSelector(state => state.ip);

  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;

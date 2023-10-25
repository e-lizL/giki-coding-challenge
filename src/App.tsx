import styled from 'styled-components';
import MainImage from './components/MainImage';
import EndTarget from './components/EndTarget';
import ToCutTarget from './components/ToCutTarget';
import TotalTarget from './components/TotalTarget';

const Container = styled.div`
  width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid black;
`;

function App() {

  return (
    <Container>
      <MainImage />
      <EndTarget />
      <ToCutTarget />
      <TotalTarget />
    </Container>
  )
}

export default App
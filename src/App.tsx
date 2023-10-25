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
  color: var(--primary-text);
`;

const carbonData = {
  currentFootprint: 7565,
  endTarget: 5855,
  toCutTarget: 409,
  totalTarget: 2500
}

function App() {

  console.log(carbonData.endTarget);

  return (
    <Container>
      <MainImage currentFootprint={carbonData.currentFootprint} />
      <EndTarget endTarget={carbonData.endTarget}/>
      <ToCutTarget toCutTarget={carbonData.toCutTarget}/>
      <TotalTarget totalTarget={carbonData.totalTarget} />
    </Container>
  )
}

export default App
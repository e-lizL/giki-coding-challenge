import styled from 'styled-components';
import MainImage from './components/MainImage';
import TargetsRow from './components/TargetsRow';
import TotalTarget from './components/TotalTarget';

const carbonData = {
  currentFootprint: 7565,
  endTarget: 5855,
  toCutTarget: 409,
  totalTarget: 2500
}

const Container = styled.div`
  width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid black;
  color: var(--primary-text);
  text-align: center;
  font-weight: 600;
`;

function App() {

  return (
    <Container>

      <MainImage currentFootprint={carbonData.currentFootprint} />

      <TargetsRow
        endTarget={carbonData.endTarget}
        toCutTarget={carbonData.toCutTarget}
      />

      <TotalTarget totalTarget={carbonData.totalTarget} />

    </Container>
  )
}

export default App
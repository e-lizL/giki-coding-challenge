import styled from 'styled-components';
import MainImage from './components/MainImage';
import TargetsRow from './components/TargetsRow';
import TotalTarget from './components/TotalTarget';
import BackgroundDesign from './components/BackgroundDesign';

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
  padding: 120px 0;
  color: var(--primary-text);
  text-align: center;
  font-weight: 600;
`;

function App() {

  return (
    <Container>

      <BackgroundDesign />

      <MainImage currentFootprint={carbonData.currentFootprint.toLocaleString("en-US")} />

      <TargetsRow
        endTarget={carbonData.endTarget.toLocaleString("en-US")}
        toCutTarget={carbonData.toCutTarget.toLocaleString("en-US")}
      />

      <TotalTarget totalTarget={carbonData.totalTarget.toLocaleString("en-US")} />

    </Container>
  )
}

export default App
import styled from 'styled-components';
import carbonData from './data';
import MainText from './components/MainText';
import TargetsRow from './components/TargetsRow';
import TotalTarget from './components/TotalTarget';
import BackgroundDesign from './components/BackgroundDesign';

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

      <MainText currentFootprint={carbonData.currentFootprint.toLocaleString("en-US")} />

      <TargetsRow
        endTarget={carbonData.endTarget.toLocaleString("en-US")}
        toCutTarget={carbonData.toCutTarget.toLocaleString("en-US")}
      />

      <TotalTarget totalTarget={carbonData.totalTarget.toLocaleString("en-US")} />

    </Container>
  )
}

export default App;

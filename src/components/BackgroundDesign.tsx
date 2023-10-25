import styled from 'styled-components';

const StyledContainer = styled.div`
  border: 1px solid green;
  height: 300px;
  position: relative;
`;

const StyledImage = styled.img`
  object-fit: cover;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledPurpleCloud = styled(StyledImage)`
  width: 400px;
  z-index: 10;
`;

const StyledWhiteCloud = styled(StyledImage)`
  width: 350px;
  z-index: 30;
`;

const StyledButterfly = styled(StyledImage)`
  width: 80px;
  top: 23%;
  left: 24%;
  transform: translate(-30%, -30%);
  z-index: 40;
`;

const StyledLeaf1a = styled(StyledImage)`
  width: 70px;
  top: 20%;
  left: 71%;
  z-index: 20;
`;

const StyledLeaf2a = styled(StyledImage)`
  width: 100px;
  top: 30%;
  left: 75%;
  z-index: 20;
`;

const StyledLeaf1b = styled(StyledImage)`
  width: 70px;
  top: 75%;
  left: 21%;
  transform: scale(-1, -1);
  z-index: 20;
`;

const StyledLeaf2b = styled(StyledImage)`
  width: 100px;
  top: 70%;
  left: 16%;
  transform: scale(-1, -1);
  z-index: 20;
`;

export default function BackgroundDesign() {

  return (
    <StyledContainer>

      <StyledPurpleCloud src="/purple_cloud.png" alt="purple cloud" />

      <StyledWhiteCloud src="/white_cloud.png" alt="white cloud" />

      <StyledButterfly src="/butterfly.svg" alt="butterfly" />

      <StyledLeaf1a src="/leaf1.svg" alt="leaf 1" />

      <StyledLeaf2a src="/leaf2.svg" alt="leaf 2" />

      <StyledLeaf1b src="/leaf1.svg" alt="leaf 1" />

      <StyledLeaf2b src="/leaf2.svg" alt="leaf 2" />

    </StyledContainer>
  )
}
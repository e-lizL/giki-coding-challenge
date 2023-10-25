import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 300px;
  position: relative;
  z-index: -1;
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
  width: 480px;
  z-index: 10;
`;

const StyledWhiteCloud = styled(StyledImage)`
  width: 450px;
  z-index: 30;
`;

const StyledButterfly = styled(StyledImage)`
  width: 80px;
  top: 20%;
  left: 18%;
  transform: translate(-30%, -30%);
  z-index: 40;
`;

const StyledLeaf1a = styled(StyledImage)`
  width: 70px;
  top: 14%;
  left: 75%;
  z-index: 20;
`;

const StyledLeaf2a = styled(StyledImage)`
  width: 100px;
  top: 22%;
  left: 80%;
  z-index: 20;
`;

const StyledLeaf1b = styled(StyledImage)`
  width: 70px;
  top: 76%;
  left: 12%;
  transform: scale(-1, -1);
  z-index: 20;
`;

const StyledLeaf2b = styled(StyledImage)`
  width: 100px;
  top: 74%;
  left: 6%;
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
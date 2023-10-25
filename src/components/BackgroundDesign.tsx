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
`;

const StyledWhiteCloud = styled(StyledImage)`
  width: 350px;
`;

export default function BackgroundDesign() {

  return (
    <StyledContainer>

      <StyledPurpleCloud src="/purple_cloud.png" alt="purple cloud" />

      <StyledWhiteCloud src="/white_cloud.png" alt="white cloud" />

    </StyledContainer>
  )
}
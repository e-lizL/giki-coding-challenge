import styled from 'styled-components';

interface MainImageProps {
  currentFootprint: number
};

const StyledWrapper = styled.div`
  /* margin-top: 150px; */
`;

const StyledHeading = styled.h1`
  color: var(--secondary-text);
  font-size: 1.6rem;
  font-weight: 600;
`;

const StyledValue = styled.div`
  font-weight: 700;
`;

const StyledNumber = styled.span`
  font-size: 2rem;
`;

const StyledDetail = styled.div`
  font-size: 0.9rem;
`;

const StyledOblongWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

const StyledOblong = styled.button`
  border: 0;
  padding: 15px 30px;
  background: var(--primary-text);
  color: white;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.3rem;
  box-shadow: 0px 4px var(--lilacShadow);
`;

export default function MainImage({ currentFootprint }: MainImageProps) {

  return (
    <StyledWrapper>

      <StyledHeading>Your footprint</StyledHeading>

      <StyledValue><StyledNumber>{currentFootprint}</StyledNumber> kg</StyledValue>

      <StyledDetail>of carbon emissions</StyledDetail>

      <StyledOblongWrapper>
        <StyledOblong>Take a step</StyledOblong>
      </StyledOblongWrapper>

    </StyledWrapper>
  )
}
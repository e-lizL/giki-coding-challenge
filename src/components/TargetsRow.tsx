import styled from 'styled-components';

interface TargetsRowProps {
  endTarget: number,
  toCutTarget: number
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const StyledCard = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.div`
  color: var(--secondary-text);
  width: 70%;
  margin: 0 auto;
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

export default function TargetsRow({ endTarget, toCutTarget }: TargetsRowProps) {

  return (
    <StyledWrapper>

      <StyledCard>
        <StyledHeading>End of year target</StyledHeading>
        <StyledValue><StyledNumber>{endTarget}</StyledNumber> kg</StyledValue>
        <StyledDetail>of carbon emissions</StyledDetail>
      </StyledCard>

      <StyledCard>
        <StyledHeading>Left to cut this year</StyledHeading>
        <StyledValue><StyledNumber>{toCutTarget}</StyledNumber> kg</StyledValue>
        <StyledDetail>of carbon emissions</StyledDetail>
      </StyledCard>

    </StyledWrapper>
  )
}
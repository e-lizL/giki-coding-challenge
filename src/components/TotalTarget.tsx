import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

const StyledOblong = styled.div`
  padding: 15px 30px;
  background: var(--lilac);
  border-radius: 30px;
  font-weight: 700;
`;

interface TotalTargetProps {
  totalTarget: number
};

export default function TotalTarget({ totalTarget }: TotalTargetProps) {

  return (
    <StyledWrapper>
      <StyledOblong>Your 2030 target is {totalTarget} kg</StyledOblong>
    </StyledWrapper>
  )
}
import styled from 'styled-components';

interface TargetsRowProps {
  endTarget: number,
  toCutTarget: number
};

const StyledWrapper = styled.div`
  border: 1px solid black;
`;

export default function TargetsRow({ endTarget, toCutTarget }: TargetsRowProps) {

  return (
    <StyledWrapper>
      <h1>EndTarget: {endTarget}</h1>
      <h1>ToCutTarget: {toCutTarget}</h1>
    </StyledWrapper>
  )
}
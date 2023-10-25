interface TotalTargetProps {
  totalTarget: number
};

export default function TotalTarget({ totalTarget }: TotalTargetProps) {

  return (
    <h1>TotalTarget: {totalTarget}</h1>
  )
}
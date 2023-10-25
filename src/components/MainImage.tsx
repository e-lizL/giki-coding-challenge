interface MainImageProps {
  currentFootprint: number
};

export default function MainImage({ currentFootprint }: MainImageProps) {

  return (
    <h1>MainImage: {currentFootprint}</h1>
  )
}
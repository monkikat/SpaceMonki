import { ImageCarousalType } from "../types/ImageCarousalType"

const CarousalPODDisplay = (data: ImageCarousalType) => {
  return (
    <div>
      <img src={data.hdurl || data.url} />
    </div>
  )
}

export default CarousalPODDisplay

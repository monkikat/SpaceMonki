import { APODDataType } from "../types/APODDataType"

const PODDisplay = (data: APODDataType) => {
  return data ? (
    <div>
        {
                data.hdurl ? (
                    <img alt="NASA Picure of the Day" src={data.hdurl} />
                ) : (
                    <img alt="NASA Picure of the Day" src={data.url} />
                )
            } 
        <p>{data.title}</p>
        <p>{data.date}</p>
        <p>{data.explanation}</p>
    </div>
  ) : (
    <p>Loading expected pod...</p>
  )
}

export default PODDisplay

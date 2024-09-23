import { APODDataType } from "../types/APODDataType"

const ReqPODDisplay = (data: APODDataType) => {

  return data ? (
    <div className="flex flex-col pb-24">
      <p className="font-medium text-8xl pb-2">{data.title}</p>
      <p className="font-medium text-lg">{data.date}</p>
      <div className="flex pt-8">
        <div className="flex h-fit w-fit p-10 rounded-md">
          {
            data.media_type === 'image' ? (
              <img alt="NASA Picure of the Day" src={data.hdurl || data.url}
              className="flex rounded-md 
              transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"/>
            ) : (
              <iframe
              className="flex rounded-md h-96 w-96"
              src={data.hdurl || data.url}
              ></iframe>
            )
          }
        </div>
        <div className="flex w-1/2 p-10 items-end">
          <p>{data.explanation}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading expected pod...</p>
  )
}

export default ReqPODDisplay

import { APODDataType } from "../types/APODDataType"

const PODDisplay = (data: APODDataType) => {
  
  return data ? (
    <div className="flex flex-col pb-10 md:pb-24">
      <p className="font-medium text-2xl
      md:text-5xl pb-2">{data.title}</p>
      <p className="font-medium text-md
      md:text-lg">{data.date}</p>
      <div className="flex flex-col pt-5
      md:pt-8
      md:flex-row">
        <div className="flex h-fit w-fit p-5 md:p-10 rounded-md">
          <img alt="NASA Picure of the Day" src={data.hdurl || data.url}
          className="flex rounded-md 
          transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"/>
        </div>
        <div className="flex w-full p-5 md:w-1/2 md:p-10 items-end">
          <p>{data.explanation}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading expected pod...</p>
  )
}

export default PODDisplay

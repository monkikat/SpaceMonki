import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from "react-router-dom";

const SearchPODPage = () => {
  const maxDate = new Date();
  const minDate = new Date(1995, 5, 16);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  }

  const handleButtonClick = () => {
    if(selectedDate) {
      const formattedSelectedDate = selectedDate?.toISOString().split('T')[0];
      navigate(`/pod/${formattedSelectedDate}`);
    }
  }

  return (
    <div className="relative h-screen justify-center flex flex-col pt-40 md:pt-0 items-center gap-5 ">
      <p className="text-lg md:text-4xl">Ready to explore the universe? Enter a date.</p>
      <div className="flex flex-col items-center md:flex-row gap-5">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          placeholderText="yyyy/mm/dd"
          minDate={minDate}
          maxDate={maxDate}
          className="border bg-transparent text-white text-center md:text-lg sm:text-sm rounded-md w-fit p-2"
        />
        <button
        onClick = {handleButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}


export default SearchPODPage

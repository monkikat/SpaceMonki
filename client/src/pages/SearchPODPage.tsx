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
    <div className="relative h-screen justify-center flex flex-col items-center gap-5 ">
      <p className="text-lg md:text-4xl">Ready to explore the universe? Enter a date.</p>
      <div className="flex gap-5">
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}


export default SearchPODPage

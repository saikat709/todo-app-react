import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({ onDateChange }: { onDateChange: ()=>void }) => {

    const [ selectedDate, setSelectedDate ] = useState(new Date());


    return (
        <div className="bg-gray-300 text-white shadow-lg p-3 rounded-xl border">
        <h3 className="text-lg text-center font-semibold text-gray-700 mb-2">Filter by Date</h3>
        <DatePicker
            selected={selectedDate}
            onChange={(val)=>{
                setSelectedDate(val!);
                onDateChange();
            }}
            focusSelectedMonth={true}
            dateFormat="yyyy-MM-dd"
            className="border px-5 py-4 rounded w-full cursor-pointer"
            popperPlacement="bottom-end"
            calendarClassName="rounded-xl text-white shadow-md"
            todayButton="Today"
            inline 
        />
        </div>
    );
};

export default DateFilter;


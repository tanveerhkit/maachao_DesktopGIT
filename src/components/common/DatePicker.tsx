'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DatePickerProps {
  label: string;
  id: string;
  icon?: React.ReactNode;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, id, icon }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const formatDate = (date: Date | null) => {
    return date ? date.toLocaleDateString('en-CA') : '';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col mb-4" ref={datePickerRef}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type="text"
          id={id}
          readOnly
          value={formatDate(selectedDate)}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-2 pl-10 border rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Select a date"
        />
         <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-20 bg-white p-4 rounded-lg shadow-lg z-10">
            <input 
                type="date"
                className='w-full'
                onChange={(e) => {
                    setSelectedDate(new Date(e.target.value));
                    setIsOpen(false);
                }}
            />
        </div>
      )}
    </div>
  );
};

export default DatePicker; 
'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '@/components/ui/Button';
import ReminderCard from '@/components/common/ReminderCard';

const mockReminders = [
  {
    id: 'REM001',
    title: "Mom's Birthday",
    date: '2024-11-15',
    time: '09:00 AM',
    recipient: 'Mom',
    type: 'Birthday',
    notes: 'Buy a chocolate truffle cake.',
    enabled: true,
  },
  {
    id: 'REM002',
    title: 'Anniversary with John',
    date: '2024-12-05',
    time: '12:00 PM',
    recipient: 'John',
    type: 'Anniversary',
    notes: 'Book a dinner reservation.',
    enabled: true,
  },
  {
    id: 'REM003',
    title: "Dad's Birthday",
    date: '2023-08-20',
    time: '10:00 AM',
    recipient: 'Dad',
    type: 'Birthday',
    notes: '',
    enabled: false,
  },
   {
    id: 'REM004',
    title: 'Friendship Day',
    date: '2024-08-04',
    time: 'All Day',
    recipient: 'Friends',
    type: 'Event',
    notes: 'Plan a get-together.',
    enabled: true,
  },
];

export type Reminder = typeof mockReminders[0];

const RemindersPage = () => {
    const [reminders, setReminders] = useState(mockReminders);
    const [activeTab, setActiveTab] = useState('Upcoming');

    const filterReminders = (tab: string) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); 
        
        switch (tab) {
            case 'Upcoming':
                return mockReminders.filter(r => new Date(r.date) >= today && r.enabled);
            case 'Past':
                return mockReminders.filter(r => new Date(r.date) < today);
            case 'Disabled':
                return mockReminders.filter(r => !r.enabled);
            default:
                return mockReminders;
        }
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setReminders(filterReminders(tab));
    };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold">My Reminders</h1>
        <Button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2">
          <Plus size={20} />
          Add New Reminder
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-4 border-b mb-6">
        {['Upcoming', 'Past', 'Disabled'].map(tab => (
            <button 
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`py-2 px-4 text-sm font-medium transition-colors ${
                    activeTab === tab 
                    ? 'border-b-2 border-orange-500 text-orange-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
            >
                {tab}
            </button>
        ))}
      </div>

      {/* Reminder List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reminders.map(reminder => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))}
         {reminders.length === 0 && (
            <div className="text-center py-12 col-span-full">
                <p className="text-gray-500">No reminders in this category.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default RemindersPage; 
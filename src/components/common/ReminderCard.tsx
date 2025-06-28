'use client';

import React from 'react';
import { Reminder } from '@/app/account/reminders/page';
import { Cake, Gift, Calendar, Edit, Trash2 } from 'lucide-react';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import Button from '@/components/ui/Button';

type ReminderCardProps = {
  reminder: Reminder;
};

const reminderIcons: { [key: string]: React.ElementType } = {
  Birthday: Cake,
  Anniversary: Gift,
  Event: Calendar,
};

const ReminderCard: React.FC<ReminderCardProps> = ({ reminder }) => {
  const Icon = reminderIcons[reminder.type] || Calendar;

  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow border-l-4 border-orange-400">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Icon className="text-orange-500" size={24} />
          <div>
            <h3 className="font-bold text-lg">{reminder.title}</h3>
            <p className="text-sm text-gray-500">{reminder.recipient}</p>
          </div>
        </div>
        <ToggleSwitch enabled={reminder.enabled} />
      </div>

      <div className="mt-4 text-sm text-gray-700 space-y-2">
        <p><strong>Date:</strong> {reminder.date}</p>
        <p><strong>Time:</strong> {reminder.time}</p>
        {reminder.notes && <p className="text-xs italic bg-gray-100 p-2 rounded-md">"{reminder.notes}"</p>}
      </div>
      
      <div className="flex justify-end gap-2 mt-4 pt-4 border-t">
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Edit size={14} /> Edit
        </Button>
        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 flex items-center gap-1">
          <Trash2 size={14} /> Delete
        </Button>
      </div>
    </div>
  );
};

export default ReminderCard; 
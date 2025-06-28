'use client';

import React, { useState } from 'react';

type ToggleSwitchProps = {
  enabled: boolean;
  onChange?: (enabled: boolean) => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const toggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <button
      onClick={toggle}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none ${
        isEnabled ? 'bg-orange-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
          isEnabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
};

export default ToggleSwitch; 
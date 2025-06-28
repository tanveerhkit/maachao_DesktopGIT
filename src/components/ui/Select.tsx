import React from 'react';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((
  {
    label,
    options,
    helperText,
    error,
    fullWidth = false,
    onChange,
    icon,
    variant = 'default',
    containerClassName = '',
    labelClassName = '',
    selectClassName = '',
    helperTextClassName = '',
    errorClassName = '',
    id,
    disabled,
    placeholder,
    value,
    ...props
  },
  ref
) => {
  // Generate a unique ID if not provided
  const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;
  
  // Handle change event
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  // Base container classes
  const containerClasses = [
    'flex flex-col mb-4',
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-60' : '',
    containerClassName,
  ].join(' ');

  // Label classes
  const labelClasses = [
    'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1',
    labelClassName,
  ].join(' ');

  // Base select classes
  const baseSelectClasses = [
    'w-full p-2 pl-10 border rounded-md focus:outline-none appearance-none bg-no-repeat',
    'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\' /%3E%3C/svg%3E")]',
    'bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] pr-10',
    selectClassName,
  ];

  // Variant-specific classes
  const variantClasses = {
    default: 'border-2 border-brand-orange bg-white text-black focus:ring-2 focus:ring-brand-orange focus:border-brand-orange',
    filled: 'bg-white border-2 border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange text-black',
    outline: 'bg-transparent border-2 border-brand-orange focus:ring-2 focus:ring-brand-orange focus:border-brand-orange text-black',
  };

  // Error state classes
  const errorStateClasses = error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : '';

  // Combine select classes
  const selectClasses = [
    ...baseSelectClasses,
    variantClasses[variant],
    errorStateClasses,
  ].join(' ');

  // Helper text classes
  const helperTextClasses = [
    'text-xs mt-1',
    error ? 'text-red-500' : 'text-gray-500 dark:text-gray-400',
    helperTextClassName,
  ].join(' ');

  // Error text classes
  const errorTextClasses = [
    'text-xs text-red-500 mt-1',
    errorClassName,
  ].join(' ');

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={selectId} className={labelClasses}>
          {label}
        </label>
      )}
      
      <div className="relative flex items-center">
        {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {icon}
            </div>
        )}
        <select
          id={selectId}
          ref={ref}
          disabled={disabled}
          className={selectClasses}
          onChange={handleChange}
          value={value}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value} 
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      {helperText && !error && (
        <p id={`${selectId}-helper`} className={helperTextClasses}>
          {helperText}
        </p>
      )}
      
      {error && (
        <p id={`${selectId}-error`} className={errorTextClasses} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
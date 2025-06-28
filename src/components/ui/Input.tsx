import React from 'react';
import { CheckCircle, Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
  verified?: boolean;
  isDropdown?: boolean;
  togglePassword?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((
  {
    label,
    helperText,
    error,
    fullWidth = false,
    icon,
    variant = 'default',
    containerClassName = '',
    labelClassName = '',
    inputClassName = '',
    helperTextClassName = '',
    errorClassName = '',
    id,
    disabled,
    verified,
    isDropdown,
    togglePassword,
    type,
    ...props
  },
  ref
) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  const inputType = togglePassword ? (showPassword ? 'text' : 'password') : type;

  // Base container classes
  const containerClasses = [
    'relative flex flex-col',
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-60' : '',
    containerClassName,
  ].join(' ');

  // Label classes
  const labelClasses = [
    'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1',
    labelClassName,
  ].join(' ');

  // Base input classes
  const baseInputClasses = [
    'px-4 py-2 rounded-md focus:outline-none',
    fullWidth ? 'w-full' : '',
    icon ? 'pl-10' : '',
    (togglePassword || verified || isDropdown) ? 'pr-10' : '',
    inputClassName,
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

  // Combine input classes
  const inputClasses = [
    ...baseInputClasses,
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

  const endIcon = togglePassword ? (
    <button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none text-gray-400 hover:text-gray-600">
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  ) : verified ? (
    <CheckCircle size={20} className="text-green-500" />
  ) : isDropdown ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ) : null;

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          className={inputClasses}
          type={inputType}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        
        {endIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {endIcon}
          </div>
        )}
      </div>
      
      {helperText && !error && (
        <p id={`${inputId}-helper`} className={helperTextClasses}>
          {helperText}
        </p>
      )}
      
      {error && (
        <p id={`${inputId}-error`} className={errorTextClasses} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
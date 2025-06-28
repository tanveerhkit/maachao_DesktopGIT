import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  variant?: 'default' | 'filled' | 'outline';
  containerClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
  rows?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((
  {
    label,
    helperText,
    error,
    fullWidth = false,
    variant = 'default',
    containerClassName = '',
    labelClassName = '',
    textareaClassName = '',
    helperTextClassName = '',
    errorClassName = '',
    id,
    disabled,
    rows = 4,
    ...props
  },
  ref
) => {
  // Generate a unique ID if not provided
  const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
  
  // Base container classes
  const containerClasses = [
    'flex flex-col',
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-60' : '',
    containerClassName,
  ].join(' ');

  // Label classes
  const labelClasses = [
    'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1',
    labelClassName,
  ].join(' ');

  // Base textarea classes
  const baseTextareaClasses = [
    'px-4 py-2 rounded-md focus:outline-none',
    fullWidth ? 'w-full' : '',
    textareaClassName,
  ];

  // Variant-specific classes
  const variantClasses = {
    default: 'border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white',
    filled: 'bg-gray-100 dark:bg-gray-800 border border-transparent focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white',
    outline: 'bg-transparent border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white',
  };

  // Error state classes
  const errorStateClasses = error
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
    : '';

  // Combine textarea classes
  const textareaClasses = [
    ...baseTextareaClasses,
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
        <label htmlFor={textareaId} className={labelClasses}>
          {label}
        </label>
      )}
      
      <textarea
        id={textareaId}
        ref={ref}
        disabled={disabled}
        className={textareaClasses}
        rows={rows}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        {...props}
      />
      
      {helperText && !error && (
        <p id={`${textareaId}-helper`} className={helperTextClasses}>
          {helperText}
        </p>
      )}
      
      {error && (
        <p id={`${textareaId}-error`} className={errorTextClasses} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
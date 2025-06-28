import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'default' | 'purple' | 'pink' | 'blue' | 'rose';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  fullWidth?: boolean;
  rounded?: 'default' | 'full';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  fullWidth = false,
  rounded = 'default',
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-black bg-white text-black hover:bg-[#FFD54F] focus:bg-[#FFD54F] active:bg-[#FFD54F]';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Rounded classes
  const roundedClasses = {
    default: 'rounded-md',
    full: 'rounded-full',
  };

  // Disabled classes
  const disabledClasses = 'opacity-50 cursor-not-allowed';

  // Full width class
  const widthClass = fullWidth ? 'w-full' : '';

  // Combine all classes
  const classes = [
    baseClasses,
    sizeClasses[size],
    roundedClasses[rounded],
    disabled ? disabledClasses : '',
    widthClass,
    className,
  ].join(' ');

  // Render as link if href is provided
  if (href) {
    return (
      <Link 
        href={href} 
        className={classes}
        onClick={onClick as any}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
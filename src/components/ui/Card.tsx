import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  onClick,
}) => {
  // Base classes
  const baseClasses = 'rounded-lg overflow-hidden';
  
  // Variant classes
  const variantClasses = {
    default: 'bg-white',
    outline: 'bg-white border-2 border-brand-orange',
    elevated: 'bg-white shadow-md',
  };

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };

  // Interactive classes
  const interactiveClasses = onClick ? 'cursor-pointer transition-transform hover:scale-[1.02]' : '';

  // Combine all classes
  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    interactiveClasses,
    className,
  ].join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

// Card subcomponents
const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = '', 
  children 
}) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = '', 
  children 
}) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
};

const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = '', 
  children 
}) => {
  return <p className={`text-gray-600 dark:text-gray-300 mt-1 ${className}`}>{children}</p>;
};

const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = '', 
  children 
}) => {
  return <div className={className}>{children}</div>;
};

const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = '', 
  children 
}) => {
  return <div className={`mt-4 ${className}`}>{children}</div>;
};

const CardImage: React.FC<{ 
  src?: string; 
  alt?: string; 
  className?: string; 
  height?: string;
  children?: React.ReactNode;
}> = ({ 
  src, 
  alt = '', 
  className = '',
  height = 'h-48',
  children 
}) => {
  if (src) {
    return (
      <div className={`${height} relative overflow-hidden ${className}`}>
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  
  // Placeholder if no src is provided
  return (
    <div className={`${height} bg-gray-200 dark:bg-gray-700 relative flex items-center justify-center ${className}`}>
      {children || (
        <span className="text-gray-500 dark:text-gray-400">
          [Image Placeholder]
        </span>
      )}
    </div>
  );
};

// Export Card and its subcomponents
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
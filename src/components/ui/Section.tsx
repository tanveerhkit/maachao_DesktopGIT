import React from 'react';

type SectionVariant = 'default' | 'primary' | 'secondary' | 'accent' | 'muted';
type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
  padding?: SectionPadding;
  container?: boolean;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'lg',
  container = true,
  id,
}) => {
  // Variant classes for background colors
  const variantClasses: Record<SectionVariant, string> = {
    default: 'bg-white',
    primary: 'bg-white',
    secondary: 'bg-white',
    accent: 'bg-white',
    muted: 'bg-white',
  };

  // Padding classes
  const paddingClasses: Record<SectionPadding, string> = {
    none: '',
    sm: 'py-4',
    md: 'py-8',
    lg: 'py-12',
    xl: 'py-16',
  };

  // Combine section classes
  const sectionClasses = [
    variantClasses[variant],
    paddingClasses[padding],
    className,
  ].join(' ');

  return (
    <section className={sectionClasses} id={id}>
      {container ? (
        <div className="container mx-auto px-4">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

// Section subcomponents
const SectionHeader: React.FC<{ 
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  centered?: boolean;
}> = ({ 
  title, 
  description, 
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  centered = true,
}) => {
  const headerClasses = [
    'mb-8',
    centered ? 'text-center' : '',
    className,
  ].join(' ');

  const titleClasses = [
    'text-3xl font-bold',
    titleClassName,
  ].join(' ');

  const descriptionClasses = [
    'mt-4 text-lg text-gray-600 dark:text-gray-300',
    centered ? 'max-w-2xl mx-auto' : '',
    descriptionClassName,
  ].join(' ');

  return (
    <div className={headerClasses}>
      <h2 className={titleClasses}>{title}</h2>
      {description && <p className={descriptionClasses}>{description}</p>}
    </div>
  );
};

const SectionContent: React.FC<{ 
  className?: string;
  children: React.ReactNode;
}> = ({ 
  className = '',
  children 
}) => {
  return <div className={className}>{children}</div>;
};

const SectionFooter: React.FC<{ 
  className?: string;
  children: React.ReactNode;
  centered?: boolean;
}> = ({ 
  className = '',
  children,
  centered = true,
}) => {
  const footerClasses = [
    'mt-8',
    centered ? 'text-center' : '',
    className,
  ].join(' ');

  return <div className={footerClasses}>{children}</div>;
};

// Export Section and its subcomponents
Section.Header = SectionHeader;
Section.Content = SectionContent;
Section.Footer = SectionFooter;

export default Section;
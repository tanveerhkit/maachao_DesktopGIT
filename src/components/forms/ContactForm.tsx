'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';

interface ContactFormProps {
  className?: string;
  variant?: 'default' | 'card';
  title?: string;
  description?: string;
  submitButtonText?: string;
  showServiceSelect?: boolean;
  services?: Array<{ value: string; label: string }>;
  onSubmit?: (formData: ContactFormData) => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  variant = 'default',
  title = 'Contact Us',
  description = 'Fill out the form below and we\'ll get back to you as soon as possible.',
  submitButtonText = 'Send Message',
  showServiceSelect = true,
  services = [
    { value: 'cakes', label: 'Cakes & Bakery' },
    { value: 'decorations', label: 'Decorations' },
    { value: 'gifts', label: 'Gifts' },
    { value: 'makeup', label: 'Makeup Artist' },
    { value: 'photography', label: 'Photography' },
    { value: 'other', label: 'Other Services' },
  ],
  onSubmit,
}) => {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  // Validation state
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle service selection
  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
    
    // Clear error when field is edited
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: undefined }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (showServiceSelect && !formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send the form data to your backend
      // For now, we'll simulate a successful submission after a delay
      if (onSubmit) {
        onSubmit(formData);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      setSubmitSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Container classes based on variant
  const containerClasses = [
    variant === 'card' ? 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6' : '',
    className,
  ].join(' ');

  return (
    <div className={containerClasses}>
      {(title || description) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
          {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
        </div>
      )}
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            error={errors.name}
            fullWidth
            required
          />
          
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            error={errors.email}
            fullWidth
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            error={errors.phone}
            fullWidth
            required
          />
          
          {showServiceSelect && (
            <Select
              label="Service"
              name="service"
              value={formData.service}
              onChange={handleServiceChange}
              options={services}
              placeholder="Select a service"
              error={errors.service}
              fullWidth
              required
            />
          )}
        </div>
        
        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          error={errors.message}
          rows={5}
          fullWidth
          required
        />
        
        <div className="mt-6">
          <Button
            type="submit"
            variant="primary"
            color="purple"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : submitButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
'use client';

import React from 'react';
import Image from 'next/image';
import { Camera, Mail, Phone, User, Calendar, Key, Home, Edit } from 'lucide-react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import DatePicker from '@/components/common/DatePicker';

const ProfilePage = () => {

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
        { value: 'prefer_not_to_say', label: 'Prefer not to say' },
    ];

    return (
        <div className="bg-gray-50/50 flex justify-center py-8 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-8">
                
                {/* Profile Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                        <Image
                            src="/family.png" 
                            alt="Profile Picture"
                            width={120}
                            height={120}
                            className="rounded-full object-cover border-4 border-white shadow-md"
                        />
                        <button className="absolute bottom-1 right-1 bg-brand-orange text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
                            <Camera size={18} />
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                    <p className="text-md text-gray-500">john.doe@example.com</p>
                </div>

                {/* Profile Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input 
                            label="Full Name" 
                            id="fullName" 
                            defaultValue="John Doe" 
                            icon={<User size={18} />} 
                        />
                        <Input 
                            label="Email Address" 
                            id="email" 
                            defaultValue="john.doe@example.com" 
                            icon={<Mail size={18} />}
                            disabled 
                        />
                        <Input 
                            label="Mobile Number" 
                            id="mobile" 
                            defaultValue="9876543210" 
                            icon={<Phone size={18} />} 
                        />
                         <DatePicker
                            label="Date of Birth"
                            icon={<Calendar size={18} />}
                        />
                        <Select 
                            label="Gender" 
                            options={genderOptions}
                        />
                    </div>
                    <div className="pt-4 flex justify-end">
                        <Button type="submit" size="lg">Save Changes</Button>
                    </div>
                </form>

                {/* Saved Address Preview */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Saved Address</h3>
                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 flex justify-between items-start">
                        <div className="flex gap-4">
                            <Home className="text-orange-500 mt-1" size={20}/>
                            <div>
                                <p className="font-bold text-gray-800">Default - Home</p>
                                <p className="text-gray-600">123, Sunshine Apartments, 4th Cross, 5th Main, M.G. Road, Bangalore - 560001</p>
                                <p className="text-gray-600 font-medium mt-1">Contact: 9876543210</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                           <button className="text-gray-500 hover:text-orange-600">
                                <Edit size={18}/>
                           </button>
                        </div>
                    </div>
                     <div className="text-right">
                        <a href="/account/addresses" className="text-sm font-medium text-orange-600 hover:underline">
                            Manage All Addresses
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage; 
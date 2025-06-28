'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import Button from '@/components/ui/Button';
import AddressCard from '@/components/common/AddressCard';

export type Address = {
  id: number;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
  phone: string;
  type: 'Home' | 'Office' | 'Other';
  isDefault: boolean;
};

const addresses: Address[] = [
  {
    id: 1,
    name: 'John Doe',
    addressLine1: '123, Sunshine Apartments',
    addressLine2: '4th Cross, 5th Main, M.G. Road',
    city: 'Bangalore',
    state: 'Karnataka',
    pinCode: '560001',
    phone: '9876543210',
    type: 'Home',
    isDefault: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    addressLine1: 'Flat No. 4B, Corporate Towers',
    addressLine2: 'Business Bay, Whitefield',
    city: 'Bangalore',
    state: 'Karnataka',
    pinCode: '560066',
    phone: '8765432109',
    type: 'Office',
    isDefault: false,
  },
  {
    id: 3,
    name: 'Sam Wilson',
    addressLine1: '789, Green Valley Layout',
    city: 'Bangalore',
    state: 'Karnataka',
    pinCode: '560076',
    phone: '7654321098',
    type: 'Other',
    isDefault: false,
  },
];

const SavedAddressesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Saved Addresses</h1>
        <Button>
          <Plus size={18} className="mr-2" />
          Add New Address
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </div>
    </div>
  );
};

export default SavedAddressesPage; 
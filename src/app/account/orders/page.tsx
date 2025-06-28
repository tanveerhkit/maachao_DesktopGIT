'use client';

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import OrderCard from '@/components/common/OrderCard';

const mockOrders = [
  {
    id: 'MAA123456',
    productName: 'Delicious Chocolate Cake',
    productImage: '/images/stock/cake.jpg',
    price: '₹1200',
    orderDate: '2023-10-26',
    deliverySlot: '12:00 PM - 02:00 PM',
    status: 'Delivered',
  },
  {
    id: 'MAA123457',
    productName: 'Anniversary Balloon Decor',
    productImage: '/images/stock/balloons.jpg',
    price: '₹2500',
    orderDate: '2023-10-28',
    deliverySlot: '04:00 PM - 06:00 PM',
    status: 'In Progress',
  },
  {
    id: 'MAA123458',
    productName: 'Personalized Photo Mug',
    productImage: '/images/stock/mug.jpg',
    price: '₹600',
    orderDate: '2023-09-15',
    deliverySlot: '02:00 PM - 04:00 PM',
    status: 'Cancelled',
  },
];

export type Order = typeof mockOrders[0];

const OrdersPage = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filteredOrders = mockOrders.filter(order => 
      order.productName.toLowerCase().includes(e.target.value.toLowerCase()) ||
      order.id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOrders(filteredOrders);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      
      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by Order ID or Product"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <div className="flex gap-4">
          <div className="relative">
            <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
              <span>All Orders</span>
              <ChevronDown size={16} />
            </button>
          </div>
           <div className="relative">
            <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
              <span>Any Status</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Order List */}
      <div className="space-y-4">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
        {orders.length === 0 && (
            <div className="text-center py-12">
                <p className="text-gray-500">No orders found.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage; 
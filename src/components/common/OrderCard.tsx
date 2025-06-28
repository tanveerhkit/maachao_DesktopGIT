'use client';

import React from 'react';
import Image from 'next/image';
import { Order } from '@/app/account/orders/page';
import Button from '../ui/Button';

type OrderCardProps = {
  order: Order;
};

const getStatusClasses = (status: string) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-800';
    case 'In Progress':
      return 'bg-blue-100 text-blue-800';
    case 'Cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-4 hover:shadow-md transition-shadow">
      <div className="relative w-full md:w-24 h-24 rounded-md overflow-hidden">
        <Image src={order.productImage} alt={order.productName} layout="fill" objectFit="cover" />
      </div>

      <div className="flex-grow">
        <h3 className="font-bold text-lg">{order.productName}</h3>
        <p className="text-sm text-gray-500">Order ID: {order.id}</p>
        <p className="text-lg font-semibold text-orange-600 mt-1">{order.price}</p>
        <div className="text-xs text-gray-500 mt-2 space-y-1">
            <p><strong>Order Date:</strong> {order.orderDate}</p>
            <p><strong>Delivery Slot:</strong> {order.deliverySlot}</p>
        </div>
      </div>
        
      <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-3">
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(order.status)}`}>
          {order.status}
        </span>

        <div className="flex gap-2 mt-2 md:mt-0">
          <Button variant="outline" size="sm">View Details</Button>
          <Button size="sm">Track Order</Button>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">Reorder</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard; 
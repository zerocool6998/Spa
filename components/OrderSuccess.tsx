import React from 'react';
import { CheckCircle } from 'lucide-react';

interface OrderSuccessProps {
  orderId: string;
  onBack: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ orderId, onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle className="w-16 h-16 text-[#5D5A53]" />
        </div>
        <h1 className="font-serif text-4xl mb-4">Thank you.</h1>
        <p className="text-[#5D5A53] mb-8">
          Your order has been received. Our team will review it and contact you shortly with payment details.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8 text-left">
          <p className="text-sm text-[#8C8A85] mb-1">Order Reference</p>
          <p className="font-mono text-lg">{orderId}</p>
        </div>
        <button
          onClick={onBack}
          className="bg-[#2C2A26] text-[#F5F2EB] px-8 py-3 rounded-full hover:bg-[#4A4844] transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;

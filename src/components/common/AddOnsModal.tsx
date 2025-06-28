import React from 'react';

interface AddOnsModalProps {
  open: boolean;
  onClose: () => void;
}

const AddOnsModal: React.FC<AddOnsModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6 relative animate-fade-in">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl font-bold">&times;</button>
        <h2 className="text-xl font-semibold mb-4">Add Ons</h2>
        {/* Tabs */}
        <div className="flex mb-4">
          <button className="flex-1 py-2 rounded-t-lg bg-gray-100 text-black font-semibold border-b-2 border-orange-400">Top Up Your Decor</button>
          <button className="flex-1 py-2 rounded-t-lg bg-gray-100 text-gray-500 font-semibold ml-2 border-b-2 border-transparent">Party Add Ons</button>
        </div>
        {/* Filter Pills */}
        <div className="flex gap-3 mb-4">
          <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-black font-medium">Candles</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-black font-medium">Birthday Gift</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 bg-white text-black font-medium">Birthday Gift</button>
        </div>
        {/* Add On Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-2 flex flex-col items-center">
              <div className="flex w-full justify-between mb-1">
                <span className="text-xs text-gray-700 font-medium">★4.8</span>
                <button className="text-gray-300 hover:text-orange-500">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
              </div>
              <div className="w-14 h-14 bg-gray-100 rounded flex items-center justify-center mb-1"> <span className="text-gray-300 text-xs">img</span> </div>
              <div className="text-xs font-medium text-gray-800 text-center mb-0.5">Exclusive Choco ...</div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-sm font-semibold text-black">₹500</span>
                <span className="text-xs text-gray-400 line-through">₹1000</span>
                <span className="text-xs text-green-600 font-medium">50% OFF</span>
              </div>
              <button className="w-full mt-1 border border-orange-400 text-orange-600 font-semibold py-1 rounded-md hover:bg-orange-50 transition text-xs">ADD</button>
            </div>
          ))}
        </div>
        {/* Modal Footer */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="px-5 py-2 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-100 font-medium transition-colors"
            onClick={onClose}
          >
            Skip
          </button>
          {/* You can add a 'Continue' or 'Add Selected' button here if needed */}
        </div>
      </div>
    </div>
  );
};

export default AddOnsModal; 
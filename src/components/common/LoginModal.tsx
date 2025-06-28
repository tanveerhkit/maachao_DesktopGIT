import React from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-t-lg text-white relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-black bg-white/50 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="text-center">
            <h2 className="text-xl font-bold text-black">Login for <span className="font-extrabold">extraaa</span> savings!</h2>
            <div className="flex justify-around items-center mt-4 h-24">
                <img src="/maachao-logo.png" alt="Maachao Logo" className="h-10 w-auto" />
                <img src="/party-logo.png" alt="Party Logo" className="h-20 w-auto" />
            </div>
          </div>
        </div>
        
        {/* Body */}
        <div className="p-6">
          <h3 className="text-lg font-semibold border-b-2 border-orange-500 inline-block pb-1">Login or Signup</h3>
          
          <div className="mt-4 flex items-center border rounded-md">
            <span className="p-2 bg-gray-100 border-r">+91</span>
            <input type="text" placeholder="Enter mobile number" className="p-2 w-full focus:outline-none" />
          </div>

          <button className="w-full bg-orange-500 text-white py-3 mt-4 rounded-md hover:bg-orange-600 transition-colors">
            CONTINUE
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By clicking on Login, I accept the <a href="#" className="text-orange-600">Terms & Conditions</a> & <a href="#" className="text-orange-600">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 
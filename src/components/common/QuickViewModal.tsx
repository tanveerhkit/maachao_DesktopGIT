"use client";
import React from "react";
import Image from "next/image";

interface QuickViewModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    name: string;
    images: string[];
    price: number;
    oldPrice?: number | null;
    discount?: number;
    description?: string;
    category?: string;
  };
  onAddToCart?: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ open, onClose, product, onAddToCart }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 relative animate-fade-in">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-pink-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Image Gallery */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <Image src={product.images[0]} alt={product.name} width={224} height={224} className="object-cover w-full h-full" />
            </div>
            {/* Thumbnails (if more than 1 image) */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-3">
                {product.images.map((img, idx) => (
                  <div key={idx} className="w-10 h-10 rounded bg-gray-200 overflow-hidden">
                    <Image src={img} alt={product.name + ' thumbnail'} width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h2>
              {product.category && <div className="text-xs text-pink-600 mb-2 font-medium">{product.category}</div>}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl font-bold text-gray-800">₹{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through text-base">₹{product.oldPrice}</span>
                )}
                {product.discount && product.discount > 0 && (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">{product.discount}% Off</span>
                )}
              </div>
              <p className="text-gray-700 text-sm mb-4 line-clamp-4">{product.description}</p>
            </div>
            <button
              className="mt-4 w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              onClick={onAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal; 
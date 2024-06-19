import React from 'react';
import HubSpotForm from '@/components/HubSpotForm';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md relative w-full max-w-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &#x2715;
        </button>
        <HubSpotForm />
      </div>
    </div>
  );
};

export default Popup;

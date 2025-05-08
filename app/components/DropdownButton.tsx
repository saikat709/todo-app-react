import { useState, useRef, useEffect } from 'react';
import { FaEllipsis } from 'react-icons/fa6';

type DropdownDotsProps = {
  onSelectAll: () => void;
  onUnselectAll: () => void;
};

const DropdownDots: React.FC<DropdownDotsProps> = ({ onSelectAll, onUnselectAll }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="p-2 hover:bg-gray-200 hover:text-black rounded-full transition"
      >
        <FaEllipsis size={24} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white text-black border rounded-lg shadow-md z-50">
          <button
            onClick={() => {
              onSelectAll();
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-3 hover:bg-gray-200"
          >
            Select All
          </button>
          <button
            onClick={() => {
              onSelectAll();
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-3 hover:bg-gray-200"
          >
            Select Page
          </button>
          <button
            onClick={() => {
              onUnselectAll();
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-3 hover:bg-gray-200"
          >
            Unselect All
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownDots;

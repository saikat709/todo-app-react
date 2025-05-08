import { useState } from 'react';

const LoginModal = ({ isOpen, onClose }: 
  { isOpen: boolean, onClose: () => void   }
) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    age: '', 
    gender: '' 
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Submit 
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-blue-300/40 rounded-xl w-full max-w-sm p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Todo Joining...</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />

          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number"
            placeholder="Your age"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />

          <select
            name = "gender"
            value = {formData.gender}
            onChange = {handleChange}
            className = "w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          >
            <option className='text-black' value="" disabled>Select gender</option>
            <option className='text-black' value="male">Male</option>
            <option className='text-black' value="female">Female</option>
            <option className='text-black' value="other">Other</option>
          </select>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-md text-white bg-gray-500 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={onClose}
              className="px-4 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Join
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

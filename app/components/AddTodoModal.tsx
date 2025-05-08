import { useState } from 'react';
import type { TodoType } from '~/types/todoType';

const AddTodoModal = ({ currentTodo =  null, onClose }: 
  { currentTodo?: TodoType | null, onClose: () => void   }
) => {
  const [formData, setFormData] = useState( currentTodo || { 
    title: '', 
    description: '', 
    date: new Date().toDateString(),
    startTime: 0,
    endTime: 0
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
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-blue-400/60 rounded-xl w-full max-w-lg p-5 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add new Todo</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            placeholder="Todo Title"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={7}
            placeholder="Todo Description"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />

          <input
            name="date"
            value={formData.date as string}
            onChange={handleChange}
            type="date"
            placeholder="Your age"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />

          <div className='flex gap-2 items-center'>
              <input
                name="startTime"
                value={formData.startTime as number}
                onChange={handleChange}
                type="time"
                placeholder="Start Time"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
                required
              />
               to 
              <input
                name="endTime"
                value={formData.endTime as number}
                onChange={handleChange}
                type="time"
                placeholder="Start Time"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
                required
              />
          </div>

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
              className="px-4 py-1.5 rounded-md bg-green-600 text-white hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodoModal;

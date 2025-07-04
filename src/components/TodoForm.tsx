import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full p-4 pr-12 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-blue-500 transition-colors"
          aria-label="Add todo"
        >
          <FiPlus size={20} />
        </button>
      </div>
    </form>
  );
}
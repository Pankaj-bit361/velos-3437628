import { useState } from 'react';
import { FiTrash2, FiEdit2, FiCheck } from 'react-icons/fi';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({ 
  id, 
  text, 
  completed, 
  onToggle, 
  onDelete, 
  onEdit 
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="group flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 flex-1">
        <button
          onClick={() => onToggle(id)}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
            completed 
              ? 'border-green-500 bg-green-500 text-white' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          {completed && <FiCheck size={12} />}
        </button>
        
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex-1">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              autoFocus
            />
          </form>
        ) : (
          <span 
            className={`flex-1 ${completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {text}
          </span>
        )}
      </div>

      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-1 text-gray-500 hover:text-blue-500 transition-colors"
          aria-label="Edit todo"
        >
          <FiEdit2 size={16} />
        </button>
        <button
          onClick={() => onDelete(id)}
          className="p-1 text-gray-500 hover:text-red-500 transition-colors"
          aria-label="Delete todo"
        >
          <FiTrash2 size={16} />
        </button>
      </div>
    </li>
  );
}
import { FiClipboard } from 'react-icons/fi';

export default function TodoEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <FiClipboard size={48} className="text-gray-300 mb-4" />
      <h3 className="text-lg font-medium text-gray-500 mb-1">No tasks yet</h3>
      <p className="text-gray-400">Add your first task to get started</p>
    </div>
  );
}
import { FiList } from 'react-icons/fi';

interface TodoStatsProps {
  total: number;
  completed: number;
}

export default function TodoStats({ total, completed }: TodoStatsProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-6">
      <div className="flex items-center space-x-2 text-gray-600">
        <FiList size={18} />
        <span className="font-medium">
          {completed} of {total} completed
        </span>
      </div>
      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-300" 
          style={{ width: `${total ? (completed / total) * 100 : 0}%` }}
        />
      </div>
    </div>
  );
}
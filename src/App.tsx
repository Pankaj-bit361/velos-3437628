import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoStats from './components/TodoStats';
import TodoEmptyState from './components/TodoEmptyState';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, {
      id: Date.now().toString(),
      text,
      completed: false
    }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-500">Organize your tasks with ease</p>
        </div>

        <TodoForm onAdd={addTodo} />
        <TodoStats total={todos.length} completed={completedCount} />

        <ul className="space-y-3">
          {todos.length === 0 ? (
            <TodoEmptyState />
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
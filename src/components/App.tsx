import '../App.css';
import { Todo } from '../types/todo';
import TodoList from './TodoList';

function App() {
  // const [count, setCount] = useState(0);
  const todos: Todo[] = [
    { id: 1, title: 'Learn TypeScript', completed: false },
    { id: 2, title: 'Build a TODO app', completed: true },
  ];

  return (
    <>
      <p>Some Content</p>
      <div>
        <TodoList todos={todos}/>
      </div>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './pages/ToDoList';
import NotFound from './pages/Notfound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
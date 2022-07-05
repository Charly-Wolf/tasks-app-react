import './App.css';
import FreecodecampLogo from './components/FreecodecampLogo';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="tasks-app">
      <FreecodecampLogo />
      <div className='main-tasks-list'>
        <h1>My Tasks</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;

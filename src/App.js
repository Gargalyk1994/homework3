import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './Task1/TemperatureConverter';
import Todolist from './Task2/TodoList';

function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <Todolist />
    </div>
  );
}

export default App;

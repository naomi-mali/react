import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you!!!" name="Naomi" age="30"/>
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
      
    </div>
  );
}

export default App;

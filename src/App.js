import './App.css';
import { CounterButton } from './CounterButton';
import { CounterContext } from './CounterContext';
import { CounterProvider } from './CounterProvider';

function App() {
  return (
    <>
    <CounterProvider>
      <h1>State Management Example</h1>
      <CounterButton />
    </CounterProvider>
    </>
  );
}

export default App;

import { RecoilRoot } from 'recoil';
import { AnotherCounterButton } from './AnotherCounterButton';
import './App.css';
import { CounterButton } from './CounterButton';
import { DisplayCount } from './DisplayCount';

function App() {
  return (
    <>
    <RecoilRoot>
      <DisplayCount />
      <h1>State Management Example</h1>
      <CounterButton />

      <AnotherCounterButton />
    </RecoilRoot>
    </>
  );
}

export default App;

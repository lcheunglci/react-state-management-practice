import { RecoilRoot } from 'recoil';
import { AnotherCounterButton } from './AnotherCounterButton';
import './App.css';
import { CounterButton } from './CounterButton';
import { DisplayCount } from './DisplayCount';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <>
    <RecoilRoot>
      <DisplayCount />
      <h1>State Management Example</h1>
      <CounterButton />
    </RecoilRoot>
    <h1>State Management Example with Redux</h1>
      <Provider store={store}>
        <AnotherCounterButton />
      </Provider>
    </>
  );
}

export default App;

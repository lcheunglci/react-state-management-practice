import { RecoilRoot } from 'recoil';
import { ReduxCounterButton } from './redux/ReduxCounterButton';
import './App.css';
import { CounterButton } from './recoil/CounterButton';
import { DisplayCount } from './recoil/DisplayCount';
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
        <ReduxCounterButton />
      </Provider>
    </>
  );
}

export default App;

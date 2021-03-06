import { RecoilRoot } from 'recoil';
import { ReduxCounterButton } from './redux/ReduxCounterButton';
import './App.css';
import { CounterButton } from './recoil/CounterButton';
import { DisplayCount } from './recoil/DisplayCount';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MobxCounterButton } from './mobx/MobxCounterButton';
import { Counter } from './mobx/Counter';

const counter = new Counter();

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
    <h1>State Management Example with Mobx</h1>
    <MobxCounterButton counter={counter} />
    </>
  );
}

export default App;

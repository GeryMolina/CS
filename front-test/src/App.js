import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Redux/reducers/Reducer'
import './App.css'
//Components
import CounterCreator from './components/CounterCreator';
import {Counter} from './components/Counter'
import FilterItems from './components/FilterItems'
import Total from './components/Total'


function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <div className="App">
        <CounterCreator />
        <FilterItems/>
        <Counter/>
        <Total/>
      </div>
    </Provider>
  );
}

export default App;

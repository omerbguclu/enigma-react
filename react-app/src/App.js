import React from 'react';
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import Rotors from "./components/Rotors";
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Buttons/>
      <Counter/>
      <Rotors/>
    </Provider>
  );
}

export default App;

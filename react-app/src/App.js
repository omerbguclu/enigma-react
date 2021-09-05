import React from 'react';
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import Rotors from "./components/Rotors";
import SelectedRotors from "./components/SelectedRotors";
import {Provider} from 'react-redux';
import store from './store';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Provider store={store}>
      <Buttons/>
      <Counter/>
      <Rotors/>
      <SelectedRotors/>
    </Provider>
  );
}

export default App;

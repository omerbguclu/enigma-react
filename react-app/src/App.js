import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Rotors from "./components/Rotors";
import RotorShowroom from './components/RotorShowroom';
import Input from './components/Input';

function App() {
  return (
    <Provider store={store}>
      <Rotors/>
      <RotorShowroom/>
      <Input/>
    </Provider>
  );
}

export default App;

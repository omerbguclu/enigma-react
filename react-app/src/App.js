import React from 'react';
import Rotors from "./components/Rotors";
import {Provider} from 'react-redux';
import store from './store';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import RotorShowroom from './components/RotorShowroom';

function App() {
  return (
    <Provider store={store}>
      <Rotors/>
      <RotorShowroom/>
    </Provider>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'
import Anasayfa from './Anasayfa.jsx';
import SiparisFormu from './SiparisFormu.jsx';
import SiparisOnayi from './SiparisOnayi.jsx';
import Formv2 from './Formv2.jsx';
import Formv3 from './Formv3.jsx';

export default function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/order">
          <SiparisFormu />
        </Route>
        <Route path="/formv2">
          <Formv2 />
        </Route>
        <Route path="/formv3">
          <Formv3 />
        </Route>
        <Route path="/success">
          <SiparisOnayi />
        </Route>
      </Switch>
    </>
  );
}

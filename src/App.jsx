import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'
import Anasayfa from './Anasayfa.jsx';
import SiparisFormu from './SiparisFormu.jsx';
import SiparisOnayi from './SiparisOnayi.jsx';

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
        <Route path="/success">
          <SiparisOnayi />
        </Route>
      </Switch>
    </>
  );
}

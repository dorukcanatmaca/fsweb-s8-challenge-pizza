import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'
import Anasayfa from './Anasayfa.jsx';
import PizzaForm from './PizzaForm.jsx';
import SiparisOnayi from './SiparisOnayi.jsx';


export default function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/order">
          <PizzaForm />
        </Route>
        <Route path="/success">
          <SiparisOnayi />
        </Route>
      </Switch>
    </>
  );
}

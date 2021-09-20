import React from "react";
import ManeTable from "./components/ManeTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navebar from "./components/Navebar";
import AddData from "./components/AddData";
import UpdateData from "./components/UpdateData";

function App() {
  return (
    <Router>
      <Navebar />
      <Switch>
        <Route exact path="/" component={ManeTable} />
        <Route exact path="/add" component={AddData} />
        <Route exact path="/edit/:id" component={UpdateData}/>
      </Switch>
    </Router>
  );
}

export default App;

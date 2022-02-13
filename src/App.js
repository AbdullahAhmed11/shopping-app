import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsLisning from "./components/ProductsLisning";
import ProductDetails from "./components/ProductDetails";
import "./App.css"
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={ProductsLisning}/>
        <Route path="/product/:productId" exact component={ProductDetails}/>
        <Route>404 not found</Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

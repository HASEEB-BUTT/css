import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* link used to redirect to other page without refereshings */}
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Switch>
          {/* route for about  */}

          {/* exact  keyword is lye ha k url mnn jab home page k baad koi or page access krty jse /about ka page toh home k page ka content b ata ha  */}

          <Route path="/" exact>
            <Home />
          </Route>
          {/* route for contact  */}
          <Route path="/about">
            <About />
          </Route>
          {/* route for contact  */}
          <Route path="/contact">
            <Contact />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;


import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from "../pages/Home"
import Messages from "../pages/Messages"
import About from "../pages/About"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route path="/messages" component={Messages} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )
}


export default AppRouter;

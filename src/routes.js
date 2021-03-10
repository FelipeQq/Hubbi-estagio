import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import StoreProvider from './Components/Store/Provider';
import RoutesPrivate from './Components/Routes/Private/Private';
import Main from './Pages/Main';
import Starships from './Pages/Starships';
import People from './Pages/People';


const Routes = () => (
    <BrowserRouter>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Main} />
          <RoutesPrivate path="/Starships" component={Starships} />
          <RoutesPrivate path="/People" component={People} />
        </Switch>
      </StoreProvider>
    </BrowserRouter>
)

export default Routes;
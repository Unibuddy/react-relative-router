import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, useRouteMatch } from 'react-router-dom';
import {
  RelativeLink,
  RelativeNavLink,
  RelativeRoute,
  RelativeRouter,
  RelativeSwitch,
} from '../.';

const Routes = () => {};

const Test = () => {
  const match = useRouteMatch();
  return (
    <RelativeRouter match={match}>
      <div>
        <RelativeNavLink to="/">Home</RelativeNavLink>{' '}
        <RelativeNavLink to="/hello">Hello</RelativeNavLink>
      </div>
      <RelativeSwitch>
        <RelativeRoute path="/hello">
          Hello <RelativeLink to="/">Home</RelativeLink>
        </RelativeRoute>
        <RelativeRoute path="/">Index</RelativeRoute>
      </RelativeSwitch>
    </RelativeRouter>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/slug/test">Go To Test</Link>
      <Route path="/slug/:slug">
        <Test />
      </Route>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

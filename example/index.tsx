import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, useParams } from 'react-router-dom';
import {
  RelativeLink,
  RelativeNavLink,
  RelativeRoute,
  RelativeRouter,
  RelativeSwitch,
} from '../.';

const TestParams = () => {
  const params = useParams();
  return (
    <div>
      It will also preserve params in urls. You can use `useParams` within this
      context to access params of the top level route.
      <pre>{JSON.stringify(params, null, 4)}</pre>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/some/long/route/test">Some Long Route</Link>{' '}
      <Link to="/with/params/test">With Params</Link>
      <Route path="/some/long/route">
        <RelativeRouter>
          <RelativeRoute path="/test">
            <p>
              This will only render when you navigate to `/some/long/route/test`
            </p>
          </RelativeRoute>
        </RelativeRouter>
      </Route>
      <Route path="/with/:params">
        <RelativeRouter>
          <RelativeRoute path="/test">
            <TestParams />
          </RelativeRoute>
        </RelativeRouter>
      </Route>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

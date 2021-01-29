# React Relative Router

A wrapper for react-router that enables relative routes within a bounded context

## Install

`npm install @unibuddy/react-relative-router`

`yarn add @unibuddy/react-relative-router`

## Exports

```js
import {
  useRelativeRouter,
  RelativeRoute,
  RelativeSwitch,
  RelativeLink,
  RelativeNavLink,
  RelativeRouter,
  RelativeRedirect,
} from '@unibuddy/react-relative-router';
```

## Example Use

### Basic example

```jsx
import { BrowserRouter, Route } from 'react-router-dom';
import { RelativeRouter, RelativeRoute } from '@unibuddy/react-relative-router';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/some/long/route">
        <RelativeRouter>
          <RelativeRoute path="/test">
            This will only render when you navigate to `/some/long/route/test`
          </RelativeRoute>
        </RelativeRouter>
      </Route>
      <Route path="/with/:params">
        <RelativeRouter>
          <RelativeRoute path="/test">
            It will also preserve params in urls. You can use `useParams` within
            this context to access params of the top level route.
          </RelativeRoute>
        </RelativeRouter>
      </Route>
    </BrowserRouter>
  );
};
```

### Linking

```jsx
import { BrowserRouter, Route } from 'react-router-dom';
import {
  RelativeRouter,
  RelativeRoute,
  RelativeLink,
} from '@unibuddy/react-relative-router';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/some/long/route">
        <RelativeRouter>
          <RelativeRoute path="/test">
            <RelativeLink to="/some-route">Go to sibling route</RelativeLink>
          </RelativeRoute>
          <RelativeRoute path="/some-route">Sibling route</RelativeRoute>
        </RelativeRouter>
      </Route>
    </BrowserRouter>
  );
};
```

### Switch and redirects

```jsx
import { BrowserRouter, Route } from 'react-router-dom';
import {
  RelativeRouter,
  RelativeRoute,
  RelativeLink,
  RelativeRedirect,
} from '@unibuddy/react-relative-router';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/some/long/route">
        <RelativeRouter>
          <RelativeSwitch>
            <RelativeRoute path="/home">Home</RelativeRoute>
            <RelativeRoute path="/">
              {/* catch all redirect */}
              <RelativeRedirect to="/home" />
            </RelativeRoute>
          </RelativeSwitch>
        </RelativeRouter>
      </Route>
    </BrowserRouter>
  );
};
```

### Use with other components

```jsx
import { Link } from 'react-router-dom';
import { useRelativeRouter } from '@unibuddy/react-relative-router';

const MyComponent = () => {
  const { url, path, getTo, getPath } = useRelativeRouter();
  return (
    <>
      {/* use the helper methods */}
      <Link to={getTo('/relative-route')}>Go to relative route</Link>
      <Route path={getPath('/relative-route')}>Relative route</Route>
      {/* or use the raw values */}
      <Link to={`${url}/relative-route`}>Go to relative route</Link>
      <Route path={`${path}/relative-route`}>Relative route</Route>
    </>
  );
};
```

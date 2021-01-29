# React Relative Router

A wrapper for react-router that enables relative routes within a bounded context

## Install

`npm install @unibuddy/react-relative-router`

`yarn add @unibuddy/react-relative-router`

## Example Use

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

## Exports

```
import {
    useRelativeRouter,
    RelativeRoute,
    RelativeSwitch,
    RelativeLink,
    RelativeNavLink,
    RelativeRouter,
    RelativeRedirect,
} from "@unibuddy/react-relative-router";
```

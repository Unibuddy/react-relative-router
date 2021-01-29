# React Relative Router

A wrapper for react-router that enables relative routes within a bounded context

## Install

`npm install @unibuddy/react-relative-router`

`yarn add @unibuddy/react-relative-router`

## Example Use

```jsx
import { BrowserRouter, Route } from 'react-router-dom';
import { RelativeRouter } from '@unibuddy/react-relative-router';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/some/long/route">
        <RelativeRouter>
          <Route path="/test">
            This will only render when you navigate to `/some/long/route/test`
          </Route>
        </RelativeRouter>
      </Route>
    </BrowserRouter>
  );
};
```

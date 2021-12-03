# @unibuddy/react-relative-router

## 0.7.0

### Minor Changes

- (fix) initializing relative router context where if the RelativeRouter was placed at the root of the app, it would break. It now transforms "/" initial routes with an empty string.

## 0.6.2

### Patch Changes

- `useRelativeRouter` push method now accepts state

## 0.6.1

### Patch Changes

- `RelativeLink` and `RelativeNavLink` forward props

## 0.6.0

### Minor Changes

- fixed the issue with RelativeRoute not passing `children` through

## 0.5.0

### Minor Changes

- `match` prop on RelativeRouter is now optional. RelativeRouter uses `useRouteMatch` internally if match prop is mot provided

## 0.4.0

### Minor Changes

- fixed the issue with links and redirects to `/` path adding double slash

import React, { createContext, FC } from 'react';
import { match, useRouteMatch } from 'react-router';

export const RelativeRouterContext = createContext<match>({
  path: '',
  url: '',
  isExact: false,
  params: {},
});

/**
 * Creates a relative routing context where all RelativeRouterLinks and RelativeRouterRoutes children within its context will
 * get the path prop prepended to its urls. It can be used to easily add routes and links withing a complex url
 * route and where we do not have access to the original url. For example if we have a route as follows:
 *
 * ```jsx
 * <Route match={{path: "/embed/:universitySlug/colour/:colourCode"}} render={() => {
 *   // here we render Widget
 * }}/>
 * ```
 *
 * Then anywehere within the Widget whenever we use a Link or a Route, we have to prepend the exisiting url first
 * in order to get a url like this /embed/:universitySlug/colour/:colourCode/inbox/chat`. This can quickly
 * become tedious, as we have to pass in the original url throughout the app. RelativeRouter simplifies this
 * by doing this:
 *
 * ```jsx
 * <Route path="/embed/:universitySlug/colour/:colourCode" render={() => {
 *   <RelativeRouter match={{path: "/embed/:universitySlug/colour/:colourCode"}}>
 *     // here we render Widget and somewhere down the component tree...
 *     <RelativeLink to="/test">Test</RelativeLink>
 *   </RelativeRouter>
 * }}/>
 * ```
 *
 * In the above example the resulting Link will have the to prop set as:
 * `/embed/:universitySlug/colour/:colourCode/test`
 */
const RelativeRouter: FC<{ match?: match }> = ({ children, match }) => {
  const m = useRouteMatch();
  return (
    <RelativeRouterContext.Provider value={match || m}>
      {children}
    </RelativeRouterContext.Provider>
  );
};

export default RelativeRouter;

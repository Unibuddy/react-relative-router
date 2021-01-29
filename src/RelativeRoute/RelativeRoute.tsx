import React, { FC, useContext } from 'react';
import { Route } from 'react-router-dom';
import { RelativeRouterContext } from '../RelativeRouter/RelativeRouter';

/**
 * RelativeRoute appends the `path` prop with the basePath from the RelativeRouterContext.
 * It can be used outside of the RelativeRouter, in that case it will behave like the
 * normal Route component.
 *
 * @export
 * @param {*} {to, children, ...props}
 * @returns
 */
const RelativeRoute: FC<{ path: string }> = ({ path, children, ...props }) => {
  const { path: basePath } = useContext(RelativeRouterContext);
  const finalPath = basePath + path;

  return <Route path={finalPath} {...props} />;
};

export default RelativeRoute;

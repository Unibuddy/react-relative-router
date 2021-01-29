import React, { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RelativeRouterContext } from '../RelativeRouter/RelativeRouter';
import getToProp, { To } from '../getToProp';

/**
 * RelativeNavLink appends the `to` prop to the path from the RelativeRouterContext.
 * It can be used outside of the RelativeRouter, in that case it will behave like the
 * normal NavLink component.
 *
 * @export
 * @param {*} {to, children, ...props}
 * @returns
 */
const RelativeNavLink: FC<{ to: To }> = ({ to, children, ...props }) => {
  const { url } = useContext(RelativeRouterContext);
  return (
    <NavLink to={getToProp(url, to)} {...props}>
      {children}
    </NavLink>
  );
};

export default RelativeNavLink;

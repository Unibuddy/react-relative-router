import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RelativeRouterContext } from '../RelativeRouter/RelativeRouter';
import getToProp, { To } from '../getToProp';

/**
 * RelativeLink appends the `to` prop to the pah from the RelativeRouterContext.
 * It can be used outside of the RelativeRouter, in that case it will behave like the
 * normal Link component.
 *
 * @export
 * @param {*} {to, children, ...props}
 * @returns
 */
const RelativeLink: FC<{ to: To }> = ({ to, children, ...props }) => {
  const { url } = useContext(RelativeRouterContext);
  return (
    <Link to={getToProp(url, to)} {...props}>
      {children}
    </Link>
  );
};

export default RelativeLink;
